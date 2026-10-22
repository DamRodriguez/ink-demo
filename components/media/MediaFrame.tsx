import { DemoImage } from "@/components/media/DemoImage";

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
    <figure className={`relative overflow-hidden bg-muted-ink/20 ${className}`}>
      <DemoImage src={src} alt={alt} sizes={sizes} />
      {label && (
        <>
          <div className="pointer-events-none absolute inset-x-0 -bottom-2 h-1/2 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          <figcaption className="pointer-events-none absolute bottom-2 left-2 px-2 py-1 font-accent text-[0.65rem] uppercase tracking-[0.14em] text-primary-on-dark-text md:bottom-4 md:left-4 md:px-1 md:py-1">
            {label}
          </figcaption>
        </>
      )}
    </figure>
  );
}
