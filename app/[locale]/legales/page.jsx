import { montserrat, robotoSlab } from "@/components/fonts"
import clsx from "clsx"
import { useTranslations } from "next-intl"
import { getTranslations, unstable_setRequestLocale } from "next-intl/server"

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" })

  return {
    title: t("legales.title"),
    description: t("legales.description"),
  }
}

export default function Legales({ params: { locale } }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations("legales")
  const general = useTranslations("legales.general")
  const publication = useTranslations("legales.publication")
  const hebergement = useTranslations("legales.hebergement")

  return (
    <section className="set-page max-w-3xl m-auto w-full">
      <h1 className={clsx(robotoSlab.className, "text-3xl text-center")}>
        {t("title")}
      </h1>
      <article className="felx flex-col justify-center items items-center my-14">
        <h2 className={clsx(montserrat.className, "text-lg mb-2")}>
          {general("title")}
        </h2>
        <p className={clsx(montserrat.className, "text-md")}>
          {general("description")}
        </p>
        <p className={clsx(montserrat.className, "text-md")}>
          {general("forme")}
        </p>
        <p className={clsx(montserrat.className, "text-md")}>
          {general("RCS")}
        </p>
        <p className={clsx(montserrat.className, "text-md")}>
          {general("adresse")}
        </p>
        <p className={clsx(montserrat.className, "text-md")}>
          {general("telephone")}
        </p>
        <p className={clsx(montserrat.className, "text-md")}>
          {general("email")}
        </p>
      </article>

      <article className="felx flex-col justify-center items items-center my-14">
        <h2 className={clsx(montserrat.className, "text-lg mb-2")}>
          {publication("title")}
        </h2>
        <p className={clsx(montserrat.className, "text-md")}>
          {publication("description")}
        </p>
        <p className={clsx(montserrat.className, "text-md")}>
          {publication("tva")}
        </p>
      </article>

      <article className="felx flex-col justify-center items items-center my-14">
        <h2 className={clsx(montserrat.className, "text-lg mb-2 semibold")}>
          {hebergement("title")}
        </h2>
        <p className={clsx(montserrat.className, "text-md")}>
          {hebergement("description")}
        </p>
        <p className={clsx(montserrat.className, "text-md")}>
          {hebergement("adresse")}
        </p>
        <p className={clsx(montserrat.className, "text-md")}>
          {hebergement("ville")}
        </p>
        <p className={clsx(montserrat.className, "text-md")}>
          {hebergement("website")}
        </p>
        <p className={clsx(montserrat.className, "text-md")}>
          {hebergement("email")}
        </p>
      </article>
    </section>
  )
}
