import { getTranslations, unstable_setRequestLocale } from "next-intl/server"
import Hero from "@/components/Hero"
import About from "@/components/home/About"
import HomePortfolio from "@/components/home/HomePortfolio"
import HomeServices from "@/components/home/HomeServices"
import Freelance from "@/components/home/Freelance"

export async function generateMetadata({ params }) {
  const { locale } = params
  const t = await getTranslations({ locale, namespace: "Metadata" })

  return {
    title: t("title"),
    description: t("description"),
  }
}

export default function Page({ params }) {
  unstable_setRequestLocale(params.locale)

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
