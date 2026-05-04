"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Logo } from "./Logo";

const links = [
  { label: "Formations", href: "/formations" },
  { label: "Approche", href: "/#approche" },
  { label: "Services", href: "/#services" },
  { label: "Galerie", href: "/#galerie" },
  { label: "Témoignages", href: "/#temoignages" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 30);
  });

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[#fdf6f1]/85 backdrop-blur-xl border-b border-rose-200/40 shadow-[0_10px_40px_-20px_rgba(122,47,67,0.25)]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="cursor-pointer">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => {
            const isActive =
              l.href === "/formations"
                ? pathname === "/formations"
                : pathname === "/" && l.href.startsWith("/#");
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`group relative font-sans text-[0.78rem] uppercase tracking-[0.22em] transition-colors hover:text-rose-600 ${
                  isActive && l.href === "/formations"
                    ? "text-rose-600"
                    : "text-plum-900/80"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-gradient-to-r from-gold-400 to-rose-500 transition-all duration-500 group-hover:w-full ${
                    isActive && l.href === "/formations" ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/espace-client"
            className="inline-flex items-center gap-2 rounded-full border border-plum-900/15 bg-white/40 px-5 py-3 font-sans text-[0.7rem] uppercase tracking-[0.22em] text-plum-900 backdrop-blur-md transition-all duration-500 hover:border-plum-900/40 cursor-pointer"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
            </svg>
            Espace client
          </Link>
          <Link
            href={pathname === "/formations" ? "#contact" : "/formations"}
            className="btn-primary inline-flex rounded-full px-6 py-3 font-sans text-[0.72rem] uppercase tracking-[0.22em] cursor-pointer"
          >
            {pathname === "/formations" ? "Réserver" : "Formations"}
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
