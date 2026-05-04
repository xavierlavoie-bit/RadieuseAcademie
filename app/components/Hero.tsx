"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  AnimatePresence,
  useInView,
  animate,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IMG } from "../lib/images";

const rotatingVerbs = [
  { word: "se révéler", scale: 1 },
  { word: "s’épanouir", scale: 0.84 },
  { word: "rayonner", scale: 1 },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Cursor parallax on photo
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.8 });
  const sy = useSpring(my, { stiffness: 60, damping: 20, mass: 0.8 });
  const photoX = useTransform(sx, [-1, 1], [-12, 12]);
  const photoY = useTransform(sy, [-1, 1], [-8, 8]);

  // Scroll parallax
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -60]);

  // Rotating verb
  const [verbIdx, setVerbIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setVerbIdx((i) => (i + 1) % rotatingVerbs.length),
      3600
    );
    return () => clearInterval(id);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const nx = ((e.clientX - r.left) / r.width) * 2 - 1;
      const ny = ((e.clientY - r.top) / r.height) * 2 - 1;
      mx.set(nx);
      my.set(ny);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [mx, my]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden pt-32 lg:pt-40"
    >
      <div className="bg-grain pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute -top-32 -right-32 -z-10 h-[500px] w-[500px] rounded-full bg-rose-200/40 blur-3xl" />

      {/* Editorial issue header with live indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mx-auto flex max-w-7xl items-center justify-between px-6 pb-6 lg:px-10"
      >
        <div className="flex items-center gap-4 font-sans text-[0.62rem] uppercase tracking-[0.32em] text-plum-900/55">
          <span>Édition №01</span>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="h-px w-8 origin-left bg-plum-900/30"
          />
          <span>Automne 2026</span>
        </div>
        <div className="hidden items-center gap-3 font-sans text-[0.62rem] uppercase tracking-[0.32em] text-plum-900/55 md:flex">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-500 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-rose-600" />
          </span>
          <span className="text-rose-700">Studio actif</span>
          <span className="h-px w-8 bg-plum-900/30" />
          <span>Montréal</span>
        </div>
      </motion.div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
        {/* Left: copy */}
        <motion.div
          style={{ y: yText }}
          className="relative z-10 flex flex-col justify-center lg:col-span-7 lg:py-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-6 inline-flex items-center gap-3"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="h-px w-12 origin-left bg-rose-600"
            />
            <span className="font-sans text-[0.7rem] uppercase tracking-[0.32em] text-rose-700">
              Par Catherine Lavoie
            </span>
          </motion.div>

          {/* Word-stagger title */}
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] font-medium leading-[0.95] tracking-[-0.015em] text-plum-900 text-balance">
            <StaggerLine words={["L’art", "subtil"]} delay={0.4} />
            <br />
            <StaggerLine words={["de"]} delay={0.65} />{" "}
            <span
              className="inline-block whitespace-nowrap align-baseline transition-[font-size] duration-700"
              style={{ fontSize: `${rotatingVerbs[verbIdx].scale}em` }}
            >
              <RotatingVerb index={verbIdx} />
              <span className="text-rose-600">.</span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-9 max-w-xl font-serif text-[1.32rem] leading-[1.55] text-plum-900/75 text-balance lg:text-[1.4rem]"
          >
            Radieuse Académie est l’atelier privé de Catherine Lavoie —
            maquilleuse signature et formatrice. Apprenez l’art du maquillage
            qui révèle, sans masquer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.15 }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <MagneticLink href="/formations">
              <span className="relative">Découvrir les formations</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="relative transition-transform duration-500 group-hover:translate-x-1"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </MagneticLink>

            <a
              href="#services"
              className="group inline-flex items-center gap-2 font-sans text-[0.74rem] uppercase tracking-[0.28em] text-plum-900/80 transition-colors hover:text-rose-700 cursor-pointer"
            >
              <span className="h-px w-8 bg-plum-900/40 transition-all duration-500 group-hover:w-12 group-hover:bg-rose-600" />
              Réserver un maquillage
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mt-16 flex items-end gap-8 lg:gap-12"
          >
            <Stat to={250} suffix="+" label="Femmes formées" />
            <div className="h-12 w-px bg-plum-900/15" />
            <Stat to={12} label="Années studio" />
            <div className="h-12 w-px bg-plum-900/15" />
            <Stat to={4.9} decimals={1} suffix="/5" label="Note clientes" />
          </motion.div>
        </motion.div>

        {/* Right: editorial photo with Ken Burns + cursor parallax */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:col-span-5"
        >
          <div className="relative">
            <div className="absolute -top-4 right-0 z-20 flex items-center gap-2 font-sans text-[0.6rem] uppercase tracking-[0.32em] text-plum-900/60">
              <span>Pl. 01</span>
              <span className="h-px w-8 bg-plum-900/30" />
              <span>Couverture</span>
            </div>

            <motion.div
              style={{ y: yImg }}
              className="relative aspect-[3/4] w-full overflow-hidden rounded-[2px] shadow-[0_50px_100px_-30px_rgba(122,47,67,0.4)]"
            >
              {/* Photo with Ken Burns + cursor parallax */}
              <motion.div
                style={{ x: photoX, y: photoY }}
                className="absolute inset-[-6%]"
              >
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.06 }}
                  transition={{
                    duration: 18,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={IMG.hero.src}
                    alt={IMG.hero.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover photo-warm"
                  />
                </motion.div>
              </motion.div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-plum-900/40 via-transparent to-transparent" />

              {/* Gold particle dust */}
              <ParticleDust />

              {/* Bottom caption */}
              <div className="absolute inset-x-6 bottom-6 z-10">
                <div className="font-sans text-[0.6rem] uppercase tracking-[0.32em] text-cream/85">
                  ✦ Signature №01
                </div>
                <div className="mt-1 font-display italic text-2xl text-cream">
                  Naturelle radieuse
                </div>
              </div>
            </motion.div>

            {/* Floating editorial badge top-left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute -left-4 top-12 z-10 max-w-[200px] rounded-sm border border-gold-400/30 bg-cream/90 p-4 backdrop-blur-md lg:-left-12"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="font-sans text-[0.58rem] uppercase tracking-[0.32em] text-rose-600">
                  ✦ Inscriptions ouvertes
                </div>
                <div className="mt-1 font-display text-base italic text-plum-900">
                  Cohorte automne — 5 places
                </div>
              </motion.div>
            </motion.div>

            {/* Floating quote bottom right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="absolute -right-4 -bottom-6 z-10 max-w-[220px] rounded-sm bg-plum-900 p-5 text-white shadow-[0_30px_60px_-20px_rgba(42,26,32,0.5)] lg:-right-10"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div className="font-sans text-[0.58rem] uppercase tracking-[0.32em] text-gold-300">
                  ★★★★★
                </div>
                <p className="mt-2 font-display text-sm italic leading-snug">
                  « Une révélation. Tout simplement. »
                </p>
                <div className="mt-2 font-sans text-[0.6rem] uppercase tracking-[0.24em] text-cream/65">
                  — Sophie M.
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Activity ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="mx-auto mt-20 flex max-w-7xl items-center gap-6 px-6 pb-12 lg:px-10"
      >
        <div className="flex-shrink-0 font-sans text-[0.6rem] uppercase tracking-[0.32em] text-plum-900/50">
          ↓  Continuez
        </div>
        <div className="hidden h-px flex-1 bg-plum-900/10 md:block" />
        <ActivityTicker />
      </motion.div>
    </section>
  );
}

// Stagger word reveal — each word fades up + blur reveal
function StaggerLine({ words, delay = 0 }: { words: string[]; delay?: number }) {
  return (
    <span>
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.9,
            delay: delay + i * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block"
        >
          {w}
          {i < words.length - 1 && " "}
        </motion.span>
      ))}
    </span>
  );
}

function RotatingVerb({ index }: { index: number }) {
  return (
    <span className="relative inline-block align-baseline">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 30, filter: "blur(14px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -30, filter: "blur(14px)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block italic font-light text-rose-700"
        >
          {rotatingVerbs[index].word}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

// Animated number that counts up when in view
function Stat({
  to,
  suffix = "",
  decimals = 0,
  label,
}: {
  to: number;
  suffix?: string;
  decimals?: number;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(v),
    });
    return controls.stop;
  }, [inView, to]);

  return (
    <div ref={ref}>
      <div className="editorial-number text-4xl text-plum-900 lg:text-5xl">
        {val.toFixed(decimals)}
        {suffix}
      </div>
      <div className="mt-1 font-sans text-[0.62rem] uppercase tracking-[0.24em] text-plum-900/55">
        {label}
      </div>
    </div>
  );
}

// Magnetic-feel CTA button
function MagneticLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });

  return (
    <motion.div style={{ x: sx, y: sy }} className="inline-block">
      <Link
        ref={ref}
        href={href}
        onMouseMove={(e) => {
          if (!ref.current) return;
          const r = ref.current.getBoundingClientRect();
          const cx = r.left + r.width / 2;
          const cy = r.top + r.height / 2;
          x.set((e.clientX - cx) * 0.25);
          y.set((e.clientY - cy) * 0.25);
        }}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-plum-900 px-9 py-5 font-sans text-[0.74rem] uppercase tracking-[0.28em] text-white transition-shadow duration-500 hover:shadow-[0_25px_50px_-15px_rgba(42,26,32,0.6)] cursor-pointer"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-rose-700 to-rose-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        {children}
      </Link>
    </motion.div>
  );
}

// Sparse gold dust drifting across the photo
function ParticleDust() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 14 }).map((_, i) => {
        const left = (i * 41) % 100;
        const size = 2 + (i % 3);
        const dur = 14 + (i % 7) * 2;
        const delay = (i * 0.7) % 8;
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-gold-300"
            style={{
              left: `${left}%`,
              top: "100%",
              width: size,
              height: size,
              boxShadow: "0 0 10px rgba(245, 214, 139, 0.7)",
            }}
            animate={{
              y: ["0%", "-700%"],
              opacity: [0, 0.7, 0.7, 0],
              x: [0, i % 2 === 0 ? 20 : -20, 0],
            }}
            transition={{
              duration: dur,
              repeat: Infinity,
              ease: "linear",
              delay,
            }}
          />
        );
      })}
    </div>
  );
}

// Small marquee of activity events
const events = [
  "Sophie a complété — Smoky doux",
  "Émilie a téléchargé — Fiche colorimétrique",
  "Joanie a réservé — Coaching live · jeudi",
  "Marie-Claude a rejoint — Cohorte automne",
  "Léa a noté — « En 3 h, tout a changé »",
  "Nouvelle leçon — Mariée champêtre",
];

function ActivityTicker() {
  return (
    <div className="hidden flex-1 overflow-hidden md:block">
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 35, ease: "linear", repeat: Infinity }}
      >
        {[...events, ...events].map((e, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 font-sans text-[0.62rem] uppercase tracking-[0.32em] text-plum-900/55"
          >
            <span className="text-gold-500">✦</span>
            {e}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
