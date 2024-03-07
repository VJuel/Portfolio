import { getTranslations } from "next-intl/server"

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" })

  return {
    title: t("contact.title"),
    description: t("contact.description"),
  }
}

export default async function RootLayout({ children, params: { locale } }) {
  return children
}
