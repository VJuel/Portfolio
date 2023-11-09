import "./globals.css"
import Head from "next/head"
import { Roboto } from "next/font/google"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { Toaster } from "@/components/ui/Toaster"

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  preload: false,
})

export const metadata = {
  title: "Portfolio Vicktor Juhel",
  description:
    "Portfolio Vicktor Juhel, Developpeur Web Full Stack en Freelance et à votre service pour n'importe quel mission plus ou moins longue, n'hésitez pas à me contacter",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
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
