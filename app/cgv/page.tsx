import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions générales de vente | Fantômes",
  robots: { index: true, follow: true },
};

export default function Cgv() {
  return (
    <main className="mx-auto max-w-xl px-5 pb-10 pt-10">
      <Link href="/" className="inline-block py-3 text-sm underline">
        ← Retour à l&apos;accueil
      </Link>

      <h1 className="mt-4 text-4xl">Conditions générales de vente</h1>

      <section className="mt-8">
        <h2 className="text-2xl">1. Le vendeur</h2>
        <p className="mt-3">
          Fantômes est exploité par Erlann Deroche, entrepreneur individuel,
          SIRET [À COMPLÉTER], 51 bis rue du stade, 72230 Mulsanne. Contact :
          erlann.drc72@gmail.com, 07 68 02 33 18.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl">2. Le service vendu</h2>
        <p className="mt-3">
          Fantômes est un service en ligne qui analyse tes transactions
          bancaires pour repérer les prélèvements réguliers, les classe par
          coût annuel et fournit une lettre de résiliation pour chacun. Le
          service est un outil d&apos;aide : c&apos;est toi qui décides de
          résilier ou non, et Fantômes ne résilie rien à ta place.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl">3. Prix</h2>
        <p className="mt-3">
          L&apos;audit est vendu 19 € en un seul paiement. Il n&apos;y a aucun
          abonnement ni renouvellement automatique. TVA non applicable,
          article 293 B du Code général des impôts [À CONFIRMER].
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl">4. Commande et paiement</h2>
        <p className="mt-3">
          Le paiement s&apos;effectue par carte bancaire via Stripe, un
          prestataire de paiement sécurisé. Fantômes ne voit et ne conserve
          jamais tes numéros de carte. La commande est confirmée par un email
          envoyé à l&apos;adresse utilisée pour le paiement.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl">5. Livraison</h2>
        <p className="mt-3">
          L&apos;accès au service t&apos;est envoyé par email à
          l&apos;adresse du paiement, immédiatement après la confirmation du
          paiement. Si tu ne reçois pas ton accès, écris-nous à
          erlann.drc72@gmail.com : nous corrigeons le problème ou nous te
          remboursons.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl">6. Droit de rétractation</h2>
        <p className="mt-3">
          Tu disposes de 14 jours à compter de la commande pour te rétracter,
          sans donner de motif, en écrivant à erlann.drc72@gmail.com. Si tu
          demandes expressément que le service commence avant la fin de ce
          délai et que le service est entièrement exécuté, tu perds ce droit,
          comme le prévoit l&apos;article L221-28 du Code de la consommation.
          Cette demande te sera présentée clairement au moment du paiement.
          Le remboursement est effectué dans les 14 jours suivant ta demande.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl">7. Garanties légales</h2>
        <p className="mt-3">
          Tu bénéficies de la garantie légale de conformité et de la garantie
          des vices cachés, prévues par le Code de la consommation et le Code
          civil. Si le service ne fonctionne pas comme annoncé, écris-nous et
          nous le corrigerons ou nous te rembourserons.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl">8. Données personnelles</h2>
        <p className="mt-3">
          Le traitement de tes données est décrit dans notre{" "}
          <Link href="/confidentialite" className="underline">
            politique de confidentialité
          </Link>
          .
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl">9. Réclamations et médiation</h2>
        <p className="mt-3">
          Pour toute réclamation, écris d&apos;abord à erlann.drc72@gmail.com.
          Si le désaccord persiste, tu peux saisir gratuitement le médiateur de
          la consommation : [À COMPLÉTER : nom et coordonnées du médiateur].
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl">10. Droit applicable</h2>
        <p className="mt-3">
          Les présentes conditions sont soumises au droit français. Dernière
          mise à jour : 5 octobre 2026.
        </p>
      </section>
    </main>
  );
}
