import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Code, ShoppingCart, Globe2, Users2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ediHero from "@/assets/edi-hero.jpg";
import procurementHero from "@/assets/procurement-hero.jpg";
import interculturalHero from "@/assets/intercultural-hero.jpg";
import leadershipHero from "@/assets/leadership-hero.jpg";

const ExpertiseDetail = () => {
  const { slug } = useParams();

  const expertiseData = {
    "edi-excellence": {
      icon: Code,
      title: "EDI Excellence",
      subtitle: "Architektur, Skalierung, Performance – wir machen Ihre EDI-Landschaft zukunftsfähig",
      description: "EDI ist das Rückgrat moderner Geschäftsprozesse. Doch nur wenige Unternehmen schöpfen das volle Potenzial ihrer EDI-Infrastruktur aus. Wir bringen Ihre EDI-Landschaft auf Enterprise-Level.",
      heroImage: ediHero,
      sections: [
        {
          title: "Systemarchitektur & Migration",
          content: "Wir analysieren Ihre bestehende EDI-Infrastruktur und entwickeln eine zukunftsfähige Architektur, die mit Ihrem Geschäft skaliert. Von Legacy-System-Migration bis hin zu Cloud-nativen Lösungen.",
          benefits: ["Skalierbare Architektur", "Zero-Downtime Migration", "Cloud-Ready Design", "Vendor-Lock-in Vermeidung"]
        },
        {
          title: "Datenqualitäts-Frameworks",
          content: "Implementierung robuster Validierungslogik und Business Rules, die Datenintegrität garantieren und Compliance-Anforderungen automatisch erfüllen.",
          benefits: ["Automatische Validierung", "Business Rules Engine", "Compliance Monitoring", "Fehlerprävention"]
        },
        {
          title: "Performance-Monitoring",
          content: "Einrichtung umfassender Monitoring-Dashboards mit Real-time Alerts, Performance-KPIs und prädiktiver Analyse für proaktive Problemlösung.",
          benefits: ["Real-time Monitoring", "Predictive Analytics", "Automated Alerts", "Performance Optimization"]
        }
      ]
    },
    "eprocurement-mastery": {
      icon: ShoppingCart,
      title: "eProcurement Mastery",
      subtitle: "Vom operativen Einkauf zur strategischen Wertschöpfung",
      description: "eProcurement ist mehr als digitaler Einkauf – es ist ein strategischer Hebel für Kosteneinsparungen, Compliance und Lieferantenbeziehungen. Wir transformieren Ihre Beschaffung.",
      heroImage: procurementHero,
      sections: [
        {
          title: "Prozessdesign & Automatisierung",
          content: "Entwicklung schlanker, automatisierter Beschaffungsprozesse, die Compliance sicherstellen und gleichzeitig die User Experience maximieren.",
          benefits: ["Workflow Automation", "Compliance by Design", "User-Centric Design", "Integration APIs"]
        },
        {
          title: "Lieferanten-Onboarding",
          content: "Implementierung effizienter Onboarding-Prozesse mit Self-Service-Portalen, automatisierter Dokumentenvalidierung und Compliance-Checks.",
          benefits: ["Self-Service Portale", "Automatische Validierung", "Compliance Scoring", "Vendor Management"]
        },
        {
          title: "Spend-Analytics",
          content: "Aufbau datengetriebener Analysen für strategische Einkaufsentscheidungen, Kostentransparenz und Lieferantenperformance-Bewertung.",
          benefits: ["Data-driven Insights", "Cost Transparency", "Supplier Analytics", "Strategic Sourcing"]
        }
      ]
    },
    "interkulturelle-integration": {
      icon: Globe2,
      title: "Interkulturelle Integration",
      subtitle: "Geschäftsprozesse und Kommunikation, die in jeder Kultur funktionieren",
      description: "Erfolgreiche internationale Projekte erfordern mehr als technische Exzellenz – sie brauchen kulturelle Intelligenz. Wir überbrücken kulturelle und organisatorische Unterschiede.",
      heroImage: interculturalHero,
      sections: [
        {
          title: "Cross-Cultural Process Design",
          content: "Entwicklung von Geschäftsprozessen, die kulturelle Besonderheiten berücksichtigen und trotzdem global skalierbar sind.",
          benefits: ["Cultural Adaptation", "Global Scalability", "Local Compliance", "Best Practices Transfer"]
        },
        {
          title: "Stakeholder-Management",
          content: "Strategisches Management von Stakeholdern über Kulturgrenzen hinweg mit angepasster Kommunikation und Projektsteuerung.",
          benefits: ["Cultural Intelligence", "Communication Strategies", "Conflict Resolution", "Relationship Building"]
        },
        {
          title: "DACH ↔ GCC Integration",
          content: "Spezialisierte Expertise für Projekte zwischen deutschsprachigen Ländern und den Golf-Kooperationsrat-Staaten.",
          benefits: ["Regional Expertise", "Cultural Bridge", "Legal Compliance", "Business Practices"]
        }
      ]
    },
    "leadership-transformation": {
      icon: Users2,
      title: "Leadership & Transformation",
      subtitle: "Befähigung Ihrer Schlüsselrollen, komplexe Veränderungen zu steuern",
      description: "Digitale Transformation gelingt nur mit den richtigen Führungskompetenzen. Wir entwickeln Ihre Leaders zu Transformation Champions.",
      heroImage: leadershipHero,
      sections: [
        {
          title: "Executive Sparring",
          content: "Strategische Beratung für C-Level und Senior Management bei kritischen Entscheidungen in digitalen Transformationsprojekten.",
          benefits: ["Strategic Guidance", "Decision Support", "Risk Mitigation", "Executive Coaching"]
        },
        {
          title: "Agile Transformation",
          content: "Einführung agiler Methoden und Denkweisen in traditionellen Beschaffungs- und IT-Organisationen.",
          benefits: ["Agile Mindset", "Team Empowerment", "Continuous Improvement", "Change Leadership"]
        },
        {
          title: "Training & Empowerment",
          content: "Aufbau interner Kompetenzen durch maßgeschneiderte Trainings und Mentoring-Programme.",
          benefits: ["Skill Development", "Knowledge Transfer", "Team Building", "Sustainable Growth"]
        }
      ]
    }
  };

  const expertise = expertiseData[slug as keyof typeof expertiseData];

  if (!expertise) {
    return <div>Expertise nicht gefunden</div>;
  }

  const Icon = expertise.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section 
          className="py-24 relative"
          style={{
            backgroundImage: `url(${expertise.heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <Link to="/#expertise" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Zurück zur Expertise-Übersicht
              </Link>
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mr-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-2">{expertise.title}</h1>
                  <p className="text-xl text-muted-foreground">{expertise.subtitle}</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {expertise.description}
              </p>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              {expertise.sections.map((section, idx) => (
                <div key={idx} className="glass-effect rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">{section.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{section.content}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {section.benefits.map((benefit, benefitIdx) => (
                      <div key={benefitIdx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-gradient-hero rounded-2xl p-8 text-background">
                <h3 className="text-2xl font-bold mb-4">Bereit für {expertise.title}?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Lassen Sie uns in einem strategischen Gespräch erkunden, wie wir Ihnen helfen können.
                </p>
                <Button variant="outline" size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
                  <a href="/#kontakt">Strategisches Erstgespräch vereinbaren</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ExpertiseDetail;