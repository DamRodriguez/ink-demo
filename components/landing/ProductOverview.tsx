"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { useScrollAnimations } from "@/hooks/gsap/useScrollAnimations";
import { useRef } from "react";

const PRODUCT_BLOCKS = [
  {
    label: "Presencia digital",
    description: (
      <>
        Ink Demo presenta una <span className="text-ink">web</span> y un{" "}
        <span className="text-ink">administrador</span> pensado para el día a
        día de un estudio de tatuajes. Mostrá tu imágen, trabajo, artistas,
        servicios y datos de contacto con una experiencia pensada para llamar la
        atención de cada visitante.
      </>
    ),
  },
  {
    label: "Experiencia visual",
    description: (
      <>
        Cada <span className="text-ink">animación</span> y{" "}
        <span className="text-ink">detalle</span> está pensado para que recorrer
        tu sitio se sienta único, fluido e intuitivo. Las transiciones acompañan
        el contenido, guían la atención y convierten cada sección en una{" "}
        <span className="text-ink">experiencia única</span>.
      </>
    ),
  },
  {
    label: "Estructura adaptable",
    description: (
      <>
        La experiencia se construye a mano alrededor de tu{" "}
        <span className="text-ink">identidad</span>, tus contenidos y la forma
        en que trabaja tu equipo. Puede adaptarse a cada estudio, con{" "}
        <span className="text-ink">contenidos editables</span>,{" "}
        <span className="text-ink">identidad propia</span> y un{" "}
        <span className="text-ink">modo oscuro/claro</span>.
      </>
    ),
  },
  {
    label: "Acceso y seguridad",
    description: (
      <>
        El <span className="text-ink">administrador privado</span> de tu web
        cuenta con autenticación y acceso protegido para que vos y tu equipo
        puedan gestionar el contenido con tranquilidad.
      </>
    ),
  },
] as const;

export function ProductOverview() {
  const sectionRef = useRef<HTMLElement>(null);

  useScrollAnimations({
    scope: sectionRef,
    direction: "bottom",
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
      },
      ".overview-block": {
        from: { y: 40, opacity: 0 },
        to: {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.16,
          ease: "power3.out",
        },
        individual: true,
        staggered: true,
      },
      ".overview-title-line": {
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
      ".overview-label": {
        from: { y: 18, scale: 0.98, opacity: 0 },
        to: {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
      },
    },
  });

  return (
    <section
      id="producto"
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-soft-white text-primary-on-light-text"
    >
      <div className="site-size relative z-10 horizontal-padding vertical-padding">
        <SectionLabel className="overview-label opacity-0">
          Diseño & Adaptabilidad
        </SectionLabel>
        <div className="grid gap-y-6 gap-x-24 2xl:grid-cols-[0.7fr_1.3fr] 2xl:items-end">
          <h2 className="font-display text-4xl uppercase leading-[0.9] md:text-5xl">
            <span className="block overflow-y-clip">
              <span className="overview-title-line block opacity-0">
                Mas que una interfaz
              </span>
            </span>
            <span className="block overflow-y-clip">
              <span className="overview-title-line block opacity-0">
                Es una experiencia
              </span>
            </span>
            <span className="block overflow-y-clip">
              <span className="overview-title-line block text-secondary-on-light-text/50 opacity-0">
                inmersiva
              </span>
            </span>
            <span className="block overflow-y-clip">
              <span className="overview-title-line block opacity-0">
                para tu estudio
              </span>
            </span>
          </h2>
          <div className="max-w-xl">
            <p className="overview-line text-base leading-relaxed text-secondary-on-light-text md:text-xl">
              Una{" "}
              <span className="text-ink">experiencia pública inmersiva</span> y
              un <span className="text-ink">administrador privado</span> para
              gestionar cada parte de tu estudio
            </p>
          </div>
        </div>
        <div className="common-section-space grid gap-10 xl:gap-14 xl:grid-cols-2 2xl:grid-cols-4">
          {PRODUCT_BLOCKS.map((block) => (
            <article key={block.label} className="overview-block opacity-0">
              <h3 className="font-display text-2xl uppercase leading-none text-primary-on-light-text md:text-3xl">
                {block.label}
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-secondary-on-light-text md:text-lg">
                {block.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
