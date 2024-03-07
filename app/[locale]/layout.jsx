import "./globals.css"
import { roboto, robotoSlab, montserrat } from "@/components/fonts"
import NavBar from "@/src/features/layout/NavBar"
import Footer from "@/src/features/layout/Footer"
import { Toaster } from "@/components/ui/toaster"
import { getTranslations, unstable_setRequestLocale } from "next-intl/server"
import MyCustomNextIntlClientProvider from "@/src/features/providers/MyCustomNextIntlClientProvider"
import { locales } from "@/config"
import Reseaux from "@/components/Reseaux"
import { Analytics } from "@vercel/analytics/react"

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" })

  return {
    title: t("title"),
    description: t("description"),
  }
}

export default async function RootLayout({ children, params: { locale } }) {
  unstable_setRequestLocale(locale)

  return (
    <html lang={locale} className="w-full">
      <MyCustomNextIntlClientProvider locale={locale}>
        <body
          className={`${roboto.className} ${robotoSlab.className} ${montserrat.className} antialiased no-scroll w-full`}
        >
          <NavBar lang={locale} />
          <main className="flex flex-col justify-center items-start w-full">
            <Reseaux />
            {children}
          </main>
          <Footer />
          <Toaster />
          <Analytics />
        </body>
      </MyCustomNextIntlClientProvider>
    </html>
  )
}
