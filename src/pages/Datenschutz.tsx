import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck, Server, Info, Database } from "lucide-react";
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
    <div className="space-y-6 text-muted-foreground text-sm leading-relaxed">{children}</div>
  </div>
);

const Sub = ({ title, children }: { title: string; children: ReactNode }) => (
  <div>
    <h3 className="text-foreground font-semibold mb-2">{title}</h3>
    <div className="space-y-3">{children}</div>
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
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl space-y-10">

            {/* 1 */}
            <Block icon={<Info className="w-5 h-5 text-primary" />} title="1. Datenschutz auf einen Blick">
              <Sub title="Allgemeine Hinweise">
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                  personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                  Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                  Ausführliche Informationen finden Sie in den folgenden Abschnitten.
                </p>
              </Sub>
              <Sub title="Datenerfassung auf dieser Website">
                <p>
                  <span className="text-foreground font-medium">Wer ist verantwortlich?</span> Die
                  Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
                  Kontaktdaten finden Sie im Abschnitt „Hinweis zur verantwortlichen Stelle“.
                </p>
                <p>
                  <span className="text-foreground font-medium">Wie erfassen wir Ihre Daten?</span>{" "}
                  Zum einen dadurch, dass Sie uns Daten mitteilen, etwa per E-Mail oder über das
                  Kontaktformular. Zum anderen werden beim Besuch der Website automatisch technische
                  Daten erfasst (z. B. Browser, Betriebssystem, Uhrzeit des Seitenaufrufs).
                </p>
                <p>
                  <span className="text-foreground font-medium">Wofür nutzen wir Ihre Daten?</span>{" "}
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
                  gewährleisten. Andere Daten nutzen wir ausschließlich zur Bearbeitung Ihrer
                  Anfragen. Eine Analyse Ihres Surfverhaltens findet nicht statt.
                </p>
                <p>
                  <span className="text-foreground font-medium">Welche Rechte haben Sie?</span> Sie
                  haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung
                  der Verarbeitung Ihrer Daten sowie ein Beschwerderecht bei der zuständigen
                  Aufsichtsbehörde. Details finden Sie in Abschnitt 3.
                </p>
              </Sub>
            </Block>

            {/* 2 */}
            <Block icon={<Server className="w-5 h-5 text-primary" />} title="2. Hosting">
              <Sub title="Externes Hosting">
                <p>Diese Website wird bei einem externen Dienstleister gehostet:</p>
                <p className="text-foreground">
                  Hostinger International Ltd.
                  <br />
                  61 Lordou Vyronos, Lumiel Building, 4. Stock
                  <br />
                  6023 Larnaca, Zypern
                </p>
                <p>
                  Die beim Besuch der Website erfassten Daten werden auf den Servern des Hosters
                  gespeichert. Dies betrifft vor allem IP-Adressen und weitere technische Daten (siehe
                  „Server-Log-Dateien“). Der Einsatz des Hosters erfolgt im Interesse einer sicheren,
                  schnellen und effizienten Bereitstellung unseres Online-Angebots (Art. 6 Abs. 1
                  lit. f DSGVO). Der Hoster verarbeitet Ihre Daten nur, soweit dies zur Erfüllung
                  seiner Leistungspflichten erforderlich ist, und befolgt unsere Weisungen.
                </p>
              </Sub>
              <Sub title="Auftragsverarbeitung">
                <p>
                  Mit dem Hoster besteht ein Vertrag über Auftragsverarbeitung gemäß Art. 28 DSGVO.
                  Dieser stellt sicher, dass der Hoster die personenbezogenen Daten unserer
                  Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO
                  verarbeitet.
                </p>
              </Sub>
            </Block>

            {/* 3 */}
            <Block
              icon={<ShieldCheck className="w-5 h-5 text-primary" />}
              title="3. Allgemeine Hinweise und Pflichtinformationen"
            >
              <Sub title="Datenschutz">
                <p>
                  Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und behandeln sie
                  vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
                  Datenschutzerklärung. Wir weisen darauf hin, dass die Datenübertragung im Internet
                  (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
                  lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                </p>
              </Sub>

              <Sub title="Hinweis zur verantwortlichen Stelle">
                <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
                <p className="text-foreground">
                  Rachid El Mokhi – RAELDATA
                  <br />
                  Merkelbuckel 11
                  <br />
                  77815 Bühl
                  <br />
                  Telefon:{" "}
                  <a href="tel:+491629620582" className="text-primary hover:underline">
                    +49 162 9620582
                  </a>
                  <br />
                  E-Mail:{" "}
                  <a href="mailto:contact@raeldata.de" className="text-primary hover:underline">
                    contact@raeldata.de
                  </a>
                </p>
                <p>
                  Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
                  gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von
                  personenbezogenen Daten entscheidet.
                </p>
              </Sub>

              <Sub title="Speicherdauer">
                <p>
                  Soweit in dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wird,
                  verbleiben Ihre Daten bei uns, bis der Zweck der Verarbeitung entfällt. Machen Sie
                  ein berechtigtes Löschersuchen geltend oder widerrufen Sie eine Einwilligung, werden
                  Ihre Daten gelöscht, sofern keine anderen rechtlich zulässigen Gründe für die
                  Speicherung bestehen (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen).
                </p>
              </Sub>

              <Sub title="Widerruf Ihrer Einwilligung zur Datenverarbeitung">
                <p>
                  Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung
                  möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen; eine
                  formlose Mitteilung per E-Mail genügt. Die Rechtmäßigkeit der bis zum Widerruf
                  erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                </p>
              </Sub>

              <Sub title="Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)">
                <p className="uppercase text-xs tracking-wide">
                  Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO
                  erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen
                  Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch
                  einzulegen. Legen Sie Widerspruch ein, werden wir Ihre Daten nicht mehr
                  verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die
                  Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder
                  die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von
                  Rechtsansprüchen.
                </p>
                <p className="uppercase text-xs tracking-wide">
                  Werden Ihre Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht,
                  jederzeit Widerspruch gegen diese Verarbeitung einzulegen. Ihre Daten werden dann
                  nicht mehr zum Zwecke der Direktwerbung verwendet.
                </p>
              </Sub>

              <Sub title="Beschwerderecht bei der zuständigen Aufsichtsbehörde">
                <p>
                  Im Falle von Verstößen gegen die DSGVO steht Ihnen ein Beschwerderecht bei einer
                  Aufsichtsbehörde zu, insbesondere im Mitgliedstaat Ihres gewöhnlichen Aufenthalts,
                  Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes. Für uns zuständig
                  ist:
                </p>
                <p className="text-foreground">
                  Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit
                  Baden-Württemberg
                  <br />
                  Lautenschlagerstraße 20, 70173 Stuttgart
                </p>
              </Sub>

              <Sub title="Recht auf Datenübertragbarkeit">
                <p>
                  Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in
                  Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in
                  einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die
                  direkte Übertragung an einen anderen Verantwortlichen verlangen, erfolgt dies nur,
                  soweit es technisch machbar ist.
                </p>
              </Sub>

              <Sub title="Auskunft, Berichtigung und Löschung">
                <p>
                  Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
                  unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren
                  Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ggf. ein Recht auf
                  Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
                  personenbezogene Daten können Sie sich jederzeit an uns wenden.
                </p>
              </Sub>

              <Sub title="Recht auf Einschränkung der Verarbeitung">
                <p>
                  Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen
                  Daten zu verlangen. Dieses Recht besteht insbesondere in folgenden Fällen:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Sie bestreiten die Richtigkeit Ihrer bei uns gespeicherten Daten. Für die Dauer
                    der Überprüfung können Sie die Einschränkung verlangen.
                  </li>
                  <li>
                    Die Verarbeitung ist unrechtmäßig, Sie wünschen aber statt der Löschung eine
                    Einschränkung der Verarbeitung.
                  </li>
                  <li>
                    Wir benötigen Ihre Daten nicht mehr, Sie benötigen sie jedoch zur Ausübung,
                    Verteidigung oder Geltendmachung von Rechtsansprüchen.
                  </li>
                  <li>
                    Sie haben Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt und die Abwägung der
                    Interessen steht noch aus.
                  </li>
                </ul>
              </Sub>

              <Sub title="SSL- bzw. TLS-Verschlüsselung">
                <p>
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
                  vertraulicher Inhalte, etwa Anfragen an uns, eine SSL- bzw. TLS-Verschlüsselung.
                  Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers
                  mit „https://“ beginnt und ein Schloss-Symbol angezeigt wird.
                </p>
              </Sub>
            </Block>

            {/* 4 */}
            <Block icon={<Database className="w-5 h-5 text-primary" />} title="4. Datenerfassung auf dieser Website">
              <Sub title="Cookies und Analyse-Tools">
                <p>
                  Diese Website verwendet keine Cookies und setzt keine Analyse-, Tracking- oder
                  Marketing-Tools ein. Schriftarten und Bilder werden vom eigenen Server geladen; beim
                  Besuch der Website werden keine Verbindungen zu Servern Dritter (z. B. Google)
                  aufgebaut.
                </p>
              </Sub>

              <Sub title="Server-Log-Dateien">
                <p>
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in
                  sogenannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer-URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p>
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                  Die Erfassung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein
                  berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Sicherheit
                  unserer Website.
                </p>
              </Sub>

              <Sub title="Kontaktformular">
                <p>
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus
                  dem Formular inklusive der von Ihnen dort angegebenen Kontaktdaten (Name,
                  E-Mail-Adresse, ggf. Telefonnummer und Unternehmen, Thema, Nachricht und
                  Terminwunsch) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen
                  bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p>
                  Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre
                  Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
                  vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
                  Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der
                  an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
                <p>
                  Die von Ihnen eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung
                  auffordern, Ihre Einwilligung widerrufen oder der Zweck für die Datenspeicherung
                  entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende
                  gesetzliche Bestimmungen, insbesondere Aufbewahrungsfristen, bleiben unberührt.
                </p>
              </Sub>

              <Sub title="Anfrage per E-Mail oder Telefon">
                <p>
                  Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller
                  daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der
                  Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben
                  wir nicht ohne Ihre Einwilligung weiter. Rechtsgrundlagen und Speicherdauer
                  entsprechen den Angaben zum Kontaktformular.
                </p>
              </Sub>

              <Sub title="Links zu LinkedIn">
                <p>
                  Auf dieser Website befinden sich einfache Links zu unserem LinkedIn-Profil. Es
                  werden keine LinkedIn-Plugins eingebunden; beim bloßen Besuch dieser Website werden
                  keine Daten an LinkedIn übertragen. Erst wenn Sie auf einen Link klicken, gelangen
                  Sie zu LinkedIn (LinkedIn Ireland Unlimited Company, Wilton Place, Dublin 2,
                  Irland). Dort gilt deren Datenschutzerklärung.
                </p>
              </Sub>
            </Block>

            <p className="text-sm text-muted-foreground text-right">Stand: Oktober 2026</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Datenschutz;
