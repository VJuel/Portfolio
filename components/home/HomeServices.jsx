import Image from "next/image"
import { robotoSlab } from "../fonts"
import clsx from "clsx"
import { ButtonNav } from "../ButtonNav"
import { useTranslations } from "next-intl"
import { Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Newspaper, Handshake } from "lucide-react"
export default function HomeServices() {
  const t = useTranslations("home.HomeServices")

  return (
    <section className="w-full bg-background my-10 md:my-20">
      <div className="max-w-4xl m-auto">
        <h2 className={clsx(robotoSlab.className, "text-3xl mb-2 font-bold")}>
          {t("title")}
        </h2>

        <article className="w-full md:w-[80%] lg:w-full h-auto lg:h-[570px] mt-10 flex flex-col lg:flex-row justify-center items-center gap-14 m-auto">
          {/* Card Nextjs */}
          <Card className="w-[360px] md:w-full lg:w-[360px] h-full flex flex-col md:border-0 md:shadow-none lg:border-l lg:shadow-lg justify-between items-center">
            <Image
              src="/nextjs-logo.jpg"
              width={400}
              height={400}
              className="h-[200px]"
              alt="logo nextjs"
            />
            <CardHeader>
              <CardTitle>{t("nextjs.title")}</CardTitle>
            </CardHeader>
            <CardContent className="text-justify">
              <strong>{t("nextjs.strong")}</strong> {t("nextjs.description")}
            </CardContent>
            <CardFooter className="flex justify-between w-full md:w-[50%] lg:w-full flex-grow-1 gap-4">
              <ButtonNav href="/services" t={t("btn1")} />
              <ButtonNav variant="secondary" href="/blog" t="Articles">
                <Newspaper className="text-[--text]" />
              </ButtonNav>
            </CardFooter>
          </Card>

          {/* Card Wordpress */}
          <Card className="w-[360px] md:w-full lg:w-[360px] h-full flex flex-col md:border-0 md:shadow-none lg:border-l lg:shadow-lg justify-between items-center">
            <Image
              src="/WordPress-Logo.png"
              width={400}
              height={400}
              className="h-[200px]"
              alt="logo wordpress"
            />
            <CardHeader>
              <CardTitle>{t("wordpress.title")}</CardTitle>
            </CardHeader>
            <CardContent className="text-justify">
              <strong>{t("wordpress.strong")}</strong>{" "}
              {t("wordpress.description")}
              <br />
              <br className="hidden md:block" />
            </CardContent>
            <CardFooter className="flex justify-between w-full md:w-[50%] lg:w-full flex-grow-1 gap-4">
              <ButtonNav href="/services" t="Voir les offres" />
              <ButtonNav variant="secondary" href="/blog" t="Articles">
                <Newspaper className="text-[--text]" />
              </ButtonNav>
            </CardFooter>
          </Card>
        </article>
      </div>
    </section>
  )
}
