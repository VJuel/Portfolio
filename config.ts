import { Pathnames } from "next-intl/navigation"

export const locales = ["fr", "en"] as const

export const pathnames = {
  "/": "/",
  "/portfolio": {
    fr: "/portfolio",
    en: "/portfolio",
  },
  "/services": {
    fr: "/services",
    en: "/services",
  },
  "/contact": {
    fr: "/contact",
    en: "/contact",
  },
  "/blog": {
    fr: "/blog",
    en: "/blog",
  },
} satisfies Pathnames<typeof locales>

// Use the default: `always`
export const localePrefix = undefined

export type AppPathnames = keyof typeof pathnames
