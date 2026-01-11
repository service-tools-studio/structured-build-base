export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://structured-build-base.vercel.app/sitemap.xml",
  };
}
