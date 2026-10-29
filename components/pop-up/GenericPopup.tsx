"use client";

import clsx from "clsx";
import { AnimatePresence, motion, type Transition } from "framer-motion";
import { useScrollLock } from "@/hooks/scroll/useScrollLock";
import { type ReactNode } from "react";
import { createPortal } from "react-dom";

export const smoothTransition: Transition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.5,
};

type GenericPopupProps = {
  layoutId: string;
  onClose: () => void;
  children: ReactNode;
  className?: string;
};

export function GenericPopup({
  layoutId,
  onClose,
  children,
  className,
}: GenericPopupProps) {
  useScrollLock(true);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <motion.button
        type="button"
        aria-label="Cerrar popup"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 cursor-default bg-ink/80 backdrop-blur-sm"
      />
      <motion.article
        layoutId={layoutId}
        transition={smoothTransition}
        className={clsx(
          "relative z-10 overflow-visible border-0 bg-transparent",
          className,
        )}
      >
        {children}
      </motion.article>
    </div>,
    document.body,
  );
}

export function PopupPresence({ children }: { children: ReactNode }) {
  return <AnimatePresence>{children}</AnimatePresence>;
}
