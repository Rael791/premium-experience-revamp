import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users2, CheckCircle, TrendingUp, Users, Zap, Shield, Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import leadershipHero from "@/assets/leadership-hero.jpg";
import leadershipTeam from "@/assets/leadership-team.jpg";

const LeadershipDetail = () => {
  const services = [
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
  ];

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
                Zurück zur Expertise
              </Link>
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mr-6">
                  <Users2 className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-2">Leadership & Transformation Services</h1>
                  <p className="text-xl text-muted-foreground">Executive Leadership für komplexe Veränderungsprozesse</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Wenn Transformation Leadership braucht, schaffen wir die Brücke zwischen Vision und Execution. 
                Mit bewährter Erfahrung in Executive Sparring und Change Leadership.
              </p>
            </div>
          </div>
        </section>

        {/* Why Leadership Excellence Matters */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Leadership als Transformation Enabler</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  In Zeiten exponentieller Veränderung ist Leadership der entscheidende Faktor zwischen 
                  Transformation Success und Transformation Fatigue.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Target, title: "70%", subtitle: "Transformationen scheitern an Leadership", color: "destructive" },
                  { icon: TrendingUp, title: "87%", subtitle: "CEOs fühlen sich in kritischen Entscheidungen isoliert", color: "warning" },
                  { icon: Users, title: "93%", subtitle: "Organisationen sehen Leadership als kritischen Engpass", color: "primary" },
                  { icon: Zap, title: "3.5x", subtitle: "ROI bei professionellem Leadership Development", color: "primary" }
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
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">Leadership & Transformation Services im Detail</h2>
              
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
                  src={leadershipTeam} 
                  alt="Leadership Success Story - Executive team planning transformation strategy"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60 flex items-center">
                  <div className="p-12">
                    <h3 className="text-3xl font-bold text-foreground mb-4">Ready für Leadership Excellence?</h3>
                    <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
                      Machen Sie Ihre Führungsmannschaft zum Enabler für erfolgreiche Transformation. 
                      Lassen Sie uns Ihre Leadership-Herausforderungen besprechen.
                    </p>
                    <Button variant="hero" size="xl" asChild>
                      <a href="/#kontakt">Executive Sparring vereinbaren</a>
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