"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IMG } from "../lib/images";

export function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-plum-900 text-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left: editorial photo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2 }}
          className="relative aspect-[4/5] lg:col-span-5 lg:aspect-auto lg:min-h-[700px]"
        >
          <Image
            src={IMG.flatlay.src}
            alt={IMG.flatlay.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover photo-warm"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-plum-900/40 via-transparent to-plum-900/40" />

          {/* Overlay text */}
          <div className="absolute inset-x-8 bottom-8">
            <div className="font-sans text-[0.62rem] uppercase tracking-[0.32em] text-gold-300">
              ✦ Pl. 06 — L’invitation
            </div>
          </div>
        </motion.div>

        {/* Right: copy */}
        <div className="relative flex items-center lg:col-span-7">
          {/* Decorative orbs */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -top-20 -right-20 h-[500px] w-[500px] rounded-full bg-rose-700/40 blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="pointer-events-none absolute -bottom-20 left-1/4 h-[400px] w-[400px] rounded-full bg-gold-500/25 blur-3xl"
          />

          <div className="relative w-full px-6 py-16 lg:px-16 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-gold-300/30 bg-white/5 px-4 py-2 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-300 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-300" />
                </span>
                <span className="font-sans text-[0.66rem] uppercase tracking-[0.32em] text-gold-300">
                  Inscriptions ouvertes · cohorte automne
                </span>
              </div>

              <h2 className="font-display text-[clamp(2.4rem,5vw,4.4rem)] leading-[1.02] text-balance">
                Prête à devenir
                <br />
                <span className="italic gold-shimmer">radieuse ?</span>
              </h2>

              <p className="mt-9 max-w-xl font-serif text-xl leading-[1.6] text-cream/85 text-balance">
                Réservez un appel découverte de 20 minutes avec Catherine. Sans
                pression, sans engagement — juste une conversation pour
                imaginer votre éclat.
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-4">
                <a
                  href="mailto:catherine@radieuseacademie.com"
                  className="group inline-flex items-center gap-3 rounded-full bg-gold-400 px-9 py-5 font-sans text-[0.74rem] uppercase tracking-[0.28em] text-plum-900 transition-all duration-500 hover:-translate-y-0.5 hover:bg-gold-300 hover:shadow-[0_25px_50px_-15px_rgba(232,183,90,0.55)] cursor-pointer"
                >
                  Réserver mon appel
                  <svg
                    className="transition-transform duration-500 group-hover:translate-x-1"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>

                <Link
                  href="/formations"
                  className="inline-flex items-center gap-2 font-sans text-[0.74rem] uppercase tracking-[0.28em] text-cream/85 transition-colors hover:text-gold-300 cursor-pointer"
                >
                  <span className="h-px w-8 bg-cream/40" />
                  Voir les formations
                </Link>
              </div>

              {/* Contact info grid */}
              <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-8 border-t border-cream/10 pt-10 sm:grid-cols-2">
                {[
                  {
                    label: "Courriel",
                    value: "catherine@radieuseacademie.com",
                  },
                  {
                    label: "Téléphone",
                    value: "+1 (438) 555-0142",
                  },
                  {
                    label: "Studio",
                    value: "Montréal, QC · sur rendez-vous",
                  },
                  {
                    label: "Disponibilités",
                    value: "Lun. – Ven. · 9 h – 18 h",
                  },
                ].map((c) => (
                  <div key={c.label}>
                    <div className="font-sans text-[0.6rem] uppercase tracking-[0.32em] text-gold-300/80">
                      {c.label}
                    </div>
                    <div className="mt-1.5 font-serif text-lg text-cream">
                      {c.value}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
