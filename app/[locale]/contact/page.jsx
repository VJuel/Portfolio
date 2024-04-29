export const dynamic = "force-dynamic"

import { getTranslations, unstable_setRequestLocale } from "next-intl/server"
import FormSection from "@/components/form/FormSection"
import {
  FormField,
  FormTextAreaField,
  ButtonSumitContact,
} from "@/components/form/FormFields"
import { robotoSlab } from "@/components/fonts"
import clsx from "clsx"
import { useTranslations } from "next-intl"

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" })

  return {
    title: t("contact.title"),
    description: t("contact.description"),
  }
}

export default function ContactPage({ params: { locale } }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations("contact")

  return (
    <section
      id="contact"
      className="w-full lg:h-screen h-auto m-auto set-page lg:py-0 bg-gray-900 lg:bg-background"
    >
      <div className="w-full flex m-auto flex-col lg:flex-row justify-center items-center h-full">
        <div className="flex justify-center items-center flex-col bg-gray-900 w-full md:w-[55%] h-full   px-[20px]">
          <h1
            className={clsx(
              robotoSlab.className,
              "text-5xl font-bold text-secondary mb-6"
            )}
          >
            {t("title")}
          </h1>
          <h2 className="text-[--accent] text-center">{t("description")}</h2>
          <h2 className="text-[--accent] text-center">{t("description2")}</h2>
        </div>
        <div className="flex justify-center items-center w-full xs:w-[90%] lg:w-1/2 max-w-3xl px-4 mt-14 lg:mt-0">
          <FormSection>
            <div className="flex justify-center items-center [&>*:first-child]:pr-4">
              <FormField label={"name"} />
              <FormField label={"firstname"} />
            </div>
            <div className="flex justify-center items-center [&>*:first-child]:pr-4">
              <FormField label={"email"} />
              <FormField label={"tel"} />
            </div>
            <FormTextAreaField label={"message"} />
            <ButtonSumitContact />
          </FormSection>
        </div>
      </div>
    </section>
  )
}
