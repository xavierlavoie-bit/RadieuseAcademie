"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { IMG } from "../../lib/images";

export function FormationsHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden pt-32 lg:pt-40"
    >
      <div className="bg-grain pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute -top-32 -left-32 -z-10 h-[500px] w-[500px] rounded-full bg-rose-200/40 blur-3xl" />

      {/* Editorial header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mx-auto flex max-w-7xl items-center justify-between px-6 pb-6 lg:px-10"
      >
        <div className="flex items-center gap-4 font-sans text-[0.62rem] uppercase tracking-[0.32em] text-plum-900/55">
          <span>Édition Formations</span>
          <span className="h-px w-8 bg-plum-900/30" />
          <span>L’académie en ligne</span>
        </div>
        <div className="hidden items-center gap-4 font-sans text-[0.62rem] uppercase tracking-[0.32em] text-plum-900/55 md:flex">
          <span>40+ leçons</span>
          <span className="h-px w-8 bg-plum-900/30" />
          <span>Accès à vie</span>
        </div>
      </motion.div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
        {/* Left: copy */}
        <motion.div
          style={{ y: yText }}
          className="relative z-10 flex flex-col justify-center lg:col-span-7 lg:py-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-6 inline-flex items-center gap-3"
          >
            <span className="h-px w-12 bg-rose-600" />
            <span className="font-sans text-[0.7rem] uppercase tracking-[0.32em] text-rose-700">
              Les Formations · §1
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(3rem,8vw,7rem)] font-medium leading-[0.95] tracking-[-0.015em] text-plum-900 text-balance"
          >
            Apprenez
            <br />
            <span className="italic font-light text-rose-700">à votre rythme</span>
            <span className="text-rose-600">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-9 max-w-xl font-serif text-[1.32rem] leading-[1.55] text-plum-900/75 text-balance lg:text-[1.4rem]"
          >
            Des masterclass enregistrées, filmées en studio par Catherine Lavoie.
            Achetez à la carte ou en parcours — votre bibliothèque privée vous
            attend dans votre espace client.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <a
              href="#parcours"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-plum-900 px-9 py-5 font-sans text-[0.74rem] uppercase tracking-[0.28em] text-white transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_25px_50px_-15px_rgba(42,26,32,0.6)] cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-rose-700 to-rose-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="relative">Voir les parcours</span>
              <svg
                className="relative transition-transform duration-500 group-hover:translate-x-1"
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

            <Link
              href="/espace-client"
              className="group inline-flex items-center gap-2 font-sans text-[0.74rem] uppercase tracking-[0.28em] text-plum-900/80 transition-colors hover:text-rose-700 cursor-pointer"
            >
              <span className="h-px w-8 bg-plum-900/40 transition-all duration-500 group-hover:w-12 group-hover:bg-rose-600" />
              Visiter l’espace client
            </Link>
          </motion.div>

          {/* Trust pillars */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16 grid grid-cols-3 gap-6 lg:gap-10"
          >
            <Pillar n="40+" l="Leçons HD" />
            <Pillar n="∞" l="Accès à vie" />
            <Pillar n="3" l="Parcours signature" />
          </motion.div>
        </motion.div>

        {/* Right: editorial photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:col-span-5"
        >
          <div className="relative">
            <div className="absolute -top-4 right-0 z-20 flex items-center gap-2 font-sans text-[0.6rem] uppercase tracking-[0.32em] text-plum-900/60">
              <span>Pl. 01</span>
              <span className="h-px w-8 bg-plum-900/30" />
              <span>L’atelier filmé</span>
            </div>

            <motion.div
              style={{ y: yImg }}
              className="relative aspect-[3/4] w-full overflow-hidden rounded-[2px] shadow-[0_50px_100px_-30px_rgba(122,47,67,0.4)]"
            >
              <Image
                src={IMG.catherineWorking.src}
                alt={IMG.catherineWorking.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover photo-warm"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum-900/55 via-transparent to-transparent" />

              {/* Play indicator overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="group relative">
                  <span className="absolute inset-0 -m-4 animate-ping rounded-full bg-cream/30" />
                  <span className="relative flex h-20 w-20 items-center justify-center rounded-full border border-cream/50 bg-cream/15 backdrop-blur-md">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="ml-1 text-cream"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="absolute inset-x-6 bottom-6">
                <div className="font-sans text-[0.6rem] uppercase tracking-[0.32em] text-cream/85">
                  ✦ Aperçu — masterclass
                </div>
                <div className="mt-1 font-display italic text-2xl text-cream">
                  L’art du teint lumineux
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute -left-4 -bottom-6 z-10 max-w-[220px] bg-cream/95 p-5 backdrop-blur-md shadow-2xl lg:-left-10"
            >
              <div className="font-sans text-[0.58rem] uppercase tracking-[0.32em] text-rose-600">
                ✦ Espace client privé
              </div>
              <div className="mt-1 font-display text-base italic text-plum-900">
                Vos leçons, vos rythmes, votre confort.
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mx-auto mt-20 flex max-w-7xl items-center justify-between px-6 pb-12 lg:px-10"
      >
        <div className="font-sans text-[0.6rem] uppercase tracking-[0.32em] text-plum-900/50">
          ↓  Découvrir le sommaire
        </div>
        <div className="hidden items-center gap-3 font-sans text-[0.6rem] uppercase tracking-[0.32em] text-plum-900/50 md:flex">
          <span>Achat unique</span>
          <span>·</span>
          <span>Aucun abonnement</span>
        </div>
      </motion.div>
    </section>
  );
}

function Pillar({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="editorial-number text-4xl text-plum-900 lg:text-5xl">{n}</div>
      <div className="mt-1 font-sans text-[0.62rem] uppercase tracking-[0.24em] text-plum-900/55">
        {l}
      </div>
    </div>
  );
}
