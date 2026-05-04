"use client";

import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative bg-[#1a1015] py-16 text-cream/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="invert-0 brightness-150">
              <Logo />
            </div>
            <p className="mt-6 max-w-sm font-serif text-cream/65 leading-relaxed">
              Radieuse Académie — l’art du maquillage par Catherine Lavoie.
              Révéler la femme. Sublimer la confiance.
            </p>

            <div className="mt-8 flex items-center gap-3">
              {["Instagram", "Facebook", "TikTok"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 transition-all duration-500 hover:border-gold-400/60 hover:bg-gold-400/10 hover:text-gold-300"
                  aria-label={s}
                >
                  <span className="text-xs">{s[0]}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="font-sans text-[0.65rem] uppercase tracking-[0.32em] text-gold-300/80">
              Explorer
            </div>
            <ul className="mt-5 space-y-3 font-serif text-lg">
              <li>
                <a href="#approche" className="hover:text-gold-300 transition-colors">
                  L’approche
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-300 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#formations" className="hover:text-gold-300 transition-colors">
                  Formations
                </a>
              </li>
              <li>
                <a href="#galerie" className="hover:text-gold-300 transition-colors">
                  Galerie
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="font-sans text-[0.65rem] uppercase tracking-[0.32em] text-gold-300/80">
              Restez radieuse
            </div>
            <p className="mt-5 font-serif text-cream/65">
              Conseils beauté, ouvertures de cohortes, et moments de coulisses —
              une fois par mois, jamais plus.
            </p>

            <form className="mt-5 flex overflow-hidden rounded-full border border-cream/15 bg-cream/5 backdrop-blur-md">
              <input
                type="email"
                placeholder="Votre courriel"
                className="flex-1 bg-transparent px-5 py-3 font-sans text-sm placeholder:text-cream/40 outline-none"
              />
              <button
                type="button"
                className="bg-gold-400 px-5 py-3 font-sans text-[0.7rem] uppercase tracking-[0.22em] text-plum-900 transition-colors hover:bg-gold-300"
              >
                Inscrire
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 md:flex-row">
          <div className="font-sans text-xs text-cream/45">
            © {new Date().getFullYear()} Radieuse Académie · Catherine Lavoie. Tous droits réservés.
          </div>
          <div className="font-display italic text-cream/45">
            Conçu avec amour à Montréal · ✦
          </div>
        </div>
      </div>
    </footer>
  );
}
