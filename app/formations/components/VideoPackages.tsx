"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IMG } from "../../lib/images";

const packages = [
  {
    n: "01",
    name: "Découverte",
    eyebrow: "Le premier pas",
    image: IMG.brushes,
    duration: "1 h 45",
    lessons: 4,
    price: "97",
    description:
      "Une masterclass concentrée — analyse colorimétrique, routine peau, premier maquillage signature.",
    perks: ["4 leçons HD", "Fiche produits PDF", "Accès à vie"],
  },
  {
    n: "02",
    name: "Radieuse",
    eyebrow: "Le programme signature",
    image: IMG.evening,
    duration: "8 h 30",
    lessons: 18,
    price: "297",
    description:
      "Le parcours complet — jour, soir, événement, mariée. Tout ce qu’il faut pour rayonner en toute occasion.",
    perks: ["18 leçons HD", "Trousse essentielle", "Accès à vie", "Communauté privée"],
    featured: true,
  },
  {
    n: "03",
    name: "Académie Pro",
    eyebrow: "Devenez maquilleuse",
    image: IMG.cosmetics,
    duration: "22 h",
    lessons: 42,
    price: "997",
    description:
      "La formation complète — mariées, scène, photo HD, business pro. Diplôme reconnu industrie.",
    perks: ["42 leçons HD", "Diplôme certifié", "Mentorat lifetime", "Stage portfolio"],
  },
];

export function VideoPackages() {
  return (
    <section
      id="parcours"
      className="relative overflow-hidden bg-cream py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 top-1/4 h-[500px] w-[500px] rounded-full bg-rose-200/40 blur-3xl" />
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
                Les parcours · §2
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.02] text-plum-900 text-balance">
              Trois parcours,
              <br />
              <span className="italic">une même promesse</span>
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
            Achat unique, accès à vie. Téléchargez les fiches produits,
            téléphonez Catherine pour vos questions, recommencez les leçons
            autant de fois que vous voulez.
          </motion.p>
        </div>

        {/* Packages grid */}
        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-3 lg:gap-x-8">
          {packages.map((p, i) => (
            <motion.article
              key={p.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.12,
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group flex flex-col ${
                p.featured ? "lg:-mt-8" : ""
              }`}
            >
              {/* Photo */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
                <Image
                  src={p.image.src}
                  alt={p.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover photo-warm transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-900/55 via-transparent to-transparent" />

                {/* Number top-left */}
                <div className="absolute left-5 top-5 font-display text-3xl italic text-cream/90">
                  {p.n}
                </div>

                {/* Featured badge */}
                {p.featured && (
                  <div className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-gold-300/60 bg-plum-900/40 px-3 py-1 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-300" />
                    <span className="font-sans text-[0.58rem] uppercase tracking-[0.24em] text-gold-300">
                      Populaire
                    </span>
                  </div>
                )}

                {/* Bottom info */}
                <div className="absolute inset-x-5 bottom-5">
                  <div className="font-sans text-[0.6rem] uppercase tracking-[0.32em] text-gold-300">
                    {p.duration} · {p.lessons} leçons
                  </div>
                </div>
              </div>

              {/* Card content */}
              <div className="mt-7">
                <div className="font-sans text-[0.62rem] uppercase tracking-[0.28em] text-rose-700">
                  ✦ {p.eyebrow}
                </div>
                <h3 className="mt-2 font-display text-[1.9rem] leading-tight text-plum-900">
                  {p.name}
                </h3>
                <p className="mt-3 font-serif text-[1.05rem] leading-relaxed text-plum-900/70">
                  {p.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {p.perks.map((perk) => (
                    <li
                      key={perk}
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
                      {perk}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex items-baseline justify-between border-t border-plum-900/10 pt-5">
                  <div>
                    <div className="font-sans text-[0.62rem] uppercase tracking-[0.28em] text-plum-900/55">
                      Achat unique
                    </div>
                    <div className="font-display text-3xl italic text-plum-900">
                      {p.price} <span className="text-base text-rose-700">$</span>
                    </div>
                  </div>
                  <Link
                    href="/espace-client"
                    className="group/cta inline-flex items-center gap-2 rounded-full border border-plum-900/15 bg-white px-5 py-3 font-sans text-[0.7rem] uppercase tracking-[0.28em] text-plum-900 transition-all duration-500 hover:bg-plum-900 hover:text-white cursor-pointer"
                  >
                    Acheter
                    <span className="transition-transform duration-500 group-hover/cta:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Reassurance line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-8 border-t border-plum-900/10 pt-8 font-sans text-[0.66rem] uppercase tracking-[0.28em] text-plum-900/55"
        >
          <span className="inline-flex items-center gap-2">
            <CheckIcon /> Garantie 14 jours
          </span>
          <span className="inline-flex items-center gap-2">
            <CheckIcon /> Paiement en 3 fois
          </span>
          <span className="inline-flex items-center gap-2">
            <CheckIcon /> Streaming HD
          </span>
          <span className="inline-flex items-center gap-2">
            <CheckIcon /> Téléchargement PDF
          </span>
        </motion.div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#c89438" strokeWidth="2.5">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
