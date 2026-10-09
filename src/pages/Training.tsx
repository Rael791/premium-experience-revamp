import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  GraduationCap,
  Moon,
  Sun,
  Video,
  Users,
  Clock,
  CheckCircle2,
  FileText,
  ShoppingCart,
  Network,
  Receipt,
  CalendarCheck,
  Building2,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

/* ------------------------------------------------------------------
 * PREISE & EINSTELLUNGEN – hier zentral anpassen
 * ------------------------------------------------------------------ */
const BOOKING_EMAIL = "contact@raeldata.de";
const PRICE_COURSE = "890 €"; // Kompaktkurs, 2 × 4 Std., pro Person
const PRICE_MODULE = "490 €"; // Einzelmodul, 4 Std., pro Person
const PRICE_COACHING = "160 €"; // 1:1-Coaching pro Stunde
const PRICE_INHOUSE = "ab 2.900 €"; // Firmenschulung, 8 Std., bis 8 Teilnehmende
const PRICE_NOTE = "Preise pro Person, netto";

const courses = [
  {
    id: "edi-grundlagen",
    icon: FileText,
    title: "EDI Grundlagen",
    level: "Einsteiger",
    description:
      "Der kompakte Einstieg in den elektronischen Datenaustausch – verständlich, praxisnah und ohne Fachchinesisch.",
    topics: [
      "Wie EDI funktioniert: Standards, Nachrichten, Partner",
      "EDIFACT & X12: ORDERS, DESADV, INVOIC lesen und verstehen",
      "Übertragungswege: AS2, OFTP2, SFTP, VAN",
      "Typische Fehler im Tagesgeschäft und wie man sie findet",
    ],
  },
  {
    id: "edi-praxis",
    icon: Network,
    title: "EDI Praxis & Partner-Onboarding",
    level: "Fortgeschritten",
    description:
      "Für alle, die EDI-Verbindungen aufbauen, betreuen oder Lieferanten und Kunden anbinden.",
    topics: [
      "Partner-Onboarding Schritt für Schritt",
      "Mapping-Logik, Testphasen und Go-live",
      "Monitoring, Fehleranalyse und Eskalation",
      "Best Practices aus realen Projekten",
    ],
  },
  {
    id: "eprocurement",
    icon: ShoppingCart,
    title: "eProcurement & B2B-Plattformen",
    level: "Einsteiger bis Fortgeschritten",
    description:
      "Digitale Beschaffung verstehen und B2B-Plattformen sicher bedienen – aus Einkaufs- und Lieferantensicht.",
    topics: [
      "Kataloge: BMEcat, Content-Pflege und Preislogik",
      "Punchout (OCI, cXML) und Anbindung an ERP-Systeme",
      "Plattformen im Überblick: SAP Ariba, Coupa, Jaggaer & Co.",
      "Lieferanten-Enablement und Prozessoptimierung",
    ],
  },
  {
    id: "e-rechnung",
    icon: Receipt,
    title: "E-Rechnung im B2B",
    level: "Alle Level",
    description:
      "Die E-Rechnungspflicht in Deutschland verständlich erklärt – mit konkreten Schritten für Ihr Unternehmen.",
    topics: [
      "Gesetzliche Vorgaben und Fristen im Überblick",
      "XRechnung, ZUGFeRD und Peppol im Vergleich",
      "Empfang, Prüfung und Archivierung von E-Rechnungen",
      "Umsetzung in bestehende Prozesse und Systeme",
    ],
  },
];

const formats = [
  {
    id: "abend",
    icon: Moon,
    title: "Feierabend-Format",
    time: "2 Abende, je 18:00 – 22:00 Uhr",
    description: "Lernen nach der Arbeit – ohne Urlaubstag und ohne Ausfall im Tagesgeschäft.",
  },
  {
    id: "samstag",
    icon: Sun,
    title: "Samstags-Format",
    time: "2 Samstage, je 08:00 – 12:00 Uhr",
    description: "Konzentriert am Samstagmorgen – der Nachmittag gehört Ihnen.",
  },
  {
    id: "wunsch",
    icon: CalendarCheck,
    title: "Wunschtermin",
    time: "Termin nach Absprache",
    description: "Für Teams und Firmenschulungen – wir richten uns nach Ihrem Kalender.",
  },
];

