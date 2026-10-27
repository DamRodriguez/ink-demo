"use client";

import useBreakpoint from "@/hooks/useBreakpoint";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { DependencyList, RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

export type ScrollDirection = "top" | "center" | "bottom" | "left" | "right";

export type ScrollAnimationConfig = {
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  direction?: ScrollDirection;
  individual?: boolean;
  staggered?: boolean;
  disableScrollTrigger?: boolean;
  scrollTrigger?: Partial<ScrollTrigger.Vars>;
} & gsap.TweenVars;

type UseScrollAnimationsProps = {
  animations?: Record<string, ScrollAnimationConfig>;
  scope?: RefObject<Element | null>;
  disabled?: boolean;
  direction?: ScrollDirection;
  dependencies?: DependencyList;
};

export function useScrollAnimations({
  animations = {},
  scope,
  disabled = false,
  direction: globalDirection = "top",
  dependencies = [],
}: UseScrollAnimationsProps) {
  const animationKey = JSON.stringify(animations);
  const isMobile = useBreakpoint();

  useGSAP(
    (context) => {
      if (disabled) {
        context.revert();
        return;
      }

      const directionConfig: Record<
        ScrollDirection,
        Partial<ScrollTrigger.Vars>
      > = {
        top: { start: "top 92%", end: "+=180" },
        center: { start: "center center", end: "+=300" },
        bottom: { start: "top bottom", end: "+=300" },
        left: { start: "left right", end: "+=300", horizontal: true },
        right: { start: "right left", end: "+=300", horizontal: true },
      };

      Object.entries(animations).forEach(([target, config]) => {
        const {
          from,
          to,
          individual = false,
          staggered = false,
          disableScrollTrigger,
          direction,
          scrollTrigger,
          ...vars
        } = config;
        const scopedElements = context.selector
          ? context.selector(target)
          : gsap.utils.toArray<Element>(target, scope?.current ?? undefined);
        const elements = individual
          ? scopedElements
          : [scopedElements[0] ?? target];
        if (staggered && elements.length > 0) {
          if (disableScrollTrigger) {
            if (from && to) gsap.fromTo(elements, from, { ...to, ...vars });
            else gsap.to(elements, { ...to, ...vars });
            return;
          }

          const trigger = {
            ...directionConfig[direction ?? globalDirection],
            ...(scrollTrigger && typeof scrollTrigger === "object"
              ? scrollTrigger
              : {}),
            scrub: isMobile ? false : (scrollTrigger?.scrub ?? 2),
            trigger: scrollTrigger?.trigger ?? elements[0],
          };
          if (from && to) {
            gsap.fromTo(elements, from, { ...to, scrollTrigger: trigger });
          } else {
            gsap.to(elements, { ...to, ...vars, scrollTrigger: trigger });
          }
          return;
        }
        const createTween = (element: Element | string) => {
          if (disableScrollTrigger) {
            if (from && to) gsap.fromTo(element, from, { ...to, ...vars });
            else gsap.to(element, { ...to, ...vars });
            return;
          }

          const trigger = {
            ...directionConfig[direction ?? globalDirection],
            ...(scrollTrigger && typeof scrollTrigger === "object"
              ? scrollTrigger
              : {}),
            scrub: isMobile ? false : (scrollTrigger?.scrub ?? 1.5),
            trigger: scrollTrigger?.trigger ?? element,
          };
          if (from && to)
            gsap.fromTo(element, from, { ...to, scrollTrigger: trigger });
          else gsap.to(element, { ...to, ...vars, scrollTrigger: trigger });
        };
        elements.forEach(createTween);
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    },
    {
      scope,
      dependencies: [
        ...dependencies,
        animationKey,
        disabled,
        globalDirection,
        isMobile,
      ],
      revertOnUpdate: true,
    },
  );
}
