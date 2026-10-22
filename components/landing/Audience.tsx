import { SectionLabel } from "@/components/ui/SectionLabel";

export function Audience() {
  return (
    <section className="bg-paper-deep text-primary-on-light-text">
      <div className="site-size horizontal-padding vertical-padding grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionLabel>Hecho para crecer contigo</SectionLabel>
          <h2 className="mt-10 second-title text-primary-on-muted-text">Tu tamano no define tu alcance</h2>
        </div>
        <div className="grid gap-px bg-primary-on-light-text/20 sm:grid-cols-3">
          {[
            ["01", "Independientes", "Una presencia propia para mostrar tu trabajo."],
            ["02", "Estudios", "Una web clara para recibir mejores consultas."],
            ["03", "Equipos", "Una identidad compartida que ordena el contenido."],
          ].map(([number, title, description]) => (
            <article key={number} className="bg-paper-deep p-6 text-primary-on-muted-text md:p-8">
              <span className="font-accent text-xs text-secondary-on-muted-text">{number}</span>
              <h3 className="mt-16 font-display text-2xl uppercase">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-secondary-on-muted-text">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
