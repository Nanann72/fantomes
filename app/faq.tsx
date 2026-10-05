import Link from "next/link";

export default function Faq() {
  const question = "flex min-h-14 cursor-pointer items-center justify-between gap-4 py-3 font-semibold";

  return (
    <section className="mt-14 border-t border-filet pt-10">
      <h2 className="text-3xl">Questions fréquentes</h2>

      <div className="mt-6 divide-y divide-filet border-y border-filet">
        <details className="group">
          <summary className={question}>
            Est-ce que Fantômes résilie à ma place ?
            <span aria-hidden="true" className="text-xl text-brule group-open:hidden">+</span>
            <span aria-hidden="true" className="hidden text-xl text-brule group-open:inline">−</span>
          </summary>
          <p className="pb-4">
            Non. C&apos;est toi qui décides, abonnement par abonnement. Pour
            ceux que tu veux arrêter, la lettre de résiliation est déjà écrite
            : tu n&apos;as plus qu&apos;à l&apos;envoyer.
          </p>
        </details>

        <details className="group">
          <summary className={question}>
            Combien ça coûte ?
            <span aria-hidden="true" className="text-xl text-brule group-open:hidden">+</span>
            <span aria-hidden="true" className="hidden text-xl text-brule group-open:inline">−</span>
          </summary>
          <p className="pb-4">
            Rien pour l&apos;instant. L&apos;inscription à la liste
            d&apos;attente est gratuite et ne demande aucun paiement. Le prix
            sera indiqué clairement avant toute commande.
          </p>
        </details>

        <details className="group">
          <summary className={question}>
            Quand Fantômes ouvre-t-il ?
            <span aria-hidden="true" className="text-xl text-brule group-open:hidden">+</span>
            <span aria-hidden="true" className="hidden text-xl text-brule group-open:inline">−</span>
          </summary>
          <p className="pb-4">
            Il n&apos;y a pas encore de date fixe : Fantômes est en
            construction. Tu es prévenu par email le jour de l&apos;ouverture.
          </p>
        </details>

        <details className="group">
          <summary className={question}>
            Que faites-vous de mon email ?
            <span aria-hidden="true" className="text-xl text-brule group-open:hidden">+</span>
            <span aria-hidden="true" className="hidden text-xl text-brule group-open:inline">−</span>
          </summary>
          <p className="pb-4">
            Il sert uniquement à te prévenir de l&apos;ouverture. Tu peux
            demander sa suppression à tout moment. Le détail est dans la{" "}
            <Link href="/confidentialite" className="underline">
              politique de confidentialité
            </Link>
            .
          </p>
        </details>

        <details className="group">
          <summary className={question}>
            Les exemples de cette page sont-ils réels ?
            <span aria-hidden="true" className="text-xl text-brule group-open:hidden">+</span>
            <span aria-hidden="true" className="hidden text-xl text-brule group-open:inline">−</span>
          </summary>
          <p className="pb-4">
            Non. Les services, les montants et les écrans sont inventés pour
            montrer comment Fantômes fonctionnera. Ton total dépendra de tes
            propres prélèvements.
          </p>
        </details>
      </div>
    </section>
  );
}
