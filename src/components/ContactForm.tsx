import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Send, User, Mail, Phone, Building } from "lucide-react";
import { toast } from "sonner";
import { t } from "@/i18n";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    topic: "",
    message: "",
    preferredDate: "",
    preferredTime: ""
  });

  const [sent, setSent] = useState(false);
  const [privacy, setPrivacy] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = t({
      de: `Anfrage Erstgespräch: ${formData.topic || "Allgemein"} – ${formData.company}`,
      fr: `Demande d'entretien : ${formData.topic || "Général"} – ${formData.company}`,
    });
    const body = t({
      de: [
        "Guten Tag,",
        "",
        "ich möchte gerne ein strategisches Erstgespräch vereinbaren.",
        "",
        `Name: ${formData.firstName} ${formData.lastName}`,
        `Unternehmen: ${formData.company}`,
        `E-Mail: ${formData.email}`,
        `Telefon: ${formData.phone || "-"}`,
        `Thema: ${formData.topic || "nicht angegeben"}`,
        `Wunschtermin: ${formData.preferredDate || "flexibel"}${formData.preferredTime ? `, ${formData.preferredTime} Uhr` : ""}`,
        "",
        formData.message ? `Nachricht:\n${formData.message}` : "",
      ],
      fr: [
        "Bonjour,",
        "",
        "Je souhaite planifier un entretien stratégique.",
        "",
        `Nom : ${formData.firstName} ${formData.lastName}`,
        `Entreprise : ${formData.company}`,
        `E-mail : ${formData.email}`,
        `Téléphone : ${formData.phone || "-"}`,
        `Sujet : ${formData.topic || "non précisé"}`,
        `Date souhaitée : ${formData.preferredDate || "flexible"}${formData.preferredTime ? `, ${formData.preferredTime}` : ""}`,
        "",
        formData.message ? `Message :\n${formData.message}` : "",
      ],
    }).join("\n");

    window.location.href = `mailto:contact@raeldata.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    toast.success(t({
      de: "Ihr E-Mail-Programm wurde geöffnet – bitte senden Sie die vorbereitete E-Mail ab.",
      fr: "Votre messagerie s'est ouverte – veuillez envoyer l'e-mail préparé.",
    }));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const topics = t({
    de: [
      "EDI Excellence",
      "eProcurement Mastery",
      "Interkulturelle Integration",
      "Leadership & Transformation",
      "Strategische Beratung",
      "Training & Schulung",
      "Sonstiges",
    ],
    fr: [
      "EDI Excellence",
      "eProcurement Mastery",
      "Facture électronique",
      "Intégration interculturelle",
      "Leadership & Transformation",
      "Conseil stratégique",
      "Formation",
      "Autre",
    ],
  });

  const timeSlots = [
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="glass-effect rounded-2xl p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            {t({ de: "Strategisches Erstgespräch vereinbaren", fr: "Planifier un entretien stratégique" })}
          </h3>
          <p className="text-muted-foreground">
            {t({ de: "Lassen Sie uns Ihre spezifischen Herausforderungen besprechen und gemeinsam die optimale Lösung entwickeln.", fr: "Échangeons sur vos enjeux spécifiques et construisons ensemble la solution optimale." })}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center">
                <User className="w-4 h-4 mr-2" />
                {t({ de: "Vorname", fr: "Prénom" })} *
              </label>
              <Input
                required
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                placeholder={t({ de: "Ihr Vorname", fr: "Votre prénom" })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                {t({ de: "Nachname", fr: "Nom" })} *
              </label>
              <Input
                required
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                placeholder={t({ de: "Ihr Nachname", fr: "Votre nom" })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                E-Mail *
              </label>
              <Input
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder={t({ de: "ihre.email@unternehmen.de", fr: "votre.email@entreprise.ma" })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                {t({ de: "Telefon", fr: "Téléphone" })}
              </label>
              <Input
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder={t({ de: "+49 123 456 7890", fr: "+212 6 12 34 56 78" })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center">
              <Building className="w-4 h-4 mr-2" />
              {t({ de: "Unternehmen", fr: "Entreprise" })} *
            </label>
            <Input
              required
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              placeholder={t({ de: "Ihr Unternehmen", fr: "Votre entreprise" })}
            />
          </div>

          {/* Topic Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              {t({ de: "Beratungsthema", fr: "Sujet" })} *
            </label>
            <Select value={formData.topic} onValueChange={(value) => handleInputChange("topic", value)}>
              <SelectTrigger>
                <SelectValue placeholder={t({ de: "Wählen Sie Ihr Hauptthema", fr: "Choisissez votre sujet principal" })} />
              </SelectTrigger>
              <SelectContent>
                {topics.map((topic) => (
                  <SelectItem key={topic} value={topic}>
                    {topic}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Appointment Scheduling */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {t({ de: "Wunschtermin", fr: "Date souhaitée" })}
              </label>
              <Input
                type="date"
                value={formData.preferredDate}
                onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                {t({ de: "Uhrzeit", fr: "Heure" })}
              </label>
              <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange("preferredTime", value)}>
                <SelectTrigger>
                  <SelectValue placeholder={t({ de: "Wunschzeit auswählen", fr: "Choisir un créneau" })} />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((slot) => (
                    <SelectItem key={slot} value={slot}>
                      {slot}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              {t({ de: "Ihre Nachricht", fr: "Votre message" })}
            </label>
            <Textarea
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder={t({ de: "Beschreiben Sie kurz Ihre aktuelle Situation und Ihre Ziele...", fr: "Décrivez brièvement votre situation actuelle et vos objectifs..." })}
              rows={4}
            />
          </div>

          {/* Datenschutz */}
          <label className="flex items-start space-x-3 text-sm text-muted-foreground cursor-pointer">
            <input
              type="checkbox"
              required
              checked={privacy}
              onChange={(e) => setPrivacy(e.target.checked)}
              className="mt-1 accent-[hsl(var(--primary))]"
            />
            <span>
              {t({ de: "Ich habe die", fr: "J'ai lu la" })}{" "}
              <a href="/datenschutz" className="text-primary hover:underline">
                {t({ de: "Datenschutzerklärung", fr: "politique de confidentialité" })}
              </a>{" "}
              {t({ de: "gelesen und bin mit der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage einverstanden.", fr: "et j'accepte le traitement de mes données pour le suivi de ma demande." })} *
            </span>
          </label>

          {/* Submit Button */}
          <Button type="submit" size="lg" className="w-full group">
            <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
            {t({ de: "Termin anfragen", fr: "Demander un rendez-vous" })}
          </Button>

          {sent && (
            <p className="text-sm text-center text-muted-foreground">
              {t({ de: "Falls sich Ihr E-Mail-Programm nicht geöffnet hat, schreiben Sie uns direkt an", fr: "Si votre messagerie ne s'est pas ouverte, écrivez-nous directement à" })}{" "}
              <a href="mailto:contact@raeldata.de" className="text-primary hover:underline">
                contact@raeldata.de
              </a>{" "}
              {t({ de: "oder rufen Sie an:", fr: "ou appelez-nous :" })}{" "}
              <a href="tel:+491629620582" className="text-primary hover:underline">
                +49 162 9620582
              </a>
              .
            </p>
          )}

          <p className="text-xs text-muted-foreground text-center">
            {t({
              de: "* Pflichtfelder. Mit Klick auf „Termin anfragen“ öffnet sich Ihr E-Mail-Programm mit einer vorbereiteten Nachricht.",
              fr: "* Champs obligatoires. En cliquant sur « Demander un rendez-vous », votre messagerie s'ouvre avec un message préparé.",
            })}
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;