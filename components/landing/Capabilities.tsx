"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { useScrollAnimations } from "@/hooks/gsap/useScrollAnimations";
import { useRef } from "react";

const CAPABILITIES = [
  ["01", "Servicios", "Actualizá lo que ofrecés y cómo lo contás."],
  ["02", "Trabajos", "Mostrá tu portfolio, estilos, artistas e imágenes."],
  ["03", "Equipo", "Presentá a cada persona con su propia identidad."],
  ["04", "Contacto", "Mantené horarios, ubicación y canales al día."],
] as const;

export function Capabilities() {
  const sectionRef = useRef<HTMLElement>(null);

  useScrollAnimations({
    scope: sectionRef,
    animations: {
      ".capability": {
        from: { x: -50, opacity: 0 },
        to: { x: 0, opacity: 1, duration: 0.8, stagger: 0.14, ease: "power3.out" },
        individual: true,
        scrollTrigger: { start: "top 90%", end: "+=220", scrub: 1.5 },
      },
    },
  });

  return (
    <section ref={sectionRef} className="bg-paper text-primary-on-light-text">
      <div className="site-size horizontal-padding vertical-padding">
        <SectionLabel>Lo que podés administrar</SectionLabel>
        <div className="mt-12 divide-y divide-primary-on-light-text/20 border-y border-primary-on-light-text/20">
          {CAPABILITIES.map(([number, title, description]) => (
            <div key={number} className="capability grid gap-3 py-7 opacity-0 md:grid-cols-[5rem_0.7fr_1fr] md:items-center">
              <span className="font-accent text-xs text-secondary-on-light-text">{number}</span>
              <h3 className="font-display text-3xl uppercase md:text-4xl">{title}</h3>
              <p className="max-w-md text-base leading-relaxed text-secondary-on-light-text md:justify-self-end md:text-lg">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
