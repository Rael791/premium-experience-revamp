import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Database, CheckCircle, TrendingUp, Users, Zap, Shield, Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ediHero from "@/assets/edi-hero.jpg";
import ediSystems from "@/assets/edi-systems.jpg";

const EDIExcellenceDetail = () => {
  const services = [
    {
      name: "EDI Architektur Assessment",
      description: "Umfassende Bewertung Ihrer EDI-Infrastruktur für strategische Entscheidungen",
      duration: "2-4 Wochen",
      investment: "€15,000 - €25,000",
      icon: Database,
      what: "Vollständige Analyse Ihrer bestehenden EDI-Landschaft mit Fokus auf Skalierbarkeit, Performance und Zukunftsfähigkeit.",
      why: "90% der Unternehmen haben versteckte Ineffizienzen in ihrer EDI-Infrastruktur, die Millionen kosten können.",
      how: "Strukturierte 4-Phasen-Methodik: Discovery → Analysis → Design → Roadmap mit dokumentierten Best Practices.",
      whatHappens: [
        "Reduzierung der EDI-Transaktionskosten um 30-50%",
        "Eliminierung von Systemausfällen und Datenverlust",
        "Skalierbare Architektur für 10x Wachstum",
        "Automatisierte Monitoring und Alerting"
      ],
      whatNotHappens: [
        "Keine Quick-Fix Lösungen ohne strategische Vision",
        "Kein Vendor-Lock-in oder proprietäre Technologien",
        "Keine undokumentierten 'Blackbox' Implementierungen"
      ],
      kpis: [
        "99.9% Verfügbarkeit der EDI-Systeme",
        "< 2 Sekunden Transaktionszeit",
        "50% Reduktion der Betriebskosten",
        "100% Compliance mit Industriestandards"
      ],
      deliverables: [
        "Current State Assessment Report (150+ Seiten)",
        "Technical Architecture Blueprint",
        "ROI-Kalkulation und Business Case",
        "3-Jahres Transformationsroadmap",
        "Vendor-neutrale Technologie-Empfehlungen",
        "Risk Assessment & Mitigation Plan"
      ]
    },
    {
      name: "Business Rules Engine Implementation",
      description: "Intelligente Automatisierung für Datenvalidierung und Geschäftslogik",
      duration: "6-12 Wochen", 
      investment: "€35,000 - €75,000",
      icon: Zap,
      what: "Implementierung einer robusten Business Rules Engine für automatisierte Entscheidungsfindung und Datenverarbeitung.",
      why: "Manuelle Datenvalidierung kostet durchschnittlich 40 Stunden pro Woche und führt zu 15% Fehlerquote.",
      how: "Agile Entwicklung mit wöchentlichen Reviews: Requirements → Design → Development → Testing → Go-Live.",
      whatHappens: [
        "95% Automatisierung der Datenvalidierung",
        "Echtzeitverarbeitung von Geschäftsregeln",
        "Dynamische Anpassung ohne Systemstillstand",
        "Vollständige Audit-Trails für Compliance"
      ],
      whatNotHappens: [
        "Keine starren, schwer änderbare Regelsysteme",
        "Kein Verlust der fachlichen Kontrolle an IT",
        "Keine Performance-Einbußen durch Regelverarbeitung"
      ],
      kpis: [
        "95% Reduktion manueller Validierung",
        "< 100ms Regelverarbeitungszeit",
        "99.8% Regelgenauigkeit",
        "< 4 Stunden für Regeländerungen"
      ],
      deliverables: [
        "Business Rules Framework Setup",
        "Regel-Editor für Fachabteilungen",
        "Performance Monitoring Dashboard",
        "Integration in bestehende EDI-Systeme",
        "User Training & Documentation",
        "24/7 Support Setup für erste 3 Monate"
      ]
    },
    {
      name: "EDI Migration & Integration",
      description: "Nahtlose Migration zu modernen EDI-Plattformen ohne Geschäftsunterbrechung",
      duration: "12-20 Wochen",
      investment: "€50,000 - €150,000", 
      icon: Shield,
      what: "Zero-Downtime Migration bestehender EDI-Systeme auf moderne, cloudbasierte Plattformen mit vollständiger Datenintegrität.",
      why: "Legacy EDI-Systeme verursachen 65% mehr Ausfälle und 3x höhere Wartungskosten als moderne Lösungen.",
      how: "Phased Migration Approach: Parallel-Betrieb → Schrittweise Migration → Validation → Cutover → Decommissioning.",
      whatHappens: [
        "Zero-Downtime während der gesamten Migration",
        "100% Datenintegrität und -konsistenz",
        "Moderne Cloud-Native Architektur",
        "Dramatisch verbesserte Performance und Skalierbarkeit"
      ],
      whatNotHappens: [
        "Keine Geschäftsunterbrechungen oder Datenverluste",
        "Kein Vendor-Lock-in in proprietäre Systeme",
        "Keine überteuerten 'Rip-and-Replace' Ansätze"
      ],
      kpis: [
        "0 Downtime während Migration",
        "100% Datenintegrität",
        "60% bessere Performance",
        "40% Kosteneinsparung in Jahr 1"
      ],
      deliverables: [
        "Detaillierter Migrationsplan",
        "Parallel-System Setup & Testing",
        "Automated Migration Scripts",
        "Rollback-Strategien für jeden Schritt",
        "Post-Migration Performance Optimization",
        "3-Monate Hypercare Support"
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
            backgroundImage: `url(${ediHero})`,
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
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mr-6">
                  <Database className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-2">EDI Excellence Services</h1>
                  <p className="text-xl text-muted-foreground">Strategische EDI-Transformation für nachhaltige Wettbewerbsvorteile</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Von Legacy-Modernisierung bis zur Implementierung zukunftsfähiger EDI-Architekturen – 
                wir transformieren Ihre Datenlandschaft strategisch, skalierbar und nachhaltig.
              </p>
            </div>
          </div>
        </section>

        {/* Why EDI Excellence Matters */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Warum EDI Excellence unverzichtbar ist</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  In einer digitalisierten Welt ist EDI der unsichtbare Motor Ihres Geschäftserfolgs. 
                  Unzuverlässige Systeme kosten nicht nur Geld – sie gefährden Kundenbeziehungen und Wachstumschancen.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Target, title: "€2.1M", subtitle: "Durchschnittliche jährliche Kosten von EDI-Ausfällen", color: "destructive" },
                  { icon: TrendingUp, title: "67%", subtitle: "Unternehmen mit veralteten EDI-Systemen", color: "warning" },
                  { icon: Users, title: "89%", subtitle: "Geschäftspartner bevorzugen automatisierte Prozesse", color: "success" },
                  { icon: Zap, title: "24/7", subtitle: "Erwartete Verfügbarkeit moderner EDI-Systeme", color: "primary" }
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
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">Unsere EDI Excellence Services im Detail</h2>
              
              <div className="space-y-16">
                {services.map((service, idx) => (
                  <div key={idx} className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 p-8 hover-lift">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                      {/* Service Header */}
                      <div className="lg:col-span-2">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mr-6">
                            <service.icon className="w-8 h-8 text-primary" />
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
                          <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary text-sm mr-2">?</span>
                          Was
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{service.what}</p>
                      </div>
                      <div className="bg-card/30 rounded-xl p-6">
                        <h4 className="font-bold text-foreground mb-3 flex items-center">
                          <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary text-sm mr-2">!</span>
                          Warum
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{service.why}</p>
                      </div>
                      <div className="bg-card/30 rounded-xl p-6">
                        <h4 className="font-bold text-foreground mb-3 flex items-center">
                          <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary text-sm mr-2">→</span>
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
                          <Shield className="w-5 h-5 text-primary mr-2" />
                          Was nicht passiert
                        </h4>
                        <div className="space-y-3">
                          {service.whatNotHappens.map((item, itemIdx) => (
                            <div key={itemIdx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
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
                          <TrendingUp className="w-5 h-5 text-primary mr-2" />
                          Messbare KPIs
                        </h4>
                        <div className="space-y-3">
                          {service.kpis.map((kpi, kpiIdx) => (
                            <div key={kpiIdx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 mt-2"></div>
                              <span className="text-sm text-muted-foreground">{kpi}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Deliverables */}
                      <div className="bg-card/30 rounded-xl p-6">
                        <h4 className="font-bold text-foreground mb-4 flex items-center">
                          <Database className="w-5 h-5 text-primary mr-2" />
                          Deliverables
                        </h4>
                        <div className="space-y-3">
                          {service.deliverables.map((deliverable, delIdx) => (
                            <div key={delIdx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
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
                  src={ediSystems} 
                  alt="EDI Excellence Success Story - Professional team analyzing system architecture"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60 flex items-center">
                  <div className="p-12">
                    <h3 className="text-3xl font-bold text-foreground mb-4">Ready für EDI Excellence?</h3>
                    <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
                      Transformieren Sie Ihre EDI-Landschaft mit bewährten Strategien und modernster Technologie. 
                      Lassen Sie uns Ihre spezifischen Herausforderungen besprechen.
                    </p>
                    <Button variant="hero" size="xl" asChild>
                      <a href="/#kontakt">EDI Strategie-Gespräch vereinbaren</a>
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

export default EDIExcellenceDetail;