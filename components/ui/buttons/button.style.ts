import { tv, type VariantProps } from "tailwind-variants";

export const buttonClass = tv({
  base: [
    "group relative inline-flex items-center justify-center gap-3 hover:opacity-85 transition-[opacity, transform] duration-400 active:scale-98",
    "font-accent text-xs md:text-sm font-semibold uppercase tracking-[0.12em]",
  ],

  variants: {
    variant: {
      light: "bg-soft-white text-ink",
      dark: "bg-ink text-primary-on-dark-text",
      outline:
        "border border-primary-on-dark-text/40 text-primary-on-dark-text hover:bg-primary-on-dark-text hover:text-ink",
    },

    disabled: {
      false: null,
      true: "pointer-events-none cursor-not-allowed opacity-60",
    },

    full: {
      false: "w-fit",
      true: "w-full",
    },

    small: {
      false: "px-5 py-3",
      true: "px-4 py-2.5",
    },
  },

  defaultVariants: {
    variant: "light",
    disabled: false,
    full: false,
    small: false,
  },
});

export type ButtonVariant = NonNullable<
  VariantProps<typeof buttonClass>["variant"]
>;

export function buttonTextColors(variant: ButtonVariant = "light") {
  return {
    main: variant === "light" ? "text-ink" : "text-primary-on-dark-text",
    hover: "normal-case",
  };
}
