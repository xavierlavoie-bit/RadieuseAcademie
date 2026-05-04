"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IMG } from "../lib/images";

const services = [
  {
    n: "I",
    title: "Maquillage Mariée",
    eyebrow: "Service signature",
    image: IMG.bridal,
    description:
      "Le plus beau jour mérite un teint lumineux et un regard intemporel. Essai inclus, retouches assurées.",
    points: ["Essai-conseil 90 min", "Maquillage longue tenue", "Retouches sur place"],
    price: "à partir de 350 $",
  },
  {
    n: "II",
    title: "Maquillage Événement",
    eyebrow: "Soirée · Photoshoot",
    image: IMG.evening,
    description:
      "Galas, fiançailles, séances photo — un look raffiné, personnalisé pour révéler votre signature beauté.",
    points: ["Consultation visuelle", "Maquillage HD photo", "Tenue 12 h+"],
    price: "à partir de 175 $",
  },
  {
    n: "III",
    title: "Coaching Privé",
    eyebrow: "1 à 1",
    image: IMG.coaching,
    description:
      "Une session intime où vous apprenez votre maquillage parfait, à votre image. Repartez avec votre routine.",
    points: ["Analyse morpho-visage", "Routine sur-mesure", "Liste produits offerte"],
    price: "à partir de 297 $",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#fdf6f1] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-7"
          >
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-rose-600" />
              <span className="font-sans text-[0.7rem] uppercase tracking-[0.32em] text-rose-700">
                Services · §3
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.02] text-plum-900 text-balance">
              Une beauté pensée
              <br />
              <span className="italic">pour chaque moment</span>
              <span className="text-rose-600">.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-lg leading-relaxed text-plum-900/70 lg:col-span-5"
          >
            Du quotidien au grand jour, Catherine vous accompagne avec la
            précision d’une artiste et la chaleur d’une confidente.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-3 lg:gap-x-8">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.12,
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col"
            >
              {/* Photo */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
                <Image
                  src={s.image.src}
                  alt={s.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover photo-warm transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-900/40 via-transparent to-transparent" />

                {/* Roman numeral */}
                <div className="absolute left-5 top-5 font-display text-3xl italic text-cream/90">
                  {s.n}
                </div>

                {/* Eyebrow at bottom */}
                <div className="absolute inset-x-5 bottom-5">
                  <div className="font-sans text-[0.6rem] uppercase tracking-[0.32em] text-gold-300">
                    ✦ {s.eyebrow}
                  </div>
                </div>
              </div>

              {/* Card content */}
              <div className="mt-7">
                <h3 className="font-display text-[1.7rem] leading-tight text-plum-900">
                  {s.title}
                </h3>
                <p className="mt-3 font-serif text-[1.05rem] leading-relaxed text-plum-900/70">
                  {s.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {s.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-2 font-sans text-sm text-plum-900/75"
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#c89438"
                        strokeWidth="2.5"
                        className="mt-1 flex-shrink-0"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-baseline justify-between border-t border-plum-900/10 pt-5">
                  <div className="font-sans text-[0.7rem] uppercase tracking-[0.24em] text-plum-900/55">
                    {s.price}
                  </div>
                  <a
                    href="#contact"
                    className="group/cta inline-flex items-center gap-2 font-sans text-[0.7rem] uppercase tracking-[0.28em] text-rose-700 hover:text-rose-900 cursor-pointer"
                  >
                    Réserver
                    <span className="transition-transform duration-500 group-hover/cta:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
