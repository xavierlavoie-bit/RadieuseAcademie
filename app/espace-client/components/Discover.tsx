"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IMG } from "../../lib/images";

const discoverItems = [
  {
    title: "Préparation peau radieuse",
    category: "Skincare",
    duration: "22 min",
    price: "19",
    thumb: IMG.lesson9,
  },
  {
    title: "Pinceaux & technique",
    category: "Outils",
    duration: "18 min",
    price: "19",
    thumb: IMG.lesson10,
  },
  {
    title: "Mariée champêtre",
    category: "Mariée",
    duration: "1 h 12",
    price: "49",
    thumb: IMG.bridal,
  },
  {
    title: "Maquillage TV & photo",
    category: "Pro",
    duration: "55 min",
    price: "39",
    thumb: IMG.evening,
  },
];

export function Discover() {
  return (
    <section id="lecons" className="px-6 pt-16 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8 }}
        className="flex items-end justify-between gap-4 border-b border-plum-900/10 pb-5"
      >
        <div>
          <div className="font-sans text-[0.6rem] uppercase tracking-[0.32em] text-rose-700">
            ✦ Recommandé pour vous
          </div>
          <h2 className="mt-2 font-display text-3xl italic text-plum-900 lg:text-4xl">
            À découvrir
          </h2>
        </div>
        <Link
          href="/formations#alacarte"
          className="hidden items-center gap-2 font-sans text-[0.66rem] uppercase tracking-[0.28em] text-plum-900/70 transition-colors hover:text-rose-700 cursor-pointer sm:inline-flex"
        >
          Voir toutes les leçons
          <span>→</span>
        </Link>
      </motion.div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {discoverItems.map((item, i) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.7,
              delay: i * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm">
              <Image
                src={item.thumb.src}
                alt={item.thumb.alt}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover photo-warm transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum-900/60 via-transparent to-transparent" />

              {/* Locked overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/40 bg-plum-900/45 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-gold-300">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="text-cream"
                  >
                    <rect x="4" y="11" width="16" height="10" rx="2" />
                    <path d="M8 11V7a4 4 0 018 0v4" />
                  </svg>
                </span>
              </div>

              <div className="absolute right-3 top-3 rounded-full bg-plum-900/70 px-2 py-0.5 font-sans text-[0.55rem] tracking-[0.16em] text-cream backdrop-blur-md">
                {item.duration}
              </div>

              <div className="absolute left-3 bottom-3 font-sans text-[0.55rem] uppercase tracking-[0.32em] text-gold-300">
                {item.category}
              </div>
            </div>

            <div className="mt-3 flex items-baseline justify-between gap-3">
              <div className="font-display text-lg text-plum-900 transition-colors duration-300 group-hover:text-rose-700">
                {item.title}
              </div>
              <div className="font-display text-base italic text-rose-700 whitespace-nowrap">
                {item.price} $
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
