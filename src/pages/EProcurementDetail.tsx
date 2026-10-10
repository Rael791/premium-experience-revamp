import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingCart, CheckCircle, TrendingUp, Users, Zap, Shield, Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import procurementHero from "@/assets/procurement-hero.jpg";
import eprocurementDashboard from "@/assets/eprocurement-dashboard.jpg";
import { t } from "@/i18n";

const EProcurementDetail = () => {
  const services = t({
    de: [
    {
      name: "Procurement Process Optimization",
      description: "End-to-End Optimierung Ihrer Beschaffungsprozesse für maximale Effizienz",
      icon: ShoppingCart,
      what: "Komplette Neugestaltung Ihrer Procurement-Workflows mit Fokus auf Automatisierung, Compliance und User Experience.",
      why: "Manuelle Beschaffungsprozesse kosten durchschnittlich €180 pro Bestellung und dauern 12-15 Tage.",
      how: "Design Thinking Approach: Stakeholder Interviews → Process Mapping → Workflow Design → Prototyping → Implementation.",
      whatHappens: [
        "80% Reduktion der Beschaffungszeit",
        "Vollautomatisierte Genehmigungsworkflows",
        "Echtzeit-Transparenz für alle Stakeholder",
        "Integration in bestehende ERP-Systeme"
      ],
      whatNotHappens: [
        "Keine komplexen Systeme, die niemand versteht",
        "Kein Verlust der fachlichen Kontrolle",
        "Keine Vendor-abhängigen Insellösungen"
      ],
      kpis: [
        "80% schnellere Beschaffungsprozesse",
        "95% automatische Genehmigungen",
        "60% weniger manuelle Tätigkeiten",
        "99% Compliance-Rate"
      ],
      deliverables: [
        "Current State Process Analysis",
        "Future State Process Design",
        "Workflow Automation Setup",
        "User Training & Change Management",
        "Integration Testing & Go-Live Support",
        "Performance Monitoring Dashboard"
      ]
    },
    {
      name: "Supplier Portal & Self-Service",
      description: "Moderne Lieferantenportale für nahtlose B2B-Zusammenarbeit",
      icon: Users,
      what: "Implementierung intuitiver Self-Service-Portale für Lieferanten mit automatisierten Onboarding- und Kollaborationsprozessen.",
      why: "73% der Lieferanten bevorzugen Self-Service-Optionen und sind bereit, 15% mehr für bessere digitale Erfahrungen zu zahlen.",
      how: "User-Centered Design: Supplier Journey Mapping → Portal Design → API Development → Testing → Phased Rollout.",
      whatHappens: [
        "Automatisiertes Supplier Onboarding in 24h",
        "Self-Service für 90% aller Lieferantenanfragen",
        "Echtzeit-Kollaboration und Dokumentenaustausch",
        "Automated Compliance und Zertifizierungsmanagement"
      ],
      whatNotHappens: [
        "Keine komplizierten Registrierungsprozesse",
        "Kein manueller Support für Standardanfragen",
        "Keine proprietären Datenformate oder Schnittstellen"
      ],
      kpis: [
        "24h Onboarding-Zeit für neue Lieferanten",
        "90% Self-Service-Rate",
        "75% Reduktion der Support-Tickets",
        "50% schnellere Vertragsabwicklung"
      ],
      deliverables: [
        "Supplier Portal Platform Setup",
        "Automated Onboarding Workflows",
        "Document Management System",
        "API Integration Framework",
        "Mobile-Responsive Design",
        "24/7 Support & Monitoring"
      ]
    },
    {
      name: "Spend Analytics & Intelligence",
      description: "Datengetriebene Beschaffungsstrategien durch Advanced Analytics",
      icon: TrendingUp,
      what: "Implementierung einer umfassenden Spend Analytics Plattform für strategische Beschaffungsentscheidungen und Kostenstimierung.",
      why: "Unternehmen mit Advanced Spend Analytics erreichen 12% bessere Kostenperformance und 15% höhere Lieferantenperformance.",
      how: "Data-Driven Approach: Data Assessment → Analytics Platform Setup → Dashboard Development → Insight Generation → Action Planning.",
      whatHappens: [
        "360° Transparenz über alle Beschaffungskosten",
        "Predictive Analytics für Kostenoptimierung",
        "Automated Risk Monitoring & Alerting",
        "Strategic Sourcing Recommendations"
      ],
      whatNotHappens: [
        "Keine statischen Reports ohne Actionable Insights",
        "Kein Data Silos zwischen Abteilungen",
        "Keine Black-Box Analytics ohne Nachvollziehbarkeit"
      ],
      kpis: [
        "12% Kosteneinsparung im ersten Jahr",
        "95% Datengenauigkeit",
        "< 2 Sekunden Dashboard-Ladezeiten",
        "100% Coverage aller Spend-Kategorien"
      ],
      deliverables: [
        "Spend Analytics Platform Setup",
        "Interactive Executive Dashboards",
        "Automated Report Generation",
        "Predictive Models & Algorithms",
        "User Training & Best Practices",
        "Continuous Improvement Process"
      ]
    }
  ],
    fr: [
    {
      name: "Optimisation des processus achats",
      description: "Optimisation de bout en bout de vos processus achats pour une efficacité maximale",
      icon: ShoppingCart,
      what: "Refonte complète de vos workflows achats, axée sur l'automatisation, la conformité et l'expérience utilisateur.",
      why: "Les processus d'achat manuels coûtent en moyenne 180 € par commande et prennent 12 à 15 jours.",
      how: "Approche Design Thinking : entretiens avec les parties prenantes → cartographie des processus → conception des workflows → prototypage → déploiement.",
      whatHappens: [
        "80 % de réduction du délai d'achat",
        "Circuits de validation entièrement automatisés",
        "Transparence en temps réel pour toutes les parties prenantes",
        "Intégration aux ERP existants"
      ],
      whatNotHappens: [
        "Pas de systèmes complexes que personne ne comprend",
        "Pas de perte de contrôle métier",
        "Pas de solutions isolées dépendantes d'un fournisseur"
      ],
      kpis: [
        "Processus d'achat 80 % plus rapides",
        "95 % de validations automatiques",
        "60 % de tâches manuelles en moins",
        "99 % de taux de conformité"
      ],
      deliverables: [
        "Analyse des processus actuels",
        "Conception des processus cibles",
        "Mise en place de l'automatisation des workflows",
        "Formation des utilisateurs & conduite du changement",
        "Tests d'intégration & accompagnement au démarrage",
        "Tableau de bord de suivi des performances"
      ]
    },
    {
      name: "Portail fournisseurs & libre-service",
      description: "Des portails fournisseurs modernes pour une collaboration B2B fluide",
      icon: Users,
      what: "Mise en place de portails libre-service intuitifs pour les fournisseurs, avec des processus d'intégration et de collaboration automatisés.",
      why: "73 % des fournisseurs préfèrent les options en libre-service et sont prêts à payer 15 % de plus pour une meilleure expérience digitale.",
      how: "Conception centrée utilisateur : parcours fournisseur → conception du portail → développement des API → tests → déploiement progressif.",
      whatHappens: [
        "Intégration automatisée des fournisseurs en 24 h",
        "Libre-service pour 90 % des demandes fournisseurs",
        "Collaboration et échange de documents en temps réel",
        "Gestion automatisée de la conformité et des certifications"
      ],
      whatNotHappens: [
        "Pas de processus d'inscription compliqués",
        "Pas de support manuel pour les demandes standard",
        "Pas de formats de données ou d'interfaces propriétaires"
      ],
      kpis: [
        "24 h pour intégrer un nouveau fournisseur",
        "90 % de taux de libre-service",
        "75 % de tickets de support en moins",
        "Traitement des contrats 50 % plus rapide"
      ],
      deliverables: [
        "Mise en place de la plateforme portail fournisseurs",
        "Workflows d'intégration automatisés",
        "Système de gestion documentaire",
        "Cadre d'intégration API",
        "Design adapté au mobile",
        "Support & monitoring"
      ]
    },
    {
      name: "Analyse des dépenses & intelligence achats",
      description: "Des stratégies achats pilotées par les données grâce à l'analytique avancée",
      icon: TrendingUp,
      what: "Mise en place d'une plateforme complète d'analyse des dépenses pour des décisions d'achat stratégiques et l'optimisation des coûts.",
      why: "Les entreprises dotées d'une analyse avancée des dépenses obtiennent 12 % de meilleure performance coûts et 15 % de meilleure performance fournisseurs.",
      how: "Approche orientée données : évaluation des données → plateforme analytique → tableaux de bord → génération d'insights → plan d'action.",
      whatHappens: [
        "Transparence à 360° sur toutes les dépenses",
        "Analytique prédictive pour optimiser les coûts",
        "Surveillance des risques & alertes automatisées",
        "Recommandations de sourcing stratégique"
      ],
      whatNotHappens: [
        "Pas de rapports statiques sans actions concrètes",
        "Pas de silos de données entre services",
        "Pas d'analyses « boîte noire » sans traçabilité"
      ],
      kpis: [
        "12 % d'économies dès la première année",
        "95 % de précision des données",
        "< 2 secondes de chargement des tableaux de bord",
        "100 % des catégories de dépenses couvertes"
      ],
      deliverables: [
        "Mise en place de la plateforme d'analyse des dépenses",
        "Tableaux de bord interactifs pour la direction",
        "Génération automatisée de rapports",
        "Modèles prédictifs",
        "Formation des utilisateurs & bonnes pratiques",
        "Processus d'amélioration continue"
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
            backgroundImage: `url(${procurementHero})`,
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
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mr-6">
                  <ShoppingCart className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-2">{t({ de: "eProcurement Mastery Services", fr: "Services eProcurement Mastery" })}</h1>
                  <p className="text-xl text-muted-foreground">{t({ de: "Strategische Transformation Ihrer Beschaffungsprozesse", fr: "La transformation stratégique de vos processus achats" })}</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t({ de: "Von operativer Effizienz zur strategischen Wertschöpfung – wir transformieren Ihre Beschaffung in einen echten Competitive Advantage durch Digitalisierung und Automatisierung.", fr: "De l'efficacité opérationnelle à la création de valeur stratégique – nous faisons de vos achats un véritable avantage concurrentiel grâce à la digitalisation et à l'automatisation." })}
              </p>
            </div>
          </div>
        </section>

        {/* Why eProcurement Mastery Matters */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">{t({ de: "Der Strategic Value von eProcurement Excellence", fr: "La valeur stratégique de l'excellence eProcurement" })}</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {t({ de: "Moderne Beschaffung ist weit mehr als Kosteneinsparung – sie ist ein strategischer Hebel für Wachstum, Innovation und Wettbewerbsvorteile in globalen Märkten.", fr: "Les achats modernes vont bien au-delà de la réduction des coûts – ils sont un levier stratégique de croissance, d'innovation et de compétitivité sur les marchés mondiaux." })}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Target, title: t({ de: "€890K", fr: "890 k€" }), subtitle: t({ de: "Durchschnittliche jährliche Einsparungen", fr: "d'économies annuelles en moyenne" }), color: "primary" },
                  { icon: TrendingUp, title: t({ de: "40%", fr: "40 %" }), subtitle: t({ de: "Zeit-Reduktion bei Beschaffungsprozessen", fr: "de temps gagné sur les processus achats" }), color: "accent" },
                  { icon: Users, title: t({ de: "85%", fr: "85 %" }), subtitle: t({ de: "Lieferanten bevorzugen digitale Prozesse", fr: "des fournisseurs préfèrent les processus digitaux" }), color: "secondary" },
                  { icon: Zap, title: t({ de: "12%", fr: "12 %" }), subtitle: t({ de: "EBIT-Verbesserung durch optimierte Beschaffung", fr: "d'amélioration de l'EBIT grâce à des achats optimisés" }), color: "primary" }
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
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">{t({ de: "eProcurement Mastery Services im Detail", fr: "Nos services eProcurement en détail" })}</h2>
              
              <div className="space-y-16">
                {services.map((service, idx) => (
                  <div key={idx} className={`group relative overflow-hidden rounded-3xl ${
                    idx % 3 === 0 ? 'bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20' :
                    idx % 3 === 1 ? 'bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20' :
                    'bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20'
                  } p-8 hover-lift`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                      {/* Service Header */}
                      <div className="lg:col-span-2">
                        <div className="flex items-center mb-6">
                          <div className={`w-16 h-16 ${
                            idx % 3 === 0 ? 'bg-accent/10' :
                            idx % 3 === 1 ? 'bg-secondary/10' : 'bg-primary/10'
                          } rounded-2xl flex items-center justify-center mr-6`}>
                            <service.icon className={`w-8 h-8 ${
                              idx % 3 === 0 ? 'text-accent' :
                              idx % 3 === 1 ? 'text-secondary' : 'text-primary'
                            }`} />
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
                          <span className={`w-6 h-6 ${
                            idx % 3 === 0 ? 'bg-accent/20 text-accent' :
                            idx % 3 === 1 ? 'bg-secondary/20 text-secondary' : 'bg-primary/20 text-primary'
                          } rounded-full flex items-center justify-center text-sm mr-2`}>?</span>
                          {t({ de: "Was", fr: "Quoi" })}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{service.what}</p>
                      </div>
                      <div className="bg-card/30 rounded-xl p-6">
                        <h4 className="font-bold text-foreground mb-3 flex items-center">
                          <span className={`w-6 h-6 ${
                            idx % 3 === 0 ? 'bg-accent/20 text-accent' :
                            idx % 3 === 1 ? 'bg-secondary/20 text-secondary' : 'bg-primary/20 text-primary'
                          } rounded-full flex items-center justify-center text-sm mr-2`}>!</span>
                          {t({ de: "Warum", fr: "Pourquoi" })}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{service.why}</p>
                      </div>
                      <div className="bg-card/30 rounded-xl p-6">
                        <h4 className="font-bold text-foreground mb-3 flex items-center">
                          <span className={`w-6 h-6 ${
                            idx % 3 === 0 ? 'bg-accent/20 text-accent' :
                            idx % 3 === 1 ? 'bg-secondary/20 text-secondary' : 'bg-primary/20 text-primary'
                          } rounded-full flex items-center justify-center text-sm mr-2`}>→</span>
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
                          <Shield className={`w-5 h-5 mr-2 ${
                            idx % 3 === 0 ? 'text-accent' :
                            idx % 3 === 1 ? 'text-secondary' : 'text-primary'
                          }`} />
                          {t({ de: "Was nicht passiert", fr: "Ce qui n'arrivera pas" })}
                        </h4>
                        <div className="space-y-3">
                          {service.whatNotHappens.map((item, itemIdx) => (
                            <div key={itemIdx} className="flex items-start space-x-3">
                              <div className={`w-2 h-2 rounded-full flex-shrink-0 mt-2 ${
                                idx % 3 === 0 ? 'bg-accent' :
                                idx % 3 === 1 ? 'bg-secondary' : 'bg-primary'
                              }`}></div>
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
                          <TrendingUp className={`w-5 h-5 mr-2 ${
                            idx % 3 === 0 ? 'text-accent' :
                            idx % 3 === 1 ? 'text-secondary' : 'text-primary'
                          }`} />
                          {t({ de: "Messbare KPIs", fr: "KPI mesurables" })}
                        </h4>
                        <div className="space-y-3">
                          {service.kpis.map((kpi, kpiIdx) => (
                            <div key={kpiIdx} className="flex items-start space-x-3">
                              <div className={`w-2 h-2 rounded-full flex-shrink-0 mt-2 ${
                                idx % 3 === 0 ? 'bg-accent' :
                                idx % 3 === 1 ? 'bg-secondary' : 'bg-primary'
                              }`}></div>
                              <span className="text-sm text-muted-foreground">{kpi}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Deliverables */}
                      <div className="bg-card/30 rounded-xl p-6">
                        <h4 className="font-bold text-foreground mb-4 flex items-center">
                          <service.icon className={`w-5 h-5 mr-2 ${
                            idx % 3 === 0 ? 'text-accent' :
                            idx % 3 === 1 ? 'text-secondary' : 'text-primary'
                          }`} />
                          {t({ de: "Deliverables", fr: "Livrables" })}
                        </h4>
                        <div className="space-y-3">
                          {service.deliverables.map((deliverable, delIdx) => (
                            <div key={delIdx} className="flex items-start space-x-3">
                              <div className={`w-2 h-2 rounded-full flex-shrink-0 mt-2 ${
                                idx % 3 === 0 ? 'bg-accent' :
                                idx % 3 === 1 ? 'bg-secondary' : 'bg-primary'
                              }`}></div>
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
                  src={eprocurementDashboard} 
                  alt={t({ de: "Team analysiert Beschaffungsdaten", fr: "Équipe analysant des données achats" })}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60 flex items-center">
                  <div className="p-12">
                    <h3 className="text-3xl font-bold text-foreground mb-4">{t({ de: "Ready für eProcurement Excellence?", fr: "Prêt pour l'excellence eProcurement ?" })}</h3>
                    <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
                      {t({ de: "Transformieren Sie Ihre Beschaffung von einem Kostenfaktor zu einem strategischen Wettbewerbsvorteil. Lassen Sie uns Ihre Procurement-Vision besprechen.", fr: "Faites de vos achats non plus un centre de coûts, mais un avantage concurrentiel stratégique. Échangeons sur votre vision achats." })}
                    </p>
                    <Button variant="hero" size="xl" asChild>
                      <a href="/#kontakt">{t({ de: "Procurement Strategie-Gespräch vereinbaren", fr: "Planifier un entretien stratégique achats" })}</a>
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

export default EProcurementDetail;