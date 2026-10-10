import { Button } from "@/components/ui/button";
import { t } from "@/i18n";
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
      slug: "edi-excellence",
      category: "EDI Excellence",
      icon: Database,
      color: "primary",
      gradient: "from-primary/20 to-primary-glow/10",
      services: t({
        de: [
          "Systemarchitektur & Migrationsstrategien",
          "Datenqualitäts-Frameworks & Business Rules",
          "Monitoring, KPI-Visualisierung, Fehleranalyse",
          "Performance-Optimierung & Skalierung",
        ],
        fr: [
          "Architecture système & stratégies de migration",
          "Cadres de qualité des données & règles métier",
          "Monitoring, tableaux de bord KPI, analyse des erreurs",
          "Optimisation des performances & montée en charge",
        ],
      })
    },
    {
      slug: "eprocurement-mastery",
      category: "eProcurement Mastery",
      icon: ShoppingBag,
      color: "accent",
      gradient: "from-accent/20 to-accent/10",
      services: t({
        de: [
          "Prozessdesign & Automatisierung",
          "Lieferanten-Onboarding & Self-Service-Portale",
          "Compliance & eInvoicing-Strategien",
          "Spend-Analytics & Kostentransparenz",
        ],
        fr: [
          "Conception & automatisation des processus",
          "Intégration des fournisseurs & portails libre-service",
          "Conformité & stratégies de facturation électronique",
          "Analyse des dépenses & transparence des coûts",
        ],
      })
    },
    {
      slug: "interkulturelle-integration",
      category: t({ de: "Interkulturelle Integration", fr: "Intégration interculturelle" }),
      icon: Globe,
      color: "secondary",
      gradient: "from-secondary/20 to-secondary/10",
      services: t({
        de: [
          "Cross-Cultural Process Design",
          "Interkulturelles Stakeholder-Management",
          "Projektkommunikation zwischen DACH & GCC",
          "Change Management über Kulturgrenzen",
        ],
        fr: [
          "Conception de processus interculturels",
          "Gestion interculturelle des parties prenantes",
          "Communication de projet entre l'Europe et le Maroc",
          "Conduite du changement au-delà des frontières culturelles",
        ],
      })
    },
    {
      slug: "leadership-&-transformation",
      category: "Leadership & Transformation",
      icon: TrendingUp,
      color: "primary",
      gradient: "from-primary/20 to-primary-glow/10",
      services: t({
        de: [
          "Executive Sparring & Projektsteuerung",
          "Training für interne EDI-/eProcurement-Rollen",
          "Agile Methoden für Beschaffungs- und IT-Teams",
          "Digitale Transformation Roadmaps",
        ],
        fr: [
          "Accompagnement des dirigeants & pilotage de projets",
          "Formation des équipes EDI / eProcurement internes",
          "Méthodes agiles pour les équipes achats et IT",
          "Feuilles de route de transformation digitale",
        ],
      })
    }
  ];

  const highlights = [
    {
      icon: Shield,
      title: t({ de: "Compliance-First", fr: "Conformité d'abord" }),
      description: t({ de: "Alle Lösungen erfüllen höchste Compliance-Standards", fr: "Toutes nos solutions respectent les plus hauts standards de conformité" })
    },
    {
      icon: Zap,
      title: t({ de: "Agile Umsetzung", fr: "Mise en œuvre agile" }),
      description: t({ de: "Schnelle Iterationen, messbare Fortschritte", fr: "Itérations rapides, progrès mesurables" })
    },
    {
      icon: Users,
      title: t({ de: "Change Enablement", fr: "Conduite du changement" }),
      description: t({ de: "Befähigung Ihrer Teams für nachhaltigen Erfolg", fr: "Des équipes autonomes pour un succès durable" })
    },
    {
      icon: Target,
      title: t({ de: "ROI-Fokus", fr: "Orientation ROI" }),
      description: t({ de: "Messbare Geschäftsresultate von Tag 1", fr: "Des résultats mesurables dès le premier jour" })
    }
  ];

  return (
    <section id="leistungen" className="min-h-screen flex items-center py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="heading-section mb-6">
            {t({ de: "Unsere", fr: "Nos" })} <span className="text-primary">{t({ de: "Leistungen", fr: "services" })}</span>
          </h2>
          <p className="text-premium max-w-3xl mx-auto">
            {t({ de: "Umfassende Expertise in vier strategischen Bereichen. Jede Leistung designed für maximale Wirkung und nachhaltigen Erfolg.", fr: "Une expertise complète dans quatre domaines stratégiques. Chaque prestation est conçue pour un impact maximal et un succès durable." })}
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
                    <a href={`/services/${service.slug}`}>
                      {t({ de: "Detailberatung anfordern", fr: "Demander un conseil détaillé" })}
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
            {t({ de: "Warum unsere Leistungen anders sind", fr: "Pourquoi nos services sont différents" })}
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
            {t({ de: "Unser bewährter Prozess", fr: "Notre méthode éprouvée" })}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { step: "01", title: t({ de: "Strategische Analyse", fr: "Analyse stratégique" }), desc: t({ de: "Tiefgehende Bewertung Ihrer aktuellen Landschaft", fr: "Évaluation approfondie de votre environnement actuel" }) },
              { step: "02", title: t({ de: "Roadmap Design", fr: "Feuille de route" }), desc: t({ de: "Maßgeschneiderte Transformationsstrategie", fr: "Stratégie de transformation sur mesure" }) },
              { step: "03", title: t({ de: "Agile Umsetzung", fr: "Mise en œuvre agile" }), desc: t({ de: "Iterative Implementierung mit kontinuierlichem Feedback", fr: "Déploiement itératif avec retours continus" }) },
              { step: "04", title: t({ de: "Nachhaltigkeit", fr: "Pérennité" }), desc: t({ de: "Knowledge Transfer und Empowerment Ihrer Teams", fr: "Transfert de compétences et autonomie de vos équipes" }) }
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
            <h3 className="text-3xl font-bold mb-4">{t({ de: "Bereit für Transformation?", fr: "Prêt pour la transformation ?" })}</h3>
            <p className="text-lg mb-6 opacity-90">
              {t({ de: "Lassen Sie uns gemeinsam erkunden, wie unsere Leistungen Ihr Unternehmen auf die nächste Stufe bringen.", fr: "Explorons ensemble comment nos services peuvent faire passer votre entreprise au niveau supérieur." })}
            </p>
            <Button variant="outline" size="xl" className="bg-background text-foreground hover:bg-background/90" asChild>
              <a href="#kontakt">{t({ de: "Strategisches Erstgespräch vereinbaren", fr: "Planifier un entretien stratégique" })}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;