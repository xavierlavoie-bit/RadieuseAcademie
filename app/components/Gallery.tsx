"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IMG } from "../lib/images";

const looks = [
  {
    n: "01",
    label: "Mariée champêtre",
    season: "Printemps",
    image: IMG.portrait1,
    span: "tall",
  },
  {
    n: "02",
    label: "Glamour soirée",
    season: "Hiver",
    image: IMG.portrait2,
    span: "wide",
  },
  {
    n: "03",
    label: "Rayonnement doré",
    season: "Été",
    image: IMG.portrait3,
    span: "default",
  },
  {
    n: "04",
    label: "Bohème naturelle",
    season: "Automne",
    image: IMG.portrait4,
    span: "default",
  },
  {
    n: "05",
    label: "Audace classique",
    season: "Soirée",
    image: IMG.portrait5,
    span: "wide",
  },
  {
    n: "06",
    label: "Lumière nude",
    season: "Jour",
    image: IMG.portrait6,
    span: "tall",
  },
] as const;

export function Gallery() {
  return (
    <section
      id="galerie"
      className="relative overflow-hidden bg-plum-900 py-20 lg:py-28 text-white"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-rose-700/30 blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 h-[400px] w-[400px] rounded-full bg-gold-500/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-8"
          >
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-gold-400" />
              <span className="font-sans text-[0.7rem] uppercase tracking-[0.32em] text-gold-300">
                Portfolio · §4
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.02] text-white text-balance">
              Une signature
              <br />
              <span className="italic gold-shimmer">qui se reconnaît.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <p className="font-serif text-lg leading-relaxed text-cream/75">
              Six univers composés par Catherine — chaque visage devient une
              œuvre, chaque transformation un moment suspendu.
            </p>
          </motion.div>
        </div>

        {/* Editorial asymmetric grid */}
        <div className="mt-16 grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[200px] lg:gap-6">
          {looks.map((l, i) => {
            const span =
              l.span === "tall"
                ? "row-span-2"
                : l.span === "wide"
                ? "col-span-2 row-span-2"
                : "row-span-2 md:row-span-1 lg:row-span-2";

            return (
              <motion.figure
                key={l.n}
                initial={{ opacity: 0, y: 50, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  delay: i * 0.08,
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group relative overflow-hidden rounded-sm ${span}`}
              >
                <Image
                  src={l.image.src}
                  alt={l.image.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 320px"
                  className="object-cover photo-warm transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-900/85 via-plum-900/15 to-transparent" />

                {/* Number top-right */}
                <div className="absolute right-4 top-4 font-display text-2xl italic text-cream/85">
                  {l.n}
                </div>

                {/* Bottom info */}
                <figcaption className="absolute inset-x-4 bottom-4">
                  <div className="font-sans text-[0.58rem] uppercase tracking-[0.32em] text-gold-300">
                    {l.season}
                  </div>
                  <div className="mt-1 font-display text-lg italic text-cream lg:text-xl">
                    {l.label}
                  </div>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>

        {/* See more line */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-cream/10 pt-8">
          <div className="font-sans text-[0.62rem] uppercase tracking-[0.32em] text-cream/50">
            Sélection éditoriale · 6 / 142 looks
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 font-sans text-[0.7rem] uppercase tracking-[0.32em] text-gold-300 transition-colors hover:text-cream cursor-pointer"
          >
            Demander mon portfolio complet
            <svg
              className="transition-transform duration-500 group-hover:translate-x-1"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
