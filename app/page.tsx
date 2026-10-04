import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Fantômes",
  robots: { index: true, follow: true },
};

export default function Confidentialite() {
  return (
    <main className="mx-auto max-w-xl px-5 pb-10 pt-10">
      <Link href="/" className="inline-block py-3 text-sm underline">
        ← Retour à l&apos;accueil
      </Link>

      <h1 className="mt-4 text-4xl">Politique de confidentialité</h1>

      <section className="mt-8">
        <h2 className="text-2xl">Qui est responsable de tes données</h2>
        <p className="mt-3">
          Erlann Deroche, entrepreneur individuel, 51 bis rue du stade, 72230
          Mulsanne. Contact : erlann.drc72@gmail.com.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl">Ton relevé bancaire</h2>
        <p className="mt-3">
          Ton relevé est analysé directement dans ton navigateur, sur ton
          appareil. Il n&apos;est jamais envoyé à nos serveurs et nous ne le
          conservons pas. Quand tu fermes la page, il disparaît.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl">Les données que nous conservons</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            Ton adresse email, si tu t&apos;inscris à la liste d&apos;attente,
            uniquement pour te prévenir de l&apos;ouverture de Fantômes. Base
            légale : ton consentement, que tu donnes en envoyant le
            formulaire.
          </li>
          <li>
            Ton adresse email, une fois le service ouvert, pour t&apos;envoyer
            ton accès et te permettre de te connecter.
          </li>
          <li>
            Les informations de ta commande (date, montant, statut du
            paiement), pour la comptabilité et le suivi.
          </li>
        </ul>
        <p className="mt-3">
          Base légale pour les commandes : l&apos;exécution du contrat de
          vente, et nos obligations comptables.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl">Durée de conservation</h2>
        <p className="mt-3">
          Les données de commande sont conservées 10 ans, comme l&apos;exige
          la loi comptable. Ton compte et ton email sont conservés tant que tu
          ne demandes pas leur suppression. Les adresses de la liste
          d&apos;attente sont conservées jusqu&apos;à l&apos;ouverture du
          service ou jusqu&apos;à ta demande de suppression.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl">Nos prestataires</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Stripe : traite ton paiement. Nous ne voyons pas ta carte.</li>
          <li>Supabase : héberge ton compte et ton email.</li>
          <li>Vercel : héberge le site et mesure son audience.</li>
        </ul>
        <p className="mt-3">
          Certains de ces prestataires sont situés hors de l&apos;Union
          européenne, notamment aux États-Unis. Les transferts s&apos;appuient
          sur les garanties prévues par le RGPD.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl">Cookies et mesure d&apos;audience</h2>
        <p className="mt-3">
          Nous mesurons l&apos;audience du site avec Vercel Web Analytics, un
          outil conçu pour fonctionner sans cookie et sans te suivre d&apos;un
          site à l&apos;autre. Nous ne l&apos;utilisons pas pour faire de la
          publicité.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl">Tes droits</h2>
        <p className="mt-3">
          Tu peux demander l&apos;accès à tes données, leur correction, leur
          suppression, ou t&apos;opposer à leur traitement, en écrivant à
          erlann.drc72@gmail.com. Si tu estimes que tes droits ne sont pas
          respectés, tu peux saisir la CNIL (cnil.fr).
        </p>
      </section>

      <p className="mt-8 text-sm opacity-70">
        Dernière mise à jour : 4 octobre 2026.
      </p>
    </main>
  );
}
