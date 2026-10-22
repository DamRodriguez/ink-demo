import { MediaFrame } from "@/components/media/MediaFrame";

type AdminFeatureMedia = {
  src: string;
  alt: string;
  label: string;
};

type AdminFeatureBlockProps = {
  number: string;
  title: string;
  description: string;
  media: readonly AdminFeatureMedia[];
};

export function AdminFeatureBlock({
  number,
  title,
  description,
  media,
}: AdminFeatureBlockProps) {
  return (
    <article className="showcase-item pt-8 opacity-0">
      <div className="grid gap-6 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
        <div>
          <span className="font-accent text-xs text-secondary-on-dark-text">
            {number}
          </span>
          <h3 className="mt-4 font-display text-4xl leading-[0.85] md:text-5xl">
            {title}
          </h3>
        </div>
        <p className="max-w-xl text-base leading-relaxed text-secondary-on-dark-text md:text-lg">
          {description}
        </p>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {media.map((item) => (
          <div
            key={item.label}
            className="showcase-media aspect-[4/3] opacity-0"
          >
            <MediaFrame
              src={item.src}
              alt={item.alt}
              label={item.label}
              className="h-full w-full"
              sizes="(min-width: 768px) 30vw, 90vw"
            />
          </div>
        ))}
      </div>
    </article>
  );
}
