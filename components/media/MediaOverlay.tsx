import clsx from "clsx";

type MediaOverlayProps = {
  label: string;
  position?: "top-left" | "top-right" | "bottom-left";
  hidden?: boolean;
};

export function MediaOverlay({
  label,
  position = "top-left",
  hidden = false,
}: MediaOverlayProps) {
  const isBottom = position === "bottom-left";

  return (
    <>
      <div
        className={clsx(
          "pointer-events-none absolute inset-x-0 z-10 from-ink/80 to-transparent transition-opacity duration-300",
          {
            "-top-10 h-2/3 bg-gradient-to-b": !isBottom,
            "-bottom-2 h-1/2 bg-gradient-to-t": isBottom,
            "opacity-0 group-hover:opacity-100": hidden,
          },
        )}
      />
      <span
        className={clsx(
          "pointer-events-none absolute z-10 font-accent text-[0.5rem] md:text-xs uppercase tracking-[0.14em] text-soft-white/85 transition-opacity duration-300 p-2 md:p-4",
          {
            "left-0 top-0": position === "top-left",
            "right-0 top-0": position === "top-right",
            "bottom-0 left-0": isBottom,
            "opacity-0 group-hover:opacity-100": hidden,
          },
        )}
      >
        {label}
      </span>
    </>
  );
}
