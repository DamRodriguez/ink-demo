"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

type AnimatedCloseButtonProps = {
  onClick: () => void;
  className?: string;
};

export default function AnimatedCloseButton({
  onClick,
  className,
}: AnimatedCloseButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
      className={clsx(
        "group flex cursor-pointer items-center justify-center overflow-hidden rounded-full border border-soft-white/10 hover:border-soft-white/30 transition-colors duration-400 ease-in-out bg-ink focus:outline-none active:scale-95",
        "size-10 md:size-12",
        className,
      )}
      aria-label="Cerrar"
    >
      <motion.span
        initial={{ rotate: 0, scaleX: 0 }}
        animate={{ rotate: 45, scaleX: 1 }}
        exit={{ rotate: 0, scaleX: 0 }}
        transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
        className="absolute h-[2px] w-5 origin-center rounded-full bg-primary-on-dark-text transition-transform duration-400 group-hover:rotate-[135deg] md:w-6"
      />
      <motion.span
        initial={{ rotate: 0, scaleX: 0 }}
        animate={{ rotate: -45, scaleX: 1 }}
        exit={{ rotate: 0, scaleX: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        className="absolute h-[2px] w-5 origin-center rounded-full bg-primary-on-dark-text transition-transform duration-400 group-hover:rotate-[45deg] md:w-6"
      />
    </motion.button>
  );
}
