"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IMG } from "../lib/images";

const formations = [
  {
    n: "01",
    name: "Découverte",
    duration: "Atelier · 3 h",
    price: "297 $",
    description:
      "Une introduction douce — analyse, routine, premiers gestes. Idéal pour celles qui débutent ou se redécouvrent.",
    image: IMG.brushes,
  },
  {
    n: "02",
    name: "Radieuse",
    duration: "4 sessions · 8 h",
    price: "697 $",
    description:
      "Le programme signature. Maîtrise jour, soir et événement avec une confiance totale.",
    image: IMG.evening,
    featured: true,
  },
  {
    n: "03",
    name: "Académie Pro",
    duration: "6 semaines",
    price: "1 897 $",
    description:
      "Formation certifiante. Pour celles qui veulent en faire leur métier — kit pro et stage portfolio.",
    image: IMG.cosmetics,
  },
];

export function FormationsShowcase() {
  return (
    <section
      id="formations-vedette"
      className="relative bg-cream py-20 lg:py-28 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 top-1/3 h-[450px] w-[450px] rounded-full bg-rose-200/40 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-gold-300/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Editorial header */}
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-8"
          >
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-rose-600" />
              <span className="font-sans text-[0.7rem] uppercase tracking-[0.32em] text-rose-700">
                Les formations · Sommaire
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.02] text-plum-900 text-balance">
              Trois parcours,
              <br />
              <span className="italic">une même promesse</span>
              <span className="text-rose-600">.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <p className="font-serif text-lg leading-relaxed text-plum-900/70">
              Conçus pour rencontrer chaque femme là où elle se trouve — de la
              curieuse à la future maquilleuse professionnelle.
            </p>
          </motion.div>
        </div>

        {/* Formations grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {formations.map((f, i) => (
            <FormationCard key={f.n} formation={f} index={i} />
          ))}
        </div>

        {/* See all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex flex-col items-center gap-3 border-t border-plum-900/10 pt-10 sm:flex-row sm:justify-between"
        >
          <div className="text-center sm:text-left">
            <div className="font-sans text-[0.62rem] uppercase tracking-[0.32em] text-plum-900/55">
              Curriculum complet · 12 modules
            </div>
            <div className="mt-1 font-display text-2xl italic text-plum-900">
              Le programme détaillé vous attend.
            </div>
          </div>

          <Link
            href="/formations"
            className="group inline-flex items-center gap-3 rounded-full bg-plum-900 px-9 py-5 font-sans text-[0.74rem] uppercase tracking-[0.28em] text-white transition-all duration-500 hover:-translate-y-0.5 hover:bg-rose-700 hover:shadow-[0_25px_50px_-15px_rgba(122,47,67,0.5)] cursor-pointer"
          >
            Voir toutes les formations
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
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function FormationCard({
  formation: f,
  index,
}: {
  formation: (typeof formations)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 1,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`group relative ${f.featured ? "lg:-mt-8" : ""}`}
    >
      <Link href="/formations" className="block cursor-pointer">
        {/* Image */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
          <Image
            src={f.image.src}
            alt={f.image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover photo-warm transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-plum-900/85 via-plum-900/15 to-transparent transition-opacity duration-700 group-hover:from-plum-900/95" />

          {/* Number top-left */}
          <div className="absolute left-5 top-5 font-display text-3xl italic text-cream/90">
            {f.n}
          </div>

          {/* Featured badge */}
          {f.featured && (
            <div className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-gold-300/60 bg-plum-900/40 px-3 py-1 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-300" />
              <span className="font-sans text-[0.58rem] uppercase tracking-[0.24em] text-gold-300">
                Populaire
              </span>
            </div>
          )}

          {/* Bottom content */}
          <div className="absolute inset-x-5 bottom-5">
            <div className="font-sans text-[0.62rem] uppercase tracking-[0.28em] text-gold-300/90">
              {f.duration}
            </div>
            <div className="mt-1 font-display text-3xl italic text-cream">
              {f.name}
            </div>
            <p className="mt-3 max-h-0 overflow-hidden font-serif text-sm leading-relaxed text-cream/85 opacity-0 transition-all duration-700 group-hover:max-h-[200px] group-hover:opacity-100">
              {f.description}
            </p>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-5 flex items-baseline justify-between">
          <div>
            <div className="font-sans text-[0.62rem] uppercase tracking-[0.28em] text-plum-900/55">
              À partir de
            </div>
            <div className="font-display text-2xl italic text-plum-900">
              {f.price}
            </div>
          </div>
          <span className="inline-flex items-center gap-2 font-sans text-[0.66rem] uppercase tracking-[0.28em] text-rose-700 transition-all duration-500 group-hover:gap-4">
            Découvrir
            <span>→</span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
