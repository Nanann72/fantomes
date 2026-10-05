import Barre from "./barre";
import Demo from "./demo";
import Faq from "./faq";
import Hero from "./hero";

export default function Accueil() {
  return (
    <main className="mx-auto max-w-xl px-5 pb-6 pt-10">
      <Hero />

      <Demo />

      <Faq />

      <section
        id="fin"
        className="mt-14 border-t border-filet pt-10"
      >
        <h2 className="text-2xl">Ouverture prochaine</h2>
        <p className="mt-3">
          Fantômes est en construction. Laisse ton email en haut de la page :
          on te prévient le jour de l&apos;ouverture, sans rien te demander
          d&apos;autre.
        </p>
        <a
          href="#inscription"
          className="mt-6 flex min-h-14 w-full items-center justify-center rounded-lg border border-encre px-6 text-lg font-bold"
        >
          Remonter pour m&apos;inscrire
        </a>
      </section>

      <Barre />
    </main>
  );
}
