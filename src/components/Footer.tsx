import { useTranslation } from "react-i18next";
import { Mail, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-4">
              <span className="gradient-shift">IQONIQ</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              {t("footer.description")}
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">hello@rsl-integrate.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">{t("footer.locations")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="w-4 h-4 text-primary" />
                <a href="https://linkedin.com/in/rachids" className="text-muted-foreground hover:text-primary transition-colors">
                  @rachids
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t("footer.expertise")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#expertise" className="hover:text-primary transition-colors">{t("footer.edi")}</a></li>
              <li><a href="#expertise" className="hover:text-primary transition-colors">{t("footer.eprocurement")}</a></li>
              <li><a href="#expertise" className="hover:text-primary transition-colors">{t("footer.intercultural")}</a></li>
              <li><a href="#expertise" className="hover:text-primary transition-colors">{t("footer.leadership")}</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t("footer.company")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#ueber-uns" className="hover:text-primary transition-colors">{t("footer.about")}</a></li>
              <li><a href="#leistungen" className="hover:text-primary transition-colors">{t("footer.services")}</a></li>
              <li><a href="#kontakt" className="hover:text-primary transition-colors">{t("footer.contact")}</a></li>
              <li><a href="#kontakt" className="hover:text-primary transition-colors">{t("footer.consultation")}</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} IQONIQ / RSL INTEGRATE. {t("footer.rights")}
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">{t("footer.privacy")}</a>
              <a href="#" className="hover:text-primary transition-colors">{t("footer.imprint")}</a>
              <a href="#" className="hover:text-primary transition-colors">{t("footer.terms")}</a>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-xs text-muted-foreground">
              {t("footer.tagline")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
