"use client";

import { useEffect, useState } from "react";

export default function Barre() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const cibles = ["inscription", "fin"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (cibles.length === 0) return;

    const etat = new Map<Element, boolean>();
    const obs = new IntersectionObserver((entrees) => {
      entrees.forEach((e) => etat.set(e.target, e.isIntersecting));
      setVisible(!Array.from(etat.values()).some(Boolean));
    });

    cibles.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <div className="h-24" aria-hidden="true" />
      <div
        aria-hidden={!visible}
        className={`fixed inset-x-0 bottom-0 z-50 border-t border-encre bg-papier px-5 pt-3 pb-[calc(env(safe-area-inset-bottom,0px)+0.75rem)] transition-transform duration-300 ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <a
          href="#inscription"
          tabIndex={visible ? 0 : -1}
          className="mx-auto flex min-h-14 w-full max-w-xl items-center justify-center rounded-lg bg-brule px-6 text-lg font-bold text-papier"
        >
          Me prévenir à l&apos;ouverture
        </a>
      </div>
    </>
  );
}
