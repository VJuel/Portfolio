import "./globals.css"
import { Roboto } from "next/font/google"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import { Toaster } from "@/components/ui/toaster"
import { getDictionary } from "@/lib/dictionary"

import { i18n } from "@/i18n.config"

export async function generateMetadata({ params, searchParams }) {
  const dict = await getDictionary(params.lang)

  return {
    title: "Portfolio Vicktor Juhel",
    description: dict.description,
  }
}

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  preload: false,
})

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({ children, params }) {
  const { lang } = params
  const dict = await getDictionary(lang)

  return (
    <html lang={params.lang}>
      <body>
        <NavBar lang={params.lang} />
        <main>
          <div className="flex justify-center items-start w-full">
            {children}
          </div>
        </main>
        <Footer dict={dict} />
        <Toaster />
      </body>
    </html>
  )
}
