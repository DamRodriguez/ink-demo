import { MediaFrame } from "@/components/media/MediaFrame";

type AdminFeatureMedia = {
  src: string;
  alt: string;
  label: string;
};

type AdminFeatureBlockProps = {
  mediaGroup: string;
  title: string;
  description: string;
  media: readonly AdminFeatureMedia[];
};

export function AdminFeatureBlock({
  mediaGroup,
  title,
  description,
  media,
}: AdminFeatureBlockProps) {
  return (
    <article className="showcase-item pt-8">
      <div className="grid gap-y-6 gap-x-20 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
        <div>
          <h3 className="font-display text-4xl leading-[0.85] md:text-5xl">
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
            className={`showcase-media showcase-media-${mediaGroup} aspect-[4/3]`}
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
