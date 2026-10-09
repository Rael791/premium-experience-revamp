import { Button } from "@/components/ui/button";
import { Mail, MapPin, Linkedin, Calendar, Phone, Globe } from "lucide-react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@raeldata.de",
      description: "Direkter Kontakt für alle Anfragen",
      action: "mailto:contact@raeldata.de"
    },
    {
      icon: MapPin,
      title: "Standorte",
      value: "Remote & vor Ort",
      description: "DACH, GCC & NA",
      action: null
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "@rachids",
      description: "Vernetzen Sie sich mit uns",
      action: "https://linkedin.com/in/rachids"
    },
    {
      icon: Calendar,
      title: "Terminbuchung",
      value: "Strategisches Erstgespräch",
      description: "Direkter Terminbuchung",
      action: "#kontakt"
    }
  ];

  const regions = [
    {
      name: "DACH Region",
      countries: ["Deutschland", "Österreich", "Schweiz"],
      focus: "Deutsche Präzision & Engineering Excellence"
    },
    {
      name: "GCC Staaten",
      countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait"],
      focus: "Kulturelle Intelligenz & Internationale Expansion"
    },
    {
      name: "North America",
      countries: ["USA", "Canada"],
      focus: "Skalierbare Technologielösungen"
    }
  ];

  return (
    <section id="kontakt" className="min-h-screen flex items-center py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="heading-section mb-6">
            Lassen Sie uns <span className="text-primary">sprechen</span>
          </h2>
          <p className="text-premium max-w-2xl mx-auto">
            Dort, wo andere aufhören, fangen wir an. Bereit für ein strategisches Gespräch über Ihre Zukunft?
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
              Globale Präsenz
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
                      <p className="text-sm text-muted-foreground mb-2">Länder:</p>
                      <div className="flex flex-wrap gap-2">
                        {region.countries.map((country, countryIdx) => (
                          <span key={countryIdx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {country}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Fokus:</p>
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
              Warum ein Gespräch mit uns Ihr nächster strategischer Schritt ist
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: "Sofortige Insights",
                  description: "Bereits im Erstgespräch erhalten Sie wertvolle Einblicke in Optimierungspotentiale"
                },
                {
                  title: "Maßgeschneiderte Strategie",
                  description: "Keine Standard-Lösungen – jede Empfehlung basiert auf Ihrer spezifischen Situation"
                },
                {
                  title: "Internationale Expertise",
                  description: "Profitieren Sie von unserer Erfahrung in DACH, GCC und nordamerikanischen Märkten"
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
                Bereit, Ihre EDI- und eProcurement-Landschaft auf das nächste Level zu bringen?
              </p>
              <Button variant="hero" size="xl" className="shadow-premium" onClick={() => document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' })}>
                <Calendar className="w-5 h-5 mr-2" />
                Jetzt Strategisches Erstgespräch vereinbaren
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
