"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { useScrollAnimations } from "@/hooks/gsap/useScrollAnimations";
import { useRef } from "react";

export function ProductOverview() {
  const sectionRef = useRef<HTMLElement>(null);

  useScrollAnimations({
    scope: sectionRef,
    animations: {
      ".overview-line": {
        from: { y: 50, opacity: 0 },
        to: {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
        },
        individual: true,
        scrollTrigger: { start: "top 90%", end: "+=180", scrub: 1 },
      },
    },
  });

  return (
    <section
      id="producto"
      ref={sectionRef}
      className="bg-paper text-primary-on-light-text"
    >
      <div className="site-size horizontal-padding vertical-padding">
        <SectionLabel>Una herramienta adaptable</SectionLabel>
        <div className="mt-12 grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <p className="overview-line font-display text-4xl uppercase leading-[0.9] opacity-0 md:text-5xl">
            Más que una web.
            <br />
            Es una experiencia
            <br />
            <span className="text-secondary-on-light-text/50">
              visual y fluida.
            </span>
          </p>
          <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-secondary-on-light-text md:text-xl">
            <p className="overview-line opacity-0">
              Ink Demo presenta una{" "}
              <span className="text-ink">web pública</span> y un{" "}
              <span className="text-ink">administrador privado</span> pensado
              para el día a día de un{" "}
              <span className="text-ink">estudio de tatuajes</span>.
            </p>
            <p className="overview-line opacity-0">
              Cada <span className="text-ink">entrada</span>,{" "}
              <span className="text-ink">transición</span> y{" "}
              <span className="text-ink">detalle visual</span> está pensado para
              que recorrer tu sitio se sienta natural, fluido y memorable.
            </p>
            <p className="overview-line opacity-0">
              La experiencia se construye a mano alrededor de tu{" "}
              <span className="text-ink">identidad</span>, tus{" "}
              <span className="text-ink">contenidos</span> y la forma única en
              que trabaja tu equipo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
