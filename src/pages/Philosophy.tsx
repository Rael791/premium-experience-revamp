import { Button } from "@/components/ui/button";
import { ArrowLeft, Target, Lightbulb, Zap, Shield, Globe, Users, TrendingUp, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import philosophyHero from "@/assets/philosophy-hero.jpg";

const Philosophy = () => {
  const philosophyPillars = [
    {
      icon: Target,
      title: "Strategische Präzision",
      description: "Wir agieren nicht nur operativ, sondern denken strategisch. Jede technische Entscheidung wird vor dem Hintergrund Ihrer Geschäftsziele getroffen.",
      details: [
        "Business-Impact-Analyse vor jeder Implementierung",
        "ROI-orientierte Lösungsarchitekturen",
        "Strategische Roadmap-Entwicklung",
        "C-Level-kompatible Kommunikation"
      ]
    },
    {
      icon: Lightbulb,
      title: "Innovative Denkweise",
      description: "Wir schauen über den Tellerrand hinaus und finden Lösungen, die andere übersehen. Innovation entsteht an der Schnittstelle verschiedener Disziplinen.",
      details: [
        "Cross-Industry Best Practices",
        "Emerging Technology Assessment",
        "Disruptive Innovation Workshops",
        "Future-Proof Architecture Design"
      ]
    },
    {
      icon: Shield,
      title: "Compliance & Sicherheit",
      description: "In einer Welt voller Regularien und Cyber-Bedrohungen ist Compliance kein Add-on, sondern fundamentale Grundlage aller unserer Lösungen.",
      details: [
        "GDPR/DSGVO-konforme Datenverarbeitung",
        "SOX-Compliance für internationale Konzerne",
        "Cyber Security by Design",
        "Audit-Trail und Dokumentation"
      ]
    },
    {
      icon: Globe,
      title: "Kulturelle Intelligenz",
      description: "Globale Geschäfte erfordern kulturelles Verständnis. Wir navigieren souverän zwischen deutschen Standards und internationalen Gepflogenheiten.",
      details: [
        "DACH-GCC Business Culture Expertise",
        "Multikulturelle Projektteams",
        "Internationale Compliance-Standards",
        "Cross-Cultural Change Management"
      ]
    }
  ];

  const uniqueFactors = [
    {
      title: "Boutique-Ansatz",
      description: "Keine Massenabfertigung, sondern maßgeschneiderte Lösungen für Ihre spezifischen Herausforderungen.",
      metric: "100% individuelle Lösungen"
    },
    {
      title: "Executive-Level Expertise",
      description: "Direkter Zugang zu Senior-Beratung ohne Hierarchieebenen und Junior-Consultants.",
      metric: "C-Level Sparring"
    },
    {
      title: "Technologie + Management",
      description: "Seltene Kombination aus tiefer technischer Expertise und strategischem Management-Verständnis.",
      metric: "10+ Jahre kombinierte Erfahrung"
    },
    {
      title: "Internationale Reichweite",
      description: "Lokale Präsenz in Europa und etablierte Partnerschaften im Nahen Osten.",
      metric: "DACH + GCC Expertise"
    }
  ];

  const workingPrinciples = [
    {
      principle: "Verstehen vor Handeln",
      description: "Wir investieren Zeit in das Verständnis Ihrer Geschäftslogik, bevor wir technische Lösungen vorschlagen."
    },
    {
      principle: "Transparenz in allem",
      description: "Klare Kommunikation über Herausforderungen, Risiken und realistische Zeitpläne."
    },
    {
      principle: "Nachhaltigkeit im Fokus",
      description: "Lösungen, die nicht nur heute funktionieren, sondern auch in 5 Jahren noch Wert schaffen."
    },
    {
      principle: "Kulturelle Sensibilität",
      description: "Berücksichtigung lokaler Geschäftspraktiken und regulatorischer Besonderheiten."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section 
          className="py-24 relative"
          style={{
            backgroundImage: `url(${philosophyHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <a href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Zurück zur Startseite
              </a>
              
              <h1 className="text-5xl font-bold text-foreground mb-6">
                Unsere <span className="text-primary">Philosophie</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Warum RAELDATA nicht nur ein weiterer Beratungspartner ist, sondern die strategische Grundlage 
                für Ihren digitalen Erfolg.
              </p>
            </div>
          </div>
        </section>

        {/* Why We're Indispensable */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Warum wir <span className="text-primary">unverzichtbar</span> sind
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  In einer Welt voller Standardlösungen und oberflächlicher Beratung schaffen wir echten, 
                  messbaren und nachhaltigen Wert.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {uniqueFactors.map((factor, idx) => (
                  <div key={idx} className="glass-effect rounded-2xl p-8 hover-lift">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-foreground">{factor.title}</h3>
                      <div className="text-right">
                        <div className="text-sm text-primary font-bold">{factor.metric}</div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{factor.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Pillars */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Die vier <span className="text-primary">Säulen</span> unserer Philosophie
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Unsere Arbeitsweise basiert auf vier fundamentalen Prinzipien, die jeden unserer Projekte prägen.
                </p>
              </div>

              <div className="space-y-12">
                {philosophyPillars.map((pillar, idx) => (
                  <div key={idx} className={`flex flex-col lg:flex-row items-center gap-8 ${
                    idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}>
                    <div className="lg:w-1/2">
                      <div className="glass-effect rounded-2xl p-8">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                            <pillar.icon className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold text-foreground">{pillar.title}</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">{pillar.description}</p>
                        <div className="space-y-3">
                          {pillar.details.map((detail, detailIdx) => (
                            <div key={detailIdx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                              <span className="text-sm text-muted-foreground">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-1/2">
                      <div className="aspect-square bg-gradient-card rounded-2xl flex items-center justify-center">
                        <pillar.icon className="w-24 h-24 text-primary opacity-20" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Wie wir <span className="text-primary">arbeiten</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Unsere Arbeitsweise ist geprägt von Prinzipien, die sich in über einem Jahrzehnt 
                  internationaler Projekte bewährt haben.
                </p>
              </div>

              <div className="space-y-8">
                {workingPrinciples.map((item, idx) => (
                  <div key={idx} className="glass-effect rounded-xl p-6 hover-lift">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">{idx + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{item.principle}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Goals */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-foreground mb-8">
                Unser <span className="text-primary">Ziel</span>
              </h2>
              <div className="glass-effect rounded-2xl p-12">
                <p className="text-xl text-foreground leading-relaxed mb-8">
                  "Wir wollen nicht der größte Beratungspartner sein – wir wollen der <span className="text-primary font-bold">entscheidende</span> sein."
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Unser Erfolg misst sich nicht an der Anzahl unserer Projekte, sondern an der strategischen Wirkung, 
                  die wir für unsere Kunden erzielen. Wir schaffen Grundlagen, auf denen Unternehmen jahrelang aufbauen können.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary">10+</div>
                    <div className="text-sm text-muted-foreground">Jahre Expertise</div>
                  </div>
                  <div className="text-center">
                    <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary">3</div>
                    <div className="text-sm text-muted-foreground">Kontinente</div>
                  </div>
                  <div className="text-center">
                    <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Individuelle Lösungen</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="kontakt" className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Bereit für echte <span className="text-primary">Transformation</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Lassen Sie uns in einem strategischen Erstgespräch erkunden, wie unsere Philosophie 
                Ihr Unternehmen voranbringen kann.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Philosophy;
