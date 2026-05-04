import type { Metadata } from "next";
import Link from "next/link";
import { ClientSidebar } from "./components/ClientSidebar";
import { ContinueWatching } from "./components/ContinueWatching";
import { MyCourses } from "./components/MyCourses";
import { Discover } from "./components/Discover";
import { Resources } from "./components/Resources";

export const metadata: Metadata = {
  title: "Espace client · Radieuse Académie",
  description:
    "Votre bibliothèque privée — leçons, fiches PDF, progression. L'espace réservé aux étudiantes de Radieuse Académie.",
};

export default function EspaceClientPage() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="flex">
        <ClientSidebar />

        <div className="flex-1">
          {/* Mobile header */}
          <header className="flex items-center justify-between border-b border-plum-900/10 bg-cream/85 px-6 py-4 backdrop-blur-md lg:hidden">
            <Link href="/" className="font-display italic text-lg text-plum-900 cursor-pointer">
              Radieuse <span className="text-rose-700">·</span> Académie
            </Link>
            <span className="font-sans text-[0.6rem] uppercase tracking-[0.28em] text-rose-700">
              Espace client
            </span>
          </header>

          {/* Demo banner */}
          <div className="border-b border-gold-400/30 bg-gradient-to-r from-rose-50 via-cream to-rose-50 px-6 py-3 lg:px-12">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 font-sans text-[0.62rem] uppercase tracking-[0.32em] text-rose-700">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-500" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-rose-600" />
                </span>
                Démo · Aperçu de l’espace client
              </span>
              <Link
                href="/formations"
                className="font-sans text-[0.62rem] uppercase tracking-[0.28em] text-plum-900/70 hover:text-rose-700 cursor-pointer"
              >
                ← Retour aux formations
              </Link>
            </div>
          </div>

          <main className="pb-24">
            <ContinueWatching />
            <MyCourses />
            <Discover />
            <Resources />

            {/* Footer line */}
            <div className="mt-20 border-t border-plum-900/10 px-6 pt-8 lg:px-12">
              <div className="flex flex-wrap items-center justify-between gap-4 font-sans text-[0.6rem] uppercase tracking-[0.32em] text-plum-900/55">
                <span>© Radieuse Académie · Espace privé</span>
                <span>Connectée en tant que Sophie M.</span>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
