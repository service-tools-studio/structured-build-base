import "./globals.css";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; // optional
import { site } from "@/site.config";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const c = site.theme.colors;

  return (
    <html
      lang="en"
      className={`${inter.className} bg-bg text-fg`}
      style={{
        ["--bg" as any]: c.bg,
        ["--fg" as any]: c.fg,
        ["--muted" as any]: c.muted,
        ["--border" as any]: c.border,
        ["--primary" as any]: c.primary,
        ["--accent" as any]: c.accent,
      }}
    >
      <body className="min-h-screen">
        <Header nav={site.pages.map((p) => ({ label: p.navLabel, href: `/${p.slug}` }))} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
