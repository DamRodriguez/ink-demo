"use client";
import { Audience } from "@/components/landing/Audience";
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
      <Audience />
      <FinalCta />
    </main>
  );
}
