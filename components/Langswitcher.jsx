"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "react-responsive"

import { i18n } from "@/i18n.config"

export default function LangSwitcher({ lang }) {
  const isTablette = useMediaQuery({
    query: "(min-width: 1024px)",
  })
  const pathName = usePathname()

  const redirectedPathName = (locale) => {
    if (!pathName) return "/"
    const segments = pathName.split("/")
    segments[1] = locale
    return segments.join("/")
  }

  return (
    <ul className="flex gap-x-3 md:ml-0 md:mr-4 lg:ml-4">
      {i18n.locales.map((locale) => {
        const local = locale.toUpperCase()

        if (locale === lang) return null
        return (
          <Button
            key={locale}
            variant={isTablette ? "ghost" : "outline"}
            className="shadow-sm bg-white"
          >
            <Link
              href={redirectedPathName(locale)}
              className="font-bold text-sm uppercase block lg:bg-white text-black"
              locale={locale}
              legacyBehavior
            >
              {local}
            </Link>
          </Button>
        )
      })}
    </ul>
  )
}
