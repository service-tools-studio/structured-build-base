import { site } from "@/site.config";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-sm text-fg/60">
        {site.footer.finePrint}
      </div>
    </footer>
  );
}