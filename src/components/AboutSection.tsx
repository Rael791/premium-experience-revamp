import { Button } from "@/components/ui/button";
import { Globe, Award, Target, Eye } from "lucide-react";
import aboutBackground from "@/assets/about-background.jpg";
import { t } from "@/i18n";

const AboutSection = () => {
  return (
    <section 
      id="ueber-uns" 
      className="min-h-screen flex items-center py-24 relative"
      style={{
        backgroundImage: `url(${aboutBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Company Introduction */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="heading-section mb-6">
              {t({ de: "Wer wir sind", fr: "Qui sommes-nous" })}
            </h2>
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-primary mb-8">{t({ de: "Wir sind RAELDATA", fr: "Nous sommes RAELDATA" })}</h3>
              <p className="text-premium leading-relaxed">
                {t({
                  de: "eine Boutique-Beratung, die Technologie, Management-Exzellenz und kulturelle Intelligenz zu einer Einheit formt. Gegründet von einem Experten mit über zehn Jahren Erfahrung in EDI, eProcurement und internationalem Projektmanagement, gestählt in der Schnittmenge von IT, Einkauf, Logistik und C-Level-Strategie.",
                  fr: "un cabinet de conseil spécialisé qui réunit technologie, excellence managériale et intelligence culturelle. Fondé par un expert fort de plus de dix ans d'expérience en EDI, eProcurement et gestion de projets internationaux en Allemagne, à la croisée de l'IT, des achats, de la logistique et de la stratégie de direction.",
                })}
              </p>
            </div>
          </div>

          {/* Geographic Reach */}
          <div className="glass-effect rounded-2xl p-8 mb-16 text-center animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
              <Globe className="w-12 h-12 text-primary" />
            </div>
            <p className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
              {t({ de: "Unsere Arbeit reicht von der", fr: "Notre activité s'étend de la" })}{" "}
              <span className="text-primary font-semibold">{t({ de: "DACH-Region", fr: "région DACH (Allemagne, Autriche, Suisse)" })}</span>{" "}
              {t({ de: "bis in die", fr: "jusqu'au" })}{" "}
              <span className="text-accent font-semibold">{t({ de: "GCC-Staaten", fr: "Maroc et aux pays du Golfe" })}</span>{" "}
              {t({ de: "– und verbindet deutsche Präzision mit internationaler Weitsicht.", fr: "– en alliant la rigueur allemande à une vision internationale." })}
            </p>
            <div className="mt-6 text-primary font-medium">
              {t({ de: "Wir sprechen vier Sprachen fließend: Technologie, Wirtschaft, Kultur und Führung.", fr: "Nous parlons couramment quatre langues : technologie, business, culture et leadership." })}
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-card p-8 hover-lift border border-primary/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl transform translate-x-16 -translate-y-16"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {t({
                    de: "Wir befähigen Unternehmen, ihre digitale Beschaffung so zu gestalten, dass sie nicht nur funktioniert, sondern strategische Vorteile schafft – über Märkte, Systeme und Kulturen hinweg.",
                    fr: "Nous aidons les entreprises à concevoir des achats digitaux qui ne se contentent pas de fonctionner, mais qui créent un véritable avantage stratégique – au-delà des marchés, des systèmes et des cultures.",
                  })}
                </p>
                <div className="mt-6 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <p className="text-primary font-medium">{t({ de: "Strategische Vorteile durch digitale Excellence", fr: "L'avantage stratégique par l'excellence digitale" })}</p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-card p-8 hover-lift border border-accent/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl transform translate-x-16 -translate-y-16"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 text-accent mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {t({
                    de: "Eine Geschäftswelt, in der EDI und eProcurement nicht als technische Pflicht, sondern als Hebel für globale Wettbewerbsfähigkeit gesehen werden – und in der kulturelle Intelligenz genauso selbstverständlich ist wie Systemintegration.",
                    fr: "Un monde des affaires où l'EDI et l'eProcurement ne sont plus perçus comme une contrainte technique, mais comme un levier de compétitivité internationale – et où l'intelligence culturelle est aussi naturelle que l'intégration des systèmes.",
                  })}
                </p>
                <div className="mt-6 p-4 bg-accent/5 rounded-lg border-l-4 border-accent">
                  <p className="text-accent font-medium">{t({ de: "Globale Wettbewerbsfähigkeit durch kulturelle Intelligenz", fr: "La compétitivité internationale par l'intelligence culturelle" })}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Differentiators */}
          <div className="mt-16 text-center animate-fade-in-up">
            <h3 className="text-2xl font-bold text-foreground mb-8">{t({ de: "Was uns unterscheidet", fr: "Ce qui nous distingue" })}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t({
                de: [
                  "Wir bauen strukturierte EDI-Architekturen, keine Workarounds",
                  "Wir sprechen System, Prozess und Mensch gleichzeitig",
                  "Wir navigieren souverän zwischen Compliance, Technik und Kultur",
                  "Wir kombinieren Fachintelligenz mit internationalem Taktgefühl",
                ],
                fr: [
                  "Nous construisons des architectures EDI structurées, pas des solutions de contournement",
                  "Nous parlons à la fois le langage des systèmes, des processus et des personnes",
                  "Nous naviguons avec aisance entre conformité, technique et culture",
                  "Nous allions expertise métier et sensibilité internationale",
                ],
              }).map((point, idx) => (
                <div key={idx} className="glass-effect rounded-lg p-6 hover-lift group">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Award className="w-4 h-4 text-background" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-hero rounded-2xl p-8 text-background">
              <h3 className="text-2xl font-bold mb-4">{t({ de: "RAELDATA ist nicht Add-on, sondern Grundlage.", fr: "RAELDATA n'est pas un complément, mais un socle." })}</h3>
              <p className="text-lg mb-6 opacity-90">{t({ de: "Für resiliente, digitale und globale Lieferketten.", fr: "Pour des chaînes d'approvisionnement résilientes, digitales et globales." })}</p>
              <Button variant="outline" size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
                <a href="/philosophie">{t({ de: "Mehr über unsere Philosophie erfahren", fr: "Découvrir notre philosophie" })}</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
