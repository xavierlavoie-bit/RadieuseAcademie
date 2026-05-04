import type { Metadata } from "next";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FormationsHero } from "./components/FormationsHero";
import { VideoPackages } from "./components/VideoPackages";
import { AlaCarte } from "./components/AlaCarte";
import { LiveCoaching } from "./components/LiveCoaching";
import { ClientSpacePreview } from "./components/ClientSpacePreview";
import { FormationsFAQ } from "./components/FormationsFAQ";
import { FormationsCTA } from "./components/FormationsCTA";

export const metadata: Metadata = {
  title: "Formations · Radieuse Académie",
  description:
    "Masterclass enregistrées par Catherine Lavoie. Achetez à la carte ou en parcours signature. Accès à vie via votre espace client.",
};

export default function FormationsPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <FormationsHero />
        <VideoPackages />
        <AlaCarte />
        <LiveCoaching />
        <ClientSpacePreview />
        <FormationsFAQ />
        <FormationsCTA />
      </main>
      <Footer />
    </>
  );
}
