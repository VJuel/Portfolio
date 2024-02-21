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
import Image from "next/image"

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" })

  return {
    title: t("portfolio.title"),
    description: t("portfolio.description"),
  }
}

export default function Blog(params) {
  // const t = await getTranslations("services")

  return (
    <section id="contact" className="w-full h-auto pb-8">
      <div className="py-6">
        <div className="w-full max-w-6xl flex m-auto flex-col p-4 md:p-10 justify-center items-center">
          <Image src="/blog/commingsoon.png" width={400} height={400} />
        </div>
      </div>
    </section>
  )
}
