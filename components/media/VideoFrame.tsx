"use client";

import { DemoImage } from "@/components/media/DemoImage";
import { Video, VideoPlayer, VideoSkin } from "@videojs/react/video";
import { useEffect, useRef, useState, type CSSProperties } from "react";

type VideoFrameProps = {
  src: string;
  fallbackSrc: string;
  alt: string;
  label: string;
  className?: string;
  sizes?: string;
};

const VIDEO_SKIN_STYLE = {
  "--media-accent-color": "var(--color-soft-white)",
  "--media-accent-text-color": "var(--color-ink)",
  "--media-border-color": "transparent",
  "--media-border-radius": "0px",
  "--media-font-family": "var(--font-jetbrains-mono)",
  "--media-object-fit": "cover",
  "--media-scale-unit": "0.85rem",
} as CSSProperties;

export function VideoFrame({
  src,
  fallbackSrc,
  alt,
  label,
  className = "",
  sizes = "(min-width: 768px) 90vw, 100vw",
}: VideoFrameProps) {
  const frameRef = useRef<HTMLElement>(null);
  const [isNearViewport, setIsNearViewport] = useState(false);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame || !src) return;

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsNearViewport(true);
        observer.disconnect();
      },
      { rootMargin: "240px 0px" },
    );

    observer.observe(frame);
    return () => observer.disconnect();
  }, [src]);

  return (
    <figure
      ref={frameRef}
      className={`video-frame group relative cursor-pointer overflow-hidden bg-muted-ink/20 ${className}`}
    >
      {src && isNearViewport ? (
        <VideoPlayer>
          <VideoSkin style={VIDEO_SKIN_STYLE}>
            <Video src={src} preload="metadata" playsInline aria-label={alt} />
          </VideoSkin>
        </VideoPlayer>
      ) : (
        <DemoImage src={fallbackSrc} alt={alt} sizes={sizes} />
      )}
      <div className="pointer-events-none absolute inset-x-0 -top-10 z-10 h-2/3 bg-gradient-to-b from-ink/95 via-ink/40 to-transparent" />
      <figcaption className="pointer-events-none absolute left-2 top-2 z-10 px-2 py-1 font-accent text-[0.65rem] uppercase tracking-[0.14em] text-primary-on-dark-text md:left-4 md:top-4 md:px-1 md:py-1">
        {label}
      </figcaption>
    </figure>
  );
}
