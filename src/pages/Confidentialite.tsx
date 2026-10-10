import { ShieldCheck, Server, Info, Database } from "lucide-react";
import LegalLayout, { LegalBlock, LegalSub } from "@/components/LegalLayout";

/* Französische Fassung der Datenschutzerklärung (raeldata.com) */
const Confidentialite = () => (
  <LegalLayout
    badgeIcon={<ShieldCheck className="w-4 h-4 text-primary" />}
    badge="Informations légales"
    title="Politique de confidentialité"
    backLabel="Retour à l'accueil"
  >
    {/* 1 */}
    <LegalBlock icon={<Info className="w-5 h-5 text-primary" />} title="1. La protection des données en bref">
      <LegalSub title="Remarques générales">
        <p>
          Les informations suivantes donnent un aperçu simple de ce qu'il advient de vos données
          personnelles lorsque vous visitez ce site. Les données personnelles sont toutes les données
          permettant de vous identifier personnellement. Vous trouverez des informations détaillées dans
          les sections ci-dessous.
        </p>
      </LegalSub>
      <LegalSub title="Collecte des données sur ce site">
        <p>
          <span className="text-foreground font-medium">Qui est responsable ?</span> Le traitement des
          données sur ce site est effectué par l'éditeur du site, dont les coordonnées figurent dans la
          section « Responsable du traitement ».
        </p>
        <p>
          <span className="text-foreground font-medium">Comment collectons-nous vos données ?</span>{" "}
          D'une part, lorsque vous nous les communiquez, par exemple par e-mail ou via un formulaire.
          D'autre part, certaines données techniques sont collectées automatiquement lors de votre visite
          (par ex. navigateur, système d'exploitation, heure de consultation).
        </p>
        <p>
          <span className="text-foreground font-medium">À quoi servent vos données ?</span> Une partie
          des données sert à assurer le bon fonctionnement du site. Les autres sont utilisées uniquement
          pour traiter vos demandes. Aucune analyse de votre comportement de navigation n'est effectuée.
        </p>
        <p>
          <span className="text-foreground font-medium">Quels sont vos droits ?</span> Vous disposez à
          tout moment d'un droit d'accès, de rectification, d'effacement et de limitation du traitement de
          vos données, ainsi que d'un droit de réclamation auprès d'une autorité de contrôle. Voir la
          section 3.
        </p>
      </LegalSub>
    </LegalBlock>

    {/* 2 */}
    <LegalBlock icon={<Server className="w-5 h-5 text-primary" />} title="2. Hébergement">
      <LegalSub title="Hébergement externe">
        <p>Ce site est hébergé par un prestataire externe :</p>
        <p className="text-foreground">
          Hostinger International Ltd.
          <br />
          61 Lordou Vyronos, Lumiel Building, 4e étage
          <br />
          6023 Larnaca, Chypre
        </p>
        <p>
          Les données collectées lors de votre visite sont stockées sur les serveurs de l'hébergeur. Il
          s'agit principalement des adresses IP et d'autres données techniques (voir « Fichiers journaux
          du serveur »). Le recours à l'hébergeur repose sur notre intérêt légitime à mettre à
          disposition un site sûr, rapide et efficace (art. 6, par. 1, point f du RGPD). L'hébergeur ne
          traite vos données que dans la mesure nécessaire à l'exécution de ses prestations et selon nos
          instructions.
        </p>
      </LegalSub>
      <LegalSub title="Contrat de sous-traitance">
        <p>
          Un contrat de sous-traitance conforme à l'article 28 du RGPD a été conclu avec l'hébergeur. Il
          garantit que celui-ci ne traite les données de nos visiteurs que selon nos instructions et dans
          le respect du RGPD.
        </p>
      </LegalSub>
    </LegalBlock>

    {/* 3 */}
    <LegalBlock icon={<ShieldCheck className="w-5 h-5 text-primary" />} title="3. Informations générales et obligatoires">
      <LegalSub title="Protection des données">
        <p>
          Nous prenons la protection de vos données personnelles très au sérieux et les traitons de
          manière confidentielle, conformément à la réglementation applicable et à la présente politique.
          Nous attirons votre attention sur le fait que la transmission de données sur Internet (par ex.
          par e-mail) peut présenter des failles de sécurité. Une protection totale contre l'accès par des
          tiers n'est pas possible.
        </p>
      </LegalSub>

      <LegalSub title="Responsable du traitement">
        <p>Le responsable du traitement des données sur ce site est :</p>
        <p className="text-foreground">
          Rachid El Mokhi – RAELDATA
          <br />
          Merkelbuckel 11
          <br />
          77815 Bühl, Allemagne
          <br />
          Téléphone :{" "}
          <a href="tel:+491629620582" className="text-primary hover:underline">
            +49 162 9620582
          </a>
          <br />
          E-mail :{" "}
          <a href="mailto:contact@raeldata.de" className="text-primary hover:underline">
            contact@raeldata.de
          </a>
        </p>
        <p>
          Le responsable étant établi en Allemagne, le traitement est régi par le Règlement général sur
          la protection des données (RGPD) de l'Union européenne.
        </p>
      </LegalSub>

      <LegalSub title="Durée de conservation">
        <p>
          Sauf durée plus précise indiquée dans la présente politique, vos données sont conservées
          jusqu'à ce que la finalité du traitement disparaisse. Si vous demandez l'effacement de vos
          données ou retirez votre consentement, elles sont supprimées, à moins qu'une autre base légale
          n'impose leur conservation (par ex. obligations fiscales ou commerciales).
        </p>
      </LegalSub>

      <LegalSub title="Retrait de votre consentement">
        <p>
          De nombreux traitements ne sont possibles qu'avec votre consentement exprès. Vous pouvez retirer
          à tout moment un consentement donné ; un simple e-mail suffit. La licéité du traitement effectué
          avant le retrait n'en est pas affectée.
        </p>
      </LegalSub>

      <LegalSub title="Droit d'opposition (art. 21 RGPD)">
        <p className="uppercase text-xs tracking-wide">
          Lorsque le traitement est fondé sur l'article 6, paragraphe 1, point e ou f du RGPD, vous avez
          le droit de vous y opposer à tout moment pour des raisons tenant à votre situation
          particulière. Nous cesserons alors de traiter vos données, sauf si nous démontrons des motifs
          légitimes et impérieux qui prévalent sur vos intérêts, droits et libertés, ou si le traitement
          sert à la constatation, l'exercice ou la défense de droits en justice.
        </p>
        <p className="uppercase text-xs tracking-wide">
          Si vos données sont traitées à des fins de prospection, vous pouvez vous y opposer à tout
          moment. Vos données ne seront alors plus utilisées à cette fin.
        </p>
      </LegalSub>

      <LegalSub title="Droit de réclamation auprès d'une autorité de contrôle">
        <p>
          En cas de violation du RGPD, vous pouvez introduire une réclamation auprès d'une autorité de
          contrôle. L'autorité compétente pour nous est :
        </p>
        <p className="text-foreground">
          Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg
          <br />
          Lautenschlagerstraße 20, 70173 Stuttgart, Allemagne
        </p>
        <p>
          Les personnes résidant au Maroc peuvent également s'adresser à la Commission nationale de
          contrôle de la protection des données à caractère personnel (CNDP), www.cndp.ma.
        </p>
      </LegalSub>

      <LegalSub title="Droit à la portabilité des données">
        <p>
          Vous avez le droit de recevoir les données que nous traitons de manière automatisée sur la base
          de votre consentement ou d'un contrat, ou de les faire transmettre à un tiers, dans un format
          courant et lisible par machine, dans la mesure où cela est techniquement possible.
        </p>
      </LegalSub>

      <LegalSub title="Accès, rectification et effacement">
        <p>
          Dans le cadre des dispositions légales applicables, vous avez à tout moment le droit d'obtenir
          gratuitement des informations sur vos données personnelles enregistrées, leur origine, leurs
          destinataires et la finalité du traitement, ainsi que, le cas échéant, un droit de
          rectification ou d'effacement. Pour toute question, vous pouvez nous contacter à tout moment.
        </p>
      </LegalSub>

      <LegalSub title="Droit à la limitation du traitement">
        <p>Vous pouvez demander la limitation du traitement de vos données, notamment dans les cas suivants :</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>vous contestez l'exactitude de vos données, pendant la durée de la vérification ;</li>
          <li>le traitement est illicite, mais vous préférez une limitation à l'effacement ;</li>
          <li>
            nous n'avons plus besoin de vos données, mais vous en avez besoin pour faire valoir ou défendre
            des droits en justice ;
          </li>
          <li>vous avez formé une opposition au titre de l'art. 21, par. 1 du RGPD et la mise en balance des intérêts est en cours.</li>
        </ul>
      </LegalSub>

      <LegalSub title="Chiffrement SSL / TLS">
        <p>
          Pour des raisons de sécurité, ce site utilise un chiffrement SSL / TLS. Vous reconnaissez une
          connexion chiffrée à l'adresse commençant par « https:// » et au symbole de cadenas dans votre
          navigateur.
        </p>
      </LegalSub>
    </LegalBlock>

    {/* 4 */}
    <LegalBlock icon={<Database className="w-5 h-5 text-primary" />} title="4. Collecte des données sur ce site">
      <LegalSub title="Cookies et outils d'analyse">
        <p>
          Ce site n'utilise pas de cookies et n'emploie aucun outil d'analyse, de suivi ou de marketing.
          Les polices et images sont chargées depuis notre propre serveur ; aucune connexion n'est établie
          avec des serveurs tiers (par ex. Google) lors de votre visite.
        </p>
      </LegalSub>

      <LegalSub title="Fichiers journaux du serveur">
        <p>
          L'hébergeur collecte et enregistre automatiquement des informations dans des fichiers journaux,
          transmises par votre navigateur :
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>type et version du navigateur</li>
          <li>système d'exploitation</li>
          <li>URL de provenance</li>
          <li>nom d'hôte de l'ordinateur</li>
          <li>heure de la requête</li>
          <li>adresse IP</li>
        </ul>
        <p>
          Ces données ne sont pas croisées avec d'autres sources. Leur collecte repose sur l'article 6,
          paragraphe 1, point f du RGPD : nous avons un intérêt légitime au bon fonctionnement technique
          et à la sécurité de notre site.
        </p>
      </LegalSub>

      <LegalSub title="Formulaires de contact et de réservation">
        <p>
          Les formulaires de ce site n'enregistrent aucune donnée sur le serveur. Lors de l'envoi, votre
          messagerie s'ouvre avec un message préparé ; la transmission n'a lieu que lorsque vous envoyez
          vous-même cet e-mail.
        </p>
        <p>
          Les données ainsi transmises (nom, e-mail, le cas échéant téléphone et entreprise, sujet, message
          et date souhaitée) sont conservées afin de traiter votre demande et ses éventuelles suites. Nous
          ne les transmettons pas sans votre consentement.
        </p>
        <p>
          Le traitement repose sur l'article 6, paragraphe 1, point b du RGPD lorsque votre demande est
          liée à l'exécution d'un contrat ou à des mesures précontractuelles, et sinon sur notre intérêt
          légitime à traiter efficacement les demandes reçues (art. 6, par. 1, point f du RGPD). Les
          données sont supprimées une fois votre demande traitée, sous réserve des obligations légales de
          conservation.
        </p>
      </LegalSub>

      <LegalSub title="Demande par e-mail ou par téléphone">
        <p>
          Si vous nous contactez par e-mail ou par téléphone, votre demande et les données personnelles qui
          en découlent (nom, demande) sont conservées et traitées afin de répondre à votre demande. Nous ne
          les transmettons pas sans votre consentement. Les bases légales et la durée de conservation sont
          les mêmes que pour les formulaires.
        </p>
      </LegalSub>

      <LegalSub title="Liens vers LinkedIn">
        <p>
          Ce site contient de simples liens vers notre profil LinkedIn. Aucun plugin LinkedIn n'est
          intégré ; la simple visite de ce site ne transmet aucune donnée à LinkedIn. Ce n'est qu'en
          cliquant sur un lien que vous accédez à LinkedIn (LinkedIn Ireland Unlimited Company, Wilton
          Place, Dublin 2, Irlande), dont la politique de confidentialité s'applique alors.
        </p>
      </LegalSub>
    </LegalBlock>

    <p className="text-sm text-muted-foreground text-right">Mise à jour : octobre 2026</p>
  </LegalLayout>
);

export default Confidentialite;
