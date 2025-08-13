import { Code, ShoppingCart, Globe2, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ediImage from "@/assets/edi-systems.jpg";
import eprocurementImage from "@/assets/eprocurement-dashboard.jpg";
import interculturalImage from "@/assets/intercultural-meeting.jpg";
import leadershipImage from "@/assets/leadership-team.jpg";

const ExpertiseSection = () => {
  const expertiseAreas = [
    {
      icon: Code,
      title: "EDI Excellence",
      description: "Architektur, Skalierung, Performance – wir machen Ihre EDI-Landschaft zukunftsfähig.",
      image: ediImage,
      color: "primary",
      features: ["Systemarchitektur & Migration", "Datenqualitäts-Frameworks", "Performance-Monitoring", "Business Rules Engine"]
    },
    {
      icon: ShoppingCart,
      title: "eProcurement Mastery",
      description: "Vom operativen Einkauf zur strategischen Wertschöpfung.",
      image: eprocurementImage,
      color: "accent",
      features: ["Prozessdesign & Automatisierung", "Lieferanten-Onboarding", "Compliance-Strategien", "Self-Service-Portale"]
    },
    {
      icon: Globe2,
      title: "Interkulturelle Integration",
      description: "Geschäftsprozesse und Kommunikation, die in jeder Kultur funktionieren.",
      image: interculturalImage,
      color: "secondary",
      features: ["Cross-Cultural Process Design", "Stakeholder-Management", "DACH ↔ GCC Projektkommunikation", "Kulturelle Compliance"]
    },
    {
      icon: Users2,
      title: "Leadership & Transformation",
      description: "Befähigung Ihrer Schlüsselrollen, komplexe Veränderungen zu steuern.",
      image: leadershipImage,
      color: "primary",
      features: ["Executive Sparring", "Projektsteuerung", "Agile Transformation", "Training & Empowerment"]
    }
  ];

  return (
    <section id="expertise" className="min-h-screen flex items-center py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="heading-section mb-6">
            Unsere <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-premium max-w-3xl mx-auto">
            Vier Kernkompetenzen, die Ihre digitale Beschaffung auf das nächste Level bringen. 
            Von technischer Exzellenz bis zu kultureller Intelligenz.
          </p>
        </div>

        <div className="space-y-16">
          {expertiseAreas.map((area, idx) => (
            <div 
              key={idx} 
              className={`group relative overflow-hidden rounded-3xl ${
                idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } flex flex-col lg:flex bg-card border border-border hover:border-${area.color}/30 transition-all duration-500 hover-lift`}
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-primary/20 to-transparent"></div>
              </div>

              {/* Image Side */}
              <div className="lg:w-1/2 relative overflow-hidden">
                <div className="aspect-[4/3] lg:aspect-auto lg:h-full relative">
                  <img 
                    src={area.image} 
                    alt={`${area.title} professional environment`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/20 to-background/40"></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute top-6 left-6 w-16 h-16 bg-card/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-premium">
                    <area.icon className={`w-8 h-8 text-${area.color}`} />
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {area.description}
                    </p>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {area.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full bg-${area.color} flex-shrink-0`}></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className={`group/btn hover:border-${area.color}/40 hover:text-${area.color}`}
                    >
                      Mehr erfahren
                      <span className="ml-2 transform group-hover/btn:translate-x-1 transition-transform">→</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="max-w-2xl mx-auto glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Bereit für die nächste Stufe?
            </h3>
            <p className="text-muted-foreground mb-6">
              Lassen Sie uns in einem strategischen Erstgespräch erkunden, wie unsere Expertise Ihr Unternehmen voranbringt.
            </p>
            <Button variant="hero" size="xl">
              Strategisches Erstgespräch vereinbaren
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;