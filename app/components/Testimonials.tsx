"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IMG } from "../lib/images";

const testimonials = [
  {
    quote:
      "Catherine ne maquille pas — elle révèle. Le jour de mon mariage, je me suis enfin reconnue dans le miroir, sublimée mais 100% moi.",
    name: "Sophie M.",
    role: "Mariée · Mai 2025",
    image: IMG.portrait1,
    span: "wide",
  },
  {
    quote:
      "La formation Radieuse m’a redonné une confiance que je n’avais plus depuis 10 ans. Patiente, précise, profondément bienveillante.",
    name: "Émilie L.",
    role: "Programme Radieuse",
    image: IMG.portrait2,
    span: "default",
  },
  {
    quote:
      "Elle a un œil incomparable et une douceur qui désarme. J’ai démarré ma carrière de maquilleuse grâce à l’Académie Pro.",
    name: "Joanie T.",
    role: "Diplômée Académie Pro",
    image: IMG.portrait3,
    span: "default",
  },
  {
    quote:
      "Chaque session avec Catherine est un moment hors du temps. Elle vous transforme autant à l’intérieur qu’à l’extérieur.",
    name: "Marie-Claude D.",
    role: "Cliente fidèle",
    image: IMG.portrait4,
    span: "wide",
  },
] as const;

export function Testimonials() {
  return (
    <section
      id="temoignages"
      className="relative overflow-hidden bg-cream py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-rose-200/40 blur-3xl" />
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
                Paroles · §5
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.02] text-plum-900 text-balance">
              Elles ont retrouvé
              <br />
              <span className="italic">leur éclat</span>
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
            <div className="flex items-center gap-2 text-gold-500">
              {Array.from({ length: 5 }).map((_, k) => (
                <svg key={k} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.95 6.97L22 9.97l-5.5 4.78L18.18 22 12 18.27 5.82 22l1.68-7.25L2 9.97l7.05-1z" />
                </svg>
              ))}
            </div>
            <p className="mt-3 font-serif text-lg leading-relaxed text-plum-900/70">
              4.9 / 5 — sur plus de 250 femmes accompagnées en studio et en
              formation.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-7">
          {testimonials.map((t, i) => {
            const span = t.span === "wide" ? "md:col-span-2" : "";
            return (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative flex flex-col overflow-hidden rounded-sm bg-white border border-rose-100 p-7 lg:p-9 ${span}`}
              >
                <span className="absolute right-7 top-5 font-display text-7xl leading-none text-rose-300/50 select-none">
                  ”
                </span>

                <div className="flex items-center gap-1 text-gold-500">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <svg
                      key={k}
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2l2.95 6.97L22 9.97l-5.5 4.78L18.18 22 12 18.27 5.82 22l1.68-7.25L2 9.97l7.05-1z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="mt-5 flex-grow font-serif text-[1.18rem] leading-[1.6] text-plum-900/85 italic text-balance">
                  « {t.quote} »
                </blockquote>

                <figcaption className="mt-7 flex items-center gap-4 border-t border-rose-100 pt-5">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full border border-gold-300/40">
                    <Image
                      src={t.image.src}
                      alt={t.image.alt}
                      fill
                      sizes="56px"
                      className="object-cover photo-warm"
                    />
                  </div>
                  <div>
                    <div className="font-display text-lg italic text-plum-900">
                      {t.name}
                    </div>
                    <div className="font-sans text-[0.66rem] uppercase tracking-[0.28em] text-rose-700">
                      {t.role}
                    </div>
                  </div>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
