import { montserrat, robotoSlab } from "@/components/fonts"
import clsx from "clsx"
import { useTranslations } from "next-intl"
import { getTranslations, unstable_setRequestLocale } from "next-intl/server"

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" })

  return {
    title: t("politique.title"),
    description: t("politique.description"),
  }
}

export default function Politique({ params: { locale } }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations("politique")
  const collecte = useTranslations("politique.collecte")
  const utilisation = useTranslations("politique.utilisation")
  const securite = useTranslations("politique.securite")
  const modifications = useTranslations("politique.modifications")
  const contactez = useTranslations("politique.contactez")

  return (
    <section className="set-page max-w-3xl m-auto w-full">
      <h1 className={clsx(robotoSlab.className, "text-3xl text-center")}>
        {t("title")}
      </h1>

      <article className="felx flex-col justify-center items-start mt-14 mb-6">
        <h3 className={clsx(montserrat.className, "text-sm mb-2 semibold")}>
          {t("date")}
        </h3>
        <p className={clsx(montserrat.className, "text-md")}>
          {t("description")}
        </p>
      </article>

      <h2 className={clsx(montserrat.className, "text-xl mb-2 semibold")}>
        {t("sub-title")}
      </h2>

      <article className="felx flex-col justify-center items-start my-4">
        <h3 className={clsx(montserrat.className, "text-md mb-2 semibold")}>
          {collecte("donnees.title")}
        </h3>
        <p className={clsx(montserrat.className, "text-md")}>
          {collecte("donnees.description")}
        </p>
      </article>

      <article className="felx flex-col justify-center items-start my-4">
        <h3 className={clsx(montserrat.className, "text-md mb-2 semibold")}>
          {collecte("personnelles.title")}
        </h3>
        <p className={clsx(montserrat.className, "text-md")}>
          {collecte("personnelles.description")}
        </p>
      </article>

      <article className="felx flex-col justify-center items-start my-4">
        <h3 className={clsx(montserrat.className, "text-md mb-2 semibold")}>
          {collecte("localisation.title")}
        </h3>
        <p className={clsx(montserrat.className, "text-md")}>
          {collecte("localisation.description")}
        </p>
        <br />
        <p className={clsx(montserrat.className, "text-md")}>
          {collecte("localisation.cookies")}
        </p>
        <p className={clsx(montserrat.className, "text-md")}>
          {collecte("localisation.localisation")}
        </p>
      </article>

      <article className="felx flex-col justify-center items-start my-4">
        <h3 className={clsx(montserrat.className, "text-md mb-2 semibold")}>
          {collecte("cookies.title")}
        </h3>
        <p className={clsx(montserrat.className, "text-md")}>
          {collecte("cookies.description")}
        </p>
      </article>

      <article className="felx flex-col justify-center items-start my-4">
        <h3 className={clsx(montserrat.className, "text-md mb-2 semibold")}>
          {utilisation("title")}
        </h3>
        <p className={clsx(montserrat.className, "text-md")}>
          {utilisation("description")}
        </p>
        <p className={clsx(montserrat.className, "text-md")}>
          {utilisation("fournir")}
        </p>
        <p className={clsx(montserrat.className, "text-md")}>
          {utilisation("informations")}
        </p>
        <p className={clsx(montserrat.className, "text-md")}>
          {utilisation("participer")}
        </p>
        <p className={clsx(montserrat.className, "text-md")}>
          {utilisation("support")}
        </p>
        <p className={clsx(montserrat.className, "text-md")}>
          {utilisation("recueillir")}
        </p>
        <p className={clsx(montserrat.className, "text-md")}>
          {utilisation("surveiller")}
        </p>
        <p className={clsx(montserrat.className, "text-md")}>
          {utilisation("detecter")}
        </p>
        <p className={clsx(montserrat.className, "text-md")}>
          {utilisation("consentement")}
        </p>
        <p className={clsx(montserrat.className, "text-md")}>
          {utilisation("description2")}
        </p>
      </article>

      <article className="felx flex-col justify-center items-start my-4">
        <h3 className={clsx(montserrat.className, "text-md mb-2 semibold")}>
          {securite("title")}
        </h3>
        <p className={clsx(montserrat.className, "text-md")}>
          {securite("description")}
        </p>
      </article>

      <article className="felx flex-col justify-center items-start my-4">
        <h3 className={clsx(montserrat.className, "text-md mb-2 semibold")}>
          {modifications("title")}
        </h3>
        <p className={clsx(montserrat.className, "text-md")}>
          {modifications("description")}
        </p>
        <p className={clsx(montserrat.className, "text-md")}>
          {modifications("conseillons")}
        </p>
      </article>

      <article className="felx flex-col justify-center items-start my-4">
        <h3 className={clsx(montserrat.className, "text-md mb-2 semibold")}>
          {contactez("title")}
        </h3>
        <p className={clsx(montserrat.className, "text-md")}>
          {contactez("description")}
        </p>
        <p className={clsx(montserrat.className, "text-md")}>
          {contactez("email")}
        </p>
      </article>
    </section>
  )
}
