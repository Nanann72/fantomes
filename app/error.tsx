"use client";

import Link from "next/link";

export default function Erreur({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="mx-auto max-w-xl px-5 pb-10 pt-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-brule">
        Petit souci
      </p>
      <h1 className="mt-4 text-4xl">Quelque chose s&apos;est mal passé.</h1>
      <p className="mt-5 text-lg">
        Ce n&apos;est pas de ton fait. Réessaie, et si le problème revient,
        écris-nous à erlann.drc72@gmail.com.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-8 flex min-h-14 w-full items-center justify-center rounded-lg bg-brule px-6 text-lg font-bold text-papier"
      >
        Réessayer
      </button>
      <Link
        href="/"
        className="mt-3 flex min-h-14 w-full items-center justify-center rounded-lg border border-encre px-6 text-lg font-bold"
      >
        Revenir à l&apos;accueil
      </Link>
    </main>
  );
}
