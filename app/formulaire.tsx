"use client";

import Link from "next/link";
import { useActionState } from "react";
import { inscrire, type Etat } from "./actions";

const initial: Etat = { ok: false, message: "" };

export default function Formulaire() {
  const [etat, action, enCours] = useActionState(inscrire, initial);

  if (etat.ok) {
    return (
      <p
        role="status"
        className="mt-8 rounded-lg border border-encre p-4 text-lg font-semibold"
      >
        {etat.message}
      </p>
    );
  }

  return (
    <form action={action} className="mt-8">
      <label htmlFor="email" className="block font-semibold">
        Ton adresse email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        inputMode="email"
        autoComplete="email"
        required
        placeholder="prenom@exemple.fr"
        className="mt-2 min-h-14 w-full rounded-lg border border-encre bg-white px-4 text-lg"
      />
      <div className="hidden" aria-hidden="true">
        <input name="site" tabIndex={-1} autoComplete="off" />
      </div>
      <button
        type="submit"
        disabled={enCours}
        className="mt-4 flex min-h-14 w-full items-center justify-center rounded-lg bg-brule px-6 text-lg font-bold text-papier disabled:opacity-60"
      >
        {enCours ? "Envoi…" : "Me prévenir à l'ouverture"}
      </button>
      {etat.message && (
        <p role="alert" className="mt-3 text-sm font-semibold">
          {etat.message}
        </p>
      )}
      <p className="mt-3 text-center text-sm">
        Ton email sert uniquement à te prévenir de l&apos;ouverture. Détails
        dans la{" "}
        <Link href="/confidentialite" className="underline">
          politique de confidentialité
        </Link>
        .
      </p>
    </form>
  );
}
