import Hero from "@/components/Hero"
import Work from "@/components/Work"
import About from "@/components/About"
import Reseaux from "@/components/Reseaux"
import { useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"
import { unstable_setRequestLocale } from "next-intl/server"
import HomePortfolio from "@/components/home/HomePortfolio"
import HomeServices from "@/components/home/HomeServices"

export async function generateMetadata({ params }) {
  const { locale } = params
  const t = await getTranslations({ locale, namespace: "Metadata" })

  return {
    title: t("title"),
    description: t("description"),
  }
}
export default function Page({ params }) {
  unstable_setRequestLocale(params.local)
  const { local } = params

  return (
    <>
      {/* <Reseaux /> */}
      {/* <div className="flex flex-col justify-center items-center"> */}
      <Hero />
      <HomeServices />
      <HomePortfolio />
      <About />
      {/* </div> */}
    </>
  )
}
