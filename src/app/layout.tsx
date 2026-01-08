import "./globals.css";
import { Inter } from "next/font/google";
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
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
