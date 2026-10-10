import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { LANG, t, switchLangUrl } from "@/i18n";

const LangSwitch = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center text-sm font-medium ${className}`}>
    {(["de", "fr"] as const).map((l, i) => (
      <span key={l} className="flex items-center">
        {i > 0 && <span className="mx-2 text-muted-foreground">|</span>}
        {LANG === l ? (
          <span className="text-primary">{l.toUpperCase()}</span>
        ) : (
          <a
            href={switchLangUrl(l)}
            className="text-muted-foreground hover:text-primary transition-colors"
            hrefLang={l}
            title={l === "fr" ? "Version française (Maroc)" : "Deutsche Version"}
          >
            {l.toUpperCase()}
          </a>
        )}
      </span>
    ))}
  </div>
);

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: t({ de: "Home", fr: "Accueil" }) },
    { href: "/#ueber-uns", label: t({ de: "Über uns", fr: "À propos" }) },
    { href: "/#expertise", label: "Expertise" },
    { href: "/#leistungen", label: t({ de: "Leistungen", fr: "Services" }) },
    { href: "/training", label: t({ de: "Training", fr: "Formations" }) },
    { href: "/#kontakt", label: t({ de: "Kontakt", fr: "Contact" }) },
  ];

  const ctaLabel = t({ de: "Strategisches Erstgespräch", fr: "Entretien stratégique" });

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "glass-effect shadow-premium" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <a href="/" className="gradient-shift">RAELDATA</a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-7">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
            <LangSwitch />
            <Button variant="hero" size="lg" asChild>
              <a href="/#kontakt">{ctaLabel}</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <LangSwitch />
            <button
              className="text-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 space-y-4 glass-effect rounded-lg p-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-foreground hover:text-primary transition-colors duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button variant="hero" size="lg" className="w-full" asChild>
              <a href="/#kontakt" onClick={() => setIsMobileMenuOpen(false)}>
                {ctaLabel}
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
