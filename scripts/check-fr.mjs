// Prüft die französische Version im Browser: Abstürze und übrig gebliebene deutsche Texte.
// Ergebnisse erscheinen als GitHub-Annotations.
import { chromium } from "playwright";

const BASE = "http://localhost:4173";
const routes = [
  "/", "/training", "/philosophie", "/impressum", "/datenschutz",
  "/expertise/edi-excellence", "/expertise/eprocurement-mastery",
  "/expertise/interkulturelle-integration", "/expertise/leadership-und-transformation",
  "/services/edi-excellence", "/services/eprocurement-mastery", "/gibt-es-nicht",
];
const germanWords = /\b(und|für|Sie|wir|Ihre?n?|nicht|mit|der|das|ist|auf|zur|zum|über|Unternehmen|Jahre|Leistungen|Beratung|Lösungen|Schulung|Kontakt|Zurück|Datenschutz|Impressum|Telefon|Nachricht)\b/;
const allow = [/Landesbeauftragte/, /Lautenschlagerstraße/, /Merkelbuckel/, /§ 5/];

import { mkdirSync } from "fs";
mkdirSync("screenshots", { recursive: true });
const browser = await chromium.launch();
let problems = 0;
for (const lang of ["fr", "de"]) {
  for (const route of routes) {
    const page = await browser.newPage();
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await page.goto(`${BASE}${route}?lang=${lang}`, { waitUntil: "networkidle" });
    await page.waitForTimeout(300);
    const text = await page.evaluate(() => document.body.innerText);
    const htmlLang = await page.evaluate(() => document.documentElement.lang);
    if (errors.length) {
      problems++;
      console.log(`::error title=JS-Fehler ${lang} ${route}::${errors.join(" | ").slice(0, 900)}`);
    }
    if (text.trim().length < 200) {
      problems++;
      console.log(`::error title=Leere Seite ${lang} ${route}::Nur ${text.trim().length} Zeichen Text`);
    }
    const marker = lang === "fr" ? "Accueil" : "Leistungen";
    if (!text.includes(marker)) {
      problems++;
      console.log(`::error title=Sprache falsch ${lang} ${route}::"${marker}" nicht gefunden`);
    }
    if (["/", "/training", "/impressum"].includes(route)) {
      const name = `${lang}${route.replace(/\//g, "_") || "_home"}`;
      await page.setViewportSize({ width: 1366, height: 900 });
      await page.screenshot({ path: `screenshots/${name}.png`, fullPage: false });
      await page.setViewportSize({ width: 390, height: 844 });
      await page.screenshot({ path: `screenshots/${name}_mobile.png`, fullPage: false });
    }
    if (lang === "fr") {
      const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
      const hits = [...new Set(lines.filter((l) => germanWords.test(l) && !allow.some((a) => a.test(l))))];
      if (hits.length) {
        problems++;
        console.log(`::warning title=Deutsch auf FR ${route} (${hits.length})::${hits.slice(0, 12).join(" ‖ ").slice(0, 1500)}`);
      }
      if (htmlLang !== "fr") console.log(`::warning title=html lang ${route}::lang=${htmlLang}`);
    }
    await page.close();
  }
}
await browser.close();
console.log(`::notice title=FR-Prüfung::${problems} Auffälligkeiten`);
