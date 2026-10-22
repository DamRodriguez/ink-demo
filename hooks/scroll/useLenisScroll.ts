"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type Lenis from "lenis";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export function useLenisScroll() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      return;
    }

    let lenis: Lenis | null = null;
    let isCancelled = false;

    const init = async () => {
      const { default: Lenis } = await import("lenis");

      if (isCancelled) {
        return;
      }

      lenis = new Lenis({
        duration: 1.3,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        smoothWheel: true,
        syncTouch: false,
      });
      lenis.scrollTo(0, { immediate: true });

      lenis.on("scroll", ScrollTrigger.update);

      const update = (time: number) => {
        lenis?.raf(time * 1000);
      };

      gsap.ticker.add(update);
      gsap.ticker.lagSmoothing(0);

      return () => {
        gsap.ticker.remove(update);
      };
    };

    let removeTicker: (() => void) | undefined;
    void init().then((cleanup) => {
      removeTicker = cleanup;
    });

    return () => {
      isCancelled = true;
      removeTicker?.();
      lenis?.destroy();
    };
  }, [isDesktop]);
}
