import { AdminShowcase } from "@/components/landing/AdminShowcase";
import { ShowcaseOverview } from "@/components/landing/ShowcaseOverview";

export function Showcase() {
  return (
    <section className="bg-ink text-primary-on-dark-text">
      <div className="site-size horizontal-padding vertical-padding space-y-28 md:space-y-40">
        <ShowcaseOverview />
        <AdminShowcase />
      </div>
    </section>
  );
}
