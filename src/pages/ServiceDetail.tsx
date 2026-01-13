import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Database, ShoppingBag } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ediHero from "@/assets/edi-hero.jpg";
import procurementHero from "@/assets/procurement-hero.jpg";

const ServiceDetail = () => {
  const { slug } = useParams();
  const { t } = useTranslation();

  const serviceConfig: Record<string, {
    icon: typeof Database;
    heroImage: string;
    translationKey: string;
    serviceKeys: string[];
  }> = {
    "edi-excellence": {
      icon: Database,
      heroImage: ediHero,
      translationKey: "edi_detail",
      serviceKeys: ["architecture", "rules", "migration"]
    },
    "eprocurement-mastery": {
      icon: ShoppingBag,
      heroImage: procurementHero,
      translationKey: "eprocurement_detail",
      serviceKeys: ["process", "supplier", "analytics"]
    }
  };

  const config = serviceConfig[slug as string];

  if (!config) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Service nicht gefunden</h1>
          <Link to="/#leistungen" className="text-primary hover:text-primary/80">
            {t("edi_detail.back")}
          </Link>
        </div>
      </div>
    );
  }

  const Icon = config.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section 
          className="py-24 relative"
          style={{
            backgroundImage: `url(${config.heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <Link to="/#leistungen" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                {t(`${config.translationKey}.back`)}
              </Link>
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mr-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-2">{t(`${config.translationKey}.title`)}</h1>
                  <p className="text-xl text-muted-foreground">{t(`${config.translationKey}.subtitle`)}</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t(`${config.translationKey}.description`)}
              </p>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">
                {t(`${config.translationKey}.services_title`)}
              </h2>
              
              <div className="space-y-8">
                {config.serviceKeys.map((serviceKey, idx) => {
                  const deliverables = t(`${config.translationKey}.services.${serviceKey}.deliverables`, { returnObjects: true }) as string[];

                  return (
                    <div key={idx} className={`group relative overflow-hidden rounded-2xl p-8 hover-lift transition-all duration-500 ${
                      idx % 3 === 0 ? 'bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20' :
                      idx % 3 === 1 ? 'bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20' :
                      'bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20'
                    }`}>
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Service Info */}
                        <div className="lg:col-span-2">
                          <h3 className="text-2xl font-bold text-foreground mb-4">
                            {t(`${config.translationKey}.services.${serviceKey}.name`)}
                          </h3>
                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {t(`${config.translationKey}.services.${serviceKey}.description`)}
                          </p>
                          <div className="mb-6">
                            <h4 className="font-semibold text-foreground mb-3">
                              {t(`${config.translationKey}.labels.what`)}:
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">
                              {t(`${config.translationKey}.services.${serviceKey}.what`)}
                            </p>
                          </div>
                          <div className="flex items-center space-x-6 text-sm">
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="text-muted-foreground">
                                {t(`${config.translationKey}.labels.duration`)}: {t(`${config.translationKey}.services.${serviceKey}.duration`)}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Deliverables */}
                        <div className="lg:col-span-1">
                          <h4 className="font-semibold text-foreground mb-4">
                            {t(`${config.translationKey}.labels.deliverables`)}:
                          </h4>
                          <div className="space-y-3">
                            {Array.isArray(deliverables) && deliverables.slice(0, 4).map((deliverable, delIdx) => (
                              <div key={delIdx} className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 mt-2"></div>
                                <span className="text-sm text-muted-foreground">{deliverable}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-gradient-hero rounded-2xl p-8 text-background">
                <h3 className="text-2xl font-bold mb-4">{t(`${config.translationKey}.cta_title`)}</h3>
                <p className="text-lg mb-6 opacity-90">
                  {t(`${config.translationKey}.cta_description`)}
                </p>
                <Button variant="outline" size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
                  <a href="/#kontakt">{t(`${config.translationKey}.cta_button`)}</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
