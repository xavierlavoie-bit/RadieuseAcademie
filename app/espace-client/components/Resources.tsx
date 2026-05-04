"use client";

import { motion } from "framer-motion";

const resources = [
  {
    title: "Ma fiche colorimétrique",
    desc: "Vos sous-tons, palette signature, fards à privilégier — votre profil personnel.",
    type: "PDF · 8 pages",
    icon: "palette",
  },
  {
    title: "Routine peau matin & soir",
    desc: "Les produits et l’ordre d’application — adaptés à votre type de peau.",
    type: "PDF · 4 pages",
    icon: "drop",
  },
  {
    title: "Kit produits Radieuse",
    desc: "La liste exacte des produits utilisés par Catherine en studio, avec liens.",
    type: "PDF · 6 pages",
    icon: "list",
  },
  {
    title: "Calendrier de pratique",
    desc: "30 jours pour ancrer les gestes — checklist quotidienne imprimable.",
    type: "PDF · 2 pages",
    icon: "calendar",
  },
];

export function Resources() {
  return (
    <section id="fiches" className="px-6 pt-16 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8 }}
        className="flex items-end justify-between gap-4 border-b border-plum-900/10 pb-5"
      >
        <div>
          <div className="font-sans text-[0.6rem] uppercase tracking-[0.32em] text-rose-700">
            ✦ Vos ressources
          </div>
          <h2 className="mt-2 font-display text-3xl italic text-plum-900 lg:text-4xl">
            Mes fiches
          </h2>
        </div>
      </motion.div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {resources.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.7,
              delay: i * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group flex flex-col rounded-sm border border-plum-900/10 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/50 hover:shadow-[0_30px_60px_-30px_rgba(122,47,67,0.2)] cursor-pointer"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-cream text-rose-700 transition-colors group-hover:bg-rose-700 group-hover:text-cream">
              <ResourceIcon name={r.icon} />
            </div>

            <h3 className="mt-5 font-display text-xl text-plum-900">
              {r.title}
            </h3>
            <p className="mt-2 flex-grow font-serif text-sm leading-relaxed text-plum-900/65">
              {r.desc}
            </p>

            <div className="mt-5 flex items-center justify-between border-t border-plum-900/10 pt-4">
              <span className="font-sans text-[0.6rem] uppercase tracking-[0.24em] text-plum-900/55">
                {r.type}
              </span>
              <span className="inline-flex items-center gap-1.5 font-sans text-[0.62rem] uppercase tracking-[0.28em] text-rose-700 transition-all duration-500 group-hover:gap-3">
                Télécharger
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ResourceIcon({ name }: { name: string }) {
  const props = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
  };

  if (name === "palette")
    return (
      <svg {...props}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="9" cy="9" r="1" fill="currentColor" />
        <circle cx="15" cy="9" r="1" fill="currentColor" />
        <circle cx="9" cy="15" r="1" fill="currentColor" />
        <circle cx="15" cy="15" r="1" fill="currentColor" />
      </svg>
    );
  if (name === "drop")
    return (
      <svg {...props}>
        <path d="M12 2c-3 4-6 7-6 11a6 6 0 0012 0c0-4-3-7-6-11z" />
      </svg>
    );
  if (name === "list")
    return (
      <svg {...props}>
        <path d="M9 6h11M9 12h11M9 18h11M5 6h.01M5 12h.01M5 18h.01" />
      </svg>
    );
  return (
    <svg {...props}>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M4 11h16" />
    </svg>
  );
}
