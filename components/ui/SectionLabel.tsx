import clsx from "clsx";

type SectionLabelProps = {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
};

export function SectionLabel({
  children,
  dark = false,
  className,
}: SectionLabelProps) {
  return (
    <p
      className={clsx(
        "mb-4 font-accent text-[0.5rem] md:text-xs uppercase tracking-[0.18em] md:mb-6",
        {
          "text-secondary-on-dark-text": dark,
          "text-secondary-on-light-text": !dark,
        },
        className,
      )}
    >
      {children}
    </p>
  );
}
