import { getTranslations } from "next-intl/server"
import FormSection from "@/components/form/FormSection"
import {
  FormField,
  FormTextAreaField,
  ButtonSumitContact,
} from "@/components/form/FormFields"
import { InputTest } from "@/components/InputTest"
import { robotoSlab } from "@/components/fonts"
import clsx from "clsx"
import { useTranslations } from "next-intl"
import ProjetsCard from "@/components/ProjetsCard"

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" })

  return {
    title: t("portfolio.title"),
    description: t("portfolio.description"),
  }
}

export default function Portfolio() {
  const portfolio = useTranslations("portfolio")

  return (
    <section id="portfolio" className="w-full h-auto pb-8">
      <div className="py-6">
        <div className="w-full max-w-6xl flex m-auto flex-col p-4 md:p-10 justify-center items-center">
          <h1 className={clsx(robotoSlab.className, "text-3xl font-bold mb-8")}>
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
