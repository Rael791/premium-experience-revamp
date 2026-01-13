import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Globe2, CheckCircle, TrendingUp, Users, Zap, Shield, Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import interculturalHero from "@/assets/intercultural-hero.jpg";
import interculturalMeeting from "@/assets/intercultural-meeting.jpg";

const InterculturalDetail = () => {
  const { t } = useTranslation();

  const services = [
    {
      key: "process",
      icon: Globe2,
    },
    {
      key: "project",
      icon: Users,
    },
    {
      key: "compliance",
      icon: Shield,
    }
  ];

  const stats = [
    { icon: Target, key: "failures", value: "78%", color: "destructive" },
    { icon: TrendingUp, key: "compliance", value: "€14.8M", color: "warning" },
    { icon: Users, key: "success", value: "67%", color: "success" },
    { icon: Zap, key: "roi", value: "3.2x", color: "secondary" }
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
                {t("intercultural_detail.back")}
              </Link>
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mr-6">
                  <Globe2 className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-2">{t("intercultural_detail.title")}</h1>
                  <p className="text-xl text-muted-foreground">{t("intercultural_detail.subtitle")}</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t("intercultural_detail.description")}
              </p>
            </div>
          </div>
        </section>

        {/* Why Intercultural Integration Matters */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">{t("intercultural_detail.why_title")}</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {t("intercultural_detail.why_description")}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-card rounded-xl p-6 text-center hover-lift border border-border">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-${stat.color}/10 flex items-center justify-center`}>
                      <stat.icon className={`w-6 h-6 text-${stat.color}`} />
                    </div>
                    <div className={`text-2xl font-bold text-${stat.color} mb-2`}>{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{t(`intercultural_detail.stats.${stat.key}`)}</div>
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
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">{t("intercultural_detail.services_title")}</h2>
              
              <div className="space-y-16">
                {services.map((service, idx) => {
                  const whatHappens = t(`intercultural_detail.services.${service.key}.whatHappens`, { returnObjects: true }) as string[];
                  const whatNotHappens = t(`intercultural_detail.services.${service.key}.whatNotHappens`, { returnObjects: true }) as string[];
                  const kpis = t(`intercultural_detail.services.${service.key}.kpis`, { returnObjects: true }) as string[];
                  const deliverables = t(`intercultural_detail.services.${service.key}.deliverables`, { returnObjects: true }) as string[];

                  return (
                    <div key={idx} className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20 p-8 hover-lift">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        {/* Service Header */}
                        <div className="lg:col-span-2">
                          <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mr-6">
                              <service.icon className="w-8 h-8 text-secondary" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-foreground mb-2">{t(`intercultural_detail.services.${service.key}.name`)}</h3>
                              <p className="text-muted-foreground">{t(`intercultural_detail.services.${service.key}.description`)}</p>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div className="bg-card/50 rounded-lg p-4">
                              <div className="text-sm text-muted-foreground">{t("intercultural_detail.labels.duration")}</div>
                              <div className="font-semibold text-foreground">{t(`intercultural_detail.services.${service.key}.duration`)}</div>
                            </div>
                            <div className="bg-card/50 rounded-lg p-4">
                              <div className="text-sm text-muted-foreground">{t("intercultural_detail.labels.investment")}</div>
                              <div className="font-semibold text-foreground">{t(`intercultural_detail.services.${service.key}.investment`)}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* What, Why, How */}
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                        <div className="bg-card/30 rounded-xl p-6">
                          <h4 className="font-bold text-foreground mb-3 flex items-center">
                            <span className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center text-secondary text-sm mr-2">?</span>
                            {t("intercultural_detail.labels.what")}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{t(`intercultural_detail.services.${service.key}.what`)}</p>
                        </div>
                        <div className="bg-card/30 rounded-xl p-6">
                          <h4 className="font-bold text-foreground mb-3 flex items-center">
                            <span className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center text-secondary text-sm mr-2">!</span>
                            {t("intercultural_detail.labels.why")}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{t(`intercultural_detail.services.${service.key}.why`)}</p>
                        </div>
                        <div className="bg-card/30 rounded-xl p-6">
                          <h4 className="font-bold text-foreground mb-3 flex items-center">
                            <span className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center text-secondary text-sm mr-2">→</span>
                            {t("intercultural_detail.labels.how")}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{t(`intercultural_detail.services.${service.key}.how`)}</p>
                        </div>
                      </div>

                      {/* Results Grid */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        {/* What Happens */}
                        <div className="bg-card/30 rounded-xl p-6">
                          <h4 className="font-bold text-foreground mb-4 flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                            {t("intercultural_detail.labels.whatHappens")}
                          </h4>
                          <div className="space-y-3">
                            {Array.isArray(whatHappens) && whatHappens.map((item, itemIdx) => (
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
                            {t("intercultural_detail.labels.whatNotHappens")}
                          </h4>
                          <div className="space-y-3">
                            {Array.isArray(whatNotHappens) && whatNotHappens.map((item, itemIdx) => (
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
                            {t("intercultural_detail.labels.kpis")}
                          </h4>
                          <div className="space-y-3">
                            {Array.isArray(kpis) && kpis.map((kpi, kpiIdx) => (
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
                            {t("intercultural_detail.labels.deliverables")}
                          </h4>
                          <div className="space-y-3">
                            {Array.isArray(deliverables) && deliverables.map((deliverable, delIdx) => (
                              <div key={delIdx} className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></div>
                                <span className="text-sm text-muted-foreground">{deliverable}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
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
                    <h3 className="text-3xl font-bold text-foreground mb-4">{t("intercultural_detail.cta_title")}</h3>
                    <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
                      {t("intercultural_detail.cta_description")}
                    </p>
                    <Button variant="hero" size="xl" asChild>
                      <a href="/#kontakt">{t("intercultural_detail.cta_button")}</a>
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
