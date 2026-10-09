import { Mail, MapPin, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
              Boutique-Beratung für EDI Excellence, eProcurement Mastery und interkulturelle Integration.
              Strategische Lösungen für globale Wettbewerbsfähigkeit.
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">contact@raeldata.de</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Remote & vor Ort in DACH, GCC & MOROCCO</span>
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
            <h3 className="font-semibold text-foreground mb-4">Expertise</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#expertise" className="hover:text-primary transition-colors">EDI Excellence</a></li>
              <li><a href="#expertise" className="hover:text-primary transition-colors">eProcurement Mastery</a></li>
              <li><a href="#expertise" className="hover:text-primary transition-colors">Interkulturelle Integration</a></li>
              <li><a href="#expertise" className="hover:text-primary transition-colors">Leadership & Transformation</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Unternehmen</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#ueber-uns" className="hover:text-primary transition-colors">Über uns</a></li>
              <li><a href="#leistungen" className="hover:text-primary transition-colors">Leistungen</a></li>
              <li><a href="#kontakt" className="hover:text-primary transition-colors">Kontakt</a></li>
              <li><a href="#kontakt" className="hover:text-primary transition-colors">Strategisches Erstgespräch</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} RAELDATA. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link to="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link>
              <Link to="/impressum" className="hover:text-primary transition-colors">Impressum</Link>
              <Link to="/agb" className="hover:text-primary transition-colors">AGB</Link>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-xs text-muted-foreground">
              RAELDATA ist nicht Add-on, sondern Grundlage. Für resiliente, digitale und globale Lieferketten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
