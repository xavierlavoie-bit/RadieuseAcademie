"use client";

import { motion } from "framer-motion";

const items = [
  "Confiance Féminine",
  "Beauté Intuitive",
  "Maquillage Sur-Mesure",
  "Formation Certifiée",
  "Coaching Personnalisé",
  "Élégance Naturelle",
];

export function Marquee() {
  return (
    <section
      aria-hidden
      className="relative overflow-hidden border-y border-plum-900/10 bg-[#fdf6f1] py-9"
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      >
        {[...items, ...items, ...items].map((it, i) => (
          <span
            key={i}
            className="flex items-center gap-12 pr-12 font-display text-3xl italic tracking-tight text-plum-900/70 md:text-4xl lg:text-5xl"
          >
            {it}
            <span className="text-gold-500 text-2xl">✦</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}
