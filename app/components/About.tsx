"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IMG } from "../lib/images";

export function About() {
  return (
    <section
      id="approche"
      className="relative overflow-hidden bg-[#fdf6f1] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Editorial split layout */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: editorial photo collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-6"
          >
            <div className="relative grid grid-cols-12 gap-3">
              {/* Main portrait */}
              <div className="col-span-9 aspect-[3/4] relative overflow-hidden rounded-sm shadow-[0_40px_80px_-30px_rgba(122,47,67,0.3)]">
                <Image
                  src={IMG.catherineWorking.src}
                  alt={IMG.catherineWorking.alt}
                  fill
                  sizes="(max-width: 1024px) 60vw, 30vw"
                  className="object-cover photo-warm"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-900/30 via-transparent to-transparent" />
              </div>

              {/* Side stack */}
              <div className="col-span-3 flex flex-col gap-3">
                <div className="aspect-[3/4] relative overflow-hidden rounded-sm">
                  <Image
                    src={IMG.brushes.src}
                    alt={IMG.brushes.alt}
                    fill
                    sizes="120px"
                    className="object-cover photo-warm"
                  />
                </div>
                <div className="aspect-[3/4] relative overflow-hidden rounded-sm">
                  <Image
                    src={IMG.flatlay.src}
                    alt={IMG.flatlay.alt}
                    fill
                    sizes="120px"
                    className="object-cover photo-warm"
                  />
                </div>
              </div>

              {/* Floating credential badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute -left-3 bottom-12 max-w-[210px] bg-plum-900 p-5 text-white shadow-2xl lg:-left-8"
              >
                <div className="flex items-start gap-3">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5d68b" strokeWidth="1.4">
                    <circle cx="12" cy="8" r="6" />
                    <path d="M9 14l-3 8 6-3 6 3-3-8" />
                  </svg>
                  <div>
                    <div className="font-display italic text-lg leading-tight">
                      Maquilleuse certifiée
                    </div>
                    <div className="mt-1 font-sans text-[0.6rem] uppercase tracking-[0.24em] text-cream/70">
                      Studio TV · Mode · Mariées
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Editorial credit line */}
            <div className="mt-5 flex items-center justify-between font-sans text-[0.6rem] uppercase tracking-[0.32em] text-plum-900/50">
              <span>Pl. 02 — L’atelier</span>
              <span>Photographie · Studio Radieuse</span>
            </div>
          </motion.div>

          {/* Right: copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-rose-600" />
              <span className="font-sans text-[0.7rem] uppercase tracking-[0.32em] text-rose-700">
                L’approche · §2
              </span>
            </div>

            <h2 className="font-display text-[clamp(2.2rem,4.8vw,3.8rem)] leading-[1.05] text-plum-900 text-balance">
              Plus qu’un maquillage —
              <br />
              <span className="italic">une révélation de soi.</span>
            </h2>

            <p className="mt-9 font-serif text-[1.18rem] leading-[1.7] text-plum-900/75 text-balance">
              Catherine Lavoie a fondé Radieuse Académie pour accompagner les
              femmes vers une confiance qui rayonne de l’intérieur. Chaque
              pinceau, chaque geste, chaque enseignement est pensé pour vous
              reconnecter à votre éclat naturel — sans masque, sans excès.
            </p>

            <blockquote className="mt-9 border-l-2 border-gold-500 pl-6 font-display text-2xl italic leading-snug text-rose-700">
              « La beauté n’est jamais imposée. <br />
              Elle se révèle. »
            </blockquote>
            <div className="mt-3 pl-6 font-sans text-[0.66rem] uppercase tracking-[0.28em] text-plum-900/55">
              — Catherine Lavoie
            </div>

            {/* Pillars */}
            <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2">
              {[
                {
                  n: "01",
                  title: "Approche personnalisée",
                  text: "Chaque femme est unique — votre maquillage, votre formation, votre rythme.",
                },
                {
                  n: "02",
                  title: "Techniques pro",
                  text: "12 ans d’expertise — studio, mariées, télévision, formations certifiantes.",
                },
                {
                  n: "03",
                  title: "Confiance durable",
                  text: "Apprenez à vous maquiller en moins de 10 minutes, chez vous, sans hésitation.",
                },
                {
                  n: "04",
                  title: "Cadre raffiné",
                  text: "Un espace intime, élégant, où vous êtes pleinement reçue et écoutée.",
                },
              ].map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.7 }}
                  className="border-t border-plum-900/15 pt-5"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-sm italic text-rose-600">
                      {p.n}
                    </span>
                    <div className="h-px flex-1 bg-plum-900/15" />
                  </div>
                  <div className="mt-3 font-display text-xl text-plum-900">
                    {p.title}
                  </div>
                  <div className="mt-1.5 font-serif leading-relaxed text-plum-900/65">
                    {p.text}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
