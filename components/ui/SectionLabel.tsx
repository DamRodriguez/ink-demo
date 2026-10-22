type SectionLabelProps = {
  children: React.ReactNode;
  dark?: boolean;
};

export function SectionLabel({ children, dark = false }: SectionLabelProps) {
  return (
    <p
      className={`font-accent text-[0.65rem] uppercase tracking-[0.18em] ${
        dark ? "text-secondary-on-dark-text" : "text-secondary-on-light-text"
      }`}
    >
      {children}
    </p>
  );
}
