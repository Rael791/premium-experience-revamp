import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Send, User, Mail, Phone, Building } from "lucide-react";
import { toast } from "sonner";

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

    const subject = `Anfrage Erstgespräch: ${formData.topic || "Allgemein"} – ${formData.company}`;
    const body = [
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
    ].join("\n");

    window.location.href = `mailto:contact@raeldata.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    toast.success("Ihr E-Mail-Programm wurde geöffnet – bitte senden Sie die vorbereitete E-Mail ab.");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const topics = [
    "EDI Excellence",
    "eProcurement Mastery",
    "Interkulturelle Integration",
    "Leadership & Transformation",
    "Strategische Beratung",
    "Sonstiges"
  ];

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
            Strategisches Erstgespräch vereinbaren
          </h3>
          <p className="text-muted-foreground">
            Lassen Sie uns Ihre spezifischen Herausforderungen besprechen und gemeinsam die optimale Lösung entwickeln.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center">
                <User className="w-4 h-4 mr-2" />
                Vorname *
              </label>
              <Input
                required
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                placeholder="Ihr Vorname"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Nachname *
              </label>
              <Input
                required
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                placeholder="Ihr Nachname"
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
                placeholder="ihre.email@unternehmen.de"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                Telefon
              </label>
              <Input
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+49 123 456 7890"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center">
              <Building className="w-4 h-4 mr-2" />
              Unternehmen *
            </label>
            <Input
              required
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              placeholder="Ihr Unternehmen"
            />
          </div>

          {/* Topic Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Beratungsthema *
            </label>
            <Select value={formData.topic} onValueChange={(value) => handleInputChange("topic", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Wählen Sie Ihr Hauptthema" />
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
                Wunschtermin
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
                Uhrzeit
              </label>
              <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange("preferredTime", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Wunschzeit auswählen" />
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
              Ihre Nachricht
            </label>
            <Textarea
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Beschreiben Sie kurz Ihre aktuelle Situation und Ihre Ziele..."
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
              Ich habe die{" "}
              <a href="/datenschutz" className="text-primary hover:underline">
                Datenschutzerklärung
              </a>{" "}
              gelesen und bin mit der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage einverstanden. *
            </span>
          </label>

          {/* Submit Button */}
          <Button type="submit" size="lg" className="w-full group">
            <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
            Termin anfragen
          </Button>

          {sent && (
            <p className="text-sm text-center text-muted-foreground">
              Falls sich Ihr E-Mail-Programm nicht geöffnet hat, schreiben Sie uns direkt an{" "}
              <a href="mailto:contact@raeldata.de" className="text-primary hover:underline">
                contact@raeldata.de
              </a>{" "}
              oder rufen Sie an:{" "}
              <a href="tel:+491629620582" className="text-primary hover:underline">
                +49 162 9620582
              </a>
              .
            </p>
          )}

          <p className="text-xs text-muted-foreground text-center">
            * Pflichtfelder. Mit Klick auf „Termin anfragen“ öffnet sich Ihr E-Mail-Programm mit einer vorbereiteten Nachricht.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;