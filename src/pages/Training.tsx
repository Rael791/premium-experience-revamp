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
import { t } from "@/i18n";

/* ------------------------------------------------------------------
 * PREISE & EINSTELLUNGEN – hier zentral anpassen
 * ------------------------------------------------------------------ */
const BOOKING_EMAIL = "contact@raeldata.de";
// Deutschland (raeldata.de) in Euro – Marokko (raeldata.com) in Dirham
const PRICE_COURSE = t({ de: "890 €", fr: "3 900 MAD" }); // Kompaktkurs, 2 × 4 Std., pro Person
const PRICE_MODULE = t({ de: "490 €", fr: "2 200 MAD" }); // Einzelmodul, 4 Std., pro Person
const PRICE_COACHING = t({ de: "160 €", fr: "750 MAD" }); // 1:1-Coaching pro Stunde
const PRICE_INHOUSE = t({ de: "ab 2.900 €", fr: "dès 12 000 MAD" }); // Firmenschulung, 8 Std., bis 8 Teilnehmende
const PRICE_NOTE = t({ de: "Preise pro Person, netto", fr: "Prix HT par personne" });

const courses = t({
  de: [
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
],
  fr: [
  {
    id: "edi-grundlagen",
    icon: FileText,
    title: "Les fondamentaux de l'EDI",
    level: "Débutant",
    description:
      "Une introduction compacte à l'échange de données informatisé – claire, concrète et sans jargon.",
    topics: [
      "Comment fonctionne l'EDI : standards, messages, partenaires",
      "EDIFACT & X12 : lire et comprendre ORDERS, DESADV, INVOIC",
      "Canaux de transmission : AS2, OFTP2, SFTP, VAN",
      "Les erreurs fréquentes au quotidien et comment les identifier",
    ],
  },
  {
    id: "edi-praxis",
    icon: Network,
    title: "EDI en pratique & intégration des partenaires",
    level: "Avancé",
    description:
      "Pour celles et ceux qui mettent en place ou gèrent des flux EDI et connectent fournisseurs et clients.",
    topics: [
      "Intégration d'un partenaire étape par étape",
      "Logique de mapping, phases de test et mise en production",
      "Monitoring, analyse des erreurs et escalade",
      "Bonnes pratiques issues de projets réels",
    ],
  },
  {
    id: "eprocurement",
    icon: ShoppingCart,
    title: "eProcurement & plateformes B2B",
    level: "Débutant à avancé",
    description:
      "Comprendre les achats digitaux et maîtriser les plateformes B2B – côté acheteur comme côté fournisseur.",
    topics: [
      "Catalogues électroniques : BMEcat, gestion du contenu et des prix",
      "Punchout (OCI, cXML) et connexion aux ERP",
      "Panorama des plateformes : SAP Ariba, Coupa, Jaggaer & co.",
      "Intégration des fournisseurs et optimisation des processus",
    ],
  },
  {
    id: "e-facture-maroc",
    icon: Receipt,
    title: "Facture électronique au Maroc",
    level: "Tous niveaux",
    description:
      "La nouvelle obligation de facturation électronique au Maroc expliquée simplement – avec des étapes concrètes pour votre entreprise.",
    topics: [
      "Cadre légal, calendrier et entreprises concernées",
      "Le modèle de validation en temps réel par la DGI",
      "Formats structurés UBL et CII, signature électronique",
      "Adapter vos processus, votre ERP et vos échanges avec les partenaires",
    ],
  },
],
});

const formats = t({
  de: [
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
],
  fr: [
  {
    id: "abend",
    icon: Moon,
    title: "Format après le travail",
    time: "2 soirées, de 18h00 à 22h00",
    description: "Se former après le travail – sans jour de congé ni absence au bureau.",
  },
  {
    id: "samstag",
    icon: Sun,
    title: "Format samedi matin",
    time: "2 samedis, de 9h00 à 13h00",
    description: "Une matinée concentrée le samedi – l'après-midi vous appartient.",
  },
  {
    id: "wunsch",
    icon: CalendarCheck,
    title: "Date sur mesure",
    time: "Selon vos disponibilités",
    description: "Pour les équipes et les formations intra-entreprise – nous nous adaptons à votre agenda.",
  },
],
});

const bookingTypes = t({
  de: ["Kompaktkurs (2 × 4 Std.)", "Einzelmodul (4 Std.)", "1:1-Coaching", "Firmenschulung"],
  fr: ["Formation complète (2 × 4 h)", "Module (4 h)", "Coaching individuel", "Formation intra-entreprise"],
});

const selectClass =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

