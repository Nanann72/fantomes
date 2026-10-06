"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const euros = (n: number) =>
  n.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
const clamp = (x: number) => Math.min(1, Math.max(0, x));
const seg = (k: number, a: number, b: number) => clamp((k - a) / (b - a));

const LIGNES = [
  { nom: "FitBox", annuel: 24.9 * 12, rythme: "24,90 € par mois" },
  { nom: "Antivirus Pro", annuel: 59.99, rythme: "59,99 € par an" },
  { nom: "Musica+", annuel: 2.99 * 12, rythme: "2,99 € par mois" },
];
const TOTAL = LIGNES.reduce((s, l) => s + l.annuel, 0);
const MAX = Math.max(...LIGNES.map((l) => l.annuel));
const LETTRE =
  "Madame, Monsieur, je souhaite résilier mon abonnement FitBox. Merci de me confirmer la date de fin et l'arrêt des prélèvements. Cordialement.";

const PHRASES = [
  "Un abonnement. Vingt-quatre euros quatre-vingt-dix par mois.",
  "Tu l'as pris pour un essai.",
  "Et tu l'as oublié.",
  "Mois après mois, la facture grossit.",
  "Et ce n'est pas le seul.",
  "Ils sont tous cachés dans ton relevé.",
  "Fantômes les classe par coût annuel.",
  "Au total, près de quatre cents euros par an.",
  "Tu choisis : tu gardes, ou tu résilies.",
  "Résilié.",
  "Et la lettre est déjà écrite.",
  "Exemples fictifs : ton total dépendra de toi.",
  "Fantômes. Laisse ton email, on te prévient à l'ouverture.",
];

