"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type AnimatedNavigationButtonProps = {
  onClick: () => void;
  "aria-label": string;
  children: ReactNode;
  className?: string;
};

export default function AnimatedNavigationButton({
  onClick,
  "aria-label": ariaLabel,
  children,
  className,
}: AnimatedNavigationButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
      aria-label={ariaLabel}
      className={clsx(
        "group flex cursor-pointer items-center justify-center overflow-hidden rounded-full border border-soft-white/10 bg-ink text-primary-on-dark-text focus:outline-none active:scale-95 hover:border-soft-white/30 transition-colors duration-400 ease-in-out",
        "size-10 md:size-12",
        className,
      )}
    >
      {children}
    </motion.button>
  );
}
