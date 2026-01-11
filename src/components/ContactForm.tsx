import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Send, User, Mail, Phone, Building } from "lucide-react";
import { toast } from "sonner";

const ContactForm = () => {
  const { t } = useTranslation();
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast.success(t("form.success_message"));
    
    setFormData({
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
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const topics = [
    t("form.topic_edi"),
    t("form.topic_eprocurement"),
    t("form.topic_intercultural"),
    t("form.topic_leadership"),
    t("form.topic_strategy"),
    t("form.topic_other")
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
            {t("form.title")}
          </h3>
          <p className="text-muted-foreground">
            {t("form.subtitle")}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center">
                <User className="w-4 h-4 mr-2" />
                {t("form.first_name")} *
              </label>
              <Input
                required
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                placeholder={t("form.first_name_placeholder")}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                {t("form.last_name")} *
              </label>
              <Input
                required
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                placeholder={t("form.last_name_placeholder")}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                {t("form.email_label")} *
              </label>
              <Input
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder={t("form.email_placeholder")}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                {t("form.phone_label")}
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
              {t("form.company")} *
            </label>
            <Input
              required
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              placeholder={t("form.company_placeholder")}
            />
          </div>

          {/* Topic Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              {t("form.topic_label")} *
            </label>
            <Select value={formData.topic} onValueChange={(value) => handleInputChange("topic", value)}>
              <SelectTrigger>
                <SelectValue placeholder={t("form.topic_placeholder")} />
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
                {t("form.preferred_date")}
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
                {t("form.preferred_time")}
              </label>
              <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange("preferredTime", value)}>
                <SelectTrigger>
                  <SelectValue placeholder={t("form.time_placeholder")} />
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
              {t("form.message_label")}
            </label>
            <Textarea
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder={t("form.message_placeholder")}
              rows={4}
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" size="lg" className="w-full group">
            <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
            {t("form.submit_button")}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            {t("form.privacy_notice")}
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