function arreter() {
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

function dire(texte: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  const synth = window.speechSynthesis;
  synth.cancel();
  const u = new SpeechSynthesisUtterance(texte);
  u.lang = "fr-FR";
  u.rate = 1;
  const voix = synth
    .getVoices()
    .find((v) => v.lang.toLowerCase().startsWith("fr"));
  if (voix) u.voice = voix;
  synth.speak(u);
}

const gros = "font-titre text-6xl font-bold text-brule";

function Gh({ cls = "w-28" }: { cls?: string }) {
  return (
    <svg viewBox="0 0 100 120" aria-hidden="true" className={cls}>
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

function Fantome({ o, s, y = 0 }: { o: number; s: number; y?: number }) {
  return (
    <div
      className="absolute bottom-[14%] left-1/2 origin-bottom"
      style={{ opacity: o, transform: `translate(-50%, ${y}px) scale(${s})` }}
    >
      <Gh />
    </div>
  );
}

function Bloc({
  k,
  children,
  plein = false,
  sortie = true,
}: {
  k: number;
  children: ReactNode;
  plein?: boolean;
  sortie?: boolean;
}) {
  const a = seg(k, 0, 0.15);
  const o = a * (sortie ? 1 - seg(k, 0.88, 1) : 1);
  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center px-6 text-center ${
        plein ? "" : "pb-[22svh]"
      }`}
      style={{ opacity: o, transform: `translateY(${(1 - a) * 20}px)` }}
    >
      {children}
    </div>
  );
}

type Scene = { d: number; vue: (k: number, fermer: () => void) => ReactNode };

const SCENES: Scene[] = [
  {
    d: 4200,
    vue: (k) => (
      <Bloc k={k}>
        <p className="text-xl">Un abonnement.</p>
        <p className={gros}>24,90 €</p>
        <p className="mt-1">par mois</p>
      </Bloc>
    ),
  },
  {
    d: 3200,
    vue: (k) => (
      <Bloc k={k}>
        <h3 className="text-4xl">Tu l&apos;as pris pour un essai.</h3>
      </Bloc>
    ),
  },
  {
    d: 3000,
    vue: (k) => (
      <>
        <Bloc k={k}>
          <h3 className="text-4xl">Tu l&apos;as oublié.</h3>
        </Bloc>
        <Fantome
          o={seg(k, 0.2, 0.5) * (1 - seg(k, 0.9, 1))}
          s={1}
          y={Math.sin(k * 8) * 6}
        />
      </>
    ),
  },
  {
    d: 4000,
    vue: (k) => {
      const m = Math.max(1, Math.round(seg(k, 0.05, 0.85) * 12));
      return (
        <>
          <Bloc k={k}>
            <p className="text-lg">{m} mois plus tard</p>
            <p className={gros}>{euros(24.9 * m)} €</p>
          </Bloc>
          <Fantome
            o={1 - seg(k, 0.92, 1)}
            s={1 + seg(k, 0.05, 0.85) * 0.7}
            y={Math.sin(k * 8) * 6}
          />
        </>
      );
    },
  },
  {
    d: 3200,
    vue: (k) => (
      <Bloc k={k}>
        <h3 className="text-3xl">Et ce n&apos;est pas le seul.</h3>
        <div className="mt-6 flex gap-4">
          {LIGNES.map((l, i) => {
            const a = seg(k, 0.15 + i * 0.2, 0.4 + i * 0.2);
            return (
              <div
                key={l.nom}
                className="flex flex-col items-center text-xs"
                style={{
                  opacity: a,
                  transform: `translateY(${(1 - a) * 20}px)`,
                }}
              >
                <Gh cls="w-16" />
                <span className="mt-1 font-semibold">{l.nom}</span>
              </div>
            );
          })}
        </div>
      </Bloc>
    ),
  },
  {
    d: 3200,
    vue: (k) => (
      <Bloc k={k} plein>
        <h3 className="text-3xl">Dans ton relevé.</h3>
        <ul className="mt-6 w-full max-w-xs divide-y divide-filet border-y border-filet text-left">
          {LIGNES.map((l, i) => {
            const a = seg(k, 0.15 + i * 0.2, 0.35 + i * 0.2);
            return (
              <li
                key={l.nom}
                className="py-3"
                style={{
                  opacity: a,
                  transform: `translateX(${(1 - a) * 30}px)`,
                }}
              >
                <span className="block font-semibold">{l.nom}</span>
                <span className="block text-sm opacity-70">{l.rythme}</span>
              </li>
            );
          })}
        </ul>
      </Bloc>
    ),
  },
  {
    d: 3600,
    vue: (k) => (
      <Bloc k={k} plein>
        <h3 className="text-3xl">Classés par coût annuel.</h3>
        <ul className="mt-6 w-full max-w-xs space-y-4 text-left">
          {[...LIGNES]
            .sort((a, b) => b.annuel - a.annuel)
            .map((l, i) => {
              const a = seg(k, 0.15 + i * 0.15, 0.5 + i * 0.15);
              return (
                <li key={l.nom}>
                  <p className="flex justify-between text-sm">
                    <span className="font-semibold">{l.nom}</span>
                    <span className="font-titre font-bold text-brule">
                      {euros(l.annuel * a)} €
                    </span>
                  </p>
                  <div className="mt-1 h-3 rounded-full bg-filet">
                    <div
                      className="h-3 rounded-full bg-brule"
                      style={{ width: `${(l.annuel / MAX) * 100 * a}%` }}
                    />
                  </div>
                </li>
              );
            })}
        </ul>
      </Bloc>
    ),
  },
  {
    d: 4000,
    vue: (k) => (
      <Bloc k={k}>
        <p className="text-lg">Au total</p>
        <p className={gros}>{euros(TOTAL * seg(k, 0.1, 0.8))} €</p>
        <p className="mt-1">par an</p>
      </Bloc>
    ),
  },
  {
    d: 3600,
    vue: (k) => (
      <Bloc k={k}>
        <h3 className="text-3xl">Tu tranches en 2 secondes.</h3>
        <div className="mt-6 grid w-full max-w-xs grid-cols-2 gap-3">
          <span className="flex min-h-14 items-center justify-center rounded-lg border border-encre font-bold">
            Je garde
          </span>
          <span
            className="flex min-h-14 items-center justify-center rounded-lg bg-brule font-bold text-papier"
            style={{ transform: `scale(${k > 0.55 ? 0.92 : 1})` }}
          >
            Je résilie
          </span>
        </div>
      </Bloc>
    ),
  },
  {
    d: 2600,
    vue: (k) => (
      <>
        <Bloc k={k}>
          <h3 className="text-6xl">Résilié.</h3>
        </Bloc>
        <Fantome
          o={1 - seg(k, 0.2, 0.8)}
          s={1 - seg(k, 0.2, 0.8) * 0.5}
          y={-seg(k, 0.2, 0.8) * 80}
        />
      </>
    ),
  },
  {
    d: 4000,
    vue: (k) => (
      <Bloc k={k} plein>
        <h3 className="text-3xl">La lettre est déjà écrite.</h3>
        <p className="mt-6 min-h-40 w-full max-w-xs rounded-lg border border-filet bg-white p-4 text-left text-sm leading-relaxed">
          {LETTRE.slice(0, Math.floor(LETTRE.length * seg(k, 0.15, 0.85)))}
        </p>
      </Bloc>
    ),
  },
  {
    d: 4000,
    vue: (k) => (
      <Bloc k={k}>
        <p className="text-lg">Économie sur l&apos;année</p>
        <p className={gros}>{euros(TOTAL * seg(k, 0.1, 0.8))} €</p>
      </Bloc>
    ),
  },
  {
    d: 5000,
    vue: (k, fermer) => (
      <Bloc k={k} sortie={false}>
        <p className="font-titre text-5xl font-bold">Fantômes</p>
        <p className="mt-3 text-lg">
          Débusque les abonnements que tu paies sans t&apos;en servir.
        </p>
        <button
          type="button"
          onClick={fermer}
          className="mt-6 flex min-h-14 w-full max-w-xs items-center justify-center rounded-lg bg-brule px-6 text-lg font-bold text-papier"
        >
          Me prévenir à l&apos;ouverture
        </button>
      </Bloc>
    ),
  },
];

const FIN = SCENES.reduce((s, c) => s + c.d, 0);

const btn =
  "flex min-h-11 items-center justify-center rounded-lg border border-encre px-5 text-sm font-bold";

export default function Film() {
  const [ouvert, setOuvert] = useState(false);
  const [t, setT] = useState(0);
  const [pause, setPause] = useState(false);
  const [reduit, setReduit] = useState(false);
  const [idx, setIdx] = useState(0);
  const [muet, setMuet] = useState(false);
  const [voixDispo, setVoixDispo] = useState(false);
  const dernier = useRef(-1);

  useEffect(() => {
    setReduit(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    setVoixDispo("speechSynthesis" in window);
    return () => arreter();
  }, []);

  useEffect(() => {
    if (!ouvert || pause || reduit) return;
    let raf = 0;
    let precedent = performance.now();
    const boucle = (now: number) => {
      const dt = now - precedent;
      precedent = now;
      setT((v) => Math.min(v + dt, FIN));
      raf = requestAnimationFrame(boucle);
    };
    raf = requestAnimationFrame(boucle);
    return () => cancelAnimationFrame(raf);
  }, [ouvert, pause, reduit]);

  useEffect(() => {
    if (!ouvert) return;
    document.body.style.overflow = "hidden";
    const touche = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOuvert(false);
    };
    window.addEventListener("keydown", touche);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", touche);
    };
  }, [ouvert]);

  let i = SCENES.length - 1;
  let debut = FIN - SCENES[i].d;
  if (!reduit) {
    let acc = 0;
    for (let j = 0; j < SCENES.length; j++) {
      if (t < acc + SCENES[j].d) {
        i = j;
        debut = acc;
        break;
      }
      acc += SCENES[j].d;
    }
  } else {
    i = idx;
  }

  useEffect(() => {
    if (!ouvert || pause || muet || reduit || !voixDispo) {
      arreter();
      dernier.current = -1;
      return;
    }
    if (dernier.current !== i) {
      dernier.current = i;
      dire(PHRASES[i]);
    }
  }, [ouvert, pause, muet, reduit, voixDispo, i]);

  const ouvrir = () => {
    setT(0);
    setIdx(0);
    setPause(false);
    setOuvert(true);
    if (!muet && !reduit && voixDispo) {
      dire(PHRASES[0]);
      dernier.current = 0;
    }
  };

  const fermer = () => {
    setOuvert(false);
    setTimeout(() => {
      document
        .getElementById("inscription")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const k = reduit ? 0.87 : clamp((t - debut) / SCENES[i].d);
  const termine = reduit ? idx === SCENES.length - 1 : t >= FIN;
  const avancement = reduit ? (idx + 1) / SCENES.length : t / FIN;

  return (
    <div className="mt-8">
      <button
        type="button"
        onClick={ouvrir}
        className="flex min-h-14 w-full items-center justify-center rounded-lg border border-encre px-6 text-lg font-bold"
      >
        Voir en 50 secondes
      </button>

      {ouvert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Film de présentation de Fantômes"
          className="fixed inset-0 z-[60] overflow-hidden bg-papier"
        >
          <div
            className="absolute inset-x-0 top-0 h-1 origin-left bg-brule"
            style={{ transform: `scaleX(${avancement})` }}
          />

          {SCENES[i].vue(k, fermer)}

          <button
            type="button"
            onClick={() => setOuvert(false)}
            className="absolute right-3 top-[calc(env(safe-area-inset-top,0px)+0.75rem)] flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-encre px-3 text-sm font-bold"
          >
            Fermer
          </button>

          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-2 pb-[calc(env(safe-area-inset-bottom,0px)+0.75rem)]">
            <div className="flex gap-3">
              {reduit ? (
                !termine && (
                  <button
                    type="button"
                    onClick={() => setIdx((v) => v + 1)}
                    className={btn}
                  >
                    Suivant
                  </button>
                )
              ) : termine ? (
                <button
                  type="button"
                  onClick={() => {
                    setT(0);
                    setPause(false);
                  }}
                  className={btn}
                >
                  Rejouer
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setPause((v) => !v)}
                  className={btn}
                >
                  {pause ? "Reprendre" : "Pause"}
                </button>
              )}
              {!reduit && voixDispo && (
                <button
                  type="button"
                  onClick={() => setMuet((v) => !v)}
                  className={btn}
                >
                  {muet ? "Remettre la voix" : "Couper la voix"}
                </button>
              )}
            </div>
            <p className="text-xs opacity-70">
              Exemple fictif : services et montants inventés.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
