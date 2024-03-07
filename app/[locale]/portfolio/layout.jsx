import { getTranslations } from "next-intl/server"

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" })

  return {
    title: t("portfolio.title"),
    description: t("portfolio.description"),
  }
}

export default function RootLayout({ children, params }) {
  return children
}
