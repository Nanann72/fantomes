import Link from "next/link";

const liens = [
  { href: "/mentions-legales", texte: "Mentions légales" },
  { href: "/cgv", texte: "Conditions générales de vente" },
  { href: "/confidentialite", texte: "Politique de confidentialité" },
];

export default function Pied() {
  return (
    <footer className="mt-20 border-t border-filet">
      <div className="mx-auto max-w-xl px-5 py-10 text-sm md:max-w-5xl">
        <p className="font-titre text-xl font-bold">Fantômes</p>
        <p className="mt-2 max-w-sm opacity-80">
          Débusque les abonnements que tu paies sans t&apos;en servir.
        </p>
        <nav
          aria-label="Informations légales"
          className="mt-6 flex flex-col md:flex-row md:gap-8"
        >
          {liens.map((l) => (
            <Link key={l.href} href={l.href} className="py-3 underline">
              {l.texte}
            </Link>
          ))}
        </nav>
        <p className="mt-6 opacity-70">© Fantômes. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
