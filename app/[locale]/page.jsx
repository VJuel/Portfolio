import { getTranslations, unstable_setRequestLocale } from "next-intl/server"
import Hero from "@/components/home/Hero"
import About from "@/components/home/About"
import HomePortfolio from "@/components/home/HomePortfolio"
import HomeServices from "@/components/home/HomeServices"
import Freelance from "@/components/home/Freelance"

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" })

  return {
    title: t("title"),
    description: t("description"),
  }
}

export default function Page({ params: { locale } }) {
  unstable_setRequestLocale(locale)

  return (
    <>
      <Hero />
      <HomeServices />
      <HomePortfolio />
      <Freelance />
      <About />
    </>
  )
}
