import { Pathnames } from "next-intl/navigation"

export const locales = ["fr", "en"] as const

export const pathnames = {
  "/": "/",
  "/portfolio": {
    fr: "/portfolio-et-realisation",
    en: "/portfolio-and-realization",
  },
  "/services": {
    fr: "/offres-et-services",
    en: "/offers-and-services",
  },
  "/contact": {
    fr: "/contacter-developpeur-freelance",
    en: "/contact-developer-freelance",
  },
  "/faq": {
    fr: "/foire-aux-questions",
    en: "/frequently-asked-questions",
  },
  "/blog": {
    fr: "/blog",
    en: "/blog",
  },
} satisfies Pathnames<typeof locales>

// Use the default: `always`
export const localePrefix = undefined

export type AppPathnames = keyof typeof pathnames
