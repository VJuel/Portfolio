import clsx from "clsx"
import { robotoSlab, montserrat } from "@/components/fonts"
import { getTranslations } from "next-intl/server"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" })

  return {
    title: t("faq.title"),
    description: t("faq.description"),
  }
}

export default function Faq(params) {
  unstable_setRequestLocale(params.locale)
  const faq = useTranslations("faq")

  const notifications = [
    {
      id: 1,
      title: faq("questions.q1.title"),
      description: faq("questions.q1.description"),
    },
    {
      id: 2,
      title: faq("questions.q2.title"),
      description: faq("questions.q2.description"),
    },
    {
      id: 3,
      title: faq("questions.q3.title"),
      description: faq("questions.q3.description"),
    },
    {
      id: 4,
      title: faq("questions.q4.title"),
      description: faq("questions.q4.description"),
    },
    {
      id: 5,
      title: faq("questions.q5.title"),
      description: faq("questions.q5.description"),
    },
    {
      id: 6,
      title: faq("questions.q6.title"),
      description: faq("questions.q6.description"),
    },
  ]

  return (
    <section className="set-page w-full max-w-3xl flex flex-col justify-center items-center m-auto px-4">
      <h1 className={clsx(robotoSlab.className, "text-3xl font-bold mb-8")}>
        {faq("title")}
      </h1>
      <div className="flex justify-center items-start flex-col md:flex-row mt-8 lg:mt-14 w-full">
        <div className="flex order-1 md:order-2 flex-col justify-center items-center">
          {notifications.map((notification, index) => (
            <div
              key={index}
              id={notification.id}
              className="flex flex-col justify-center items-start"
            >
              <h2
                className={clsx(montserrat.className, "text-xl font-bold mb-2")}
              >
                {notification.title}
              </h2>
              <p className="text-md text-black mb-10 pr-6">
                {faq("questions.q" + notification.id + ".description")}
              </p>
            </div>
          ))}
        </div>
        <nav className="relative lg:sticky order-1 md:order-2 top-0 md:top-24 left-0 flex justify-start items-start w-full md:w-[75%] lg:w-[30%] lg:ml-6 mb-8 md:mb-12 lg:mb-0">
          <div className="sticky top-0 left-0 w-full">
            <Card className={cn("w-full lg:w-[380px]")}>
              <CardHeader className="pb-4">
                <CardTitle className="border-b border-slate-300 pb-4">
                  Naviguation
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <ul>
                  {notifications.map((notification, index) => (
                    <li
                      key={index}
                      className="mb-2 grid grid-cols-[20px_1fr] items-center justify-center pb-0 last:mb-0 last:pb-0"
                    >
                      <span className="flex h-2 w-2 translate-y-1 rounded-full bg-gray-900 mb-[5px]" />
                      <div className="space-y-1">
                        <Link
                          href={"#" + notification.id}
                          className="text-sm font-medium leading-none"
                        >
                          {notification.title}
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </nav>
      </div>
    </section>
  )
}
