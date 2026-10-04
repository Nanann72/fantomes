import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | Fantômes",
  robots: { index: true, follow: true },
};

export default function MentionsLegales() {
  return (
    <main className="mx-auto max-w-xl px-5 pb-10 pt-10">
      <Link href="/" className="inline-block py-3 text-sm underline">
        ← Retour à l&apos;accueil
      </Link>

      <h1 className="mt-4 text-4xl">Mentions légales</h1>

      <section className="mt-8">
        <h2 className="text-2xl">Éditeur du site</h2>
        <p className="mt-3">
          Le site Fantômes est édité par Erlann Deroche, entrepreneur
          individuel.
        </p>
        <ul className="mt-3 space-y-1">
          <li>Nom commercial : Fantômes</li>
          <li>SIRET : [À COMPLÉTER]</li>
          <li>Adresse : 51 bis rue du stade, 72230 Mulsanne</li>
          <li>Email : erlann.drc72@gmail.com</li>
          <li>Téléphone : 07 68 02 33 18 </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl">Directeur de la publication</h2>
        <p className="mt-3">Erlann Deroche.</p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl">Hébergeur</h2>
        <p className="mt-3">
          Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
          Site : vercel.com.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl">Propriété intellectuelle</h2>
        <p className="mt-3">
          Les textes, la mise en page et les éléments graphiques du site sont
          protégés. Toute reproduction sans autorisation est interdite.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl">Contact</h2>
        <p className="mt-3">
          Pour toute question, écris-nous à erlann.drc72@gmail.com.
        </p>
      </section>
    </main>
  );
}
