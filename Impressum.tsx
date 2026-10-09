import { Link } from "react-router-dom";
import { ArrowLeft, Mail, MapPin, Globe, FileText, Scale, AlertCircle, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import type { ReactNode } from "react";

const Block = ({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) => (
  <div className="bg-card border border-border rounded-2xl p-8">
    <div className="flex items-center space-x-3 mb-6">
      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">{icon}</div>
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
    </div>
    <div className="space-y-4 text-muted-foreground leading-relaxed">{children}</div>
  </div>
);

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Button variant="ghost" size="sm" asChild className="mb-8 text-muted-foreground hover:text-primary">
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Startseite
            </Link>
          </Button>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Scale className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Rechtliche Informationen</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-shift">Impressum</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl space-y-10">

            <Block icon={<FileText className="w-5 h-5 text-primary" />} title="Angaben gemäß § 5 DDG">
              <div className="space-y-1">
                <p className="font-semibold text-foreground text-lg">Rachid El Mokhi</p>
                <p>RAELDATA – Beratung für EDI und eProcurement</p>
                <p>Merkelbuckel 11</p>
                <p>77815 Bühl</p>
                <p>Deutschland</p>
              </div>
            </Block>

            <Block icon={<Mail className="w-5 h-5 text-primary" />} title="Kontakt">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>
                  E-Mail:{" "}
                  <a href="mailto:contact@raeldata.de" className="text-primary hover:underline">
                    contact@raeldata.de
                  </a>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-4 h-4 text-primary shrink-0" />
                <span>
                  Web:{" "}
                  <a href="https://raeldata.de" className="text-primary hover:underline">
                    raeldata.de
                  </a>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="w-4 h-4 text-primary shrink-0" />
                <span>
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/elmokhirachid/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    linkedin.com/in/elmokhirachid
                  </a>
                </span>
              </div>
            </Block>

            <Block
              icon={<MapPin className="w-5 h-5 text-primary" />}
              title="Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV"
            >
              <div className="space-y-1">
                <p className="text-foreground font-medium">Rachid El Mokhi</p>
                <p>Merkelbuckel 11</p>
                <p>77815 Bühl</p>
              </div>
            </Block>

            <Block icon={<Scale className="w-5 h-5 text-primary" />} title="Verbraucherstreitbeilegung">
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </Block>

            <Block icon={<AlertCircle className="w-5 h-5 text-primary" />} title="Haftungsausschluss">
              <div className="space-y-6 text-sm">
                <div>
                  <h3 className="text-foreground font-semibold mb-2">Haftung für Inhalte</h3>
                  <p>
                    Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die
                    Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch
                    keine Gewähr. Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten
                    nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet,
                    übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
                    Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach
                    den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung
                    ist erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                    Sobald uns entsprechende Rechtsverletzungen bekannt werden, entfernen wir diese
                    Inhalte umgehend.
                  </p>
                </div>

                <div>
                  <h3 className="text-foreground font-semibold mb-2">Haftung für Links</h3>
                  <p>
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
                    keinen Einfluss haben. Für diese fremden Inhalte können wir daher keine Gewähr
                    übernehmen; verantwortlich ist stets der jeweilige Anbieter oder Betreiber der
                    Seiten. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
                    Rechtsverstöße überprüft; rechtswidrige Inhalte waren zu diesem Zeitpunkt nicht
                    erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne
                    konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden
                    von Rechtsverletzungen entfernen wir derartige Links umgehend.
                  </p>
                </div>

                <div>
                  <h3 className="text-foreground font-semibold mb-2">Urheberrecht</h3>
                  <p>
                    Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                    unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung,
                    Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts
                    bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                    Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
                    Gebrauch gestattet. Soweit Inhalte auf dieser Seite nicht vom Betreiber erstellt
                    wurden, werden die Urheberrechte Dritter beachtet und entsprechend
                    gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
                    werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
                    Rechtsverletzungen entfernen wir derartige Inhalte umgehend.
                  </p>
                </div>
              </div>
            </Block>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impressum;
