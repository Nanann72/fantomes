import Demo from "./demo";
import Formulaire from "./formulaire";

const exemples = [
  { nom: "Un essai jamais résilié", mensuel: 9.99 },
  { nom: "Un service remplacé par un autre", mensuel: 5.99 },
  { nom: "Une option activée une seule fois", mensuel: 2.99 },
];

const euros = (n: number) =>
  n.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const total = exemples.reduce((s, e) => s + e.mensuel * 12, 0);

export default function Accueil() {
  return (
    <main className="mx-auto max-w-xl px-5 pb-6 pt-10">
      <p className="text-sm font-semibold uppercase tracking-widest text-brule">
        Fantômes
      </p>

      <h1 className="mt-4 text-4xl sm:text-5xl">
        Débusque les abonnements que tu paies sans t&apos;en servir.
      </h1>

      <p className="mt-5 text-lg">
        On repère les prélèvements qui reviennent, on les classe par ce
        qu&apos;ils te coûtent chaque année, et la lettre de résiliation est
        déjà écrite. Tu n&apos;as plus qu&apos;à l&apos;envoyer.
      </p>

      <div id="inscription">
        <Formulaire />
      </div>
      <p className="mt-3 text-center text-sm">
        Fantômes n&apos;est pas encore ouvert. Aucun paiement demandé.
      </p>

      <section className="mt-14 border-t border-filet pt-10">
        <h2 className="text-2xl">Petits par mois, énormes par an.</h2>
        <ul className="mt-5 divide-y divide-filet border-y border-filet">
          {exemples.map((e) => (
            <li
              key={e.nom}
              className="flex items-baseline justify-between gap-4 py-3"
            >
              <span>
                {e.nom}
                <span className="block text-sm opacity-70">
                  {euros(e.mensuel)} € par mois
                </span>
              </span>
              <span className="whitespace-nowrap font-titre text-xl font-bold text-brule">
                {euros(e.mensuel * 12)} €
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4 flex items-baseline justify-between gap-4">
          <span className="font-semibold">Total par an</span>
          <span className="font-titre text-3xl font-bold text-brule">
            {euros(total)} €
          </span>
        </p>
        <p className="mt-2 text-sm opacity-70">
          Exemple chiffré pour illustrer. Ton total dépend de tes propres
          prélèvements.
        </p>
      </section>

      <Demo />

      <section className="mt-14 border-t border-filet pt-10">
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
    </main>
  );
}
