import { AlertTriangle, TrendingDown, Shield, Users } from "lucide-react";

const ProblemsSection = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Systeme, die bei Wachstum kollabieren",
      description: "Fehlende Skalierbarkeit führt zu kritischen Ausfällen in entscheidenden Momenten"
    },
    {
      icon: AlertTriangle,
      title: "Prozesse, die nicht kompatibel sind",
      description: "Inkompatible Workflows blockieren die digitale Transformation"
    },
    {
      icon: Shield,
      title: "Daten, denen niemand traut",
      description: "Mangelnde Datenqualität untergräbt Entscheidungsfindung und Compliance"
    },
    {
      icon: Users,
      title: "Kulturen, die nicht zueinander finden",
      description: "Interkulturelle Missverständnisse verzögern internationale Projekte"
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="heading-section mb-6">
            Die Lücken, die <span className="text-primary">niemand schließt</span> – bis jetzt
          </h2>
          <p className="text-premium">
            Digitale Beschaffung und EDI sind zum Pflichtprogramm geworden. Doch während alle von Integration sprechen, 
            redet fast niemand über das, was Projekte wirklich scheitern lässt:
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
          <div className="glass-effect rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Wir schließen genau diese Lücken
            </h3>
            <p className="text-lg text-primary font-medium">
              strategisch • skalierbar • nachhaltig
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;