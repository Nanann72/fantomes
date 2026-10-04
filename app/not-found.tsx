import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-5 pb-10 pt-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-brule">
        Erreur 404
      </p>
      <h1 className="mt-4 text-4xl">
        Cette page a disparu. Comme un abonnement bien résilié.
      </h1>
      <p className="mt-5 text-lg">
        L&apos;adresse que tu as ouverte n&apos;existe pas ou plus. Rien de
        grave : reviens à l&apos;accueil.
      </p>
      <Link
        href="/"
        className="mt-8 flex min-h-14 w-full items-center justify-center rounded-lg bg-brule px-6 text-lg font-bold text-papier"
      >
        Revenir à l&apos;accueil
      </Link>
    </main>
  );
}