const selectClass =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

const Training = () => {
  const [form, setForm] = useState({
    course: courses[0].title,
    format: formats[0].title,
    booking: "Kompaktkurs (2 × 4 Std.)",
    start: "",
    participants: "1",
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    b2b: false,
  });
  const [sent, setSent] = useState(false);

  const set = (field: string, value: string | boolean) => setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Schulungsbuchung: ${form.course} – ${form.format}`;
    const body = [
      "Guten Tag,",
      "",
      "hiermit möchte ich folgende Schulung verbindlich anfragen:",
      "",
      `Kurs: ${form.course}`,
      `Format: ${form.format}`,
      `Buchungsart: ${form.booking}`,
      `Gewünschter Start: ${form.start || "flexibel"}`,
      `Teilnehmende: ${form.participants}`,
      "",
      `Name: ${form.name}`,
      `Unternehmen: ${form.company}`,
      `E-Mail: ${form.email}`,
      `Telefon: ${form.phone || "-"}`,
      "",
      form.message ? `Nachricht: ${form.message}` : "",
      "",
      "Ich bestätige, dass ich die Schulung für ein Unternehmen buche.",
    ]
      .filter((l, i, arr) => !(l === "" && arr[i - 1] === ""))
      .join("\n");
    window.location.href = `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
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
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Training & Schulungen</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              EDI & eProcurement lernen –<br />
              <span className="gradient-shift">dann, wenn es Ihnen passt.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Live-Schulungen per Zoom in kompakten 4-Stunden-Blöcken: nach Feierabend oder am
              Samstagmorgen. Praxiswissen aus über 10 Jahren Projekterfahrung – ohne dafür einen
              ganzen Arbeitstag zu blockieren.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#buchen">Schulung buchen</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#kurse">Kurse ansehen</a>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
              {[
                { icon: Video, text: "Live per Zoom" },
                { icon: Clock, text: "4-Stunden-Blöcke" },
                { icon: Users, text: "Max. 8 Teilnehmende" },
              ].map((f) => (
                <div key={f.text} className="flex items-center space-x-3 text-muted-foreground">
                  <f.icon className="w-5 h-5 text-primary shrink-0" />
                  <span>{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formate */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Formate</h2>
            <p className="text-muted-foreground text-lg">
              Jeder Kurs umfasst 8 Stunden, aufgeteilt in zwei Blöcke à 4 Stunden. Sie wählen, wann.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {formats.map((f) => (
              <div key={f.id} className="bg-card border border-border rounded-2xl p-8 hover-lift">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-primary font-medium mb-3">{f.time}</p>
                <p className="text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kurse */}
      <section id="kurse" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kursangebot</h2>
            <p className="text-muted-foreground text-lg">
              Praxisnah, mit echten Beispielen und Raum für Ihre Fragen aus dem Arbeitsalltag.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {courses.map((c) => (
              <div key={c.id} className="bg-card border border-border rounded-2xl p-8 hover-lift flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <c.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1">
                    {c.level}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{c.title}</h3>
                <p className="text-muted-foreground mb-6">{c.description}</p>
                <ul className="space-y-3 mb-8">
                  {c.topics.map((t) => (
                    <li key={t} className="flex items-start space-x-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{t}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-border">
                  <div>
                    <div className="text-2xl font-bold">{PRICE_COURSE}</div>
                    <div className="text-xs text-muted-foreground">8 Std. · {PRICE_NOTE}</div>
                  </div>
                  <Button variant="premium" asChild>
                    <a href="#buchen" onClick={() => set("course", c.title)}>
                      Buchen
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preise */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Preise</h2>
            <p className="text-muted-foreground text-lg">Transparent und ohne versteckte Kosten.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: GraduationCap,
                title: "Kompaktkurs",
                price: PRICE_COURSE,
                unit: "pro Person",
                points: ["2 × 4 Std. live per Zoom", "Unterlagen & Teilnahmebescheinigung", "Abend- oder Samstagsformat"],
                highlight: true,
              },
              {
                icon: Clock,
                title: "Einzelmodul",
                price: PRICE_MODULE,
                unit: "pro Person",
                points: ["1 × 4 Std. zu einem Schwerpunkt", "Ideal zum Auffrischen", "Abend- oder Samstagsformat"],
              },
              {
                icon: UserRound,
                title: "1:1-Coaching",
                price: PRICE_COACHING,
                unit: "pro Stunde",
                points: ["Individuell zu Ihren Fragen", "Termin nach Absprache", "Mindestbuchung 2 Std."],
              },
              {
                icon: Building2,
                title: "Firmenschulung",
                price: PRICE_INHOUSE,
                unit: "pro Gruppe, 8 Std.",
                points: ["Bis 8 Teilnehmende", "Inhalte auf Ihr Unternehmen zugeschnitten", "Wunschtermin"],
              },
            ].map((p) => (
              <div
                key={p.title}
                className={`rounded-2xl p-8 border flex flex-col ${
                  p.highlight ? "bg-primary/5 border-primary/40" : "bg-card border-border"
                }`}
              >
                <p.icon className="w-6 h-6 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <div className="text-3xl font-bold mb-1">{p.price}</div>
                <div className="text-sm text-muted-foreground mb-6">{p.unit}</div>
                <ul className="space-y-2 text-sm">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            {PRICE_NOTE}. Das Angebot richtet sich ausschließlich an Unternehmen. Offene Kurse finden ab
            3 Teilnehmenden statt.
          </p>
        </div>
      </section>

      {/* Buchung */}
      <section id="buchen" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Schulung buchen</h2>
              <p className="text-muted-foreground text-lg">
                Wählen Sie Kurs und Format. Sie erhalten innerhalb von 24 Stunden eine Bestätigung mit
                den konkreten Terminen und dem Zoom-Link.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Kurs *</label>
                  <select className={selectClass} value={form.course} onChange={(e) => set("course", e.target.value)}>
                    {courses.map((c) => (
                      <option key={c.id}>{c.title}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Format *</label>
                  <select className={selectClass} value={form.format} onChange={(e) => set("format", e.target.value)}>
                    {formats.map((f) => (
                      <option key={f.id}>{f.title}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Buchungsart *</label>
                  <select className={selectClass} value={form.booking} onChange={(e) => set("booking", e.target.value)}>
                    <option>Kompaktkurs (2 × 4 Std.)</option>
                    <option>Einzelmodul (4 Std.)</option>
                    <option>1:1-Coaching</option>
                    <option>Firmenschulung</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Gewünschter Start</label>
                  <Input type="date" value={form.start} onChange={(e) => set("start", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Teilnehmende *</label>
                  <Input
                    type="number"
                    min={1}
                    max={8}
                    required
                    value={form.participants}
                    onChange={(e) => set("participants", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Unternehmen *</label>
                  <Input required value={form.company} onChange={(e) => set("company", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name *</label>
                  <Input required value={form.name} onChange={(e) => set("name", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">E-Mail *</label>
                  <Input type="email" required value={form.email} onChange={(e) => set("email", e.target.value)} />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium">Telefon</label>
                  <Input type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium">Nachricht</label>
                  <Textarea
                    rows={4}
                    placeholder="z. B. Vorkenntnisse, Schwerpunkte, Wunschtermine"
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                  />
                </div>
              </div>

              <label className="flex items-start space-x-3 text-sm text-muted-foreground cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={form.b2b}
                  onChange={(e) => set("b2b", e.target.checked)}
                  className="mt-1 accent-[hsl(var(--primary))]"
                />
                <span>
                  Ich buche die Schulung für ein Unternehmen und habe die{" "}
                  <Link to="/datenschutz" className="text-primary hover:underline">
                    Datenschutzerklärung
                  </Link>{" "}
                  gelesen. *
                </span>
              </label>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Buchungsanfrage senden
              </Button>

              {sent && (
                <p className="text-sm text-center text-muted-foreground">
                  Ihr E-Mail-Programm wurde geöffnet. Bitte senden Sie die vorbereitete E-Mail ab. Falls
                  sich nichts geöffnet hat, schreiben Sie uns direkt an{" "}
                  <a href={`mailto:${BOOKING_EMAIL}`} className="text-primary hover:underline">
                    {BOOKING_EMAIL}
                  </a>
                  .
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Training;
