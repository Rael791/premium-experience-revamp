import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Target, Lightbulb, Zap, Shield, Globe, Users, TrendingUp, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import philosophyHero from "@/assets/philosophy-hero.jpg";

const Philosophy = () => {
  const { t } = useTranslation();

  const pillarIcons = {
    precision: Target,
    innovation: Lightbulb,
    compliance: Shield,
    cultural: Globe
  };

  const pillarKeys = ["precision", "innovation", "compliance", "cultural"] as const;
  const uniqueFactorKeys = ["boutique", "executive", "technology", "international"] as const;
  const principleKeys = ["understand", "transparency", "sustainability", "sensitivity"] as const;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section 
          className="py-24 relative"
          style={{
            backgroundImage: `url(${philosophyHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <a href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                {t("philosophy.back")}
              </a>
              
              <h1 className="text-5xl font-bold text-foreground mb-6">
                {t("philosophy.title")} <span className="text-primary">{t("philosophy.title_highlight")}</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {t("philosophy.description")}
              </p>
            </div>
          </div>
        </section>

        {/* Why We're Indispensable */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  {t("philosophy.indispensable_title")} <span className="text-primary">{t("philosophy.indispensable_highlight")}</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {t("philosophy.indispensable_description")}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {uniqueFactorKeys.map((key, idx) => (
                  <div key={idx} className="glass-effect rounded-2xl p-8 hover-lift">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-foreground">{t(`philosophy.unique_factors.${key}.title`)}</h3>
                      <div className="text-right">
                        <div className="text-sm text-primary font-bold">{t(`philosophy.unique_factors.${key}.metric`)}</div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{t(`philosophy.unique_factors.${key}.description`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Pillars */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  {t("philosophy.pillars_title")} <span className="text-primary">{t("philosophy.pillars_highlight")}</span> {t("philosophy.pillars_suffix")}
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {t("philosophy.pillars_description")}
                </p>
              </div>

              <div className="space-y-12">
                {pillarKeys.map((key, idx) => {
                  const Icon = pillarIcons[key];
                  const details = t(`philosophy.pillars.${key}.details`, { returnObjects: true }) as string[];
                  
                  return (
                    <div key={idx} className={`flex flex-col lg:flex-row items-center gap-8 ${
                      idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                    }`}>
                      <div className="lg:w-1/2">
                        <div className="glass-effect rounded-2xl p-8">
                          <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                              <Icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">{t(`philosophy.pillars.${key}.title`)}</h3>
                          </div>
                          <p className="text-muted-foreground leading-relaxed mb-6">{t(`philosophy.pillars.${key}.description`)}</p>
                          <div className="space-y-3">
                            {Array.isArray(details) && details.map((detail, detailIdx) => (
                              <div key={detailIdx} className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                                <span className="text-sm text-muted-foreground">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="lg:w-1/2">
                        <div className="aspect-square bg-gradient-card rounded-2xl flex items-center justify-center">
                          <Icon className="w-24 h-24 text-primary opacity-20" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  {t("philosophy.how_we_work_title")} <span className="text-primary">{t("philosophy.how_we_work_highlight")}</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  {t("philosophy.how_we_work_description")}
                </p>
              </div>

              <div className="space-y-8">
                {principleKeys.map((key, idx) => (
                  <div key={idx} className="glass-effect rounded-xl p-6 hover-lift">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">{idx + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{t(`philosophy.principles.${key}.principle`)}</h3>
                        <p className="text-muted-foreground">{t(`philosophy.principles.${key}.description`)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Goals */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-foreground mb-8">
                {t("philosophy.goal_title")} <span className="text-primary">{t("philosophy.goal_highlight")}</span>
              </h2>
              <div className="glass-effect rounded-2xl p-12">
                <p className="text-xl text-foreground leading-relaxed mb-8">
                  {t("philosophy.goal_quote")}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {t("philosophy.goal_description")}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary">10+</div>
                    <div className="text-sm text-muted-foreground">{t("philosophy.stats.years")}</div>
                  </div>
                  <div className="text-center">
                    <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary">3</div>
                    <div className="text-sm text-muted-foreground">{t("philosophy.stats.continents")}</div>
                  </div>
                  <div className="text-center">
                    <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">{t("philosophy.stats.solutions")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="kontakt" className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                {t("philosophy.contact_title")} <span className="text-primary">{t("philosophy.contact_highlight")}</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("philosophy.contact_description")}
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Philosophy;
