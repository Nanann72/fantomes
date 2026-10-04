"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

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

function Apparition({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [cache, setCache] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    setCache(true);
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setCache(false);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        cache ? "translate-y-8 opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      {children}
    </div>
  );
}

function Telephone({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto mt-6 w-full max-w-xs rounded-[2rem] border-2 border-encre bg-white p-5 shadow-[6px_6px_0_0_#14213d]">
      {children}
    </div>
  );
}

const etiquette = "text-xs font-semibold uppercase tracking-widest opacity-70";

export default function Demo() {
  const total = abonnements.reduce((s, a) => s + a.annuel, 0);
  const economie = abonnements
    .filter((a) => a.resilier)
    .reduce((s, a) => s + a.annuel, 0);
  const premier = abonnements[0];

  return (
    <section className="mt-14 border-t border-filet pt-10">
      <h2 className="text-3xl">Voilà ce que tu verras</h2>
      <p className="mt-2 text-sm opacity-70">
        Aperçu illustratif : les services et les montants sont fictifs.
      </p>

      <Apparition>
        <div className="mt-12">
          <p className="font-titre text-6xl font-bold text-brule">1</p>
          <h3 className="mt-2 text-2xl">
            Tout ce qui revient, classé par coût annuel
          </h3>
          <p className="mt-2">
            Le plus lourd en premier. Un petit montant mensuel pèse vite sur
            douze mois.
          </p>
          <Telephone>
            <p className={etiquette}>Tes prélèvements</p>
            <p className="mt-1 flex items-baseline justify-between">
              <span className="text-sm">Total par an</span>
              <span className="font-titre text-3xl font-bold text-brule">
                {euros(total)} €
              </span>
            </p>
            <ul className="mt-3 divide-y divide-filet border-t border-filet">
              {abonnements.map((a) => (
                <li
                  key={a.nom}
                  className="flex items-baseline justify-between gap-3 py-2 text-sm"
                >
                  <span>
                    <span className="block font-semibold">{a.nom}</span>
                    <span className="block text-xs opacity-70">{a.rythme}</span>
                  </span>
                  <span className="whitespace-nowrap font-titre font-bold text-brule">
                    {euros(a.annuel)} €
                  </span>
                </li>
              ))}
            </ul>
          </Telephone>
        </div>
      </Apparition>

      <Apparition>
        <div className="mt-16">
          <p className="font-titre text-6xl font-bold text-brule">2</p>
          <h3 className="mt-2 text-2xl">Tu tranches en deux secondes</h3>
          <p className="mt-2">
            Pour chaque ligne : tu gardes ou tu résilies. C&apos;est toi qui
            décides, et ton économie se met à jour.
          </p>
          <Telephone>
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
                <span className="flex min-h-11 items-center justify-center rounded-lg bg-brule text-sm font-bold text-papier">
                  Je résilie
                </span>
              </div>
            </div>
            <ul className="mt-3 divide-y divide-filet border-t border-filet">
              {abonnements.map((a) => (
                <li
                  key={a.nom}
                  className="flex items-center justify-between gap-3 py-2 text-sm"
                >
                  <span className="font-semibold">{a.nom}</span>
                  <span className={a.resilier ? "font-bold text-brule" : "opacity-70"}>
                    {a.resilier ? "À résilier" : "Je garde"}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-3 flex items-baseline justify-between border-t border-encre pt-3">
              <span className="text-sm font-semibold">Économie sur l&apos;année</span>
              <span className="font-titre text-2xl font-bold text-brule">
                {euros(economie)} €
              </span>
            </p>
          </Telephone>
        </div>
      </Apparition>

      <Apparition>
        <div className="mt-16">
          <p className="font-titre text-6xl font-bold text-brule">3</p>
          <h3 className="mt-2 text-2xl">La lettre de résiliation est déjà écrite</h3>
          <p className="mt-2">
            Une lettre par abonnement que tu veux arrêter. Tu la copies ou tu
            l&apos;imprimes.
          </p>
          <Telephone>
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
            <span className="mt-3 flex min-h-11 items-center justify-center rounded-lg bg-brule text-sm font-bold text-papier">
              Copier la lettre
            </span>
          </Telephone>
        </div>
      </Apparition>
    </section>
  );
}
