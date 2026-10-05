const services = [
  { nom: "FitBox", prix: "24,90 € / mois" },
  { nom: "Streamo", prix: "13,99 € / mois" },
  { nom: "Antivirus Pro", prix: "59,99 € / an" },
  { nom: "CloudNote", prix: "4,99 € / mois" },
  { nom: "Musica+", prix: "2,99 € / mois" },
  { nom: "VPN Express", prix: "8,49 € / mois" },
  { nom: "Yoga Daily", prix: "9,99 € / mois" },
];

function Ligne() {
  return (
    <ul className="flex shrink-0 items-center gap-3 pr-3">
      {services.map((s) => (
        <li
          key={s.nom}
          className="whitespace-nowrap rounded-full border border-encre bg-white px-4 py-1.5 text-sm"
        >
          <span className="font-semibold">{s.nom}</span>{" "}
          <span className="font-bold text-brule">{s.prix}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Bandeau() {
  return (
    <div className="-mx-5 mt-10">
      <style>{`
        @keyframes defile {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .bandeau-piste { animation: defile 35s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .bandeau-piste { animation: none; }
        }
      `}</style>
      <div
        role="img"
        aria-label="Exemples fictifs d'abonnements oubliés"
        className="overflow-hidden border-y border-encre py-3"
      >
        <div className="bandeau-piste flex w-max">
          <Ligne />
          <Ligne />
        </div>
      </div>
      <p className="mt-2 px-5 text-center text-xs opacity-70">
        Exemples fictifs : services et prix inventés.
      </p>
    </div>
  );
}
