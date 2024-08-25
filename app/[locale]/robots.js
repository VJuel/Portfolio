export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://vicktor-juhel.fr/sitemap.xml",
  }
}
