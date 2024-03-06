import { getTranslations } from "next-intl/server"

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" })

  return {
    title: t("blog.title"),
    description: t("blog.description"),
  }
}

export default function RootLayout({ children, params }) {
  return children
}
