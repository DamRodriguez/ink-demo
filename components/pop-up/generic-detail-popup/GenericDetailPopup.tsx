"use client";

import { DemoImage } from "@/components/media/DemoImage";
import {
  GenericPopup,
  smoothTransition,
} from "@/components/pop-up/GenericPopup";
import AnimatedCloseButton from "@/components/ui/buttons/AnimatedCloseButton";
import AnimatedNavigationButton from "@/components/ui/buttons/AnimatedNavigationButton";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useRef, useState } from "react";

const WIPE_DURATION = 0.7;
const WIPE_EASE = [0.76, 0, 0.24, 1] as const;

export type DetailPopupMedia = {
  id: string;
  src: string;
  alt: string;
  label: string;
};

type GenericDetailPopupProps = {
  layoutPrefix: string;
  id: string;
  media: readonly DetailPopupMedia[];
  initialIndex: number;
  title: string;
  onClose: () => void;
};

export function GenericDetailPopup({
  layoutPrefix,
  id,
  media,
  initialIndex,
  title,
  onClose,
}: GenericDetailPopupProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);
  const isAnimatingRef = useRef(false);
  const currentMedia = media[currentIndex];
  const hasMultiple = media.length > 1;

  const goTo = useCallback(
    (nextIndex: number, nextDirection: 1 | -1) => {
      if (
        !hasMultiple ||
        isAnimatingRef.current ||
        nextIndex === currentIndex
      ) {
        return;
      }

      isAnimatingRef.current = true;
      setDirection(nextDirection);
      setPreviousIndex(currentIndex);
      setCurrentIndex(nextIndex);
    },
    [currentIndex, hasMultiple],
  );

  const goNext = () => {
    goTo((currentIndex + 1) % media.length, 1);
  };

  const goPrevious = () => {
    goTo((currentIndex - 1 + media.length) % media.length, -1);
  };

  const handleAnimationComplete = () => {
    isAnimatingRef.current = false;
    setPreviousIndex(null);
  };

  const gallery = media;

  return (
    <GenericPopup
      layoutId={`${layoutPrefix}-card-${id}`}
      onClose={onClose}
      className="w-[min(90vw,64rem)]"
    >
      <div className="mb-3 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <div className="min-w-0">
          <p className="font-accent text-xs uppercase tracking-[0.14em] text-secondary-on-dark-text md:text-sm">
            {currentIndex + 1} / {gallery.length}
          </p>
          <h2 className="mt-1 truncate font-display text-xl text-primary-on-dark-text md:text-3xl">
            {title}
          </h2>
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={currentMedia.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="mt-1 min-w-0 truncate font-accent text-[0.6rem] uppercase tracking-[0.14em] text-primary-on-dark-text/80 md:text-sm"
            >
              {currentMedia.label}
            </motion.p>
          </AnimatePresence>
        </div>
        <AnimatedCloseButton onClick={onClose} className="shrink-0 self-end" />
      </div>

      <motion.div
        layoutId={`${layoutPrefix}-image-${id}`}
        transition={smoothTransition}
        className="relative z-50 aspect-[16/9] w-full overflow-hidden border border-soft-white/10"
      >
        {previousIndex !== null && (
          <div className="absolute inset-0 z-10" aria-hidden="true">
            <DemoImage
              src={gallery[previousIndex].src}
              alt=""
              sizes="(min-width: 768px) 55vw, 90vw"
            />
          </div>
        )}
        <motion.div
          key={currentIndex}
          initial={{
            clipPath:
              previousIndex === null
                ? "inset(0% 0 0 0)"
                : direction > 0
                  ? "inset(0 0 0 100%)"
                  : "inset(0 100% 0 0)",
          }}
          animate={{ clipPath: "inset(0% 0 0 0)" }}
          onAnimationComplete={handleAnimationComplete}
          transition={{ duration: WIPE_DURATION, ease: WIPE_EASE }}
          className="absolute inset-0 z-20"
        >
          <DemoImage
            src={currentMedia.src}
            alt={currentMedia.alt}
            sizes="(min-width: 768px) 55vw, 90vw"
          />
        </motion.div>
      </motion.div>
      {hasMultiple && (
        <div className="relative mt-3 flex items-center justify-between">
          <AnimatedNavigationButton
            onClick={goPrevious}
            aria-label="Imagen anterior"
          >
            <ChevronLeft aria-hidden="true" className="size-7" />
          </AnimatedNavigationButton>
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-2">
            {gallery.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(index, index > currentIndex ? 1 : -1)}
                aria-label={`Ver imagen ${index + 1} de ${gallery.length}`}
                aria-current={currentIndex === index}
                className={clsx(
                  "size-1.5 md:size-2 cursor-pointer rounded-full border border-soft-white/30 transition-[background-color,transform]",
                  currentIndex === index
                    ? "scale-100 bg-soft-white"
                    : "scale-90 bg-soft-white/40 hover:bg-soft-white/70",
                )}
              />
            ))}
          </div>
          <AnimatedNavigationButton
            onClick={goNext}
            aria-label="Imagen siguiente"
          >
            <ChevronRight aria-hidden="true" className="size-7" />
          </AnimatedNavigationButton>
        </div>
      )}
    </GenericPopup>
  );
}
