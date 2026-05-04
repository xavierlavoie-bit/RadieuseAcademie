"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faq = [
  {
    q: "Les vidéos sont-elles disponibles tout de suite après l’achat ?",
    a: "Immédiatement. Vous recevez un courriel de confirmation, créez votre compte en deux clics, et toutes vos leçons sont disponibles dans votre espace client.",
  },
  {
    q: "Pendant combien de temps puis-je revoir les leçons ?",
    a: "À vie. Une fois achetée, une formation reste dans votre espace client pour toujours — incluant les futures mises à jour.",
  },
  {
    q: "Puis-je télécharger les vidéos ?",
    a: "Le streaming est en HD. Les fiches techniques, listes produits et routines sont téléchargeables en PDF. Le téléchargement vidéo n’est pas activé pour protéger le contenu.",
  },
  {
    q: "Et si je préfère un coaching en direct avec Catherine ?",
    a: "Le coaching live (visio ou studio Montréal) est offert séparément. Catherine répond en personne, vous regarde travailler, ajuste en direct. Les sessions live sont aussi enregistrées dans votre espace client.",
  },
  {
    q: "Y a-t-il des plans de paiement ?",
    a: "Oui. Pour Radieuse et Académie Pro, paiement en 3 versements sans frais. Aucun engagement, aucun frais caché.",
  },
  {
    q: "Que se passe-t-il si je n’aime pas une formation ?",
    a: "Garantie 14 jours, satisfaite ou remboursée. Sans question. Catherine veut des étudiantes inspirées, jamais déçues.",
  },
];

export function FormationsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="h-px w-10 bg-rose-600" />
            <span className="font-sans text-[0.7rem] uppercase tracking-[0.32em] text-rose-700">
              Questions · §6
            </span>
          </div>
          <h2 className="font-display text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.05] text-plum-900 text-balance">
            Tout ce qu’on aurait
            <br />
            <span className="italic">aimé savoir avant.</span>
          </h2>
        </motion.div>

        <div className="mt-14 space-y-3">
          {faq.map((item, i) => {
            const open = openIndex === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.05 }}
                className={`overflow-hidden rounded-sm border bg-white/70 backdrop-blur-md transition-all duration-500 ${
                  open
                    ? "border-gold-400/50 shadow-[0_30px_60px_-30px_rgba(122,47,67,0.2)]"
                    : "border-plum-900/10 hover:border-plum-900/25"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between gap-6 p-6 text-left lg:p-7 cursor-pointer"
                >
                  <span className="font-display text-lg italic text-plum-900 lg:text-xl">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border transition-colors duration-500 ${
                      open
                        ? "border-rose-700 bg-rose-700 text-white"
                        : "border-plum-900/15 bg-cream text-plum-900"
                    }`}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-7 lg:px-7">
                        <div className="h-px w-full bg-plum-900/10" />
                        <p className="mt-5 max-w-3xl font-serif text-[1.08rem] leading-relaxed text-plum-900/75">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
