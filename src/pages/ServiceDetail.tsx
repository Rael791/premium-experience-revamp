import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Database, ShoppingBag } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ediHero from "@/assets/edi-hero.jpg";
import procurementHero from "@/assets/procurement-hero.jpg";
import { t } from "@/i18n";

// Bereiche ohne eigene Leistungsseite leiten auf die passende Expertise-Seite weiter
const redirects: Record<string, string> = {
  "interkulturelle-integration": "/expertise/interkulturelle-integration",
  "leadership-&-transformation": "/expertise/leadership-und-transformation",
  "leadership-und-transformation": "/expertise/leadership-und-transformation",
};

const ServiceDetail = () => {
  const { slug = "" } = useParams();

  const serviceData = {
    "edi-excellence": {
      icon: Database,
      title: t({ de: "EDI Excellence Services", fr: "Services EDI Excellence" }),
      subtitle: t({
        de: "Ganzheitliche EDI-Lösungen – von der Architektur bis zur Optimierung",
        fr: "Des solutions EDI complètes – de l'architecture à l'optimisation",
      }),
      description: t({
        de: "Transformieren Sie Ihre EDI-Landschaft mit bewährten Methoden und tiefer technischer Expertise.",
        fr: "Transformez votre paysage EDI grâce à des méthodes éprouvées et une solide expertise technique.",
      }),
      heroImage: ediHero,
      services: t({
        de: [
          {
            name: "EDI Architektur Assessment",
            description: "Umfassende Bewertung Ihrer aktuellen EDI-Infrastruktur",
            deliverables: ["Ist-Analyse", "Gap-Analyse", "Soll-Konzept & Roadmap", "ROI-Berechnung"],
            approach:
              "Wir analysieren Ihre bestehenden EDI-Systeme, identifizieren Engpässe und entwerfen eine skalierbare Architektur, die mit Ihrem Unternehmen wächst.",
          },
          {
            name: "Systemmigration & Integration",
            description: "Reibungslose Migration auf moderne EDI-Plattformen",
            deliverables: ["Migrationsstrategie", "Systemintegration", "Daten-Mapping", "Go-live-Begleitung"],
            approach:
              "Migration ohne Ausfallzeit – mit umfassenden Tests und Rückfallstrategien, damit Ihr Geschäft ohne Unterbrechung weiterläuft.",
          },
          {
            name: "Business Rules Engine",
            description: "Intelligente Automatisierung von Datenvalidierung und Verarbeitung",
            deliverables: ["Regelkonfiguration", "Validierungs-Framework", "Fehlerbehandlung", "Monitoring-Dashboard"],
            approach:
              "Wir setzen durchdachte Geschäftslogik um, die Datenqualität sichert und Entscheidungen automatisiert.",
          },
        ],
        fr: [
          {
            name: "Audit d'architecture EDI",
            description: "Évaluation complète de votre infrastructure EDI actuelle",
            deliverables: ["Analyse de l'existant", "Analyse des écarts", "Cible & feuille de route", "Calcul du ROI"],
            approach:
              "Nous analysons vos systèmes EDI existants, identifions les goulots d'étranglement et concevons une architecture évolutive qui grandit avec votre entreprise.",
          },
          {
            name: "Migration & intégration de systèmes",
            description: "Une migration fluide vers des plateformes EDI modernes",
            deliverables: ["Stratégie de migration", "Intégration des systèmes", "Mapping des données", "Accompagnement au démarrage"],
            approach:
              "Une migration sans interruption, avec des tests complets et des stratégies de retour arrière pour assurer la continuité de votre activité.",
          },
          {
            name: "Moteur de règles métier",
            description: "Automatisation intelligente de la validation et du traitement des données",
            deliverables: ["Configuration des règles", "Cadre de validation", "Gestion des exceptions", "Tableau de bord de suivi"],
            approach:
              "Nous mettons en place une logique métier qui garantit la qualité des données et automatise les décisions.",
          },
        ],
      }),
    },
    "eprocurement-mastery": {
      icon: ShoppingBag,
      title: t({ de: "eProcurement Mastery Services", fr: "Services eProcurement Mastery" }),
      subtitle: t({
        de: "Strategische Transformation und Optimierung der Beschaffung",
        fr: "Transformation et optimisation stratégiques des achats",
      }),
      description: t({
        de: "Modernisieren Sie Ihre Beschaffungsprozesse mit intelligenter Automatisierung und strategischen Erkenntnissen.",
        fr: "Modernisez vos processus achats grâce à une automatisation intelligente et à des analyses stratégiques.",
      }),
      heroImage: procurementHero,
      services: t({
        de: [
          {
            name: "Optimierung der Beschaffungsprozesse",
            description: "Den gesamten Beschaffungszyklus verschlanken",
            deliverables: ["Prozessaufnahme", "Workflow-Design", "Automatisierung", "Anwenderschulung"],
            approach:
              "Wir gestalten nutzerfreundliche Prozesse, die Effizienz, Compliance und die Zufriedenheit aller Beteiligten in Einklang bringen.",
          },
          {
            name: "Einführung eines Lieferantenportals",
            description: "Self-Service-Portale für eine bessere Zusammenarbeit mit Lieferanten",
            deliverables: ["Portalkonfiguration", "Onboarding-Prozess", "API-Integration", "Leistungskennzahlen"],
            approach:
              "Wir schaffen intuitive Self-Service-Lösungen, die manuellen Aufwand reduzieren und Lieferantenbeziehungen stärken.",
          },
          {
            name: "Spend Analytics & Intelligence",
            description: "Datenbasierte Erkenntnisse für strategische Einkaufsentscheidungen",
            deliverables: ["Analyse-Dashboard", "Reporting-Framework", "KPI-Definitionen", "Konkrete Handlungsempfehlungen"],
            approach:
              "Wir machen aus Beschaffungsdaten strategisches Wissen, das Kosten senkt und die Lieferantenleistung verbessert.",
          },
        ],
        fr: [
          {
            name: "Optimisation des processus achats",
            description: "Simplifier l'ensemble du cycle d'achat",
            deliverables: ["Cartographie des processus", "Conception des workflows", "Automatisation", "Formation des utilisateurs"],
            approach:
              "Nous concevons des processus centrés sur l'utilisateur, qui concilient efficacité, conformité et satisfaction des parties prenantes.",
          },
          {
            name: "Mise en place d'un portail fournisseurs",
            description: "Des portails libre-service pour une meilleure collaboration avec les fournisseurs",
            deliverables: ["Configuration du portail", "Processus d'intégration", "Intégration API", "Indicateurs de performance"],
            approach:
              "Nous créons des expériences libre-service intuitives qui réduisent l'effort manuel et renforcent la relation fournisseurs.",
          },
          {
            name: "Analyse des dépenses & intelligence achats",
            description: "Des données au service de décisions d'achat stratégiques",
            deliverables: ["Tableau de bord analytique", "Cadre de reporting", "Définition des KPI", "Recommandations concrètes"],
            approach:
              "Nous transformons vos données achats en intelligence stratégique pour réduire les coûts et améliorer la performance fournisseurs.",
          },
        ],
      }),
    },
  };

  if (redirects[slug]) {
    return <Navigate to={redirects[slug]} replace />;
  }

  const service = serviceData[slug as keyof typeof serviceData];

  if (!service) {
    return <Navigate to="/#leistungen" replace />;
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
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <Link to="/#leistungen" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                {t({ de: "Zurück zu den Leistungen", fr: "Retour aux services" })}
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

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{service.description}</p>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">
                {t({ de: "Unsere Services im Detail", fr: "Nos services en détail" })}
              </h2>

              <div className="space-y-8">
                {service.services.map((item, idx) => (
                  <div
                    key={idx}
                    className={`group relative overflow-hidden rounded-2xl p-8 hover-lift transition-all duration-500 ${
                      idx % 3 === 0
                        ? "bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20"
                        : idx % 3 === 1
                        ? "bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20"
                        : "bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20"
                    }`}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Service Info */}
                      <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold text-foreground mb-4">{item.name}</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-3">
                            {t({ de: "Unser Ansatz:", fr: "Notre approche :" })}
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">{item.approach}</p>
                        </div>
                      </div>

                      {/* Deliverables */}
                      <div className="lg:col-span-1">
                        <h4 className="font-semibold text-foreground mb-4">
                          {t({ de: "Ergebnisse:", fr: "Livrables :" })}
                        </h4>
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
                <h3 className="text-2xl font-bold mb-4">
                  {t({ de: "Interesse an unseren Services?", fr: "Intéressé par nos services ?" })}
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  {t({
                    de: "Lassen Sie uns besprechen, wie wir Ihnen bei Ihren spezifischen Herausforderungen helfen können.",
                    fr: "Voyons ensemble comment nous pouvons vous aider face à vos enjeux spécifiques.",
                  })}
                </p>
                <Button variant="outline" size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
                  <a href="/#kontakt">{t({ de: "Detailberatung anfordern", fr: "Demander un conseil détaillé" })}</a>
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
