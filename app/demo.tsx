"use client";

import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import type { ReactNode } from "react";

const euros = (n: number) =>
  n.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const abonnements = [
  { nom: "FitBox", rythme: "24,90 € par mois", annuel: 24.9 * 12, resilier: true },
  { nom: "Streamo", rythme: "13,99 € par mois", annuel: 13.99 * 12, resilier: false },
  { nom: "Antivirus Pro", rythme: "59,99 € par an", annuel: 59.99, resilier: true },
  { nom: "CloudNote", rythme: "4,99 € par mois", annuel: 4.99 * 12, resilier: false },
  { nom: "Musica+", rythme: "2,99 € par mois", annuel: 2.99 * 12, resilier: true },
].sort((a, b) => b.annuel - a.annuel);

const liste: Variants = {
  cache: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
};

const ligne: Variants = {
  cache: { opacity: 0, x: 16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const etiquette = "text-xs font-semibold uppercase tracking-widest opacity-70";

function Scene({
  numero,
  titre,
  texte,
  children,
}: {
  numero: string;
  titre: string;
  texte: string;
  children: ReactNode;
}) {
  const reduit = useReducedMotion();
  return (
    <m.div
      initial={reduit ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mt-16"
    >
      <p className="font-titre text-6xl font-bold text-brule">{numero}</p>
      <h3 className="mt-2 text-2xl">{titre}</h3>
      <p className="mt-2">{texte}</p>
      {children}
    </m.div>
  );
}

function Telephone({
  inclinaison,
  children,
}: {
  inclinaison: string;
  children: ReactNode;
}) {
  const reduit = useReducedMotion();
  return (
    <m.div
      initial={reduit ? false : { opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
      className={`mx-auto mt-6 w-full max-w-xs rounded-[2rem] border-2 border-encre bg-white p-5 shadow-[6px_6px_0_0_#14213d] ${inclinaison}`}
    >
      {children}
    </m.div>
  );
}

export default function Demo() {
  const reduit = useReducedMotion();
  const etat = reduit ? "visible" : "cache";
  const total = abonnements.reduce((s, a) => s + a.annuel, 0);
  const economie = abonnements
    .filter((a) => a.resilier)
    .reduce((s, a) => s + a.annuel, 0);
  const premier = abonnements[0];

  return (
    <LazyMotion features={domAnimation}>
      <section className="mt-14 border-t border-filet pt-10">
        <h2 className="text-3xl">Voilà ce que tu verras</h2>
        <p className="mt-2 text-sm opacity-70">
          Aperçu illustratif : les services et les montants sont fictifs.
        </p>

        <Scene
          numero="1"
          titre="Tout ce qui revient, classé par coût annuel"
          texte="Le plus lourd en premier. Un petit montant mensuel pèse vite sur douze mois."
        >
          <Telephone inclinaison="-rotate-1">
            <p className={etiquette}>Tes prélèvements</p>
            <p className="mt-1 flex items-baseline justify-between">
              <span className="text-sm">Total par an</span>
              <span className="font-titre text-3xl font-bold text-brule">
                {euros(total)} €
              </span>
            </p>
            <m.ul
              variants={liste}
              initial={etat}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="mt-3 divide-y divide-filet border-t border-filet"
            >
              {abonnements.map((a) => (
                <m.li
                  key={a.nom}
                  variants={ligne}
                  className="flex items-baseline justify-between gap-3 py-2 text-sm"
                >
                  <span>
                    <span className="block font-semibold">{a.nom}</span>
                    <span className="block text-xs opacity-70">{a.rythme}</span>
                  </span>
                  <span className="whitespace-nowrap font-titre font-bold text-brule">
                    {euros(a.annuel)} €
                  </span>
                </m.li>
              ))}
            </m.ul>
          </Telephone>
        </Scene>

        <Scene
          numero="2"
          titre="Tu tranches en deux secondes"
          texte="Pour chaque ligne : tu gardes ou tu résilies. C'est toi qui décides, et ton économie se met à jour."
        >
          <Telephone inclinaison="rotate-1">
            <p className={etiquette}>Ta décision</p>
            <p className="mt-2 text-sm font-semibold">Tu t&apos;en sers encore ?</p>
            <div className="mt-2 rounded-lg border border-filet p-3">
              <p className="font-semibold">{premier.nom}</p>
              <p className="text-xs opacity-70">
                {premier.rythme}, soit {euros(premier.annuel)} € par an
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <span className="flex min-h-11 items-center justify-center rounded-lg border border-encre text-sm font-bold">
                  Je garde
                </span>
                <m.span
                  whileInView={reduit ? undefined : { scale: [1, 0.9, 1] }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ delay: 1.1, duration: 0.45 }}
                  className="flex min-h-11 items-center justify-center rounded-lg bg-brule text-sm font-bold text-papier"
                >
                  Je résilie
                </m.span>
              </div>
            </div>
            <m.ul
              variants={liste}
              initial={etat}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="mt-3 divide-y divide-filet border-t border-filet"
            >
              {abonnements.map((a) => (
                <m.li
                  key={a.nom}
                  variants={ligne}
                  className="flex items-center justify-between gap-3 py-2 text-sm"
                >
                  <span className="font-semibold">{a.nom}</span>
                  <span className={a.resilier ? "font-bold text-brule" : "opacity-70"}>
                    {a.resilier ? "À résilier" : "Je garde"}
                  </span>
                </m.li>
              ))}
            </m.ul>
            <p className="mt-3 flex items-baseline justify-between border-t border-encre pt-3">
              <span className="text-sm font-semibold">Économie sur l&apos;année</span>
              <span className="font-titre text-2xl font-bold text-brule">
                {euros(economie)} €
              </span>
            </p>
          </Telephone>
        </Scene>

        <Scene
          numero="3"
          titre="La lettre de résiliation est déjà écrite"
          texte="Une lettre par abonnement que tu veux arrêter. Tu la copies ou tu l'imprimes."
        >
          <Telephone inclinaison="-rotate-1">
            <p className={etiquette}>Ta lettre</p>
            <div className="mt-2 rounded-lg border border-filet bg-papier p-3 text-xs leading-relaxed">
              <p className="font-semibold">
                Objet : résiliation de mon abonnement {premier.nom}
              </p>
              <p className="mt-2">Madame, Monsieur,</p>
              <p className="mt-2">
                Je souhaite résilier mon abonnement {premier.nom}. Merci de me
                confirmer la date de fin et l&apos;arrêt des prélèvements.
              </p>
              <p className="mt-2">Cordialement,</p>
              <p>[Ton nom]</p>
            </div>
            <m.span
              whileInView={reduit ? undefined : { scale: [1, 0.94, 1] }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: 1, duration: 0.45 }}
              className="mt-3 flex min-h-11 items-center justify-center rounded-lg bg-brule text-sm font-bold text-papier"
            >
              Copier la lettre
            </m.span>
          </Telephone>
        </Scene>
      </section>
    </LazyMotion>
  );
}
