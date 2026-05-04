"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IMG } from "../../lib/images";

const myCourses = [
  {
    id: 1,
    title: "L’art du teint lumineux",
    module: "Module 02",
    duration: "32 min",
    progress: 100,
    thumb: IMG.lesson2,
  },
  {
    id: 2,
    title: "Smoky doux & sophistiqué",
    module: "Module 03",
    duration: "41 min",
    progress: 100,
    thumb: IMG.lesson1,
  },
  {
    id: 3,
    title: "Lèvres ombrées signature",
    module: "Module 05",
    duration: "24 min",
    progress: 100,
    thumb: IMG.lesson3,
  },
  {
    id: 4,
    title: "Sourcils architecturés",
    module: "Module 04",
    duration: "28 min",
    progress: 100,
    thumb: IMG.lesson4,
  },
  {
    id: 5,
    title: "Contouring sculptant",
    module: "Module 06",
    duration: "38 min",
    progress: 75,
    thumb: IMG.lesson5,
  },
  {
    id: 6,
    title: "Glamour de soirée",
    module: "Module 06",
    duration: "44 min",
    progress: 42,
    thumb: IMG.lesson6,
    current: true,
  },
  {
    id: 7,
    title: "Maquillage naturel signature",
    module: "Module 07",
    duration: "29 min",
    progress: 0,
    thumb: IMG.lesson7,
  },
  {
    id: 8,
    title: "Mariée champêtre",
    module: "Module 08",
    duration: "1 h 12",
    progress: 0,
    thumb: IMG.lesson8,
  },
];

export function MyCourses() {
  return (
    <section id="parcours" className="px-6 pt-16 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8 }}
        className="flex items-end justify-between gap-4 border-b border-plum-900/10 pb-5"
      >
        <div>
          <div className="font-sans text-[0.6rem] uppercase tracking-[0.32em] text-rose-700">
            Mon parcours · Programme Radieuse
          </div>
          <h2 className="mt-2 font-display text-3xl italic text-plum-900 lg:text-4xl">
            Mes leçons
          </h2>
        </div>
        <div className="hidden font-sans text-[0.66rem] uppercase tracking-[0.22em] text-plum-900/55 sm:block">
          12 / 18 complétées
        </div>
      </motion.div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {myCourses.map((c, i) => (
          <motion.article
            key={c.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.7,
              delay: (i % 4) * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group cursor-pointer"
          >
            <div className={`relative aspect-[16/10] w-full overflow-hidden rounded-sm ${c.current ? "ring-2 ring-gold-400 ring-offset-4 ring-offset-cream" : ""}`}>
              <Image
                src={c.thumb.src}
                alt={c.thumb.alt}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover photo-warm transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum-900/65 via-transparent to-transparent" />

              {/* Play */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/40 bg-cream/15 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-cream/30">
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

              {/* Top tags */}
              <div className="absolute right-3 top-3 flex items-center gap-2">
                {c.current && (
                  <span className="rounded-full border border-gold-300/60 bg-plum-900/40 px-2.5 py-0.5 font-sans text-[0.55rem] uppercase tracking-[0.22em] text-gold-300 backdrop-blur-md">
                    En cours
                  </span>
                )}
                {c.progress === 100 && (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold-400">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#2a1a20" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                )}
                <span className="rounded-full bg-plum-900/70 px-2 py-0.5 font-sans text-[0.55rem] tracking-[0.16em] text-cream backdrop-blur-md">
                  {c.duration}
                </span>
              </div>

              {/* Progress bar */}
              {c.progress > 0 && (
                <div className="absolute inset-x-3 bottom-3">
                  <div className="h-1 w-full overflow-hidden rounded-full bg-cream/25">
                    <div
                      className={`h-full rounded-full ${
                        c.progress === 100 ? "bg-gold-400" : "bg-rose-400"
                      }`}
                      style={{ width: `${c.progress}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="mt-3">
              <div className="font-sans text-[0.6rem] uppercase tracking-[0.28em] text-rose-700">
                {c.module}
              </div>
              <div className="mt-1 font-display text-lg text-plum-900 transition-colors duration-300 group-hover:text-rose-700">
                {c.title}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
