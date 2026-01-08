import Link from "next/link";
import Header from "@/components/Header";
import { site } from "@/site.config";

export default function ServicesPage() {
  return (
    <div>
      <Header />

      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fg/60">
              Services
            </p>
            <h1 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight">
              {site.services.title}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-fg/70 max-w-2xl">
              A structured build with a defined scope and fast timeline. We customize
              the styling, content, and imagery to match your brand.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-soft hover:opacity-95"
              >
                Get started
              </Link>
              <Link
                href="/process"
                className="rounded-full border border-border bg-bg px-5 py-3 text-sm font-semibold text-fg hover:bg-muted"
              >
                View process
              </Link>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="rounded-3xl border border-border bg-bg shadow-soft overflow-hidden">
              <div className="grid lg:grid-cols-[1.2fr,0.8fr]">
                {/* Included */}
                <div className="p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-border">
                  <h2 className="text-xl font-semibold tracking-tight">
                    What’s included
                  </h2>

                  <div className="mt-6 grid gap-4">
                    {site.services.items.map((it) => (
                      <div
                        key={it.title}
                        className="rounded-2xl border border-border bg-muted/40 p-4"
                      >
                        <div className="text-sm font-semibold">{it.title}</div>
                        <div className="mt-1 text-sm text-fg/70">{it.desc}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-2xl border border-border bg-muted/40 p-4 text-sm text-fg/70">
                    <span className="font-semibold text-fg">Scope:</span> Up to 5 pages
                    within the structured layout system, plus one focused revision round.
                  </div>
                </div>

                {/* Beyond / separately */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-fg/60">
                    Beyond the structured build
                  </h3>

                  <p className="mt-3 text-sm text-fg/70 max-w-prose">
                    If your site needs more than what’s included above, we’ll scope it
                    separately and make sure it’s the right fit.
                  </p>

                  <div className="mt-6">
                    <div className="text-sm font-semibold text-fg">
                      Add-ons (scoped separately)
                    </div>
                    <ul className="mt-3 grid gap-2 text-sm text-fg/70">
                      {site.services.addOns.map((a) => (
                        <li key={a} className="flex gap-2">
                          <span className="mt-0.5 inline-block h-2 w-2 rounded-full bg-accent" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <div className="text-sm font-semibold text-fg">
                      Handled separately
                    </div>
                    <ul className="mt-3 grid gap-2 text-sm text-fg/70">
                      {site.services.handledSeparately.map((a) => (
                        <li key={a} className="flex gap-2">
                          <span className="mt-0.5 inline-block h-2 w-2 rounded-full bg-border" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 rounded-2xl border border-border bg-muted/40 p-4 text-sm text-fg/70">
                    <span className="font-semibold text-fg">Note:</span> Simple embeds
                    and standard tools are included; complex workflows are discussed and
                    quoted separately.
                  </div>

                  <div className="mt-6">
                    <Link
                      href="/contact"
                      className="inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-soft hover:opacity-95"
                    >
                      Start your build
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-10 rounded-3xl border border-border bg-muted/40 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-fg">
                  Ready to launch?
                </div>
                <div className="mt-1 text-sm text-fg/70">
                  Tell us what you’re building and your timeline — we’ll reply with next steps.
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
