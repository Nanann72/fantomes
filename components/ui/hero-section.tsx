"use client";

import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
} from "framer-motion";
import Bandeau from "@/app/bandeau";
import Film from "@/app/film";
import Formulaire from "@/app/formulaire";

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

function Fantome() {
  return (
    <svg viewBox="0 0 100 120" aria-hidden="true" className="w-full">
      <path
        d="M10 110 V50 C10 20 30 5 50 5 C70 5 90 20 90 50 V110 L77 98 L63 110 L50 98 L37 110 L23 98 Z"
        fill="#ffffff"
        stroke="#14213d"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <circle cx="38" cy="50" r="5" fill="#14213d" />
      <circle cx="62" cy="50" r="5" fill="#14213d" />
      <ellipse cx="50" cy="68" rx="6" ry="8" fill="#14213d" />
    </svg>
  );
}

export function HeroSection() {
  const reduit = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <header className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-2.5rem] h-[32rem] w-screen -translate-x-1/2 overflow-hidden"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(20,33,61,0.10) 1px, transparent 0), linear-gradient(to bottom, rgba(20,33,61,0.10) 1px, transparent 0)",
              backgroundSize: "48px 48px",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(247,242,232,0) 0%, #f7f2e8 90%)",
            }}
          />
        </div>

        <div className="relative">
          <m.p
            initial={reduit ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-encre bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-brule" />
            Bientôt ouvert · liste d&apos;attente
          </m.p>

          <h1 className="mt-5 text-4xl sm:text-5xl">
            Débusque les abonnements{" "}
            <span className="text-brule">
              que tu paies sans t&apos;en servir.
            </span>
          </h1>

          <p className="mt-5 text-lg">
            On repère les prélèvements qui reviennent, on les classe par ce
            qu&apos;ils te coûtent chaque année, et la lettre de résiliation
            est déjà écrite.
          </p>

          <div id="inscription">
            <Formulaire />
          </div>
          <p className="mt-3 text-center text-sm">
            Fantômes n&apos;est pas encore ouvert. Aucun paiement demandé.
          </p>

          <Film />

          <Bandeau />

          <m.div
            initial={reduit ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mt-16"
          >
            <m.div
              aria-hidden="true"
              className="absolute -top-14 right-2 z-10 w-20"
              animate={reduit ? undefined : { y: [0, -10, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Fantome />
            </m.div>

            <div className="-rotate-1 rounded-[2rem] border-2 border-encre bg-white p-5 shadow-[6px_6px_0_0_#14213d]">
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
                      <span className="block text-xs opacity-70">
                        {l.rythme}
                      </span>
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
          </m.div>
        </div>
      </header>
    </LazyMotion>
  );
}
