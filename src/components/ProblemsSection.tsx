import { useTranslation } from "react-i18next";
import { AlertTriangle, TrendingDown, Shield, Users } from "lucide-react";

const ProblemsSection = () => {
  const { t } = useTranslation();

  const problems = [
    {
      icon: TrendingDown,
      title: t("problems.problem1_title"),
      description: t("problems.problem1_desc")
    },
    {
      icon: AlertTriangle,
      title: t("problems.problem2_title"),
      description: t("problems.problem2_desc")
    },
    {
      icon: Shield,
      title: t("problems.problem3_title"),
      description: t("problems.problem3_desc")
    },
    {
      icon: Users,
      title: t("problems.problem4_title"),
      description: t("problems.problem4_desc")
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="heading-section mb-6">
            {t("problems.title")} <span className="text-primary">{t("problems.title_highlight")}</span> {t("problems.title_end")}
          </h2>
          <p className="text-premium">
            {t("problems.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, idx) => (
            <div 
              key={idx} 
              className="group bg-card rounded-xl p-8 hover-lift border border-border hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <problem.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in-up">
          <div className="relative overflow-hidden bg-gradient-hero rounded-2xl p-12 max-w-3xl mx-auto border border-primary/20 shadow-premium">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-background mb-6 drop-shadow-lg">
                {t("problems.cta_title")}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[t("problems.cta_word1"), t("problems.cta_word2"), t("problems.cta_word3")].map((word, idx) => (
                  <span 
                    key={idx}
                    className="inline-block bg-background/20 backdrop-blur-sm text-background font-bold text-xl px-6 py-3 rounded-full border border-background/30 shadow-lg"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
