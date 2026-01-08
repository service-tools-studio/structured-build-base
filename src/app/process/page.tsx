import Link from "next/link";
import Header from "@/components/Header";
import { site } from "@/site.config";

export default function ProcessPage() {
  return (
    <div>
      <Header />

      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fg/60">
              Process
            </p>
            <h1 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight">
              {site.process.title}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-fg/70 max-w-2xl">
              A defined scope, clear checkpoints, and a fast timeline — so you get a
              polished site without the drag of endless revisions.
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
                  Steps
                </h2>
                <p className="mt-2 text-sm text-fg/70 max-w-prose">
                  Each step has a clear deliverable and keeps momentum high.
                </p>
              </div>

              <div className="p-6 sm:p-8">
                <div className="grid gap-4 md:grid-cols-2">
                  {site.process.steps.map((s, idx) => (
                    <div
                      key={s.title}
                      className="rounded-2xl border border-border bg-muted/40 p-5"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-xl bg-bg border border-border flex items-center justify-center text-sm font-semibold">
                          {idx + 1}
                        </div>
                        <div className="text-sm font-semibold">{s.title}</div>
                      </div>
                      <div className="mt-3 text-sm text-fg/70">{s.desc}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-border bg-muted/40 p-4 text-sm text-fg/70">
                  <span className="font-semibold text-fg">Timeline:</span> Typical launch
                  is 7–14 days depending on content readiness and responsiveness during review.
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
