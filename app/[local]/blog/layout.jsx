import { getTranslations, unstable_setRequestLocale } from "next-intl/server"

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" })

  return {
    title: t("blog.title"),
    description: t("blog.description"),
  }
}

export default function RootLayout({ children, params }) {
  unstable_setRequestLocale(params.locale)

  return children
}
