import { DemoImage } from "@/components/media/DemoImage";
import { MediaOverlay } from "@/components/media/MediaOverlay";

type MediaFrameProps = {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  sizes?: string;
};

export function MediaFrame({
  src,
  alt,
  label,
  className = "",
  sizes,
}: MediaFrameProps) {
  return (
    <figure
      className={`relative overflow-hidden border border-soft-white/5 bg-muted-ink/20 ${className}`}
    >
      <DemoImage src={src} alt={alt} sizes={sizes} />
      {label && (
        <MediaOverlay label={label} position="bottom-left" />
      )}
    </figure>
  );
}
