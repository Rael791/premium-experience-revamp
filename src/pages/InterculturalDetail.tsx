import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Globe2, CheckCircle, TrendingUp, Users, Zap, Shield, Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import interculturalHero from "@/assets/intercultural-hero.jpg";
import interculturalMeeting from "@/assets/intercultural-meeting.jpg";

const InterculturalDetail = () => {
  const services = [
    {
      name: "Cross-Cultural Process Design",
      description: "Geschäftsprozesse, die in jeder Kultur funktionieren und Akzeptanz finden",
      duration: "6-12 Wochen",
      investment: "€20,000 - €45,000",
      icon: Globe2,
      what: "Entwicklung kultursensibler Geschäftsprozesse, die sowohl lokale Anforderungen als auch globale Standards erfüllen.",
      why: "78% der globalen Projektfehler entstehen durch kulturelle Missverständnisse und unpassende Prozessdesigns.",
      how: "Cultural Intelligence Framework: Kulturanalyse → Stakeholder Mapping → Process Localization → Pilot Testing → Rollout.",
      whatHappens: [
        "95% Akzeptanz neuer Prozesse in allen Kulturen",
        "Nahtlose DACH ↔ GCC Integration",
        "Reduzierte Implementierungszeit um 60%",
        "Höhere Mitarbeiterzufriedenheit und Compliance"
      ],
      whatNotHappens: [
        "Keine 'One-Size-Fits-All' Prozesse",
        "Keine kulturellen Konflikte oder Widerstände",
        "Kein Verlust lokaler Expertise und Autonomie"
      ],
      kpis: [
        "95% kulturelle Akzeptanzrate",
        "60% schnellere Prozessimplementierung",
        "40% weniger kulturbedingte Konflikte",
        "25% höhere Projektserfolgsrate"
      ],
      deliverables: [
        "Cultural Assessment Report",
        "Localized Process Design",
        "Stakeholder Communication Framework",
        "Cultural Training Materials",
        "Implementation Roadmap",
        "Success Metrics & Monitoring"
      ]
    },
    {
      name: "DACH ↔ GCC Project Management",
      description: "Professionelles Management komplexer Projekte zwischen DACH und GCC Regionen",
      duration: "Projektabhängig", 
      investment: "€8,000 - €15,000/Monat",
      icon: Users,
      what: "End-to-End Projektmanagement für internationale Implementierungen mit Fokus auf kulturelle Sensibilität und lokale Expertise.",
      why: "Internationale Projekte haben 67% höhere Erfolgsraten mit kulturell erfahrenen Projektmanagern.",
      how: "Agile International PM: Cultural Kickoff → Bi-Cultural Teams → Continuous Cultural Alignment → Localized Change Management.",
      whatHappens: [
        "Termingerechte Delivery trotz kultureller Komplexität",
        "Effektive Kommunikation über Zeitzonen hinweg",
        "Lokale Team-Empowerment und Ownership",
        "Sustainable Knowledge Transfer"
      ],
      whatNotHappens: [
        "Keine kulturellen Missverständnisse oder Konflikte",
        "Kein micromanagement aus der Zentrale",
        "Keine 'Lost in Translation' Probleme"
      ],
      kpis: [
        "100% On-Time Delivery Record",
        "90% Stakeholder Satisfaction",
        "< 5% kulturbedingte Escalations",
        "85% lokale Team Retention"
      ],
      deliverables: [
        "Bi-Cultural Project Setup",
        "Communication Protocols",
        "Regular Cultural Health Checks",
        "Localized Training Programs",
        "Knowledge Transfer Documentation",
        "Post-Project Cultural Assessment"
      ]
    },
    {
      name: "Cultural Compliance & Governance",
      description: "Sicherstellung rechtlicher und kultureller Compliance in internationalen Operationen",
      duration: "4-8 Wochen",
      investment: "€15,000 - €35,000", 
      icon: Shield,
      what: "Entwicklung umfassender Compliance-Frameworks, die sowohl rechtliche als auch kulturelle Anforderungen berücksichtigen.",
      why: "Non-Compliance Kosten betragen durchschnittlich €14.8M pro Unternehmen jährlich, davon 40% kulturbedingt.",
      how: "Compliance-by-Design: Legal Mapping → Cultural Assessment → Framework Development → Implementation → Monitoring.",
      whatHappens: [
        "100% rechtliche und kulturelle Compliance",
        "Automated Compliance Monitoring",
        "Reduced regulatory Risk",
        "Enhanced Stakeholder Trust"
      ],
      whatNotHappens: [
        "Keine kostspieligen Compliance-Verletzungen",
        "Keine kulturellen Fettnäpfchen oder PR-Krisen",
        "Keine aufwendigen Ad-hoc Compliance-Fixes"
      ],
      kpis: [
        "100% Compliance Rate",
        "Zero regulatory Violations",
        "90% reduction in Compliance Costs",
        "< 24h Issue Resolution Time"
      ],
      deliverables: [
        "Cultural Compliance Framework",
        "Automated Monitoring System",
        "Risk Assessment Matrix",
        "Escalation Procedures",
        "Training & Awareness Programs",
        "Regular Compliance Reports"
      ]
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
            backgroundImage: `url(${interculturalHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <Link to="/#expertise" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Zurück zur Expertise
              </Link>
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mr-6">
                  <Globe2 className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-2">Interkulturelle Integration Services</h1>
                  <p className="text-xl text-muted-foreground">Globale Projekte mit kultureller Intelligenz zum Erfolg führen</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Wenn Technologie auf Kultur trifft, entstehen die komplexesten Herausforderungen. Wir überbrücken 
                diese Lücken mit bewährter kultureller Intelligenz und tiefem Verständnis für DACH und GCC Märkte.
              </p>
            </div>
          </div>
        </section>

        {/* Why Intercultural Integration Matters */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Cultural Intelligence als Business Advantage</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  In einer globalisierten Welt ist kulturelle Kompetenz nicht nur 'Nice-to-Have' – 
                  sie ist der entscheidende Faktor für nachhaltigen internationalen Erfolg.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Target, title: "78%", subtitle: "Projektfehler durch kulturelle Missverständnisse", color: "destructive" },
                  { icon: TrendingUp, title: "€14.8M", subtitle: "Durchschnittliche jährliche Cultural Compliance Kosten", color: "warning" },
                  { icon: Users, title: "67%", subtitle: "Höhere Erfolgsrate mit kulturell erfahrenen Teams", color: "success" },
                  { icon: Zap, title: "3.2x", subtitle: "ROI bei professionellem Cultural Management", color: "secondary" }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-card rounded-xl p-6 text-center hover-lift border border-border">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-${stat.color}/10 flex items-center justify-center`}>
                      <stat.icon className={`w-6 h-6 text-${stat.color}`} />
                    </div>
                    <div className={`text-2xl font-bold text-${stat.color} mb-2`}>{stat.title}</div>
                    <div className="text-sm text-muted-foreground">{stat.subtitle}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">Interkulturelle Integration Services im Detail</h2>
              
              <div className="space-y-16">
                {services.map((service, idx) => (
                  <div key={idx} className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20 p-8 hover-lift">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                      {/* Service Header */}
                      <div className="lg:col-span-2">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mr-6">
                            <service.icon className="w-8 h-8 text-secondary" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-foreground mb-2">{service.name}</h3>
                            <p className="text-muted-foreground">{service.description}</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          <div className="bg-card/50 rounded-lg p-4">
                            <div className="text-sm text-muted-foreground">Projektdauer</div>
                            <div className="font-semibold text-foreground">{service.duration}</div>
                          </div>
                          <div className="bg-card/50 rounded-lg p-4">
                            <div className="text-sm text-muted-foreground">Investment</div>
                            <div className="font-semibold text-foreground">{service.investment}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* What, Why, How */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                      <div className="bg-card/30 rounded-xl p-6">
                        <h4 className="font-bold text-foreground mb-3 flex items-center">
                          <span className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center text-secondary text-sm mr-2">?</span>
                          Was
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{service.what}</p>
                      </div>
                      <div className="bg-card/30 rounded-xl p-6">
                        <h4 className="font-bold text-foreground mb-3 flex items-center">
                          <span className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center text-secondary text-sm mr-2">!</span>
                          Warum
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{service.why}</p>
                      </div>
                      <div className="bg-card/30 rounded-xl p-6">
                        <h4 className="font-bold text-foreground mb-3 flex items-center">
                          <span className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center text-secondary text-sm mr-2">→</span>
                          Wie
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{service.how}</p>
                      </div>
                    </div>

                    {/* Results Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                      {/* What Happens */}
                      <div className="bg-card/30 rounded-xl p-6">
                        <h4 className="font-bold text-foreground mb-4 flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          Was passiert
                        </h4>
                        <div className="space-y-3">
                          {service.whatHappens.map((item, itemIdx) => (
                            <div key={itemIdx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-2"></div>
                              <span className="text-sm text-muted-foreground">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* What Doesn't Happen */}
                      <div className="bg-card/30 rounded-xl p-6">
                        <h4 className="font-bold text-foreground mb-4 flex items-center">
                          <Shield className="w-5 h-5 text-secondary mr-2" />
                          Was nicht passiert
                        </h4>
                        <div className="space-y-3">
                          {service.whatNotHappens.map((item, itemIdx) => (
                            <div key={itemIdx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></div>
                              <span className="text-sm text-muted-foreground">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* KPIs and Deliverables */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* KPIs */}
                      <div className="bg-card/30 rounded-xl p-6">
                        <h4 className="font-bold text-foreground mb-4 flex items-center">
                          <TrendingUp className="w-5 h-5 text-secondary mr-2" />
                          Messbare KPIs
                        </h4>
                        <div className="space-y-3">
                          {service.kpis.map((kpi, kpiIdx) => (
                            <div key={kpiIdx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></div>
                              <span className="text-sm text-muted-foreground">{kpi}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Deliverables */}
                      <div className="bg-card/30 rounded-xl p-6">
                        <h4 className="font-bold text-foreground mb-4 flex items-center">
                          <Globe2 className="w-5 h-5 text-secondary mr-2" />
                          Deliverables
                        </h4>
                        <div className="space-y-3">
                          {service.deliverables.map((deliverable, delIdx) => (
                            <div key={delIdx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></div>
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

        {/* Success Image */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden">
                <img 
                  src={interculturalMeeting} 
                  alt="Intercultural Success Story - International team collaboration"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60 flex items-center">
                  <div className="p-12">
                    <h3 className="text-3xl font-bold text-foreground mb-4">Ready für Global Excellence?</h3>
                    <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
                      Machen Sie kulturelle Vielfalt zu Ihrem Wettbewerbsvorteil. Lassen Sie uns besprechen, 
                      wie wir Ihre internationalen Projekte zum Erfolg führen.
                    </p>
                    <Button variant="hero" size="xl" asChild>
                      <a href="/#kontakt">Cultural Intelligence Beratung vereinbaren</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InterculturalDetail;