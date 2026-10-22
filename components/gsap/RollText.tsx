"use client";

import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { useEffect, useRef } from "react";

type RollTextProps = {
  text: string;
  isActive?: boolean;
  className?: string;
  mainClassName?: string;
  hoverClassName?: string;
  duration?: number;
  stagger?: number;
};

export function RollText({
  text,
  isActive = false,
  className,
  mainClassName = "",
  hoverClassName = "",
  duration = 0.5,
  stagger = 0.02,
}: RollTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const isActiveRef = useRef(isActive);

  useEffect(() => {
    isActiveRef.current = isActive;
    if (isActive) timelineRef.current?.play();
    else timelineRef.current?.reverse();
  }, [isActive]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const selector = gsap.utils.selector(containerRef);
      gsap.set(selector(".letter-hover"), { yPercent: 120, rotationZ: 5 });

      timelineRef.current = gsap
        .timeline({ paused: true })
        .to(
          selector(".letter-main"),
          {
            yPercent: -120,
            rotationZ: -5,
            duration,
            ease: "power4.inOut",
            stagger,
          },
          0,
        )
        .to(
          selector(".letter-hover"),
          {
            yPercent: 0,
            rotationZ: 0,
            duration,
            ease: "power4.inOut",
            stagger,
          },
          0,
        );

      if (isActiveRef.current) timelineRef.current.progress(1);

      const target = containerRef.current.closest(".group") ?? containerRef.current;
      const handleMouseEnter = () => {
        if (!isActiveRef.current) timelineRef.current?.play();
      };
      const handleMouseLeave = () => {
        if (!isActiveRef.current) timelineRef.current?.reverse();
      };

      target.addEventListener("mouseenter", handleMouseEnter);
      target.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        target.removeEventListener("mouseenter", handleMouseEnter);
        target.removeEventListener("mouseleave", handleMouseLeave);
        timelineRef.current?.kill();
        timelineRef.current = null;
      };
    },
    { scope: containerRef, dependencies: [text, duration, stagger] },
  );

  const renderLetters = (letterClass: string) =>
    text.split("").map((character, index) => (
      <span
        key={`${character}-${index}`}
        className={clsx(letterClass, "inline-block origin-bottom")}
        style={{ whiteSpace: character === " " ? "pre" : "normal" }}
      >
        {character}
      </span>
    ));

  return (
    <span
      ref={containerRef}
      className={clsx(
        "relative inline-flex items-center overflow-y-clip leading-none",
        className,
      )}
    >
      <span
        className={clsx(
          "flex items-center py-[0.08em] leading-[1.1]",
          mainClassName,
        )}
      >
        {renderLetters("letter-main")}
      </span>
      <span
        className={clsx(
          "absolute inset-0 flex items-center py-[0.08em] leading-[1.1] pointer-events-none",
          hoverClassName,
        )}
      >
        {renderLetters("letter-hover")}
      </span>
    </span>
  );
}

export default RollText;
