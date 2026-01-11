import type { Section } from "@/site.config";

type TestimonialsSectionProps = {
  section: Extract<Section, { type: "testimonials" }>;
};

export default function TestimonialsSection({ section }: TestimonialsSectionProps) {
  const { eyebrow, heading, items } = section;

  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fg/60">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
            {heading}
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {items.map((t, idx) => (
            <blockquote
              key={`${t.name}-${idx}`}
              className="rounded-2xl border border-border bg-bg shadow-soft p-6"
            >
              <p className="text-sm text-fg/80 leading-relaxed">
                “{t.quote}”
              </p>

              <footer className="mt-4">
                <div className="text-sm font-semibold text-fg">
                  {t.name}
                </div>
                {t.meta && (
                  <div className="text-xs text-fg/60">
                    {t.meta}
                  </div>
                )}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
