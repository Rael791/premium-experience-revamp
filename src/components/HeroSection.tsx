import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-business-team.jpg";
import { t } from "@/i18n";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt={t({ de: "Business-Team bespricht EDI und digitale Transformation", fr: "Équipe en réunion sur l'EDI et la transformation digitale" })}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/60"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse delay-300"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 text-sm font-medium">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>{t({ de: "Boutique-Beratung für digitale Excellence", fr: "Conseil spécialisé en excellence digitale" })}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mt-20 mb-20">
            {t({ de: "Wir machen aus", fr: "Nous transformons" })} <br />
            <span className="text-primary">{t({ de: "Datenaustausch", fr: "l'échange de données" })}</span><br />
            {t({ de: "Geschäftsintelligenz.", fr: "en intelligence business." })}
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-20">
            {t({
              de: "Wenn EDI nicht nur laufen, sondern skalieren muss – ohne Ausfall, ohne Kompromisse. Strategische, skalierbare und nachhaltige Lösungen für globale Wettbewerbsfähigkeit.",
              fr: "Quand l'EDI ne doit pas seulement fonctionner, mais passer à l'échelle – sans interruption, sans compromis. Des solutions stratégiques, évolutives et durables pour votre compétitivité internationale.",
            })}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="#kontakt">
                {t({ de: "Strategisches Erstgespräch", fr: "Entretien stratégique" })}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="premium" size="xl" asChild>
              <a href="#expertise">{t({ de: "Unsere Expertise entdecken", fr: "Découvrir notre expertise" })}</a>
            </Button>
          </div>

          {/* Key Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 max-w-4xl mx-auto">
            {[
              { title: t({ de: "DACH → GCC", fr: "Europe → Maroc" }), desc: t({ de: "Internationale Projekterfahrung", fr: "Expérience de projets internationaux" }) },
              { title: t({ de: "10+ Jahre", fr: "10+ ans" }), desc: t({ de: "EDI & eProcurement Expertise", fr: "d'expertise EDI & eProcurement" }) },
              { title: t({ de: "4 Sprachen", fr: "4 langues" }), desc: t({ de: "Technologie, Wirtschaft, Kultur, Führung", fr: "Technologie, business, culture, leadership" }) }
            ].map((item, idx) => (
              <div key={idx} className="glass-effect rounded-lg p-6 hover-lift">
                <div className="text-2xl font-bold text-primary mb-2">{item.title}</div>
                <div className="text-muted-foreground">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
