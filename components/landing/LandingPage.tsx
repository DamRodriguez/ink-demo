"use client";

import { Audience } from "@/components/landing/Audience";
import { Capabilities } from "@/components/landing/Capabilities";
import { FinalCta } from "@/components/landing/FinalCta";
import { Hero } from "@/components/landing/Hero";
import { ProductOverview } from "@/components/landing/ProductOverview";
import { Showcase } from "@/components/landing/Showcase";

export function LandingPage() {
  return (
    <main>
      <Hero />
      <ProductOverview />
      <Showcase />
      <Capabilities />
      <Audience />
      <FinalCta />
      <footer className="bg-ink px-4 pb-8 text-center font-accent text-[0.6rem] uppercase tracking-[0.16em] text-secondary-on-dark-text md:px-10">
        Ink Demo · Producto adaptable para estudios de tatuajes
      </footer>
    </main>
  );
}
