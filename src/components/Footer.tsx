import { Mail, MapPin, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { t } from "@/i18n";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const expertise = [
    "EDI Excellence",
    "eProcurement Mastery",
    t({ de: "Interkulturelle Integration", fr: "Intégration interculturelle" }),
    "Leadership & Transformation",
  ];

  const company = [
    { href: "/#ueber-uns", label: t({ de: "Über uns", fr: "À propos" }) },
    { href: "/#leistungen", label: t({ de: "Leistungen", fr: "Services" }) },
    { href: "/training", label: t({ de: "Training", fr: "Formations" }) },
    { href: "/#kontakt", label: t({ de: "Kontakt", fr: "Contact" }) },
    { href: "/#kontakt", label: t({ de: "Strategisches Erstgespräch", fr: "Entretien stratégique" }) },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-4">
              <span className="gradient-shift">RAELDATA</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              {t({
                de: "Boutique-Beratung für EDI Excellence, eProcurement Mastery und interkulturelle Integration. Strategische Lösungen für globale Wettbewerbsfähigkeit.",
                fr: "Cabinet de conseil spécialisé en EDI, eProcurement et intégration interculturelle. Des solutions stratégiques pour la compétitivité internationale.",
              })}
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">contact@raeldata.de</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">
                  {t({
                    de: "Remote & vor Ort in DACH, GCC & MOROCCO",
                    fr: "À distance & sur site : Maroc, Europe (DACH) & GCC",
                  })}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="w-4 h-4 text-primary" />
                <a href="https://www.linkedin.com/in/elmokhirachid/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  @elmokhirachid
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Expertise</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {expertise.map((label) => (
                <li key={label}>
                  <a href="/#expertise" className="hover:text-primary transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t({ de: "Unternehmen", fr: "Entreprise" })}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {company.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-primary transition-colors">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} RAELDATA. {t({ de: "Alle Rechte vorbehalten.", fr: "Tous droits réservés." })}
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link to="/datenschutz" className="hover:text-primary transition-colors">
                {t({ de: "Datenschutz", fr: "Confidentialité" })}
              </Link>
              <Link to="/impressum" className="hover:text-primary transition-colors">
                {t({ de: "Impressum", fr: "Mentions légales" })}
              </Link>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-xs text-muted-foreground">
              {t({
                de: "RAELDATA ist nicht Add-on, sondern Grundlage. Für resiliente, digitale und globale Lieferketten.",
                fr: "RAELDATA n'est pas un complément, mais un socle. Pour des chaînes d'approvisionnement résilientes, digitales et globales.",
              })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
