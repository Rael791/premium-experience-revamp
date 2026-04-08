import { Link } from "react-router-dom";
import { ArrowLeft, Mail, MapPin, Globe, Phone, FileText, Scale, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
            <p className="text-muted-foreground text-lg">
              Angaben gemäß § 5 TMG (Telemediengesetz)
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl space-y-10">

            {/* Anbieter */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Anbieter</h2>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p className="font-semibold text-foreground text-lg">IQONIQ / RSL INTEGRATE</p>
                <p>Rachid S. L.</p>
                <p>[Straße und Hausnummer]</p>
                <p>[PLZ Ort], Deutschland</p>
              </div>
            </div>

            {/* Kontakt */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Kontakt</h2>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <span>
                    E-Mail:{" "}
                    <a
                      href="mailto:hello@rsl-integrate.com"
                      className="text-primary hover:underline"
                    >
                      hello@rsl-integrate.com
                    </a>
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Globe className="w-4 h-4 text-primary shrink-0" />
                  <span>
                    Web:{" "}
                    <a
                      href="https://globaledata.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      globaledata.de
                    </a>
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <span>Telefon: [Telefonnummer einfügen]</span>
                </div>
              </div>
            </div>

            {/* Steuerliche Angaben */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Scale className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Steuerliche Angaben</h2>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <div>
                  <span className="text-foreground font-medium">Umsatzsteuer-Identifikationsnummer</span>
                  <p className="mt-1">gemäß § 27a UStG: [USt-IdNr. einfügen]</p>
                </div>
                <div>
                  <span className="text-foreground font-medium">Steuernummer</span>
                  <p className="mt-1">[Steuernummer einfügen]</p>
                </div>
                <div>
                  <span className="text-foreground font-medium">Zuständiges Finanzamt</span>
                  <p className="mt-1">Finanzamt [Ort einfügen]</p>
                </div>
              </div>
            </div>

            {/* Berufsrechtliche Angaben (optional für Berater) */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Tätigkeitsbeschreibung</h2>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  IQONIQ / RSL INTEGRATE ist eine Boutique-Unternehmensberatung mit Spezialisierung auf
                  EDI Excellence, eProcurement Mastery und interkulturelle Integration. Die Tätigkeit
                  umfasst strategische IT-Beratung, Prozessoptimierung sowie die Implementierung
                  elektronischer Datenaustausch- und Beschaffungslösungen für Unternehmen im DACH-Raum
                  und international.
                </p>
              </div>
            </div>

            {/* Verantwortlich für den Inhalt */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">
                  Verantwortlich für den Inhalt
                </h2>
              </div>
              <div className="space-y-1 text-muted-foreground">
                <p className="text-foreground font-medium">Rachid S. L.</p>
                <p>[Straße und Hausnummer]</p>
                <p>[PLZ Ort], Deutschland</p>
                <p className="mt-2 text-sm">
                  (gemäß § 18 Abs. 2 MStV)
                </p>
              </div>
            </div>

            {/* Haftungsausschluss */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Haftungsausschluss</h2>
              </div>

              <div className="space-y-6 text-muted-foreground text-sm leading-relaxed">
                <div>
                  <h3 className="text-foreground font-semibold mb-2">Haftung für Inhalte</h3>
                  <p>
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
                    Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine
                    Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
                    Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
                    bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte
                    oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
                    forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                </div>

                <div>
                  <h3 className="text-foreground font-semibold mb-2">Haftung für Links</h3>
                  <p>
                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir
                    keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
                    Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
                    Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden
                    zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
                    Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
                    inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
                    einer Rechtsverletzung nicht zumutbar.
                  </p>
                </div>

                <div>
                  <h3 className="text-foreground font-semibold mb-2">Urheberrecht</h3>
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                    unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                    Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts
                    bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                    Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
                    Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber
                    erstellt wurden, werden die Urheberrechte Dritter beachtet.
                  </p>
                </div>

                <div>
                  <h3 className="text-foreground font-semibold mb-2">Streitschlichtung</h3>
                  <p>
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
                    bereit:{" "}
                    <a
                      href="https://ec.europa.eu/consumers/odr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      https://ec.europa.eu/consumers/odr/
                    </a>
                    . Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder
                    verpflichtet, an Streitbeilegungsverfahren vor einer
                    Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>
              </div>
            </div>

            {/* Stand */}
            <p className="text-sm text-muted-foreground text-right">
              Stand: {new Date().toLocaleDateString("de-DE", { month: "long", year: "numeric" })}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impressum;
