import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users2, CheckCircle, TrendingUp, Users, Zap, Shield, Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import leadershipHero from "@/assets/leadership-hero.jpg";
import leadershipTeam from "@/assets/leadership-team.jpg";
import { t } from "@/i18n";

const LeadershipDetail = () => {
  const services = t({
    de: [
    {
      name: "Executive Sparring & Strategy",
      description: "Strategisches Sparring für C-Level Executives bei komplexen Transformationen",
      icon: Users2,
      what: "Vertrauensvolle Sparring-Partnerschaft für Führungskräfte bei strategischen Entscheidungen und Transformationsprojekten.",
      why: "87% der CEOs geben an, dass sie sich in kritischen Entscheidungen isoliert fühlen und externe Expertise benötigen.",
      how: "Executive Partnership Model: Strategic Assessment → Confidential Sparring Sessions → Decision Support → Implementation Guidance.",
      whatHappens: [
        "Fundierte strategische Entscheidungen unter Unsicherheit",
        "Beschleunigte Entscheidungsfindung um 40%",
        "Höhere Implementierungserfolgsraten",
        "Stärkung der Executive Präsenz und Führungskompetenz"
      ],
      whatNotHappens: [
        "Keine Standard-Consulting Ansätze oder Templates",
        "Kein Verlust der Executive Autonomie",
        "Keine Abhängigkeit von externen Beratern"
      ],
      kpis: [
        "40% schnellere strategische Entscheidungen",
        "85% Implementierungserfolgsrate",
        "95% Executive Satisfaction",
        "60% verbesserte Team Alignment"
      ],
      deliverables: [
        "Strategic Assessment & Roadmap",
        "Monthly Executive Sparring Sessions",
        "Decision Framework & Tools",
        "Implementation Support",
        "Leadership Development Plan",
        "Confidential Progress Reviews"
      ]
    },
    {
      name: "Agile Transformation Leadership",
      description: "Führung und Steuerung komplexer Agile Transformationen in traditionellen Organisationen",
      icon: Zap,
      what: "End-to-End Steuerung von Agile Transformationen mit Fokus auf kulturellen Wandel und nachhaltiger Veränderung.",
      why: "70% der Agile Transformationen scheitern aufgrund mangelnder Leadership-Unterstützung und kultureller Widerstände.",
      how: "Transformation Leadership Framework: Cultural Assessment → Leadership Alignment → Phased Rollout → Continuous Coaching.",
      whatHappens: [
        "Erfolgreiche Agile Transformation ohne Cultural Shock",
        "60% verbesserte Time-to-Market",
        "Höhere Mitarbeiterengagement und Innovation",
        "Nachhaltige agile Mindset-Entwicklung"
      ],
      whatNotHappens: [
        "Keine 'Agile Theater' ohne echten Kulturwandel",
        "Kein Rückfall in alte Arbeitsweisen nach Go-Live",
        "Keine Überforderung von Teams durch zu schnelle Veränderung"
      ],
      kpis: [
        "70% Transformation Success Rate",
        "60% bessere Time-to-Market",
        "80% Mitarbeiter Engagement Score",
        "50% weniger Escalations"
      ],
      deliverables: [
        "Agile Transformation Roadmap",
        "Leadership Coaching Program",
        "Cultural Change Management",
        "Team Empowerment Framework",
        "Performance Measurement System",
        "Sustainability Assessment"
      ]
    },
    {
      name: "Leadership Development & Empowerment",
      description: "Entwicklung von Führungskompetenzen für digitale Transformation und internationale Zusammenarbeit",
      icon: Target,
      what: "Maßgeschneiderte Leadership-Entwicklungsprogramme für Führungskräfte in digitalen und internationalen Kontexten.",
      why: "93% der Organisationen sehen Leadership als kritischen Engpass für digitale Transformation und internationale Expansion.",
      how: "Competency-Based Development: Assessment → Individual Development Plans → Group Coaching → Peer Learning → Impact Measurement.",
      whatHappens: [
        "Messbar verbesserte Leadership-Kompetenzen",
        "Höhere Team Performance und Retention",
        "Bessere Change Management Fähigkeiten",
        "Stärkere internationale Führungspräsenz"
      ],
      whatNotHappens: [
        "Keine generischen Leadership-Programme ohne Praxisbezug",
        "Kein Training ohne measurable Business Impact",
        "Keine theoretischen Ansätze ohne praktische Anwendung"
      ],
      kpis: [
        "25% Verbesserung Leadership Assessment Scores",
        "90% Teilnehmer Satisfaction",
        "40% bessere Team Performance",
        "70% interne Promotionsrate"
      ],
      deliverables: [
        "Individual Leadership Assessment",
        "Personalized Development Plans",
        "Group Coaching Sessions",
        "Peer Learning Framework",
        "Mentoring Program Setup",
        "Impact Measurement & ROI Analysis"
      ]
    }
  ],
    fr: [
    {
      name: "Accompagnement des dirigeants & stratégie",
      description: "Un partenaire de réflexion stratégique pour les dirigeants face à des transformations complexes",
      icon: Users2,
      what: "Un partenariat de confiance pour accompagner les dirigeants dans leurs décisions stratégiques et leurs projets de transformation.",
      why: "87 % des dirigeants déclarent se sentir isolés face aux décisions critiques et avoir besoin d'une expertise externe.",
      how: "Modèle de partenariat : diagnostic stratégique → séances d'échange confidentielles → aide à la décision → accompagnement de la mise en œuvre.",
      whatHappens: [
        "Des décisions stratégiques solides malgré l'incertitude",
        "Prise de décision accélérée de 40 %",
        "Meilleur taux de réussite des mises en œuvre",
        "Renforcement de la posture et du leadership des dirigeants"
      ],
      whatNotHappens: [
        "Pas d'approches de conseil standardisées ni de modèles tout faits",
        "Pas de perte d'autonomie des dirigeants",
        "Pas de dépendance à des consultants externes"
      ],
      kpis: [
        "Décisions stratégiques 40 % plus rapides",
        "85 % de réussite des mises en œuvre",
        "95 % de satisfaction des dirigeants",
        "60 % de meilleur alignement des équipes"
      ],
      deliverables: [
        "Diagnostic stratégique & feuille de route",
        "Séances d'échange mensuelles",
        "Cadre et outils d'aide à la décision",
        "Accompagnement de la mise en œuvre",
        "Plan de développement du leadership",
        "Revues de progression confidentielles"
      ]
    },
    {
      name: "Pilotage de la transformation agile",
      description: "Conduire des transformations agiles complexes dans des organisations traditionnelles",
      icon: Zap,
      what: "Pilotage de bout en bout de transformations agiles, axé sur le changement culturel et la durabilité.",
      why: "70 % des transformations agiles échouent faute de soutien de la direction et en raison de résistances culturelles.",
      how: "Cadre de leadership de la transformation : diagnostic culturel → alignement de la direction → déploiement progressif → coaching continu.",
      whatHappens: [
        "Une transformation agile réussie, sans choc culturel",
        "Délai de mise sur le marché amélioré de 60 %",
        "Plus d'engagement et d'innovation des équipes",
        "Un état d'esprit agile durable"
      ],
      whatNotHappens: [
        "Pas d'« agilité de façade » sans réel changement culturel",
        "Pas de retour aux anciennes pratiques après le lancement",
        "Pas de surcharge des équipes par un changement trop rapide"
      ],
      kpis: [
        "70 % de réussite des transformations",
        "60 % de gain sur le délai de mise sur le marché",
        "80 % de score d'engagement des collaborateurs",
        "50 % d'escalades en moins"
      ],
      deliverables: [
        "Feuille de route de la transformation agile",
        "Programme de coaching des managers",
        "Conduite du changement culturel",
        "Cadre de responsabilisation des équipes",
        "Système de mesure de la performance",
        "Évaluation de la pérennité"
      ]
    },
    {
      name: "Développement du leadership",
      description: "Développer les compétences managériales pour la transformation digitale et la collaboration internationale",
      icon: Target,
      what: "Programmes de développement du leadership sur mesure pour les managers évoluant dans des contextes digitaux et internationaux.",
      why: "93 % des organisations considèrent le leadership comme un goulot d'étranglement critique pour la transformation digitale et l'expansion internationale.",
      how: "Développement par les compétences : évaluation → plans de développement individuels → coaching de groupe → apprentissage entre pairs → mesure de l'impact.",
      whatHappens: [
        "Des compétences managériales améliorées de façon mesurable",
        "Meilleure performance et fidélisation des équipes",
        "Meilleure capacité à conduire le changement",
        "Une présence managériale internationale renforcée"
      ],
      whatNotHappens: [
        "Pas de programmes génériques déconnectés de la pratique",
        "Pas de formation sans impact business mesurable",
        "Pas d'approches théoriques sans application concrète"
      ],
      kpis: [
        "25 % d'amélioration des évaluations de leadership",
        "90 % de satisfaction des participants",
        "40 % de meilleure performance des équipes",
        "70 % de promotions internes"
      ],
      deliverables: [
        "Évaluation individuelle du leadership",
        "Plans de développement personnalisés",
        "Séances de coaching de groupe",
        "Cadre d'apprentissage entre pairs",
        "Mise en place d'un programme de mentorat",
        "Mesure de l'impact & analyse du ROI"
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
            backgroundImage: `url(${leadershipHero})`,
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
                  <Users2 className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-2">{t({ de: "Leadership & Transformation Services", fr: "Services Leadership & Transformation" })}</h1>
                  <p className="text-xl text-muted-foreground">{t({ de: "Executive Leadership für komplexe Veränderungsprozesse", fr: "Un leadership de direction pour des transformations complexes" })}</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t({ de: "Wenn Transformation Leadership braucht, schaffen wir die Brücke zwischen Vision und Execution. Mit bewährter Erfahrung in Executive Sparring und Change Leadership.", fr: "Quand la transformation a besoin de leadership, nous faisons le pont entre la vision et l'exécution – avec une expérience éprouvée de l'accompagnement des dirigeants et de la conduite du changement." })}
              </p>
            </div>
          </div>
        </section>

        {/* Why Leadership Excellence Matters */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">{t({ de: "Leadership als Transformation Enabler", fr: "Le leadership, moteur de la transformation" })}</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {t({ de: "In Zeiten exponentieller Veränderung ist Leadership der entscheidende Faktor zwischen Transformation Success und Transformation Fatigue.", fr: "En période de changement accéléré, le leadership fait toute la différence entre une transformation réussie et une transformation qui s'essouffle." })}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Target, title: t({ de: "70%", fr: "70 %" }), subtitle: t({ de: "Transformationen scheitern an Leadership", fr: "des transformations échouent faute de leadership" }), color: "destructive" },
                  { icon: TrendingUp, title: t({ de: "87%", fr: "87 %" }), subtitle: t({ de: "CEOs fühlen sich in kritischen Entscheidungen isoliert", fr: "des dirigeants se sentent isolés face aux décisions critiques" }), color: "warning" },
                  { icon: Users, title: t({ de: "93%", fr: "93 %" }), subtitle: t({ de: "Organisationen sehen Leadership als kritischen Engpass", fr: "des organisations voient le leadership comme un goulot d'étranglement" }), color: "primary" },
                  { icon: Zap, title: t({ de: "3.5x", fr: "3,5x" }), subtitle: t({ de: "ROI bei professionellem Leadership Development", fr: "de ROI avec un développement professionnel du leadership" }), color: "primary" }
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
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">{t({ de: "Leadership & Transformation Services im Detail", fr: "Nos services Leadership & Transformation en détail" })}</h2>
              
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
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                              <span className="text-sm text-muted-foreground">{kpi}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Deliverables */}
                      <div className="bg-card/30 rounded-xl p-6">
                        <h4 className="font-bold text-foreground mb-4 flex items-center">
                          <Users2 className="w-5 h-5 text-primary mr-2" />
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
                  src={leadershipTeam} 
                  alt={t({ de: "Führungsteam plant eine Transformationsstrategie", fr: "Équipe de direction planifiant une stratégie de transformation" })}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60 flex items-center">
                  <div className="p-12">
                    <h3 className="text-3xl font-bold text-foreground mb-4">{t({ de: "Ready für Leadership Excellence?", fr: "Prêt pour l'excellence en leadership ?" })}</h3>
                    <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
                      {t({ de: "Machen Sie Ihre Führungsmannschaft zum Enabler für erfolgreiche Transformation. Lassen Sie uns Ihre Leadership-Herausforderungen besprechen.", fr: "Faites de votre équipe de direction le moteur d'une transformation réussie. Échangeons sur vos enjeux de leadership." })}
                    </p>
                    <Button variant="hero" size="xl" asChild>
                      <a href="/#kontakt">{t({ de: "Executive Sparring vereinbaren", fr: "Planifier un accompagnement dirigeant" })}</a>
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

export default LeadershipDetail;