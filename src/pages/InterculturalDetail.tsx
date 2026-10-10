import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Globe2, CheckCircle, TrendingUp, Users, Zap, Shield, Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import interculturalHero from "@/assets/intercultural-hero.jpg";
import interculturalMeeting from "@/assets/intercultural-meeting.jpg";
import { t } from "@/i18n";

const InterculturalDetail = () => {
  const services = t({
    de: [
    {
      name: "Cross-Cultural Process Design",
      description: "Geschäftsprozesse, die in jeder Kultur funktionieren und Akzeptanz finden",
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
  ],
    fr: [
    {
      name: "Conception de processus interculturels",
      description: "Des processus métier qui fonctionnent et sont acceptés dans chaque culture",
      icon: Globe2,
      what: "Conception de processus métier sensibles aux cultures, répondant à la fois aux exigences locales et aux standards internationaux.",
      why: "78 % des échecs de projets internationaux proviennent de malentendus culturels et de processus inadaptés.",
      how: "Cadre d'intelligence culturelle : analyse culturelle → cartographie des parties prenantes → adaptation locale des processus → pilote → déploiement.",
      whatHappens: [
        "95 % d'adhésion aux nouveaux processus dans toutes les cultures",
        "Intégration fluide Europe ↔ Maroc",
        "Délai de mise en œuvre réduit de 60 %",
        "Meilleure satisfaction des équipes et meilleure conformité"
      ],
      whatNotHappens: [
        "Pas de processus « taille unique »",
        "Pas de conflits ni de résistances culturelles",
        "Pas de perte d'expertise ni d'autonomie locale"
      ],
      kpis: [
        "95 % de taux d'adhésion",
        "Mise en œuvre des processus 60 % plus rapide",
        "40 % de conflits culturels en moins",
        "25 % de réussite de projet en plus"
      ],
      deliverables: [
        "Rapport d'analyse culturelle",
        "Processus adaptés au contexte local",
        "Cadre de communication avec les parties prenantes",
        "Supports de formation interculturelle",
        "Feuille de route de mise en œuvre",
        "Indicateurs de réussite & suivi"
      ]
    },
    {
      name: "Gestion de projets Europe ↔ Maroc",
      description: "Pilotage professionnel de projets complexes entre l'Europe, le Maroc et les pays du Golfe",
      icon: Users,
      what: "Gestion de projet de bout en bout pour des déploiements internationaux, avec une attention particulière à la sensibilité culturelle et à l'expertise locale.",
      why: "Les projets internationaux ont 67 % de chances de réussite en plus avec des chefs de projet expérimentés en interculturel.",
      how: "Gestion de projet agile et internationale : lancement interculturel → équipes biculturelles → alignement continu → conduite du changement adaptée localement.",
      whatHappens: [
        "Livraison dans les délais malgré la complexité culturelle",
        "Communication efficace malgré les distances",
        "Autonomie et responsabilisation des équipes locales",
        "Transfert de compétences durable"
      ],
      whatNotHappens: [
        "Pas de malentendus ni de conflits culturels",
        "Pas de micromanagement depuis le siège",
        "Pas de problèmes « perdus dans la traduction »"
      ],
      kpis: [
        "100 % des livraisons dans les délais",
        "90 % de satisfaction des parties prenantes",
        "< 5 % d'escalades liées à la culture",
        "85 % de rétention des équipes locales"
      ],
      deliverables: [
        "Organisation de projet biculturelle",
        "Protocoles de communication",
        "Points réguliers sur la dynamique interculturelle",
        "Programmes de formation adaptés localement",
        "Documentation du transfert de compétences",
        "Bilan interculturel en fin de projet"
      ]
    },
    {
      name: "Conformité & gouvernance culturelle",
      description: "Garantir la conformité juridique et culturelle de vos opérations internationales",
      icon: Shield,
      what: "Conception de cadres de conformité complets, intégrant à la fois les exigences juridiques et culturelles.",
      why: "Les coûts de non-conformité atteignent en moyenne 14,8 M€ par entreprise et par an, dont 40 % liés à des facteurs culturels.",
      how: "Conformité dès la conception : cartographie juridique → analyse culturelle → élaboration du cadre → mise en œuvre → suivi.",
      whatHappens: [
        "100 % de conformité juridique et culturelle",
        "Suivi automatisé de la conformité",
        "Risque réglementaire réduit",
        "Confiance renforcée des parties prenantes"
      ],
      whatNotHappens: [
        "Pas d'infractions coûteuses à la conformité",
        "Pas de faux pas culturels ni de crises d'image",
        "Pas de corrections de conformité improvisées et coûteuses"
      ],
      kpis: [
        "100 % de taux de conformité",
        "Zéro infraction réglementaire",
        "90 % de réduction des coûts de conformité",
        "< 24 h pour résoudre un incident"
      ],
      deliverables: [
        "Cadre de conformité culturelle",
        "Système de suivi automatisé",
        "Matrice d'évaluation des risques",
        "Procédures d'escalade",
        "Programmes de formation & de sensibilisation",
        "Rapports de conformité réguliers"
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
                {t({ de: "Zurück zur Expertise", fr: "Retour à l'expertise" })}
              </Link>
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mr-6">
                  <Globe2 className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-2">{t({ de: "Interkulturelle Integration Services", fr: "Services d'intégration interculturelle" })}</h1>
                  <p className="text-xl text-muted-foreground">{t({ de: "Globale Projekte mit kultureller Intelligenz zum Erfolg führen", fr: "Réussir vos projets internationaux grâce à l'intelligence culturelle" })}</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t({ de: "Wenn Technologie auf Kultur trifft, entstehen die komplexesten Herausforderungen. Wir überbrücken diese Lücken mit bewährter kultureller Intelligenz und tiefem Verständnis für DACH und GCC Märkte.", fr: "Quand la technologie rencontre la culture, naissent les défis les plus complexes. Nous comblons ces écarts grâce à une intelligence culturelle éprouvée et à une connaissance approfondie des marchés européens et marocains." })}
              </p>
            </div>
          </div>
        </section>

        {/* Why Intercultural Integration Matters */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">{t({ de: "Cultural Intelligence als Business Advantage", fr: "L'intelligence culturelle, un avantage business" })}</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {t({ de: "In einer globalisierten Welt ist kulturelle Kompetenz nicht nur 'Nice-to-Have' – sie ist der entscheidende Faktor für nachhaltigen internationalen Erfolg.", fr: "Dans un monde globalisé, la compétence culturelle n'est pas un simple « plus » – c'est le facteur décisif d'un succès international durable." })}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Target, title: t({ de: "78%", fr: "78 %" }), subtitle: t({ de: "Projektfehler durch kulturelle Missverständnisse", fr: "des échecs de projets dus à des malentendus culturels" }), color: "destructive" },
                  { icon: TrendingUp, title: t({ de: "€14.8M", fr: "14,8 M€" }), subtitle: t({ de: "Durchschnittliche jährliche Cultural Compliance Kosten", fr: "Coût annuel moyen de la non-conformité culturelle" }), color: "warning" },
                  { icon: Users, title: t({ de: "67%", fr: "67 %" }), subtitle: t({ de: "Höhere Erfolgsrate mit kulturell erfahrenen Teams", fr: "de réussite en plus avec des équipes interculturelles" }), color: "success" },
                  { icon: Zap, title: t({ de: "3.2x", fr: "3,2x" }), subtitle: t({ de: "ROI bei professionellem Cultural Management", fr: "de ROI avec une gestion culturelle professionnelle" }), color: "secondary" }
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
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">{t({ de: "Interkulturelle Integration Services im Detail", fr: "Nos services interculturels en détail" })}</h2>
              
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
                        
                      </div>
                    </div>

                    {/* What, Why, How */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                      <div className="bg-card/30 rounded-xl p-6">
                        <h4 className="font-bold text-foreground mb-3 flex items-center">
                          <span className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center text-secondary text-sm mr-2">?</span>
                          {t({ de: "Was", fr: "Quoi" })}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{service.what}</p>
                      </div>
                      <div className="bg-card/30 rounded-xl p-6">
                        <h4 className="font-bold text-foreground mb-3 flex items-center">
                          <span className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center text-secondary text-sm mr-2">!</span>
                          {t({ de: "Warum", fr: "Pourquoi" })}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{service.why}</p>
                      </div>
                      <div className="bg-card/30 rounded-xl p-6">
                        <h4 className="font-bold text-foreground mb-3 flex items-center">
                          <span className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center text-secondary text-sm mr-2">→</span>
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
                          <Shield className="w-5 h-5 text-secondary mr-2" />
                          {t({ de: "Was nicht passiert", fr: "Ce qui n'arrivera pas" })}
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
                          {t({ de: "Messbare KPIs", fr: "KPI mesurables" })}
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
                          {t({ de: "Deliverables", fr: "Livrables" })}
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
                  alt={t({ de: "Internationales Team in Zusammenarbeit", fr: "Équipe internationale en collaboration" })}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60 flex items-center">
                  <div className="p-12">
                    <h3 className="text-3xl font-bold text-foreground mb-4">{t({ de: "Ready für Global Excellence?", fr: "Prêt pour l'excellence internationale ?" })}</h3>
                    <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
                      {t({ de: "Machen Sie kulturelle Vielfalt zu Ihrem Wettbewerbsvorteil. Lassen Sie uns besprechen, wie wir Ihre internationalen Projekte zum Erfolg führen.", fr: "Faites de la diversité culturelle votre avantage concurrentiel. Voyons ensemble comment mener vos projets internationaux au succès." })}
                    </p>
                    <Button variant="hero" size="xl" asChild>
                      <a href="/#kontakt">{t({ de: "Cultural Intelligence Beratung vereinbaren", fr: "Planifier un conseil en intelligence culturelle" })}</a>
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