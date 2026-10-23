/*
 * Sprachsteuerung
 * - raeldata.com  → Französisch (Marokko)
 * - raeldata.de   → Deutsch
 * - ?lang=fr / ?lang=de überschreibt die Erkennung (zum Testen), bleibt für die Sitzung erhalten.
 */
export type Lang = "de" | "fr";

const FR_DOMAIN = "raeldata.com";
const DE_DOMAIN = "raeldata.de";

/**
 * Ist raeldata.com schon mit dieser Website verbunden?
 * false = Französisch läuft auf raeldata.de über ?lang=fr (der Umschalter bleibt auf raeldata.de).
 * Sobald raeldata.com in Hostinger verbunden ist, auf true setzen.
 */
const FR_DOMAIN_ACTIVE = false;

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
  return window.location.hostname.endsWith(FR_DOMAIN) ? "fr" : "de";
};

export const LANG: Lang = detectLang();
export const isFR = LANG === "fr";

/** Wählt den Inhalt passend zur Sprache: t({ de: "Hallo", fr: "Bonjour" }) */
export const t = <T,>(content: { de: T; fr: T }): T => content[LANG];

/** Link zur gleichen Seite in der anderen Sprache */
export const switchLangUrl = (target: Lang): string => {
  const { hostname, pathname, hash } = window.location;
  const onLiveDomain = hostname.endsWith(FR_DOMAIN) || hostname.endsWith(DE_DOMAIN);
  if (FR_DOMAIN_ACTIVE && onLiveDomain) {
    const domain = target === "fr" ? FR_DOMAIN : DE_DOMAIN;
    return `https://${domain}${pathname}${hash}`;
  }
  return `${pathname}?lang=${target}${hash}`;
};

export const SITE_URL = isFR && FR_DOMAIN_ACTIVE ? `https://${FR_DOMAIN}` : `https://${DE_DOMAIN}`;

/** Zusatz für Canonical-Links, solange Französisch über ?lang=fr läuft */
export const LANG_QUERY = isFR && !FR_DOMAIN_ACTIVE ? "?lang=fr" : "";
