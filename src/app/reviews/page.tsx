import Link from "next/link";
import Header from "@/components/Header";
import { site } from "@/site.config";

export default function ReviewsPage() {
  return (
    <div>
      <Header />

      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fg/60">
              Reviews
            </p>
            <h1 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight">
              {site.testimonials.title}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-fg/70 max-w-2xl">
              Short, specific feedback from clients — focused on clarity, polish, and results.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-soft hover:opacity-95"
              >
                Get started
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-border bg-bg px-5 py-3 text-sm font-semibold text-fg hover:bg-muted"
              >
                View services
              </Link>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-4 md:grid-cols-2">
              {site.testimonials.items.map((t, i) => (
                <figure
                  key={i}
                  className="rounded-3xl border border-border bg-bg shadow-soft p-6 sm:p-8"
                >
                  <blockquote className="text-base sm:text-lg text-fg">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-4 text-sm text-fg/70">
                    <span className="font-semibold text-fg">{t.name}</span>{" "}
                    <span className="text-fg/60">— {t.meta}</span>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-border bg-muted/40 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-fg">
                  Want a site like this?
                </div>
                <div className="mt-1 text-sm text-fg/70">
                  Tell us what you’re building — we’ll reply with next steps.
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-soft hover:opacity-95"
              >
                Contact
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-sm text-fg/60">
          {site.footer.finePrint}
        </div>
      </footer>
    </div>
  );
}
