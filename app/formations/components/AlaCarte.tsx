"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IMG } from "../../lib/images";

const lessons = [
  {
    id: 1,
    title: "L’art du teint lumineux",
    category: "Teint",
    duration: "32 min",
    price: "29",
    image: IMG.lesson2,
  },
  {
    id: 2,
    title: "Smoky doux & sophistiqué",
    category: "Yeux",
    duration: "41 min",
    price: "29",
    image: IMG.lesson1,
  },
  {
    id: 3,
    title: "Lèvres ombrées signature",
    category: "Lèvres",
    duration: "24 min",
    price: "19",
    image: IMG.lesson3,
  },
  {
    id: 4,
    title: "Sourcils architecturés",
    category: "Sourcils",
    duration: "28 min",
    price: "29",
    image: IMG.lesson4,
  },
  {
    id: 5,
    title: "Contouring sculptant",
    category: "Teint",
    duration: "38 min",
    price: "29",
    image: IMG.lesson5,
  },
  {
    id: 6,
    title: "Glamour de soirée",
    category: "Look complet",
    duration: "52 min",
    price: "39",
    image: IMG.lesson6,
  },
  {
    id: 7,
    title: "Maquillage naturel signature",
    category: "Look complet",
    duration: "29 min",
    price: "29",
    image: IMG.lesson7,
  },
  {
    id: 8,
    title: "Mariée champêtre",
    category: "Mariée",
    duration: "1 h 12",
    price: "49",
    image: IMG.lesson8,
  },
  {
    id: 9,
    title: "Préparation peau radieuse",
    category: "Skincare",
    duration: "22 min",
    price: "19",
    image: IMG.lesson9,
  },
  {
    id: 10,
    title: "Pinceaux & technique",
    category: "Outils",
    duration: "18 min",
    price: "19",
    image: IMG.lesson10,
  },
];

const categories = ["Tout", "Teint", "Yeux", "Lèvres", "Sourcils", "Look complet", "Mariée", "Skincare"] as const;

export function AlaCarte() {
  const [filter, setFilter] = useState<string>("Tout");

  const filtered =
    filter === "Tout" ? lessons : lessons.filter((l) => l.category === filter);

  return (
    <section
      id="alacarte"
      className="relative overflow-hidden bg-[#fdf6f1] py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-gold-300/20 blur-3xl" />
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
              <span className="h-px w-10 bg-rose-600" />
              <span className="font-sans text-[0.7rem] uppercase tracking-[0.32em] text-rose-700">
                À la carte · §3
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.02] text-plum-900 text-balance">
              Une masterclass
              <br />
              <span className="italic">pour chaque envie</span>
              <span className="text-rose-600">.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-lg leading-relaxed text-plum-900/70 lg:col-span-4"
          >
            Une technique précise vous appelle ? Choisissez la leçon qui vous
            inspire. Sans engagement, sans abonnement.
          </motion.p>
        </div>

        {/* Categories filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 flex flex-wrap items-center gap-2 border-t border-plum-900/10 pt-6"
        >
          <span className="mr-3 font-sans text-[0.62rem] uppercase tracking-[0.32em] text-plum-900/50">
            Filtrer
          </span>
          {categories.map((c) => {
            const active = c === filter;
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full border px-4 py-1.5 font-sans text-[0.65rem] uppercase tracking-[0.24em] transition-all duration-500 cursor-pointer ${
                  active
                    ? "border-plum-900 bg-plum-900 text-white"
                    : "border-plum-900/15 bg-white/60 text-plum-900/70 hover:border-plum-900/40 hover:text-plum-900"
                }`}
              >
                {c}
              </button>
            );
          })}
        </motion.div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {filtered.map((l, i) => (
            <motion.article
              key={l.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.7,
                delay: (i % 6) * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col"
            >
              <Link
                href="/espace-client"
                className="block cursor-pointer"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
                  <Image
                    src={l.image.src}
                    alt={l.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover photo-warm transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum-900/60 via-transparent to-transparent" />

                  {/* Play icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-cream/40 bg-cream/15 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-cream/30">
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
                  </div>

                  {/* Duration badge */}
                  <div className="absolute right-3 top-3 rounded-full bg-plum-900/70 px-2.5 py-1 font-sans text-[0.6rem] tracking-[0.16em] text-cream backdrop-blur-md">
                    {l.duration}
                  </div>

                  {/* Category */}
                  <div className="absolute left-3 bottom-3 font-sans text-[0.58rem] uppercase tracking-[0.32em] text-gold-300">
                    {l.category}
                  </div>
                </div>

                <div className="mt-4 flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl text-plum-900 group-hover:text-rose-700 transition-colors duration-500">
                    {l.title}
                  </h3>
                  <div className="font-display text-xl italic text-plum-900 whitespace-nowrap">
                    {l.price} <span className="text-sm text-rose-700">$</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Bundle deal callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-16 flex flex-col items-center justify-between gap-4 rounded-sm border border-gold-400/30 bg-cream p-7 sm:flex-row lg:p-9"
        >
          <div>
            <div className="font-sans text-[0.62rem] uppercase tracking-[0.32em] text-rose-700">
              ✦ Vous hésitez ?
            </div>
            <div className="mt-1 font-display text-2xl italic text-plum-900">
              Le parcours Radieuse inclut 18 leçons pour 297 $.
            </div>
            <div className="mt-1 font-sans text-sm text-plum-900/65">
              Économisez 60 % vs achat à la carte.
            </div>
          </div>
          <Link
            href="#parcours"
            className="inline-flex items-center gap-3 rounded-full bg-plum-900 px-7 py-4 font-sans text-[0.7rem] uppercase tracking-[0.28em] text-white transition-all duration-500 hover:bg-rose-700 cursor-pointer"
          >
            Voir le parcours
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
