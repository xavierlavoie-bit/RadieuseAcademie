"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IMG } from "../../lib/images";

export function ContinueWatching() {
  return (
    <section className="px-6 pt-10 lg:px-12 lg:pt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-rose-600" />
          <span className="font-sans text-[0.62rem] uppercase tracking-[0.32em] text-rose-700">
            Bonjour Sophie · Bon retour
          </span>
        </div>

        <h1 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05] text-plum-900">
          Reprenez votre <span className="italic text-rose-700">élan</span>
          <span className="text-rose-600">.</span>
        </h1>
      </motion.div>

      {/* Continue Watching card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative mt-8 overflow-hidden rounded-sm border border-plum-900/10 bg-white shadow-[0_30px_60px_-30px_rgba(122,47,67,0.25)]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Image side */}
          <div className="relative aspect-[16/10] lg:col-span-7 lg:aspect-auto">
            <Image
              src={IMG.lesson6.src}
              alt={IMG.lesson6.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover photo-warm"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-plum-900/55 via-plum-900/15 to-transparent" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center">
              <div className="ml-6 lg:ml-12">
                <button className="group flex items-center gap-4 rounded-full bg-cream px-7 py-4 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-2xl cursor-pointer">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-plum-900 transition-transform duration-500 group-hover:scale-110">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="ml-0.5 text-cream"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="font-sans text-[0.7rem] uppercase tracking-[0.28em] text-plum-900">
                    Reprendre · 18:42
                  </span>
                </button>
              </div>
            </div>

            {/* Top left badge */}
            <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-cream/40 bg-plum-900/30 px-3 py-1.5 backdrop-blur-md">
              <span className="font-sans text-[0.58rem] uppercase tracking-[0.28em] text-cream">
                Programme Radieuse
              </span>
            </div>

            {/* Bottom progress bar */}
            <div className="absolute inset-x-0 bottom-0 px-6 pb-6 lg:px-12 lg:pb-8">
              <div className="h-1 w-full overflow-hidden rounded-full bg-cream/20">
                <div className="h-full w-[42%] rounded-full bg-gradient-to-r from-rose-300 to-gold-300" />
              </div>
              <div className="mt-2 flex items-center justify-between font-sans text-[0.6rem] uppercase tracking-[0.22em] text-cream/85">
                <span>18:42 / 44:30</span>
                <span>42 %</span>
              </div>
            </div>
          </div>

          {/* Info side */}
          <div className="flex flex-col justify-between p-6 lg:col-span-5 lg:p-10">
            <div>
              <div className="font-sans text-[0.6rem] uppercase tracking-[0.32em] text-rose-700">
                Module 06 · Chapitre 12
              </div>
              <h2 className="mt-3 font-display text-3xl italic text-plum-900 lg:text-4xl">
                Glamour de soirée
              </h2>
              <p className="mt-4 font-serif text-[1.05rem] leading-relaxed text-plum-900/70">
                Le drame contrôlé — paupières dorées, cat-eye scintillant,
                lèvres rouges intemporelles. Apprenez à composer une signature
                qui résiste à la danse, au champagne, au temps.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {["Yeux", "Cat-eye", "Glitter sécurisé", "Niveau intermédiaire"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full border border-plum-900/15 bg-cream px-3 py-1 font-sans text-[0.64rem] text-plum-900/75"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-plum-900/10 pt-5">
              <button className="inline-flex items-center gap-2 rounded-full border border-plum-900/15 bg-white px-4 py-2 font-sans text-[0.66rem] uppercase tracking-[0.22em] text-plum-900 transition-colors hover:bg-plum-900 hover:text-white cursor-pointer">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                Fiche PDF
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-plum-900/15 bg-white px-4 py-2 font-sans text-[0.66rem] uppercase tracking-[0.22em] text-plum-900 transition-colors hover:bg-plum-900 hover:text-white cursor-pointer">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.29 1.51 4.04 3 5.5l7 7 7-7z" />
                </svg>
                Favoris
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-plum-900/15 bg-white px-4 py-2 font-sans text-[0.66rem] uppercase tracking-[0.22em] text-plum-900 transition-colors hover:bg-plum-900 hover:text-white cursor-pointer">
                Mes notes
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
