import { Button } from "@/components/ui/button";
import { 
  Database, 
  ShoppingBag, 
  Globe, 
  TrendingUp, 
  Shield, 
  Users, 
  Zap, 
  Target,
  CheckCircle
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      category: "EDI Excellence",
      icon: Database,
      color: "primary",
      gradient: "from-primary/20 to-primary-glow/10",
      services: [
        "Systemarchitektur & Migrationsstrategien",
        "Datenqualitäts-Frameworks & Business Rules",
        "Monitoring, KPI-Visualisierung, Fehleranalyse",
        "Performance-Optimierung & Skalierung"
      ]
    },
    {
      category: "eProcurement Mastery",
      icon: ShoppingBag,
      color: "accent",
      gradient: "from-accent/20 to-accent/10",
      services: [
        "Prozessdesign & Automatisierung",
        "Lieferanten-Onboarding & Self-Service-Portale",
        "Compliance & eInvoicing-Strategien",
        "Spend-Analytics & Kostentransparenz"
      ]
    },
    {
      category: "Interkulturelle Integration",
      icon: Globe,
      color: "secondary",
      gradient: "from-secondary/20 to-secondary/10",
      services: [
        "Cross-Cultural Process Design",
        "Interkulturelles Stakeholder-Management",
        "Projektkommunikation zwischen DACH & GCC",
        "Change Management über Kulturgrenzen"
      ]
    },
    {
      category: "Leadership & Transformation",
      icon: TrendingUp,
      color: "primary",
      gradient: "from-primary/20 to-primary-glow/10",
      services: [
        "Executive Sparring & Projektsteuerung",
        "Training für interne EDI-/eProcurement-Rollen",
        "Agile Methoden für Beschaffungs- und IT-Teams",
        "Digitale Transformation Roadmaps"
      ]
    }
  ];

  const highlights = [
    {
      icon: Shield,
      title: "Compliance-First",
      description: "Alle Lösungen erfüllen höchste Compliance-Standards"
    },
    {
      icon: Zap,
      title: "Agile Umsetzung",
      description: "Schnelle Iterationen, messbare Fortschritte"
    },
    {
      icon: Users,
      title: "Change Enablement",
      description: "Befähigung Ihrer Teams für nachhaltigen Erfolg"
    },
    {
      icon: Target,
      title: "ROI-Fokus",
      description: "Messbare Geschäftsresultate von Tag 1"
    }
  ];

  return (
    <section id="leistungen" className="min-h-screen flex items-center py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="heading-section mb-6">
            Unsere <span className="text-primary">Leistungen</span>
          </h2>
          <p className="text-premium max-w-3xl mx-auto">
            Umfassende Expertise in vier strategischen Bereichen. Jede Leistung designed für maximale Wirkung und nachhaltigen Erfolg.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${service.gradient} border border-border hover:border-${service.color}/30 transition-all duration-500 hover-lift`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Background Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <service.icon className="w-full h-full" />
              </div>
              
              <div className="relative p-8">
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-${service.color}/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className={`w-6 h-6 text-${service.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.category}
                  </h3>
                </div>

                {/* Services List */}
                <div className="space-y-4">
                  {service.services.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start space-x-3">
                      <CheckCircle className={`w-5 h-5 text-${service.color} flex-shrink-0 mt-0.5`} />
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <Button 
                    variant="outline" 
                    className={`w-full group/btn hover:border-${service.color}/40`}
                    asChild
                  >
                    <a href={`/services/${service.category.toLowerCase().replace(/\s+/g, '-')}`}>
                      Detailberatung anfordern
                      <span className="ml-2 transform group-hover/btn:translate-x-1 transition-transform">→</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Highlights */}
        <div className="glass-effect rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Warum unsere Leistungen anders sind
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <highlight.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{highlight.title}</h4>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Overview */}
        <div className="text-center animate-fade-in-up">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Unser bewährter Prozess
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Strategische Analyse", desc: "Tiefgehende Bewertung Ihrer aktuellen Landschaft" },
              { step: "02", title: "Roadmap Design", desc: "Maßgeschneiderte Transformationsstrategie" },
              { step: "03", title: "Agile Umsetzung", desc: "Iterative Implementierung mit kontinuierlichem Feedback" },
              { step: "04", title: "Nachhaltigkeit", desc: "Knowledge Transfer und Empowerment Ihrer Teams" }
            ].map((phase, idx) => (
              <div key={idx} className="relative">
                <div className="glass-effect rounded-xl p-6 hover-lift">
                  <div className="text-3xl font-bold text-primary mb-2">{phase.step}</div>
                  <h4 className="font-semibold text-foreground mb-2">{phase.title}</h4>
                  <p className="text-sm text-muted-foreground">{phase.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-2xl p-8 text-background max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Bereit für Transformation?</h3>
            <p className="text-lg mb-6 opacity-90">
              Lassen Sie uns gemeinsam erkunden, wie unsere Leistungen Ihr Unternehmen auf die nächste Stufe bringen.
            </p>
            <Button variant="outline" size="xl" className="bg-background text-foreground hover:bg-background/90">
              Strategisches Erstgespräch vereinbaren
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;