import "./globals.css"
import Head from "next/head"
import { Roboto } from "next/font/google"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { Toaster } from "@/components/ui/toaster"

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  preload: false,
})

export const metadata = {
  title: "Portfolio Vicktor Juhel",
  description:
    "Portfolio Vicktor Juhel, Developpeur Web Full Stack en Freelance et à votre service pour n'importe quel mission plus ou moins longue, n'hésitez pas à me contacter",
  openGraph: {
    title: "Next.js",
    description: "The React Framework for the Web",
    url: "https://https://portfolio-steel-beta-87.vercel.app",
    siteName: "Next.js",
    images: [
      {
        url: "https://https://portfolio-steel-beta-87.vercel.app/og.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://https://portfolio-steel-beta-87.vercel.app/og-alt.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={roboto.className}>
        <NavBar />
        <main>
          <div className="flex justify-center items-start w-full">
            {children}
          </div>
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
