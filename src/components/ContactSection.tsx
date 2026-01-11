import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Linkedin, Calendar, Phone, Globe } from "lucide-react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  const { t } = useTranslation();

  const contactMethods = [
    {
      icon: Mail,
      title: t("contact.email"),
      value: "contact@iqoniq.com",
      description: t("contact.email_desc"),
      action: "mailto:contact@iqoniq.com"
    },
    {
      icon: MapPin,
      title: t("contact.locations"),
      value: t("contact.locations_value"),
      description: "DACH, GCC & NA",
      action: null
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "@rachids",
      description: t("contact.linkedin_desc"),
      action: "https://linkedin.com/in/rachids"
    },
    {
      icon: Calendar,
      title: t("contact.booking"),
      value: t("contact.booking_value"),
      description: t("contact.booking_desc"),
      action: "#kontakt"
    }
  ];

  const regions = [
    {
      name: t("contact.region_dach"),
      countries: [t("contact.germany"), t("contact.austria"), t("contact.switzerland")],
      focus: t("contact.dach_focus")
    },
    {
      name: t("contact.region_gcc"),
      countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait"],
      focus: t("contact.gcc_focus")
    },
    {
      name: t("contact.region_na"),
      countries: ["USA", "Canada"],
      focus: t("contact.na_focus")
    }
  ];

  return (
    <section id="kontakt" className="min-h-screen flex items-center py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="heading-section mb-6">
            {t("contact.title")} <span className="text-primary">{t("contact.title_highlight")}</span>
          </h2>
          <p className="text-premium max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="mb-16">
            <ContactForm />
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, idx) => (
              <div 
                key={idx}
                className="group glass-effect rounded-xl p-6 hover-lift cursor-pointer"
                onClick={() => method.action && window.open(method.action)}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <method.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{method.title}</h3>
                  <p className="text-primary font-medium mb-2">{method.value}</p>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Global Presence */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              {t("contact.global_presence")}
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {regions.map((region, idx) => (
                <div key={idx} className="glass-effect rounded-xl p-6 hover-lift">
                  <div className="flex items-center mb-4">
                    <Globe className="w-6 h-6 text-primary mr-3" />
                    <h4 className="text-xl font-semibold text-foreground">{region.name}</h4>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">{t("contact.countries")}:</p>
                      <div className="flex flex-wrap gap-2">
                        {region.countries.map((country, countryIdx) => (
                          <span key={countryIdx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {country}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{t("contact.focus")}:</p>
                      <p className="text-sm text-foreground">{region.focus}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Contact Us */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              {t("contact.why_contact_title")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: t("contact.benefit1_title"),
                  description: t("contact.benefit1_desc")
                },
                {
                  title: t("contact.benefit2_title"),
                  description: t("contact.benefit2_desc")
                },
                {
                  title: t("contact.benefit3_title"),
                  description: t("contact.benefit3_desc")
                }
              ].map((benefit, idx) => (
                <div key={idx} className="glass-effect rounded-lg p-6">
                  <h4 className="font-semibold text-foreground mb-3">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-16">
            <div className="max-w-2xl mx-auto">
              <p className="text-lg text-muted-foreground mb-6">
                {t("contact.final_cta_text")}
              </p>
              <Button variant="hero" size="xl" className="shadow-premium" onClick={() => document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' })}>
                <Calendar className="w-5 h-5 mr-2" />
                {t("contact.final_cta_button")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
