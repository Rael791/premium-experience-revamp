import { Scale, FileText, Mail, Phone, Globe, Linkedin, Server, MapPin, AlertCircle } from "lucide-react";
import LegalLayout, { LegalBlock, LegalSub } from "@/components/LegalLayout";

/* Französische Fassung des Impressums (raeldata.com) */
const MentionsLegales = () => (
  <LegalLayout
    badgeIcon={<Scale className="w-4 h-4 text-primary" />}
    badge="Informations légales"
    title="Mentions légales"
    backLabel="Retour à l'accueil"
  >
    <LegalBlock icon={<FileText className="w-5 h-5 text-primary" />} title="Éditeur du site">
      <div className="space-y-1 text-base">
        <p className="font-semibold text-foreground text-lg">Rachid El Mokhi</p>
        <p>RAELDATA – Conseil en EDI et eProcurement</p>
        <p>Entrepreneur individuel</p>
        <p>Merkelbuckel 11</p>
        <p>77815 Bühl</p>
        <p>Allemagne</p>
      </div>
      <p>Informations fournies conformément au § 5 de la loi allemande sur les services numériques (DDG).</p>
    </LegalBlock>

    <LegalBlock icon={<Mail className="w-5 h-5 text-primary" />} title="Contact">
      <div className="space-y-3 text-base">
        <div className="flex items-center space-x-3">
          <Phone className="w-4 h-4 text-primary shrink-0" />
          <span>
            Téléphone :{" "}
            <a href="tel:+491629620582" className="text-primary hover:underline">
              +49 162 9620582
            </a>
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <Mail className="w-4 h-4 text-primary shrink-0" />
          <span>
            E-mail :{" "}
            <a href="mailto:contact@raeldata.de" className="text-primary hover:underline">
              contact@raeldata.de
            </a>
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <Globe className="w-4 h-4 text-primary shrink-0" />
          <span>
            Site :{" "}
            <a href="https://raeldata.com" className="text-primary hover:underline">
              raeldata.com
            </a>
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <Linkedin className="w-4 h-4 text-primary shrink-0" />
          <span>
            LinkedIn :{" "}
            <a
              href="https://www.linkedin.com/in/elmokhirachid/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              linkedin.com/in/elmokhirachid
            </a>
          </span>
        </div>
      </div>
    </LegalBlock>

    <LegalBlock icon={<MapPin className="w-5 h-5 text-primary" />} title="Directeur de la publication">
      <div className="space-y-1 text-base">
        <p className="text-foreground font-medium">Rachid El Mokhi</p>
        <p>Merkelbuckel 11, 77815 Bühl, Allemagne</p>
      </div>
    </LegalBlock>

    <LegalBlock icon={<Server className="w-5 h-5 text-primary" />} title="Hébergement">
      <p className="text-base">
        Hostinger International Ltd.
        <br />
        61 Lordou Vyronos, Lumiel Building, 4e étage
        <br />
        6023 Larnaca, Chypre
      </p>
    </LegalBlock>

    <LegalBlock icon={<Scale className="w-5 h-5 text-primary" />} title="Règlement des litiges">
      <p>
        Nous ne sommes ni disposés ni tenus de participer à une procédure de règlement des litiges
        devant un organisme de médiation de la consommation. Notre offre s'adresse exclusivement aux
        entreprises.
      </p>
    </LegalBlock>

    <LegalBlock icon={<AlertCircle className="w-5 h-5 text-primary" />} title="Clause de non-responsabilité">
      <LegalSub title="Responsabilité quant au contenu">
        <p>
          Les contenus de ce site ont été rédigés avec le plus grand soin. Nous ne pouvons toutefois
          garantir leur exactitude, leur exhaustivité ni leur actualité. En tant que prestataire, nous
          sommes responsables de nos propres contenus conformément à la loi. Nous ne sommes en revanche
          pas tenus de surveiller les informations de tiers transmises ou stockées, ni de rechercher
          des circonstances indiquant une activité illicite. Dès que nous avons connaissance d'une
          infraction, nous retirons immédiatement les contenus concernés.
        </p>
      </LegalSub>
      <LegalSub title="Responsabilité quant aux liens">
        <p>
          Notre site contient des liens vers des sites externes de tiers, sur le contenu desquels nous
          n'avons aucune influence. Le fournisseur ou l'exploitant de ces sites est seul responsable de
          leur contenu. Les pages liées ont été vérifiées au moment de la création du lien ; aucun
          contenu illicite n'était alors identifiable. Dès que nous avons connaissance d'une
          infraction, nous supprimons immédiatement les liens concernés.
        </p>
      </LegalSub>
      <LegalSub title="Propriété intellectuelle">
        <p>
          Les contenus et œuvres créés par l'éditeur sur ce site sont soumis au droit d'auteur
          allemand. Toute reproduction, modification, diffusion ou exploitation en dehors des limites
          du droit d'auteur nécessite l'accord écrit de l'auteur. Les téléchargements et copies de ce
          site sont autorisés uniquement pour un usage privé et non commercial. Si vous constatez une
          atteinte au droit d'auteur, merci de nous le signaler : nous retirerons immédiatement le
          contenu concerné.
        </p>
      </LegalSub>
    </LegalBlock>
  </LegalLayout>
);

export default MentionsLegales;
