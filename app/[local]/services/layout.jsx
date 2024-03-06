import { getTranslations } from "next-intl/server"

export async function generateMetadata({ params: { local } }) {
  const t = await getTranslations({ local, namespace: "Metadata" })

  return {
    title: t("services.title"),
    description: t("services.description"),
  }
}

export default function RootLayout({ children, params }) {
  return children
}
