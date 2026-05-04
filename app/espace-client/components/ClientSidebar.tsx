"use client";

import Link from "next/link";
import { Logo } from "../../components/Logo";

const nav = [
  { label: "Mon parcours", href: "#parcours", active: true },
  { label: "Toutes mes leçons", href: "#lecons" },
  { label: "Mes fiches & PDF", href: "#fiches" },
  { label: "Coaching live", href: "#live" },
  { label: "Favoris", href: "#favoris" },
  { label: "Mon compte", href: "#compte" },
];

export function ClientSidebar() {
  return (
    <aside className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-72 lg:flex-shrink-0 lg:flex-col lg:border-r lg:border-plum-900/10 lg:bg-cream/60 lg:backdrop-blur-md">
      <div className="border-b border-plum-900/10 p-6">
        <Link href="/" className="cursor-pointer">
          <Logo />
        </Link>
        <div className="mt-1 font-sans text-[0.6rem] uppercase tracking-[0.32em] text-rose-700">
          Espace client privé
        </div>
      </div>

      {/* Profile */}
      <div className="border-b border-plum-900/10 p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-rose-700 font-display text-xl italic text-white">
            S
          </div>
          <div>
            <div className="font-display text-base italic text-plum-900">
              Sophie Martin
            </div>
            <div className="font-sans text-[0.6rem] uppercase tracking-[0.24em] text-plum-900/55">
              Programme Radieuse
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-5 rounded-sm border border-gold-400/30 bg-white p-4">
          <div className="flex items-center justify-between">
            <span className="font-sans text-[0.58rem] uppercase tracking-[0.28em] text-rose-700">
              Progression
            </span>
            <span className="font-display italic text-plum-900">65 %</span>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-rose-100">
            <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-rose-500 to-gold-400" />
          </div>
          <div className="mt-3 font-sans text-[0.65rem] text-plum-900/60">
            12 leçons sur 18 complétées
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto p-4">
        {nav.map((n) => (
          <a
            key={n.label}
            href={n.href}
            className={`mb-1 flex items-center justify-between rounded-sm px-3 py-2.5 font-sans text-[0.72rem] uppercase tracking-[0.22em] transition-colors duration-300 cursor-pointer ${
              n.active
                ? "bg-plum-900 text-white"
                : "text-plum-900/70 hover:bg-cream/80 hover:text-plum-900"
            }`}
          >
            {n.label}
            {n.active && <span className="text-gold-300">●</span>}
          </a>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-plum-900/10 p-5">
        <div className="rounded-sm border border-rose-200/60 bg-white/60 p-4">
          <div className="font-sans text-[0.58rem] uppercase tracking-[0.28em] text-rose-700">
            ✦ Besoin d’aide ?
          </div>
          <div className="mt-1 font-display italic text-base text-plum-900">
            Catherine répond.
          </div>
          <a
            href="mailto:catherine@radieuseacademie.com"
            className="mt-3 inline-flex items-center gap-2 font-sans text-[0.64rem] uppercase tracking-[0.24em] text-rose-700 hover:text-rose-900 cursor-pointer"
          >
            Envoyer un message
            <span>→</span>
          </a>
        </div>
        <Link
          href="/"
          className="mt-4 inline-flex items-center gap-2 font-sans text-[0.62rem] uppercase tracking-[0.28em] text-plum-900/55 hover:text-plum-900 cursor-pointer"
        >
          ← Retour au site
        </Link>
      </div>
    </aside>
  );
}
