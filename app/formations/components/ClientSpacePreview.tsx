"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IMG } from "../../lib/images";

export function ClientSpacePreview() {
  return (
    <section className="relative overflow-hidden bg-[#fdf6f1] py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-rose-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-5"
          >
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-rose-600" />
              <span className="font-sans text-[0.7rem] uppercase tracking-[0.32em] text-rose-700">
                L’espace client · §5
              </span>
            </div>

            <h2 className="font-display text-[clamp(2.4rem,5vw,4rem)] leading-[1.05] text-plum-900 text-balance">
              Une bibliothèque
              <br />
              <span className="italic">rien que pour vous</span>
              <span className="text-rose-600">.</span>
            </h2>

            <p className="mt-7 font-serif text-[1.18rem] leading-[1.7] text-plum-900/75 text-balance">
              Après votre achat, accédez à votre espace privé : continuez vos
              leçons là où vous les avez quittées, téléchargez vos fiches,
              marquez vos favoris, suivez votre progression.
            </p>

            <ul className="mt-9 space-y-4">
              {[
                {
                  t: "Reprenez où vous étiez",
                  d: "Le lecteur garde votre minute exacte sur chaque leçon.",
                },
                {
                  t: "Téléchargez vos fiches",
                  d: "Listes produits, routines, mémoires PDF — tout sous la main.",
                },
                {
                  t: "Suivez votre progression",
                  d: "Une barre élégante affiche vos avancées par module.",
                },
                {
                  t: "Vos coachings live archivés",
                  d: "Vos sessions privées avec Catherine sont aussi enregistrées ici.",
                },
              ].map((item) => (
                <li key={item.t} className="flex items-start gap-4">
                  <span className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-gold-400/40 bg-gold-300/10">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#c89438" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <div>
                    <div className="font-display text-lg italic text-plum-900">
                      {item.t}
                    </div>
                    <div className="font-sans text-sm text-plum-900/65">
                      {item.d}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="/espace-client"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-plum-900 px-9 py-5 font-sans text-[0.74rem] uppercase tracking-[0.28em] text-white transition-all duration-500 hover:-translate-y-0.5 hover:bg-rose-700 hover:shadow-[0_25px_50px_-15px_rgba(122,47,67,0.4)] cursor-pointer"
            >
              Visiter l’espace client
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

          {/* Right: device mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-7"
          >
            <DeviceMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DeviceMockup() {
  return (
    <div className="relative">
      {/* Decorative shadow */}
      <div className="absolute -inset-x-10 bottom-0 h-12 bg-gradient-to-t from-rose-200/50 to-transparent blur-xl" />

      {/* Browser frame */}
      <div className="relative overflow-hidden rounded-t-[14px] border border-plum-900/10 bg-white shadow-[0_50px_100px_-30px_rgba(122,47,67,0.35)]">
        {/* Browser bar */}
        <div className="flex items-center gap-2 border-b border-plum-900/10 bg-cream/80 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-gold-400/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-plum-900/20" />
          <div className="ml-3 inline-flex items-center gap-2 rounded-full border border-plum-900/10 bg-white px-3 py-1 font-sans text-[0.6rem] tracking-[0.16em] text-plum-900/55">
            <span>radieuseacademie.com/espace-client</span>
            <span className="h-1 w-1 rounded-full bg-rose-500" />
          </div>
        </div>

        {/* App content */}
        <div className="grid grid-cols-12 gap-0">
          {/* Sidebar */}
          <div className="col-span-3 border-r border-plum-900/10 bg-cream/40 p-4">
            <div className="font-display italic text-base text-plum-900">
              Radieuse
            </div>
            <div className="font-sans text-[0.5rem] uppercase tracking-[0.24em] text-rose-600">
              Académie
            </div>

            <div className="mt-5 space-y-1.5">
              {[
                { label: "Mon parcours", active: true },
                { label: "Mes leçons" },
                { label: "Mes fiches" },
                { label: "Coaching live" },
                { label: "Compte" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`rounded px-2.5 py-1.5 font-sans text-[0.6rem] ${
                    item.active
                      ? "bg-plum-900 text-white"
                      : "text-plum-900/65"
                  }`}
                >
                  {item.label}
                </div>
              ))}
            </div>

            <div className="mt-5 rounded border border-gold-400/30 bg-cream/60 p-2.5">
              <div className="font-sans text-[0.5rem] uppercase tracking-[0.2em] text-rose-600">
                Progression
              </div>
              <div className="mt-1 font-display text-sm italic text-plum-900">
                65 %
              </div>
              <div className="mt-1 h-1 w-full rounded-full bg-rose-100">
                <div className="h-1 w-[65%] rounded-full bg-gradient-to-r from-rose-500 to-gold-400" />
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="col-span-9 p-5">
            <div className="font-sans text-[0.55rem] uppercase tracking-[0.32em] text-rose-600">
              ✦ Bonjour Sophie
            </div>
            <div className="mt-1 font-display text-xl italic text-plum-900">
              Reprenez où vous étiez
            </div>

            {/* Continue watching */}
            <div className="mt-4 flex gap-3 rounded border border-plum-900/10 bg-cream/40 p-3">
              <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded">
                <Image
                  src={IMG.lesson6.src}
                  alt={IMG.lesson6.alt}
                  fill
                  sizes="100px"
                  className="object-cover photo-warm"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-plum-900/30">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <div className="font-sans text-[0.5rem] uppercase tracking-[0.24em] text-rose-700">
                  Module 6 · 12 / 18
                </div>
                <div className="font-display text-sm italic text-plum-900">
                  Glamour de soirée
                </div>
                <div className="mt-1 h-0.5 w-full rounded-full bg-rose-100">
                  <div className="h-0.5 w-[42%] rounded-full bg-rose-500" />
                </div>
              </div>
            </div>

            {/* Lesson grid */}
            <div className="mt-4 font-sans text-[0.55rem] uppercase tracking-[0.32em] text-plum-900/55">
              À découvrir
            </div>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {[IMG.lesson1, IMG.lesson3, IMG.lesson5, IMG.lesson2, IMG.lesson7, IMG.lesson8].map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] overflow-hidden rounded"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="100px"
                    className="object-cover photo-warm"
                  />
                  <div className="absolute inset-0 bg-plum-900/15" />
                  {i < 3 && (
                    <div className="absolute right-1 top-1 rounded-full bg-plum-900/70 px-1.5 py-0.5 font-sans text-[0.45rem] tracking-[0.12em] text-cream backdrop-blur-md">
                      {i === 0 ? "32min" : i === 1 ? "24min" : "38min"}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-6 -right-2 z-10 max-w-[200px] rounded-sm border border-gold-400/40 bg-plum-900 p-4 text-white shadow-2xl"
      >
        <div className="font-sans text-[0.58rem] uppercase tracking-[0.32em] text-gold-300">
          ✦ Mobile-friendly
        </div>
        <div className="mt-1 font-display text-sm italic text-cream">
          Aussi sur tablette et téléphone.
        </div>
      </motion.div>
    </div>
  );
}
