"use client";

import { motion } from "framer-motion";

const packages = [
  {
    name: "Découverte",
    tagline: "Votre première étape",
    price: "297",
    duration: "Atelier 3 h",
    description:
      "Idéal pour découvrir les bases du maquillage avec une approche douce et raffinée.",
    features: [
      "Analyse colorimétrique",
      "Routine peau & teint",
      "Maquillage jour signature",
      "Fiche produits personnalisée",
    ],
    featured: false,
  },
  {
    name: "Radieuse",
    tagline: "La signature Catherine",
    price: "697",
    duration: "Programme 4 sessions",
    description:
      "Le programme complet pour maîtriser jour, soir et événement avec une confiance totale.",
    features: [
      "4 sessions privées (8 h)",
      "Maquillage jour, soir, glamour",
      "Techniques regard sur-mesure",
      "Trousse essentielle offerte",
      "Suivi personnalisé 30 jours",
    ],
    featured: true,
  },
  {
    name: "Académie Pro",
    tagline: "Devenez maquilleuse",
    price: "1 897",
    duration: "Formation 6 semaines",
    description:
      "Pour celles qui souhaitent en faire leur métier ou perfectionner leur art professionnellement.",
    features: [
      "12 modules certifiants",
      "Mariée, scène, photo, contour",
      "Kit pro inclus",
      "Stage portfolio",
      "Mentorat lifetime",
    ],
    featured: false,
  },
];

export function Packages() {
  return (
    <section
      id="formations"
      className="relative bg-gradient-to-b from-cream to-rose-100/40 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="h-px w-10 bg-gold-500" />
            <span className="eyebrow">Formations & coachings</span>
            <span className="h-px w-10 bg-gold-500" />
          </div>
          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.05] text-plum-900 text-balance">
            Choisissez votre
            <span className="italic text-rose-600"> chemin radieux.</span>
          </h2>
          <p className="mt-6 font-serif text-lg leading-relaxed text-plum-900/70">
            Trois programmes pensés pour rencontrer chaque femme là où elle se
            trouve — de la curieuse à la future professionnelle.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-7 lg:grid-cols-3 lg:items-stretch">
          {packages.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.12,
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative flex flex-col overflow-hidden rounded-3xl p-9 lg:p-10 transition-all duration-700 ${
                p.featured
                  ? "bg-gradient-to-br from-plum-900 via-rose-700 to-rose-600 text-white shadow-[0_50px_100px_-30px_rgba(122,47,67,0.6)] lg:-mt-6 lg:mb-6"
                  : "card-elegant"
              }`}
            >
              {p.featured && (
                <>
                  <div className="absolute inset-0 -z-10 opacity-30">
                    <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gold-400 blur-3xl" />
                    <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-rose-300 blur-3xl" />
                  </div>
                  <div className="absolute right-7 top-7 inline-flex items-center gap-1.5 rounded-full border border-gold-300/60 bg-gold-400/10 px-3 py-1 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-300" />
                    <span className="font-sans text-[0.6rem] uppercase tracking-[0.22em] text-gold-300">
                      Populaire
                    </span>
                  </div>
                </>
              )}

              <span
                className={`eyebrow ${
                  p.featured ? "!text-gold-300" : ""
                }`}
              >
                {p.tagline}
              </span>
              <h3
                className={`mt-3 font-display text-3xl ${
                  p.featured ? "text-white" : "text-plum-900"
                }`}
              >
                {p.name}
              </h3>

              <div className="mt-6 flex items-baseline gap-2">
                <span
                  className={`font-display text-5xl ${
                    p.featured ? "text-white" : "text-plum-900"
                  }`}
                >
                  {p.price}
                </span>
                <span
                  className={`font-sans text-sm ${
                    p.featured ? "text-gold-300" : "text-rose-600"
                  }`}
                >
                  $ CAD
                </span>
              </div>
              <div
                className={`mt-1 font-sans text-[0.72rem] uppercase tracking-[0.22em] ${
                  p.featured ? "text-white/60" : "text-plum-900/55"
                }`}
              >
                {p.duration}
              </div>

              <p
                className={`mt-6 font-serif text-[1.02rem] leading-relaxed ${
                  p.featured ? "text-white/85" : "text-plum-900/70"
                }`}
              >
                {p.description}
              </p>

              <div
                className={`my-7 h-px ${
                  p.featured
                    ? "bg-gradient-to-r from-transparent via-gold-300/50 to-transparent"
                    : "bg-gradient-to-r from-transparent via-rose-300/50 to-transparent"
                }`}
              />

              <ul className="space-y-3 flex-grow">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-3 font-sans text-sm ${
                      p.featured ? "text-white/90" : "text-plum-900/80"
                    }`}
                  >
                    <span
                      className={`mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
                        p.featured
                          ? "bg-gold-400/20 text-gold-300"
                          : "bg-rose-100 text-rose-600"
                      }`}
                    >
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-9 inline-flex items-center justify-center rounded-full px-6 py-4 font-sans text-[0.74rem] uppercase tracking-[0.24em] transition-all duration-500 ${
                  p.featured
                    ? "bg-gold-400 text-plum-900 hover:bg-gold-300 shadow-xl"
                    : "btn-ghost"
                }`}
              >
                Réserver ce parcours
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center font-serif italic text-plum-900/55"
        >
          ✦ Plans de paiement disponibles en 3 ou 6 versements sans frais.
        </motion.p>
      </div>
    </section>
  );
}
