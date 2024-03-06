import { getTranslations, unstable_setRequestLocale } from "next-intl/server"
import { robotoSlab } from "@/components/fonts"
import clsx from "clsx"
import { useTranslations } from "next-intl"
import ProjetsCard from "@/components/portfolio/ProjetsCard"

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" })

  return {
    title: t("portfolio.title"),
    description: t("portfolio.description"),
  }
}

export default function Portfolio({ params }) {
  unstable_setRequestLocale(params.locale)
  const portfolio = useTranslations("portfolio")

  return (
    <section id="portfolio" className="w-full h-auto set-page">
      <div className="flex flex-col justify-center items-center">
        <div className="w-full max-w-6xl flex m-auto flex-col justify-center items-center">
          <h1
            className={clsx(robotoSlab.className, "text-3xl font-bold mb-14")}
          >
            {portfolio("title")}
          </h1>
          <div className="w-full max-w-6xl flex m-auto justify-center items-center ">
            <ProjetsCard portfolio={portfolio("title")} />
          </div>
        </div>
      </div>
    </section>
  )
}
