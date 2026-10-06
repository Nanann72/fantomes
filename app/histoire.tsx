"use client";

import { useEffect, useRef, useState } from "react";

const MENSUEL = 24.9;

const euros = (n: number) =>
  n.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const clamp = (x: number) => Math.min(1, Math.max(0, x));
const seg = (p: number, a: number, b: number) => clamp((p - a) / (b - a));
const fenetre = (p: number, a: number, b: number, sortie = true) =>
  clamp((p - a) / 0.04) * (sortie ? clamp((b - p) / 0.04) : 1);

function Fantome({ style }: { style: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 100 120"
      aria-hidden="true"
      className="absolute bottom-[12%] left-1/2 w-36"
      style={style}
    >
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

const centre =
  "absolute inset-0 flex flex-col items-center justify-center px-5 text-center";

export default function Histoire() {
  const zone = useRef<HTMLElement>(null);
  const [p, setP] = useState(0);
  const [reduit, setReduit] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduit(true);
      return;
    }
    let raf = 0;
    const calc = () => {
      raf = 0;
      const el = zone.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      if (total > 0) setP(clamp(-r.top / total));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(calc);
    };
    calc();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (reduit) {
    return (
      <section className="mt-14 border-t border-filet pt-10">
        <h2 className="text-3xl">Un petit prélèvement devient un fantôme</h2>
        <ol className="mt-6 space-y-4">
          <li>1. Tu paies 24,90 € chaque mois.</li>
          <li>2. Tu ne t&apos;en sers plus.</li>
          <li>3. Ça fait {euros(MENSUEL * 12)} € par an.</li>
          <li>4. Tu résilies : la lettre est déjà écrite.</li>
        </ol>
        <p className="mt-4 text-xs opacity-70">
          Exemple fictif : service et montants inventés.
        </p>
      </section>
    );
  }

  const mois = Math.max(1, Math.round(seg(p, 0.02, 0.22) * 12));
  const s0 = fenetre(p, 0, 0.27);
  const s1 = fenetre(p, 0.25, 0.52);
  const s2 = fenetre(p, 0.5, 0.77);
  const s3 = fenetre(p, 0.75, 1, false);

  const fantome =
    clamp((p - 0.27) / 0.06) * (1 - seg(p, 0.86, 0.98));
  const echelle =
    (1 + seg(p, 0.5, 0.75) * 0.6) * (1 - 0.6 * seg(p, 0.86, 0.98));
  const flotte = Math.sin(p * 50) * 8;

  const monte = (s: number) => ({
    opacity: s,
    transform: `translateY(${(1 - s) * 24}px)`,
  });

  return (
    <section ref={zone} className="relative mt-14 h-[450svh]">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-1 origin-left bg-brule"
          style={{ transform: `scaleX(${p})` }}
        />

        <div className={centre} style={monte(s0)}>
          <p className="text-lg">Tu paies chaque mois</p>
          <p className="mt-2 font-titre text-6xl font-bold text-brule">
            {euros(MENSUEL * mois)} €
          </p>
          <p className="mt-3 text-sm opacity-70">
            {mois} mois de FitBox
          </p>
        </div>

        <div className={centre} style={monte(s1)}>
          <h3 className="text-4xl">…sans t&apos;en servir.</h3>
        </div>

        <div className={centre} style={monte(s2)}>
          <p className="text-lg">Ça fait</p>
          <p
            className="mt-2 font-titre text-6xl font-bold text-brule"
            style={{ transform: `scale(${1 + seg(p, 0.5, 0.7) * 0.25})` }}
          >
            {euros(MENSUEL * 12)} €
          </p>
          <p className="mt-3 text-lg">par an, pour un service oublié.</p>
        </div>

        <div
          className={centre}
          style={{ ...monte(s3), pointerEvents: s3 > 0.5 ? "auto" : "none" }}
        >
          <h3 className="text-5xl">Résilié.</h3>
          <p className="mt-3 text-lg">La lettre est déjà écrite.</p>
          <a
            href="#inscription"
            className="mt-6 flex min-h-14 w-full max-w-xs items-center justify-center rounded-lg bg-brule px-6 text-lg font-bold text-papier"
          >
            Me prévenir à l&apos;ouverture
          </a>
        </div>

        <Fantome
          style={{
            opacity: fantome,
            transform: `translate(-50%, ${flotte}px) scale(${echelle})`,
          }}
        />

        <p className="absolute inset-x-0 bottom-3 text-center text-xs opacity-70">
          Exemple fictif : service et montants inventés.
        </p>
      </div>
    </section>
  );
}
