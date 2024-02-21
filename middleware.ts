import createMiddleware from "next-intl/middleware"
import { locales, localePrefix } from "./config"

export default createMiddleware({
  // A list of all locales that are supported

  // Used when no locale matches
  defaultLocale: "fr",
  localePrefix,
  locales,
})

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(fr|en)/:path*"],
}
