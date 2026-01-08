import Header from "@/components/Header";
import Link from "next/link";
import { site } from "@/site.config";

export default function ContactPage() {
  return (
    <div>
      <Header />

      <main>
        {/* Header */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fg/60">
              Contact
            </p>
            <h1 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight">
              {site.contact.title}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-fg/70 max-w-2xl">
              {site.contact.blurb}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="rounded-3xl border border-border bg-bg shadow-soft overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Left: Guidance */}
                <div className="p-6 sm:p-8 border-b md:border-b-0 md:border-r border-border">
                  <h2 className="text-xl font-semibold tracking-tight">
                    What to include
                  </h2>
                  <p className="mt-3 text-sm text-fg/70 max-w-prose">
                    To keep things efficient, please include the following in your message:
                  </p>

                  <ul className="mt-6 grid gap-3 text-sm text-fg/70">
                    <li className="flex gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent" />
                      <span>Your business name and services</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent" />
                      <span>Your preferred launch timeline</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent" />
                      <span>Any existing brand or website links (if applicable)</span>
                    </li>
                  </ul>

                  <div className="mt-8 rounded-2xl border border-border bg-muted/40 p-4 text-sm text-fg/70">
                    <span className="font-semibold text-fg">Note:</span> This is a structured
                    build with a defined scope and timeline. If your project requires something
                    more custom, we’ll discuss next steps before moving forward.
                  </div>
                </div>

                {/* Right: Contact method */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-fg/60">
                    Get in touch
                  </h3>

                  <div className="mt-6 grid gap-4 text-sm">
                    <div>
                      <div className="font-semibold text-fg">Email</div>
                      <a
                        href={`mailto:${site.contact.email}`}
                        className="mt-1 inline-block text-primary hover:underline"
                      >
                        {site.contact.email}
                      </a>
                    </div>

                    <div>
                      <div className="font-semibold text-fg">Location</div>
                      <div className="mt-1 text-fg/70">{site.contact.city}</div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="inline-flex justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-soft hover:opacity-95"
                    >
                      Send an email
                    </a>
                  </div>
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
