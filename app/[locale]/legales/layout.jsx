import { getTranslations } from "next-intl/server"

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" })

  return {
    title: t("legales.title"),
    description: t("legales.description"),
  }
}

export default function RootLayout({ children, params }) {
  return children
}
