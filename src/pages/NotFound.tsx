import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { t } from "@/i18n";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center pt-32 pb-24 px-6">
        <div className="text-center max-w-md">
          <div className="text-7xl font-bold gradient-shift mb-4">404</div>
          <h1 className="text-2xl font-bold mb-4">
            {t({ de: "Diese Seite gibt es nicht", fr: "Cette page n'existe pas" })}
          </h1>
          <p className="text-muted-foreground mb-8">
            {t({
              de: "Der Link ist möglicherweise veraltet oder die Adresse wurde falsch eingegeben.",
              fr: "Le lien est peut-être obsolète ou l'adresse a été mal saisie.",
            })}
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="/">{t({ de: "Zur Startseite", fr: "Retour à l'accueil" })}</a>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
