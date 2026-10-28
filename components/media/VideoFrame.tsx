"use client";

import { DemoImage } from "@/components/media/DemoImage";
import { MediaOverlay } from "@/components/media/MediaOverlay";
import { Video, VideoPlayer, VideoSkin } from "@videojs/react/video";
import clsx from "clsx";
import { Play } from "lucide-react";
import { useState, type CSSProperties } from "react";

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
  const [isVideoMounted, setIsVideoMounted] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <figure
      className={`video-frame group relative isolate h-full min-h-0 w-full cursor-pointer overflow-hidden border border-soft-white/5 bg-muted-ink/20 ${className}`}
    >
      <DemoImage src={fallbackSrc} alt={alt} sizes={sizes} />
      {src && isVideoMounted && (
        <div
          className={clsx(
            "absolute inset-0 z-[1] transition-opacity duration-500 ease-out",
            {
              "opacity-0": !isVideoVisible,
              "opacity-100": isVideoVisible,
            },
          )}
        >
          <VideoPlayer>
            <VideoSkin style={VIDEO_SKIN_STYLE}>
              <Video
                src={src}
                poster={fallbackSrc || undefined}
                preload="none"
                muted
                playsInline
                autoPlay
                onCanPlay={() => setIsVideoVisible(true)}
                onPause={() => setIsVideoPlaying(false)}
                onPlay={() => setIsVideoPlaying(true)}
                aria-label={alt}
                className="h-full w-full object-cover"
              />
            </VideoSkin>
          </VideoPlayer>
        </div>
      )}
      {src && !isVideoMounted && (
        <button
          type="button"
          aria-label={`Reproducir ${label}`}
          className="absolute inset-0 z-[2] flex cursor-pointer items-center justify-center"
          onClick={() => setIsVideoMounted(true)}
        >
          <span className="flex size-14 items-center justify-center rounded-full bg-[#fff] text-ink transition-transform duration-300 group-hover:scale-105 border border-muted-ink/20 drop-shadow-md">
            <Play
              aria-hidden="true"
              className="ml-1 size-5 fill-current stroke-0"
            />
          </span>
        </button>
      )}
      <MediaOverlay label={label} hidden={isVideoMounted && isVideoPlaying} />
    </figure>
  );
}