const Training = () => {
  const [form, setForm] = useState({
    course: courses[0].title,
    format: formats[0].title,
    booking: bookingTypes[0],
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
    const subject = t({
      de: `Schulungsbuchung: ${form.course} – ${form.format}`,
      fr: `Réservation de formation : ${form.course} – ${form.format}`,
    });
    const body = t({
      de: [
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
      ],
      fr: [
        "Bonjour,",
        "",
        "Je souhaite réserver la formation suivante :",
        "",
        `Formation : ${form.course}`,
        `Format : ${form.format}`,
        `Type de réservation : ${form.booking}`,
        `Date de début souhaitée : ${form.start || "flexible"}`,
        `Participants : ${form.participants}`,
        "",
        `Nom : ${form.name}`,
        `Entreprise : ${form.company}`,
        `E-mail : ${form.email}`,
        `Téléphone : ${form.phone || "-"}`,
        "",
        form.message ? `Message : ${form.message}` : "",
        "",
        "Je confirme réserver cette formation pour le compte d'une entreprise.",
      ],
    })
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
              {t({ de: "Zurück zur Startseite", fr: "Retour à l'accueil" })}
            </Link>
          </Button>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">{t({ de: "Training & Schulungen", fr: "Formations" })}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t({ de: "EDI & eProcurement lernen –", fr: "Se former à l'EDI et à l'eProcurement –" })}<br />
              <span className="gradient-shift">{t({ de: "dann, wenn es Ihnen passt.", fr: "quand cela vous convient." })}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              {t({
                de: "Live-Schulungen per Zoom in kompakten 4-Stunden-Blöcken: nach Feierabend oder am Samstagmorgen. Praxiswissen aus über 10 Jahren Projekterfahrung – ohne dafür einen ganzen Arbeitstag zu blockieren.",
                fr: "Des formations en direct sur Zoom, en sessions compactes de 4 heures : après le travail ou le samedi matin. Un savoir-faire tiré de plus de 10 ans de projets en Allemagne et à l'international – sans bloquer une journée de travail entière.",
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#buchen">{t({ de: "Schulung buchen", fr: "Réserver une formation" })}</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#kurse">{t({ de: "Kurse ansehen", fr: "Voir les formations" })}</a>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
              {[
                { icon: Video, text: t({ de: "Live per Zoom", fr: "En direct sur Zoom" }) },
                { icon: Clock, text: t({ de: "4-Stunden-Blöcke", fr: "Sessions de 4 heures" }) },
                { icon: Users, text: t({ de: "Max. 8 Teilnehmende", fr: "8 participants max." }) },
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t({ de: "Flexible Formate", fr: "Des formats flexibles" })}</h2>
            <p className="text-muted-foreground text-lg">
              {t({ de: "Jeder Kurs umfasst 8 Stunden, aufgeteilt in zwei Blöcke à 4 Stunden. Sie wählen, wann.", fr: "Chaque formation dure 8 heures, réparties en deux sessions de 4 heures. Vous choisissez quand." })}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t({ de: "Kursangebot", fr: "Nos formations" })}</h2>
            <p className="text-muted-foreground text-lg">
              {t({ de: "Praxisnah, mit echten Beispielen und Raum für Ihre Fragen aus dem Arbeitsalltag.", fr: "Concrètes, avec des exemples réels et du temps pour vos questions du quotidien." })}
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
                    <div className="text-xs text-muted-foreground">{t({ de: "8 Std.", fr: "8 h" })} · {PRICE_NOTE}</div>
                  </div>
                  <Button variant="premium" asChild>
                    <a href="#buchen" onClick={() => set("course", c.title)}>
                      {t({ de: "Buchen", fr: "Réserver" })}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t({ de: "Preise", fr: "Tarifs" })}</h2>
            <p className="text-muted-foreground text-lg">{t({ de: "Transparent und ohne versteckte Kosten.", fr: "Transparents et sans frais cachés." })}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: GraduationCap,
                title: t({ de: "Kompaktkurs", fr: "Formation complète" }),
                price: PRICE_COURSE,
                unit: t({ de: "pro Person", fr: "par personne" }),
                points: t({
                  de: ["2 × 4 Std. live per Zoom", "Unterlagen & Teilnahmebescheinigung", "Abend- oder Samstagsformat"],
                  fr: ["2 × 4 h en direct sur Zoom", "Supports & attestation de participation", "Format soirée ou samedi"],
                }),
                highlight: true,
              },
              {
                icon: Clock,
                title: t({ de: "Einzelmodul", fr: "Module" }),
                price: PRICE_MODULE,
                unit: t({ de: "pro Person", fr: "par personne" }),
                points: t({
                  de: ["1 × 4 Std. zu einem Schwerpunkt", "Ideal zum Auffrischen", "Abend- oder Samstagsformat"],
                  fr: ["1 × 4 h sur un thème précis", "Idéal pour une remise à niveau", "Format soirée ou samedi"],
                }),
              },
              {
                icon: UserRound,
                title: t({ de: "1:1-Coaching", fr: "Coaching individuel" }),
                price: PRICE_COACHING,
                unit: t({ de: "pro Stunde", fr: "de l'heure" }),
                points: t({
                  de: ["Individuell zu Ihren Fragen", "Termin nach Absprache", "Mindestbuchung 2 Std."],
                  fr: ["Centré sur vos questions", "Date selon vos disponibilités", "Minimum 2 heures"],
                }),
              },
              {
                icon: Building2,
                title: t({ de: "Firmenschulung", fr: "Formation intra-entreprise" }),
                price: PRICE_INHOUSE,
                unit: t({ de: "pro Gruppe, 8 Std.", fr: "par groupe, 8 h" }),
                points: t({
                  de: ["Bis 8 Teilnehmende", "Inhalte auf Ihr Unternehmen zugeschnitten", "Wunschtermin"],
                  fr: ["Jusqu'à 8 participants", "Contenu adapté à votre entreprise", "Date sur mesure"],
                }),
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
            {PRICE_NOTE}.{" "}
            {t({
              de: "Das Angebot richtet sich ausschließlich an Unternehmen. Offene Kurse finden ab 3 Teilnehmenden statt.",
              fr: "Offre réservée aux entreprises. Les sessions inter-entreprises ont lieu à partir de 3 participants. Horaires indiqués à l'heure du Maroc.",
            })}
          </p>
        </div>
      </section>

      {/* Buchung */}
      <section id="buchen" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t({ de: "Schulung buchen", fr: "Réserver une formation" })}</h2>
              <p className="text-muted-foreground text-lg">
                {t({ de: "Wählen Sie Kurs und Format. Sie erhalten innerhalb von 24 Stunden eine Bestätigung mit den konkreten Terminen und dem Zoom-Link.", fr: "Choisissez la formation et le format. Vous recevez sous 24 heures une confirmation avec les dates précises et le lien Zoom." })}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t({ de: "Kurs", fr: "Formation" })} *</label>
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
                  <label className="text-sm font-medium">{t({ de: "Buchungsart", fr: "Type de réservation" })} *</label>
                  <select className={selectClass} value={form.booking} onChange={(e) => set("booking", e.target.value)}>
                    {bookingTypes.map((b) => (
                      <option key={b}>{b}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t({ de: "Gewünschter Start", fr: "Date de début souhaitée" })}</label>
                  <Input type="date" value={form.start} onChange={(e) => set("start", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t({ de: "Teilnehmende", fr: "Participants" })} *</label>
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
                  <label className="text-sm font-medium">{t({ de: "Unternehmen", fr: "Entreprise" })} *</label>
                  <Input required value={form.company} onChange={(e) => set("company", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t({ de: "Name", fr: "Nom" })} *</label>
                  <Input required value={form.name} onChange={(e) => set("name", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">E-Mail *</label>
                  <Input type="email" required value={form.email} onChange={(e) => set("email", e.target.value)} />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium">{t({ de: "Telefon", fr: "Téléphone" })}</label>
                  <Input type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium">{t({ de: "Nachricht", fr: "Message" })}</label>
                  <Textarea
                    rows={4}
                    placeholder={t({ de: "z. B. Vorkenntnisse, Schwerpunkte, Wunschtermine", fr: "ex. niveau, thèmes prioritaires, dates souhaitées" })}
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
                  {t({ de: "Ich buche die Schulung für ein Unternehmen und habe die", fr: "Je réserve pour le compte d'une entreprise et j'ai lu la" })}{" "}
                  <Link to="/datenschutz" className="text-primary hover:underline">
                    {t({ de: "Datenschutzerklärung", fr: "politique de confidentialité" })}
                  </Link>
                  {t({ de: " gelesen.", fr: "." })} *
                </span>
              </label>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                {t({ de: "Buchungsanfrage senden", fr: "Envoyer la demande de réservation" })}
              </Button>

              {sent && (
                <p className="text-sm text-center text-muted-foreground">
                  {t({
                    de: "Ihr E-Mail-Programm wurde geöffnet. Bitte senden Sie die vorbereitete E-Mail ab. Falls sich nichts geöffnet hat, schreiben Sie uns direkt an",
                    fr: "Votre messagerie s'est ouverte. Veuillez envoyer l'e-mail préparé. Si rien ne s'est ouvert, écrivez-nous directement à",
                  })}{" "}
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
