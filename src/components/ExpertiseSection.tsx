import { useTranslation } from "react-i18next";
import { Code, ShoppingCart, Globe2, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import businessTeamImage from "@/assets/business-team-1.jpg";
import businessOfficeImage from "@/assets/business-office-1.jpg";
import businessMeetingImage from "@/assets/business-meeting-1.jpg";
import businessStrategyImage from "@/assets/business-strategy-1.jpg";

const ExpertiseSection = () => {
  const { t } = useTranslation();

  const expertiseAreas = [
    {
      icon: Code,
      title: t("expertise.edi_title"),
      description: t("expertise.edi_desc"),
      image: businessOfficeImage,
      color: "primary",
      features: [
        t("expertise.edi_feature1"),
        t("expertise.edi_feature2"),
        t("expertise.edi_feature3"),
        t("expertise.edi_feature4")
      ],
      link: "/expertise/edi-excellence"
    },
    {
      icon: ShoppingCart,
      title: t("expertise.eprocurement_title"),
      description: t("expertise.eprocurement_desc"),
      image: businessStrategyImage,
      color: "accent",
      features: [
        t("expertise.eprocurement_feature1"),
        t("expertise.eprocurement_feature2"),
        t("expertise.eprocurement_feature3"),
        t("expertise.eprocurement_feature4")
      ],
      link: "/expertise/eprocurement-mastery"
    },
    {
      icon: Globe2,
      title: t("expertise.intercultural_title"),
      description: t("expertise.intercultural_desc"),
      image: businessMeetingImage,
      color: "secondary",
      features: [
        t("expertise.intercultural_feature1"),
        t("expertise.intercultural_feature2"),
        t("expertise.intercultural_feature3"),
        t("expertise.intercultural_feature4")
      ],
      link: "/expertise/interkulturelle-integration"
    },
    {
      icon: Users2,
      title: t("expertise.leadership_title"),
      description: t("expertise.leadership_desc"),
      image: businessTeamImage,
      color: "primary",
      features: [
        t("expertise.leadership_feature1"),
        t("expertise.leadership_feature2"),
        t("expertise.leadership_feature3"),
        t("expertise.leadership_feature4")
      ],
      link: "/expertise/leadership-und-transformation"
    }
  ];

  return (
    <section id="expertise" className="min-h-screen flex items-center py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="heading-section mb-6">
            {t("expertise.title")} <span className="text-primary">{t("expertise.title_highlight")}</span>
          </h2>
          <p className="text-premium max-w-3xl mx-auto">
            {t("expertise.subtitle")}
          </p>
        </div>

        <div className="space-y-16">
          {expertiseAreas.map((area, idx) => (
            <div 
              key={idx} 
              className={`group relative overflow-hidden rounded-3xl ${
                idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } flex flex-col lg:flex bg-card border border-border hover:border-${area.color}/30 transition-all duration-500 hover-lift`}
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-primary/20 to-transparent"></div>
              </div>

              {/* Image Side */}
              <div className="lg:w-1/2 relative overflow-hidden">
                <div className="aspect-[4/3] lg:aspect-auto lg:h-full relative">
                  <img 
                    src={area.image} 
                    alt={`${area.title} professional environment`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/20 to-background/40"></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute top-6 left-6 w-16 h-16 bg-card/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-premium">
                    <area.icon className={`w-8 h-8 text-${area.color}`} />
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {area.description}
                    </p>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {area.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full bg-${area.color} flex-shrink-0`}></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className={`group/btn hover:border-${area.color}/40 hover:text-${area.color}`}
                      asChild
                    >
                      <a href={area.link}>
                        {t("expertise.learn_more")}
                        <span className="ml-2 transform group-hover/btn:translate-x-1 transition-transform">→</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="max-w-2xl mx-auto glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t("expertise.cta_title")}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t("expertise.cta_subtitle")}
            </p>
            <Button variant="hero" size="xl" asChild>
              <a href="#kontakt">{t("expertise.cta_button")}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
