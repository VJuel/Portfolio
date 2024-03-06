import { getTranslations } from "next-intl/server"

export async function generateMetadata({ params: { local } }) {
  const t = await getTranslations({ local, namespace: "Metadata" })

  return {
    title: t("blog.title"),
    description: t("blog.description"),
  }
}

export default function RootLayout({ children, params }) {
  return children
}
