/*
 * Sprachsteuerung
 * - raeldata.ma   → Französisch (Marokko)
 * - raeldata.de   → Deutsch
 * - ?lang=fr / ?lang=de überschreibt die Erkennung (zum Testen), bleibt für die Sitzung erhalten.
 */
export type Lang = "de" | "fr";

const FR_DOMAIN = "raeldata.ma";
const DE_DOMAIN = "raeldata.de";

/**
 * Ist raeldata.ma schon mit dieser Website verbunden und erreichbar?
 * false = Der FR-Schalter auf raeldata.de bleibt auf raeldata.de (?lang=fr).
 * true  = Der FR-Schalter auf raeldata.de führt zu raeldata.ma.
 * Wer raeldata.ma direkt aufruft, sieht in beiden Fällen die französische Version.
 */
const FR_DOMAIN_ACTIVE = false;

const host = typeof window === "undefined" ? "" : window.location.hostname;
const onFrDomain = host.endsWith(FR_DOMAIN);
const onDeDomain = host.endsWith(DE_DOMAIN);

const detectLang = (): Lang => {
  if (typeof window === "undefined") return "de";
  try {
    const param = new URLSearchParams(window.location.search).get("lang");
    if (param === "de" || param === "fr") {
      sessionStorage.setItem("lang", param);
      return param;
    }
    const stored = sessionStorage.getItem("lang");
    if (stored === "de" || stored === "fr") return stored;
  } catch {
    /* Speicher nicht verfügbar – Domain entscheidet */
  }
  return onFrDomain ? "fr" : "de";
};

export const LANG: Lang = detectLang();
export const isFR = LANG === "fr";

/** Wählt den Inhalt passend zur Sprache: t({ de: "Hallo", fr: "Bonjour" }) */
export const t = <T,>(content: { de: T; fr: T }): T => content[LANG];

/** Link zur gleichen Seite in der anderen Sprache */
export const switchLangUrl = (target: Lang): string => {
  const { pathname, hash } = window.location;
  // Auf raeldata.ma führt „DE" immer zur deutschen Domain
  if (onFrDomain && target === "de") return `https://${DE_DOMAIN}${pathname}${hash}`;
  // Auf raeldata.de führt „FR" erst zu raeldata.ma, wenn die Domain verbunden ist
  if (onDeDomain && target === "fr" && FR_DOMAIN_ACTIVE) return `https://${FR_DOMAIN}${pathname}${hash}`;
  return `${pathname}?lang=${target}${hash}`;
};

/** Domain für Canonical-Links */
export const SITE_URL = onFrDomain || (isFR && FR_DOMAIN_ACTIVE) ? `https://${FR_DOMAIN}` : `https://${DE_DOMAIN}`;

/** Zusatz für Canonical-Links, solange Französisch auf raeldata.de über ?lang=fr läuft */
export const LANG_QUERY = isFR && !onFrDomain && !FR_DOMAIN_ACTIVE ? "?lang=fr" : "";
