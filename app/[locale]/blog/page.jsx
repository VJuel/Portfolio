export const dynamic = "force-dynamic"

import { getTranslations } from "next-intl/server"
import Image from "next/image"

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" })

  return {
    title: t("blog.title"),
    description: t("blog.description"),
  }
}

export default function Blog() {
  return (
    <section id="blog" className="w-full h-[calc(100vh-5rem)] calc-pb-8">
      <div className="py-6 h-full">
        <div className="h-full w-full max-w-6xl flex m-auto flex-col p-4 md:p-10 justify-center items-center">
          <Image
            src="/blog/commingsoon.png"
            width={600}
            height={600}
            alt="Blog is comming soon"
          />
        </div>
      </div>
    </section>
  )
}
