const exemples = [
  { nom: "Un essai jamais résilié", mensuel: 9.99 },
  { nom: "Un service remplacé par un autre", mensuel: 5.99 },
  { nom: "Une option activée une seule fois", mensuel: 2.99 },
];

const euros = (n: number) =>
  n.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const total = exemples.reduce((s, e) => s + e.mensuel * 12, 0);

export default function Accueil() {
  return (
    <main className="mx-auto max-w-xl px-5 pb-16 pt-10">
      <p className="text-sm font-semibold uppercase tracking-widest text-brule">
        Fantômes
      </p>

      <h1 className="mt-4 text-4xl sm:text-5xl">
        Débusque les abonnements que tu paies sans t&apos;en servir.
      </h1>

      <p className="mt-5 text-lg">
        Dépose ton relevé bancaire. On repère les prélèvements oubliés, classés
        par ce qu&apos;ils te coûtent chaque année, avec la lettre de
        résiliation prête à envoyer.
      </p>

      <a
        href="#reserver"
        className="mt-8 flex min-h-14 w-full items-center justify-center rounded-lg bg-brule px-6 text-lg font-bold text-papier"
      >
        Faire mon audit — 19 €
      </a>
      <p className="mt-3 text-center text-sm">
        Paiement unique. Pas d&apos;abonnement.
      </p>

      <section className="mt-14 border-t border-filet pt-10">
        <h2 className="text-2xl">Petits par mois, énormes par an.</h2>
        <ul className="mt-5 divide-y divide-filet border-y border-filet">
          {exemples.map((e) => (
            <li key={e.nom} className="flex items-baseline justify-between gap-4 py-3">
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

      <section className="mt-14 border-t border-filet pt-10">
        <h2 className="text-2xl">Ce que tu obtiens</h2>
        <ol className="mt-5 space-y-6">
          <li>
            <h3 className="text-xl">1. Les prélèvements oubliés, repérés</h3>
            <p className="mt-1">
              Tout ce qui revient chaque mois ou chaque année, trouvé dans ton
              relevé.
            </p>
          </li>
          <li>
            <h3 className="text-xl">2. Classés par coût annuel</h3>
            <p className="mt-1">
              Tu vois d&apos;abord ce qui pèse le plus, pas ce qui a l&apos;air
              petit.
            </p>
          </li>
          <li>
            <h3 className="text-xl">3. La lettre de résiliation, déjà écrite</h3>
            <p className="mt-1">
              Une lettre par prélèvement, à copier ou à imprimer.
            </p>
          </li>
        </ol>
      </section>

      <section id="reserver" className="mt-14 border-t border-filet pt-10">
        <h2 className="text-2xl">Ouverture en cours</h2>
        <p className="mt-3">
          Fantômes ouvre ses premiers accès. Le paiement sera disponible ici
          très bientôt.
        </p>
      </section>

      <footer className="mt-14 border-t border-filet pt-6 text-sm">
        <p>© Fantômes</p>
      </footer>
    </main>
  );
}
