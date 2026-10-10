import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const LegalBlock = ({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) => (
  <div className="bg-card border border-border rounded-2xl p-8">
    <div className="flex items-center space-x-3 mb-6">
      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">{icon}</div>
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
    </div>
    <div className="space-y-6 text-muted-foreground text-sm leading-relaxed">{children}</div>
  </div>
);

export const LegalSub = ({ title, children }: { title: string; children: ReactNode }) => (
  <div>
    <h3 className="text-foreground font-semibold mb-2">{title}</h3>
    <div className="space-y-3">{children}</div>
  </div>
);

/** Seitenrahmen für Rechtstexte (französische Fassungen) */
const LegalLayout = ({
  badgeIcon,
  badge,
  title,
  backLabel,
  children,
}: {
  badgeIcon: ReactNode;
  badge: string;
  title: string;
  backLabel: string;
  children: ReactNode;
}) => (
  <div className="min-h-screen bg-background">
    <Navigation />

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
            {backLabel}
          </Link>
        </Button>

        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            {badgeIcon}
            <span className="text-sm text-primary font-medium">{badge}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-shift">{title}</span>
          </h1>
        </div>
      </div>
    </section>

    <section className="pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl space-y-10">{children}</div>
      </div>
    </section>

    <Footer />
  </div>
);

export default LegalLayout;
