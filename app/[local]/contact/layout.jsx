import { getTranslations } from "next-intl/server"

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" })

  return {
    title: t("contact.title"),
    description: t("contact.description"),
  }
}

export default function ContactLayout({ children }) {
  return (
    <section id="contact" className="w-full h-auto pb-8">
      {children}
    </section>
  )
}
