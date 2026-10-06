import Bandeau from "./bandeau";
import Film from "./film";
import Formulaire from "./formulaire";

const euros = (n: number) =>
  n.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const lignes = [
  { nom: "FitBox", rythme: "24,90 € par mois", annuel: 24.9 * 12 },
  { nom: "Antivirus Pro", rythme: "59,99 € par an", annuel: 59.99 },
  { nom: "Musica+", rythme: "2,99 € par mois", annuel: 2.99 * 12 },
];

const total = lignes.reduce((s, l) => s + l.annuel, 0);

export default function Hero() {
  return (
    <header>
      <p className="text-sm font-semibold uppercase tracking-widest text-brule">
        Fantômes
      </p>

      <h1 className="mt-4 text-4xl sm:text-5xl">
        Débusque les abonnements que tu paies sans t&apos;en servir.
      </h1>

      <p className="mt-5 text-lg">
        On repère les prélèvements qui reviennent, on les classe par ce
        qu&apos;ils te coûtent chaque année, et la lettre de résiliation est
        déjà écrite.
      </p>

      <div id="inscription">
        <Formulaire />
      </div>
      <p className="mt-3 text-center text-sm">
        Fantômes n&apos;est pas encore ouvert. Aucun paiement demandé.
      </p>

      <Film />

      <Bandeau />

      <div className="mt-12 -rotate-1 rounded-[2rem] border-2 border-encre bg-white p-5 shadow-[6px_6px_0_0_#14213d]">
        <p className="text-xs font-semibold uppercase tracking-widest opacity-70">
          Exemple fictif : 3 petits prélèvements
        </p>
        <p className="mt-3 text-sm">Ils te coûtent par an</p>
        <p className="font-titre text-6xl font-bold leading-none text-brule">
          {euros(total)} €
        </p>
        <ul className="mt-4 divide-y divide-filet border-t border-filet">
          {lignes.map((l) => (
            <li
              key={l.nom}
              className="flex items-baseline justify-between gap-3 py-2 text-sm"
            >
              <span>
                <span className="block font-semibold">{l.nom}</span>
                <span className="block text-xs opacity-70">{l.rythme}</span>
              </span>
              <span className="whitespace-nowrap font-titre font-bold text-brule">
                {euros(l.annuel)} €
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs opacity-70">
          Services et montants inventés pour illustrer.
        </p>
      </div>
    </header>
  );
}
    </header>
  );
}
