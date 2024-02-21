import "./globals.css"
import { roboto, robotoSlab, montserrat } from "@/components/fonts"
import Header from "@/src/features/layout/Header"
import Footer from "@/src/features/layout/Footer"
import { Toaster } from "@/components/ui/toaster"
import { unstable_setRequestLocale } from "next-intl/server"
import { getTranslations } from "next-intl/server"
import MyCustomNextIntlClientProvider from "@/src/features/providers/MyCustomNextIntlClientProvider"
import { locales } from "@/config"

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

export default async function RootLayout({ children, params }) {
  unstable_setRequestLocale(params.locale)

  return (
    <html lang={params.local}>
      <MyCustomNextIntlClientProvider locale={params.local}>
        <body
          className={`${roboto.className} ${robotoSlab.className} ${montserrat.className} antialiased no-scroll`}
        >
          <Header lang={params.local}>{children}</Header>
          <main className="flex flex-col justify-center items-start w-full">
            {children}
          </main>
          <Footer />
          <Toaster />
        </body>
      </MyCustomNextIntlClientProvider>
    </html>
  )
}
