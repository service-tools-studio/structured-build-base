import Link from "next/link";
import Header from "@/components/Header";
import { site } from "@/site.config";

export default function FaqPage() {
  return (
    <div>
      <Header />

      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fg/60">
              FAQ
            </p>
            <h1 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight">
              {site.faq.title}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-fg/70 max-w-2xl">
              Quick answers about scope, timeline, and how the structured build works.
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
            <div className="rounded-3xl border border-border bg-bg shadow-soft overflow-hidden">
              <div className="p-6 sm:p-8 border-b border-border">
                <h2 className="text-xl font-semibold tracking-tight">
                  Questions
                </h2>
                <p className="mt-2 text-sm text-fg/70 max-w-prose">
                  If you have a question that isn’t answered here, send a note and we’ll reply.
                </p>
              </div>

              <div className="p-6 sm:p-8 grid gap-4">
                {site.faq.items.map((it) => (
                  <details
                    key={it.q}
                    className="group rounded-2xl border border-border bg-muted/40 p-5"
                  >
                    <summary className="cursor-pointer list-none select-none">
                      <div className="flex items-start justify-between gap-4">
                        <div className="text-sm font-semibold text-fg">
                          {it.q}
                        </div>
                        <div className="mt-0.5 text-fg/60 group-open:rotate-45 transition-transform">
                          +
                        </div>
                      </div>
                    </summary>
                    <div className="mt-3 text-sm text-fg/70 max-w-prose">
                      {it.a}
                    </div>
                  </details>
                ))}
              </div>

              <div className="p-6 sm:p-8 border-t border-border bg-bg">
                <div className="rounded-2xl border border-border bg-muted/40 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-fg">
                      Ready to launch?
                    </div>
                    <div className="mt-1 text-sm text-fg/70">
                      Share your business and timeline — we’ll reply with next steps.
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
