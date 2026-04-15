"use client";

import { useReveal } from "../hooks/useReveal";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { ProblemSection } from "../components/ProblemSection";
import { CredibilitySection } from "../components/CredibilitySection";
import { PosterSection } from "../components/PosterSection";
import { ModulesSection } from "../components/ModulesSection";
import { TransformationSection } from "../components/TransformationSection";
import { WhyDifferentSection } from "../components/WhyDifferentSection";
import { WhoSection } from "../components/WhoSection";
import { EnrollSection } from "../components/EnrollSection";
import { FinalMessage } from "../components/FinalMessage";
import { Footer } from "../components/Footer";

export default function Home() {
  useReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <CredibilitySection />
        <PosterSection />
        <ModulesSection />
        <TransformationSection />
        <WhyDifferentSection />
        <WhoSection />
        <EnrollSection />
        <FinalMessage />
      </main>
      <Footer />
    </>
  );
}
