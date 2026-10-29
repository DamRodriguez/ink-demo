"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { useScrollAnimations } from "@/hooks/gsap/useScrollAnimations";
import { useRef } from "react";

const AUDIENCE_ITEMS = [
  {
    number: "01",
    title: "Si trabajás solo",
    description:
      "Mostrá tu imágen profesional y organizá tu trabajo de manera simple",
  },
  {
    number: "02",
    title: "Estudios",
    description:
      "Gestioná a tus artistas, servicios, trabajos y demás desde un solo lugar",
  },
  {
    number: "03",
    title: "Equipos grandes",
    description:
      "Organizá tu equipo y trabajo de manera eficiente y profesional",
  },
] as const;

export function Audience() {
  const sectionRef = useRef<HTMLElement>(null);

  useScrollAnimations({
    scope: sectionRef,
    direction: "bottom",
    animations: {
      ".audience-reveal": {
        from: { y: 60, opacity: 0 },
        to: {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
        },
        individual: true,
      },
      ".audience-card": {
        from: { y: 70, opacity: 0 },
        to: {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.16,
          ease: "power3.out",
        },
        individual: true,
        staggered: true,
      },
      ".audience-title-line": {
        from: { yPercent: 115, rotate: 5, opacity: 0 },
        to: {
          yPercent: 0,
          rotate: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.18,
          ease: "power4.out",
        },
        individual: true,
      },
    },
  });

  return (
    <section
      ref={sectionRef}
      className="bg-paper-deep text-primary-on-light-text"
    >
      <div className="site-size horizontal-padding vertical-padding grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="audience-reveal opacity-0">
          <SectionLabel className="!text-primary-on-dark-text">
            Hecho para crecer con vos
          </SectionLabel>
          <h2 className="second-title text-primary-on-muted-text">
            <span className="block overflow-y-clip">
              <span className="audience-title-line block opacity-0">
                Tu escala
              </span>
            </span>
            <span className="block overflow-y-clip">
              <span className="audience-title-line block opacity-0">
                no define
              </span>
            </span>
            <span className="block overflow-y-clip">
              <span className="audience-title-line block opacity-0">
                tu <span className="italic">alcance</span>
              </span>
            </span>
          </h2>
        </div>
        <div className="grid gap-y-8 gap-x-10 xl:grid-cols-3 h-fit mt-auto">
          {AUDIENCE_ITEMS.map(({ number, title, description }) => (
            <article key={number} className="audience-card">
              <div className="text-primary-on-muted-text">
                <span className="font-accent text-lg md:text-xl text-secondary-on-muted-text/50">
                  {number}
                </span>
                <h3 className="font-display text-2xl uppercase">{title}</h3>
                <p className="mt-2 text-base md:text-lg leading-relaxed text-secondary-on-muted-text">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
