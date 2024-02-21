import { getTranslations } from "next-intl/server"
import FormSection from "@/components/form/FormSection"
import {
  FormField,
  FormTextAreaField,
  ButtonSumitContact,
} from "@/components/form/FormFields"
import { InputTest } from "@/components/InputTest"
import { Faq } from "@/components/Faq"
import { robotoSlab } from "@/components/fonts"
import clsx from "clsx"

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" })

  return {
    title: t("contact.title"),
    description: t("contact.description"),
  }
}

export default async function ContactPage(params) {
  const t = await getTranslations("contact")

  return (
    <section id="contact" className="w-full h-auto pb-8">
      <div className="py-6">
        <div className="w-full max-w-6xl flex m-auto flex-col p-4 md:p-10 justify-center items-center">
          <h1 className={clsx(robotoSlab.className, "text-3xl font-bold mb-8")}>
            Contact me
          </h1>
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

        <Faq />
      </div>
    </section>
  )
}
