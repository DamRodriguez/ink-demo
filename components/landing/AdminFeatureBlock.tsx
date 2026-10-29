import { DemoImage } from "@/components/media/DemoImage";
import { MediaOverlay } from "@/components/media/MediaOverlay";
import { GenericDetailPopup } from "@/components/pop-up/generic-detail-popup/GenericDetailPopup";
import { PopupPresence } from "@/components/pop-up/GenericPopup";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import { useState } from "react";

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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const popupId = `${mediaGroup}-gallery`;
  const popupMedia = media.map((item, index) => ({
    ...item,
    id: `${mediaGroup}-${index}`,
  }));

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
        {media.map((item, index) => (
          <div
            key={item.label + index}
            className={`showcase-media showcase-media-${mediaGroup} aspect-[16/9]`}
          >
            <motion.article
              layoutId={`${popupId}-card-${index}`}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
              onClick={() => setSelectedIndex(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelectedIndex(index);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Abrir ${item.label}`}
              className="group/admin-media relative h-full w-full cursor-pointer overflow-hidden"
            >
              <motion.div
                layoutId={`${popupId}-image-${index}`}
                transition={{
                  type: "tween",
                  ease: "easeInOut",
                  duration: 0.5,
                }}
                className="relative h-full w-full overflow-hidden border border-soft-white/10 transition-colors duration-400 ease-in-out group-hover/admin-media:border-soft-white/30"
              >
                <DemoImage
                  src={item.src}
                  alt={item.alt}
                  sizes="(min-width: 768px) 30vw, 90vw"
                />
                <MediaOverlay label={item.label} position="top-left" />
              </motion.div>
              <div className="pointer-events-none absolute inset-0 z-50 hidden items-center justify-center bg-ink/60 opacity-0 transition-opacity duration-400 ease-in-out group-hover/admin-media:opacity-100 md:flex">
                <Expand
                  aria-hidden="true"
                  className="text-soft-white size-8"
                  strokeWidth={1.5}
                />
              </div>
            </motion.article>
          </div>
        ))}
      </div>
      <PopupPresence>
        {selectedIndex !== null && (
          <GenericDetailPopup
            layoutPrefix={popupId}
            id={String(selectedIndex)}
            media={popupMedia}
            initialIndex={selectedIndex}
            title={title}
            onClose={() => setSelectedIndex(null)}
          />
        )}
      </PopupPresence>
    </article>
  );
}
