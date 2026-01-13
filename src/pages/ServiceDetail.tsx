import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Database, ShoppingBag, Globe, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ediHero from "@/assets/edi-hero.jpg";
import procurementHero from "@/assets/procurement-hero.jpg";

const ServiceDetail = () => {
  const { slug } = useParams();

  const serviceData = {
    "edi-excellence": {
      icon: Database,
      title: "EDI Excellence Services",
      subtitle: "Comprehensive EDI solutions from architecture to optimization",
      description: "Transform your EDI landscape with our proven methodologies and deep technical expertise.",
      heroImage: ediHero,
      services: [
        {
          name: "EDI Architecture Assessment",
          description: "Comprehensive evaluation of your current EDI infrastructure",
          deliverables: ["Current State Analysis", "Gap Assessment", "Future State Roadmap", "ROI Calculation"],
          duration: "2-4 weeks",
          approach: "We analyze your existing EDI systems, identify bottlenecks, and design a scalable architecture that grows with your business."
        },
        {
          name: "System Migration & Integration",
          description: "Seamless migration to modern EDI platforms",
          deliverables: ["Migration Strategy", "System Integration", "Data Mapping", "Go-Live Support"],
          duration: "8-16 weeks",
          approach: "Zero-downtime migration with comprehensive testing and rollback strategies to ensure business continuity."
        },
        {
          name: "Business Rules Engine",
          description: "Intelligent automation for data validation and processing",
          deliverables: ["Rules Configuration", "Validation Framework", "Exception Handling", "Monitoring Dashboard"],
          duration: "4-8 weeks",
          approach: "Implement sophisticated business logic that ensures data quality and automates decision-making processes."
        }
      ]
    },
    "eprocurement-mastery": {
      icon: ShoppingBag,
      title: "eProcurement Mastery Services",
      subtitle: "Strategic procurement transformation and optimization",
      description: "Revolutionize your procurement processes with intelligent automation and strategic insights.",
      heroImage: procurementHero,
      services: [
        {
          name: "Procurement Process Optimization",
          description: "Streamline your entire procurement lifecycle",
          deliverables: ["Process Mapping", "Workflow Design", "Automation Setup", "User Training"],
          duration: "6-12 weeks",
          approach: "Design user-centric processes that balance efficiency, compliance, and stakeholder satisfaction."
        },
        {
          name: "Supplier Portal Implementation",
          description: "Self-service portals for enhanced supplier collaboration",
          deliverables: ["Portal Configuration", "Onboarding Process", "Integration APIs", "Performance Metrics"],
          duration: "8-14 weeks",
          approach: "Create intuitive self-service experiences that reduce manual effort and improve supplier relationships."
        },
        {
          name: "Spend Analytics & Intelligence",
          description: "Data-driven insights for strategic procurement decisions",
          deliverables: ["Analytics Dashboard", "Reporting Framework", "KPI Definitions", "Actionable Insights"],
          duration: "4-8 weeks",
          approach: "Transform procurement data into strategic intelligence that drives cost savings and supplier performance."
        }
      ]
    }
  };

  const service = serviceData[slug as keyof typeof serviceData];

  if (!service) {
    return <div>Service nicht gefunden</div>;
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section 
          className="py-24 relative"
          style={{
            backgroundImage: `url(${service.heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <Link to="/#leistungen" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Zurück zu den Leistungen
              </Link>
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mr-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-2">{service.title}</h1>
                  <p className="text-xl text-muted-foreground">{service.subtitle}</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {service.description}
              </p>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">Unsere Services im Detail</h2>
              
              <div className="space-y-8">
                {service.services.map((item, idx) => (
                  <div key={idx} className={`group relative overflow-hidden rounded-2xl p-8 hover-lift transition-all duration-500 ${
                    idx % 3 === 0 ? 'bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20' :
                    idx % 3 === 1 ? 'bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20' :
                    'bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20'
                  }`}>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Service Info */}
                      <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold text-foreground mb-4">{item.name}</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-3">Unser Ansatz:</h4>
                          <p className="text-muted-foreground leading-relaxed">{item.approach}</p>
                        </div>
                        <div className="flex items-center space-x-6 text-sm">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-muted-foreground">Dauer: {item.duration}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Deliverables */}
                      <div className="lg:col-span-1">
                        <h4 className="font-semibold text-foreground mb-4">Deliverables:</h4>
                        <div className="space-y-3">
                          {item.deliverables.map((deliverable, delIdx) => (
                            <div key={delIdx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 mt-2"></div>
                              <span className="text-sm text-muted-foreground">{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-gradient-hero rounded-2xl p-8 text-background">
                <h3 className="text-2xl font-bold mb-4">Interesse an unseren Services?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Lassen Sie uns besprechen, wie wir Ihnen bei Ihren spezifischen Herausforderungen helfen können.
                </p>
                <Button variant="outline" size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
                  <a href="/#kontakt">Detailberatung anfordern</a>
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

export default ServiceDetail;