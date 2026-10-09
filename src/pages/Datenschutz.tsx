import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck, Server, Mail, Link2, UserCheck, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import type { ReactNode } from "react";

/*
 * VORLAGE – vor dem Livegang prüfen:
 * - Alle Angaben in [eckigen Klammern] ersetzen.
 * - Adresse des Hosters mit dem Vertrag / der Datenschutzerklärung von Hostinger abgleichen.
 * - Falls später Analyse-Tools, Cookies, Google Fonts, Kalender- oder Formulardienste
 *   eingebunden werden, muss diese Erklärung ergänzt werden.
 * - Diese Vorlage ersetzt keine Rechtsberatung.
 */

const Block = ({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) => (
  <div className="bg-card border border-border rounded-2xl p-8">
    <div className="flex items-center space-x-3 mb-6">
      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">{icon}</div>
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
    </div>
    <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">{children}</div>
  </div>
);

const Datenschutz = () => {
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
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Rechtliche Informationen</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-shift">Datenschutzerklärung</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Informationen zur Verarbeitung personenbezogener Daten gemäß Art. 13 DSGVO
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl space-y-10">

            <Block icon={<UserCheck className="w-5 h-5 text-primary" />} title="1. Verantwortlicher">
              <div className="space-y-1">
                <p className="font-semibold text-foreground">RAELDATA</p>
                <p>[Vor- und Nachname]</p>
                <p>[Straße und Hausnummer]</p>
                <p>[PLZ Ort], Deutschland</p>
                <p>
                  E-Mail:{" "}
                  <a href="mailto:contact@raeldata.de" className="text-primary hover:underline">
                    contact@raeldata.de
                  </a>
                </p>
              </div>
              <p>
                Ein Datenschutzbeauftragter ist nicht bestellt, da hierzu keine gesetzliche
                Verpflichtung besteht.
              </p>
            </Block>

            <Block icon={<Server className="w-5 h-5 text-primary" />} title="2. Hosting und Server-Logfiles">
              <p>
                Diese Website wird bei folgendem Anbieter gehostet: Hostinger International Ltd.,
                [Anschrift laut Hostinger-Vertrag]. Mit dem Anbieter besteht ein Vertrag zur
                Auftragsverarbeitung gemäß Art. 28 DSGVO.
              </p>
              <p>
                Beim Aufruf der Website erfasst der Server automatisch Informationen, die Ihr Browser
                übermittelt: IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite,
                Referrer-URL, Browsertyp und -version sowie Betriebssystem. Diese Daten sind für die
                Auslieferung und die technische Sicherheit der Website erforderlich.
              </p>
              <p>
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in
                der stabilen und sicheren Bereitstellung der Website. Die Logfiles werden nach
                [Anzahl] Tagen gelöscht, sofern sie nicht zur Aufklärung eines Sicherheitsvorfalls
                benötigt werden.
              </p>
            </Block>

            <Block icon={<FileText className="w-5 h-5 text-primary" />} title="3. Cookies und Analyse">
              <p>
                Diese Website setzt keine Cookies zu Analyse- oder Marketingzwecken ein und verwendet
                keine Tracking-Tools. Schriftarten werden lokal vom eigenen Server geladen; es findet
                keine Verbindung zu Servern Dritter (z. B. Google Fonts) statt.
              </p>
            </Block>

            <Block icon={<Mail className="w-5 h-5 text-primary" />} title="4. Kontaktaufnahme">
              <p>
                Wenn Sie uns per E-Mail oder über das Kontaktformular kontaktieren, verarbeiten wir die
                von Ihnen angegebenen Daten (z. B. Name, E-Mail-Adresse, Telefonnummer, Unternehmen,
                Ihre Nachricht und gewünschte Terminzeiten), um Ihre Anfrage zu bearbeiten.
              </p>
              <p>
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit einem Vertrag
                oder vorvertraglichen Maßnahmen zusammenhängt, andernfalls Art. 6 Abs. 1 lit. f DSGVO
                (berechtigtes Interesse an der Beantwortung von Anfragen). Die Daten werden gelöscht,
                sobald die Anfrage abschließend bearbeitet ist und keine gesetzlichen
                Aufbewahrungspflichten entgegenstehen.
              </p>
            </Block>

            <Block icon={<Link2 className="w-5 h-5 text-primary" />} title="5. Links zu LinkedIn">
              <p>
                Auf dieser Website befinden sich einfache Links zu unserem LinkedIn-Profil. Es werden
                keine LinkedIn-Plugins eingebunden; beim bloßen Besuch dieser Website werden keine
                Daten an LinkedIn übertragen. Erst wenn Sie auf den Link klicken, gelangen Sie zu
                LinkedIn (LinkedIn Ireland Unlimited Company). Dort gilt deren Datenschutzerklärung.
              </p>
            </Block>

            <Block icon={<ShieldCheck className="w-5 h-5 text-primary" />} title="6. Ihre Rechte">
              <p>Sie haben jederzeit das Recht auf:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
                <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
                <li>Löschung (Art. 17 DSGVO)</li>
                <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>
                  Widerspruch gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
                  (Art. 21 DSGVO)
                </li>
              </ul>
              <p>
                Zur Ausübung Ihrer Rechte genügt eine formlose Nachricht an die oben genannte
                E-Mail-Adresse.
              </p>
              <p>
                Sie haben außerdem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu
                beschweren, z. B. beim Landesbeauftragten für den Datenschutz und die
                Informationsfreiheit Baden-Württemberg.
              </p>
            </Block>

            <Block icon={<Server className="w-5 h-5 text-primary" />} title="7. SSL-/TLS-Verschlüsselung">
              <p>
                Diese Website nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung. Eine
                verschlüsselte Verbindung erkennen Sie an „https://“ in der Adresszeile Ihres Browsers.
              </p>
            </Block>

            <p className="text-sm text-muted-foreground text-right">Stand: [Monat Jahr]</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Datenschutz;
