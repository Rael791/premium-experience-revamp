import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Database, CheckCircle, TrendingUp, Users, Zap, Shield, Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ediHero from "@/assets/edi-hero.jpg";
import ediSystems from "@/assets/edi-systems.jpg";
import { t } from "@/i18n";

const EDIExcellenceDetail = () => {
  const services = t({
    de: [
    {
      name: "EDI Architektur Assessment",
      description: "Umfassende Bewertung Ihrer EDI-Infrastruktur für strategische Entscheidungen",
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
  ],
    fr: [
    {
      name: "Audit d'architecture EDI",
      description: "Évaluation complète de votre infrastructure EDI pour des décisions stratégiques",
      icon: Database,
      what: "Analyse complète de votre paysage EDI existant, axée sur l'évolutivité, la performance et la pérennité.",
      why: "90 % des entreprises présentent des inefficacités cachées dans leur infrastructure EDI, pouvant coûter des millions.",
      how: "Méthodologie structurée en 4 phases : Découverte → Analyse → Conception → Feuille de route, avec des bonnes pratiques documentées.",
      whatHappens: [
        "Réduction des coûts de transaction EDI de 30 à 50 %",
        "Élimination des pannes et des pertes de données",
        "Architecture évolutive pour une croissance x10",
        "Monitoring et alertes automatisés"
      ],
      whatNotHappens: [
        "Pas de solutions rapides sans vision stratégique",
        "Pas de dépendance fournisseur ni de technologies propriétaires",
        "Pas d'implémentations « boîte noire » non documentées"
      ],
      kpis: [
        "99,9 % de disponibilité des systèmes EDI",
        "< 2 secondes de temps de transaction",
        "50 % de réduction des coûts d'exploitation",
        "100 % de conformité aux standards du secteur"
      ],
      deliverables: [
        "Rapport d'état des lieux détaillé",
        "Plan d'architecture technique",
        "Calcul du ROI et business case",
        "Feuille de route de transformation sur 3 ans",
        "Recommandations technologiques indépendantes",
        "Analyse des risques & plan d'atténuation"
      ]
    },
    {
      name: "Mise en place d'un moteur de règles métier",
      description: "Automatisation intelligente de la validation des données et de la logique métier",
      icon: Zap,
      what: "Mise en place d'un moteur de règles métier robuste pour automatiser les décisions et le traitement des données.",
      why: "La validation manuelle des données coûte en moyenne 40 heures par semaine et entraîne un taux d'erreur de 15 %.",
      how: "Développement agile avec revues hebdomadaires : Exigences → Conception → Développement → Tests → Mise en production.",
      whatHappens: [
        "95 % d'automatisation de la validation des données",
        "Traitement des règles métier en temps réel",
        "Ajustements dynamiques sans arrêt des systèmes",
        "Pistes d'audit complètes pour la conformité"
      ],
      whatNotHappens: [
        "Pas de systèmes de règles rigides et difficiles à modifier",
        "Pas de perte de contrôle métier au profit de l'IT",
        "Pas de baisse de performance due au traitement des règles"
      ],
      kpis: [
        "95 % de réduction de la validation manuelle",
        "< 100 ms de temps de traitement des règles",
        "99,8 % de précision des règles",
        "< 4 heures pour modifier une règle"
      ],
      deliverables: [
        "Mise en place du cadre de règles métier",
        "Éditeur de règles pour les équipes métier",
        "Tableau de bord de suivi des performances",
        "Intégration aux systèmes EDI existants",
        "Formation des utilisateurs & documentation",
        "Support pendant les 3 premiers mois"
      ]
    },
    {
      name: "Migration & intégration EDI",
      description: "Migration fluide vers des plateformes EDI modernes, sans interruption d'activité",
      icon: Shield,
      what: "Migration sans interruption des systèmes EDI existants vers des plateformes modernes dans le cloud, avec une intégrité totale des données.",
      why: "Les systèmes EDI obsolètes provoquent 65 % de pannes en plus et des coûts de maintenance 3 fois plus élevés que les solutions modernes.",
      how: "Migration par phases : fonctionnement en parallèle → migration progressive → validation → bascule → décommissionnement.",
      whatHappens: [
        "Aucune interruption pendant toute la migration",
        "100 % d'intégrité et de cohérence des données",
        "Architecture moderne, native cloud",
        "Performance et évolutivité nettement améliorées"
      ],
      whatNotHappens: [
        "Pas d'interruption d'activité ni de perte de données",
        "Pas de dépendance à des systèmes propriétaires",
        "Pas d'approche « tout remplacer » hors de prix"
      ],
      kpis: [
        "0 interruption pendant la migration",
        "100 % d'intégrité des données",
        "60 % de performance en plus",
        "40 % d'économies dès la première année"
      ],
      deliverables: [
        "Plan de migration détaillé",
        "Mise en place & tests du système parallèle",
        "Scripts de migration automatisés",
        "Stratégies de retour arrière à chaque étape",
        "Optimisation des performances après migration",
        "3 mois de support renforcé (hypercare)"
      ]
    }
  ],
  });

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
                {t({ de: "Zurück zur Expertise", fr: "Retour à l'expertise" })}
              </Link>
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mr-6">
                  <Database className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-2">{t({ de: "EDI Excellence Services", fr: "Services EDI Excellence" })}</h1>
                  <p className="text-xl text-muted-foreground">{t({ de: "Strategische EDI-Transformation für nachhaltige Wettbewerbsvorteile", fr: "Une transformation EDI stratégique pour un avantage concurrentiel durable" })}</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t({ de: "Von Legacy-Modernisierung bis zur Implementierung zukunftsfähiger EDI-Architekturen – wir transformieren Ihre Datenlandschaft strategisch, skalierbar und nachhaltig.", fr: "De la modernisation des systèmes existants à la mise en place d'architectures EDI pérennes – nous transformons votre paysage de données de manière stratégique, évolutive et durable." })}
              </p>
            </div>
          </div>
        </section>

        {/* Why EDI Excellence Matters */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">{t({ de: "Warum EDI Excellence unverzichtbar ist", fr: "Pourquoi l'excellence EDI est indispensable" })}</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {t({ de: "In einer digitalisierten Welt ist EDI der unsichtbare Motor Ihres Geschäftserfolgs. Unzuverlässige Systeme kosten nicht nur Geld – sie gefährden Kundenbeziehungen und Wachstumschancen.", fr: "Dans un monde digitalisé, l'EDI est le moteur invisible de votre réussite. Des systèmes peu fiables ne coûtent pas seulement de l'argent – ils menacent vos relations clients et vos opportunités de croissance." })}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Target, title: t({ de: "€2.1M", fr: "2,1 M€" }), subtitle: t({ de: "Durchschnittliche jährliche Kosten von EDI-Ausfällen", fr: "Coût annuel moyen des pannes EDI" }), color: "destructive" },
                  { icon: TrendingUp, title: t({ de: "67%", fr: "67 %" }), subtitle: t({ de: "Unternehmen mit veralteten EDI-Systemen", fr: "des entreprises ont des systèmes EDI obsolètes" }), color: "warning" },
                  { icon: Users, title: t({ de: "89%", fr: "89 %" }), subtitle: t({ de: "Geschäftspartner bevorzugen automatisierte Prozesse", fr: "des partenaires préfèrent des processus automatisés" }), color: "success" },
                  { icon: Zap, title: "24/7", subtitle: t({ de: "Erwartete Verfügbarkeit moderner EDI-Systeme", fr: "Disponibilité attendue des systèmes EDI modernes" }), color: "primary" }
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
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">{t({ de: "Unsere EDI Excellence Services im Detail", fr: "Nos services EDI Excellence en détail" })}</h2>
              
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
                        
                      </div>
                    </div>

                    {/* What, Why, How */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                      <div className="bg-card/30 rounded-xl p-6">
                        <h4 className="font-bold text-foreground mb-3 flex items-center">
                          <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary text-sm mr-2">?</span>
                          {t({ de: "Was", fr: "Quoi" })}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{service.what}</p>
                      </div>
                      <div className="bg-card/30 rounded-xl p-6">
                        <h4 className="font-bold text-foreground mb-3 flex items-center">
                          <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary text-sm mr-2">!</span>
                          {t({ de: "Warum", fr: "Pourquoi" })}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{service.why}</p>
                      </div>
                      <div className="bg-card/30 rounded-xl p-6">
                        <h4 className="font-bold text-foreground mb-3 flex items-center">
                          <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary text-sm mr-2">→</span>
                          {t({ de: "Wie", fr: "Comment" })}
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
                          {t({ de: "Was passiert", fr: "Ce qui change" })}
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
                          {t({ de: "Was nicht passiert", fr: "Ce qui n'arrivera pas" })}
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
                          {t({ de: "Messbare KPIs", fr: "KPI mesurables" })}
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
                          {t({ de: "Deliverables", fr: "Livrables" })}
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
                  alt={t({ de: "Team analysiert eine EDI-Systemarchitektur", fr: "Équipe analysant une architecture de systèmes EDI" })}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60 flex items-center">
                  <div className="p-12">
                    <h3 className="text-3xl font-bold text-foreground mb-4">{t({ de: "Ready für EDI Excellence?", fr: "Prêt pour l'excellence EDI ?" })}</h3>
                    <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
                      {t({ de: "Transformieren Sie Ihre EDI-Landschaft mit bewährten Strategien und modernster Technologie. Lassen Sie uns Ihre spezifischen Herausforderungen besprechen.", fr: "Transformez votre paysage EDI grâce à des stratégies éprouvées et des technologies modernes. Échangeons sur vos enjeux spécifiques." })}
                    </p>
                    <Button variant="hero" size="xl" asChild>
                      <a href="/#kontakt">{t({ de: "EDI Strategie-Gespräch vereinbaren", fr: "Planifier un entretien stratégique EDI" })}</a>
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