import { AlertTriangle, TrendingDown, Shield, Users } from "lucide-react";
import { t } from "@/i18n";

const ProblemsSection = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: t({ de: "Systeme, die bei Wachstum kollabieren", fr: "Des systèmes qui cèdent face à la croissance" }),
      description: t({ de: "Fehlende Skalierbarkeit führt zu kritischen Ausfällen in entscheidenden Momenten", fr: "Le manque d'évolutivité provoque des pannes critiques aux moments décisifs" })
    },
    {
      icon: AlertTriangle,
      title: t({ de: "Prozesse, die nicht kompatibel sind", fr: "Des processus incompatibles" }),
      description: t({ de: "Inkompatible Workflows blockieren die digitale Transformation", fr: "Des workflows incompatibles freinent la transformation digitale" })
    },
    {
      icon: Shield,
      title: t({ de: "Daten, denen niemand traut", fr: "Des données auxquelles personne ne se fie" }),
      description: t({ de: "Mangelnde Datenqualität untergräbt Entscheidungsfindung und Compliance", fr: "Une qualité de données insuffisante fragilise les décisions et la conformité" })
    },
    {
      icon: Users,
      title: t({ de: "Kulturen, die nicht zueinander finden", fr: "Des cultures qui ne se comprennent pas" }),
      description: t({ de: "Interkulturelle Missverständnisse verzögern internationale Projekte", fr: "Les malentendus interculturels retardent les projets internationaux" })
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="heading-section mb-6">
            {t({ de: "Die Lücken, die", fr: "Les failles que" })} <span className="text-primary">{t({ de: "niemand schließt", fr: "personne ne comble" })}</span> {t({ de: "– bis jetzt", fr: "– jusqu'à maintenant" })}
          </h2>
          <p className="text-premium">
            {t({
              de: "Digitale Beschaffung und EDI sind zum Pflichtprogramm geworden. Doch während alle von Integration sprechen, redet fast niemand über das, was Projekte wirklich scheitern lässt:",
              fr: "Les achats digitaux et l'EDI sont devenus incontournables. Mais si tout le monde parle d'intégration, presque personne ne parle de ce qui fait réellement échouer les projets :",
            })}
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
                {t({ de: "Wir schließen genau diese Lücken", fr: "Nous comblons précisément ces failles" })}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {t({ de: ["strategisch", "skalierbar", "nachhaltig"], fr: ["stratégique", "évolutif", "durable"] }).map((word, idx) => (
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