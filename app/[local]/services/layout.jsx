import { getTranslations } from "next-intl/server"

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" })

  return {
    title: t("services.title"),
    description: t("services.description"),
  }
}

export default function RootLayout({ children, params }) {
  return children
}
