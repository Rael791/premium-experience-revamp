import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { isFR, SITE_URL } from './i18n'

// Sprache, Titel und Beschreibung passend zur Domain setzen
if (isFR) {
  document.documentElement.lang = 'fr';
  document.title = 'RAELDATA – Conseil & formations EDI, eProcurement et facture électronique | Maroc';
  const description =
    "Conseil et formations en EDI, eProcurement et facture électronique pour les entreprises au Maroc. Formations en ligne flexibles, en soirée ou le samedi.";
  document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', 'RAELDATA – EDI, eProcurement & facture électronique');
}
document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${SITE_URL}${window.location.pathname}`);
document.querySelector('meta[property="og:url"]')?.setAttribute('content', `${SITE_URL}${window.location.pathname}`);

createRoot(document.getElementById("root")!).render(<App />);
