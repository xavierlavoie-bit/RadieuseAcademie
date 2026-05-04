"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IMG } from "../../lib/images";

export function LiveCoaching() {
  return (
    <section
      id="coaching"
      className="relative overflow-hidden bg-plum-900 py-20 lg:py-28 text-white"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-1/3 h-[500px] w-[500px] rounded-full bg-rose-700/30 blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 h-[400px] w-[400px] rounded-full bg-gold-500/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-7"
          >
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-gold-400" />
              <span className="font-sans text-[0.7rem] uppercase tracking-[0.32em] text-gold-300">
                Coaching privé · §4
              </span>
            </div>

            <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.02] text-white text-balance">
              Préférez l’humain ?
              <br />
              <span className="italic gold-shimmer">Réservez Catherine en direct.</span>
            </h2>

            <p className="mt-9 max-w-xl font-serif text-xl leading-[1.6] text-cream/85 text-balance">
              Au-delà des vidéos, certaines femmes souhaitent un accompagnement
              personnel. Une heure en visioconférence, ou une séance en studio
              à Montréal — pour un retour précis sur votre maquillage, vos
              questions, votre cheminement.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:max-w-xl">
              {[
                {
                  title: "Visio · 60 min",
                  price: "147 $",
                  desc: "Une session privée en ligne — feedback maquillage en direct.",
                },
                {
                  title: "Studio · 90 min",
                  price: "247 $",
                  desc: "Session en studio à Montréal — Catherine, vous et un thé.",
                },
              ].map((opt) => (
                <div
                  key={opt.title}
                  className="rounded-sm border border-cream/15 bg-white/5 p-5 backdrop-blur-md transition-all duration-500 hover:border-gold-300/40 hover:bg-white/10"
                >
                  <div className="font-sans text-[0.62rem] uppercase tracking-[0.32em] text-gold-300">
                    {opt.title}
                  </div>
                  <div className="mt-2 font-display text-3xl italic text-white">
                    {opt.price}
                  </div>
                  <div className="mt-2 font-serif text-sm leading-relaxed text-cream/75">
                    {opt.desc}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-gold-400 px-9 py-5 font-sans text-[0.74rem] uppercase tracking-[0.28em] text-plum-900 transition-all duration-500 hover:-translate-y-0.5 hover:bg-gold-300 hover:shadow-[0_25px_50px_-15px_rgba(232,183,90,0.55)] cursor-pointer"
            >
              Réserver une session
              <svg
                className="transition-transform duration-500 group-hover:translate-x-1"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

          {/* Right: portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-5"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm shadow-[0_50px_100px_-30px_rgba(0,0,0,0.5)]">
              <Image
                src={IMG.coaching.src}
                alt={IMG.coaching.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover photo-warm"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum-900/60 via-transparent to-transparent" />

              {/* Live badge */}
              <div className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full border border-rose-300/60 bg-rose-700/40 px-3 py-1.5 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-300" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-200" />
                </span>
                <span className="font-sans text-[0.58rem] uppercase tracking-[0.24em] text-cream">
                  Live · 1 à 1
                </span>
              </div>

              <div className="absolute inset-x-5 bottom-5">
                <div className="font-sans text-[0.58rem] uppercase tracking-[0.32em] text-gold-300">
                  ✦ Pl. 02
                </div>
                <div className="mt-1 font-display text-xl italic text-cream">
                  Studio privé
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
