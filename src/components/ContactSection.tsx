import { Button } from "@/components/ui/button";
import { Mail, MapPin, Linkedin, Calendar, Phone, Globe } from "lucide-react";
import ContactForm from "./ContactForm";
import { t } from "@/i18n";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "E-Mail",
      value: "contact@raeldata.de",
      description: t({ de: "Direkter Kontakt für alle Anfragen", fr: "Contact direct pour toutes vos demandes" }),
      action: "mailto:contact@raeldata.de"
    },
    {
      icon: MapPin,
      title: t({ de: "Standorte", fr: "Zones d'intervention" }),
      value: t({ de: "Remote & vor Ort", fr: "À distance & sur site" }),
      description: t({ de: "DACH, GCC & NA", fr: "Maroc, Europe & GCC" }),
      action: null
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "@elmokhirachid",
      description: t({ de: "Vernetzen Sie sich mit uns", fr: "Restons en contact" }),
      action: "https://www.linkedin.com/in/elmokhirachid/"
    },
    {
      icon: Calendar,
      title: t({ de: "Terminbuchung", fr: "Prise de rendez-vous" }),
      value: t({ de: "Strategisches Erstgespräch", fr: "Entretien stratégique" }),
      description: t({ de: "Direkte Terminbuchung", fr: "Réservation directe" }),
      action: "#kontakt"
    }
  ];

  const regions = t({
    de: [
      {
        name: "DACH Region",
        countries: ["Deutschland", "Österreich", "Schweiz"],
        focus: "Deutsche Präzision & Engineering Excellence",
      },
      {
        name: "GCC Staaten",
        countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait"],
        focus: "Kulturelle Intelligenz & Internationale Expansion",
      },
      {
        name: "North America",
        countries: ["USA", "Canada"],
        focus: "Skalierbare Technologielösungen",
      },
    ],
    fr: [
      {
        name: "Maroc",
        countries: ["Casablanca", "Rabat", "Tanger", "Marrakech"],
        focus: "Digitalisation des achats, EDI & facture électronique",
      },
      {
        name: "Europe (DACH)",
        countries: ["Allemagne", "Autriche", "Suisse"],
        focus: "Rigueur allemande & standards industriels européens",
      },
      {
        name: "Pays du Golfe",
        countries: ["Émirats", "Arabie saoudite", "Qatar"],
        focus: "Intelligence culturelle & expansion internationale",
      },
    ],
  });

  return (
    <section id="kontakt" className="min-h-screen flex items-center py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="heading-section mb-6">
            {t({ de: "Lassen Sie uns", fr: "Parlons-" })}{t({ de: " ", fr: "" })}<span className="text-primary">{t({ de: "sprechen", fr: "en" })}</span>
          </h2>
          <p className="text-premium max-w-2xl mx-auto">
            {t({ de: "Dort, wo andere aufhören, fangen wir an. Bereit für ein strategisches Gespräch über Ihre Zukunft?", fr: "Là où les autres s'arrêtent, nous commençons. Prêt pour un échange stratégique sur votre avenir ?" })}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="mb-16">
            <ContactForm />
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, idx) => (
              <div 
                key={idx}
                className="group glass-effect rounded-xl p-6 hover-lift cursor-pointer"
                onClick={() => method.action && window.open(method.action)}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <method.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{method.title}</h3>
                  <p className="text-primary font-medium mb-2">{method.value}</p>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Global Presence */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              {t({ de: "Globale Präsenz", fr: "Présence internationale" })}
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {regions.map((region, idx) => (
                <div key={idx} className="glass-effect rounded-xl p-6 hover-lift">
                  <div className="flex items-center mb-4">
                    <Globe className="w-6 h-6 text-primary mr-3" />
                    <h4 className="text-xl font-semibold text-foreground">{region.name}</h4>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">{t({ de: "Länder:", fr: "Pays / villes :" })}</p>
                      <div className="flex flex-wrap gap-2">
                        {region.countries.map((country, countryIdx) => (
                          <span key={countryIdx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {country}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{t({ de: "Fokus:", fr: "Focus :" })}</p>
                      <p className="text-sm text-foreground">{region.focus}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Contact Us */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              {t({ de: "Warum ein Gespräch mit uns Ihr nächster strategischer Schritt ist", fr: "Pourquoi un échange avec nous est votre prochaine étape stratégique" })}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: t({ de: "Sofortige Insights", fr: "Des pistes immédiates" }),
                  description: t({ de: "Bereits im Erstgespräch erhalten Sie wertvolle Einblicke in Optimierungspotentiale", fr: "Dès le premier entretien, vous identifiez des leviers d'optimisation concrets" })
                },
                {
                  title: t({ de: "Maßgeschneiderte Strategie", fr: "Une stratégie sur mesure" }),
                  description: t({ de: "Keine Standard-Lösungen – jede Empfehlung basiert auf Ihrer spezifischen Situation", fr: "Pas de solution standard – chaque recommandation part de votre situation" })
                },
                {
                  title: t({ de: "Internationale Expertise", fr: "Une expertise internationale" }),
                  description: t({ de: "Profitieren Sie von unserer Erfahrung in DACH, GCC und nordamerikanischen Märkten", fr: "Profitez de notre expérience en Allemagne, en Europe et au Maroc" })
                }
              ].map((benefit, idx) => (
                <div key={idx} className="glass-effect rounded-lg p-6">
                  <h4 className="font-semibold text-foreground mb-3">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-16">
            <div className="max-w-2xl mx-auto">
              <p className="text-lg text-muted-foreground mb-6">
                {t({ de: "Bereit, Ihre EDI- und eProcurement-Landschaft auf das nächste Level zu bringen?", fr: "Prêt à faire passer votre EDI et vos achats digitaux au niveau supérieur ?" })}
              </p>
              <Button variant="hero" size="xl" className="shadow-premium" onClick={() => document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' })}>
                <Calendar className="w-5 h-5 mr-2" />
                {t({ de: "Jetzt Strategisches Erstgespräch vereinbaren", fr: "Planifier un entretien stratégique" })}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
