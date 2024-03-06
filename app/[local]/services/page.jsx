import { getTranslations, unstable_setRequestLocale } from "next-intl/server"
import { robotoSlab } from "@/components/fonts"
import clsx from "clsx"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import IconCard from "@/components/services/IconCard"
import nextjs from "@/public/services/next-js.svg"
import wordpress from "@/public/services/wordpress.svg"
import { montserrat } from "../../../components/fonts"
import { useTranslations } from "next-intl"

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" })

  return {
    title: t("services.title"),
    description: t("services.description"),
  }
}

export default function Services(params) {
  unstable_setRequestLocale(params.locale)
  const t = useTranslations("services")

  return (
    <div id="services" className="w-full h-auto max-w-6xl m-auto set-page">
      <div className="w-full flex m-auto flex-col px-4 justify-center items-center">
        <h1 className={clsx(robotoSlab.className, "text-3xl font-bold")}>
          {t("title")}
        </h1>

        <section className="flex flex-col justify-center items-center mt-10 max-6-xl">
          <h2
            className={clsx(
              robotoSlab.className,
              "text-center text-2xl font-medium mb-2"
            )}
          >
            {t("solutions.title")}
          </h2>
          <p className="text-md text-center mb-6 md:mb-10">
            {t("solutions.description")}
          </p>
          <div className="flex justify-center items-center flex-col md:flex-row gap-4 md:gap-8 h-auto lg:h-[300px] w-full">
            <IconCard
              title="Next.js"
              icon={nextjs}
              description={t("solutions.nextjs.description")}
              background="bg-accent"
            />
            <IconCard
              title="WordPress"
              icon={wordpress}
              description={t("solutions.wordpress.description")}
              className="bg-accent"
              background="bg-secondary"
            />
          </div>
        </section>

        <section className="w-full space-y-8 md:space-y-18 lg:space-y-20 bg-background margin-section">
          <h2
            className={clsx(
              robotoSlab.className,
              "text-center text-2xl font-medium mb-8 lg:mb-10"
            )}
          >
            {t("formule.title")}
          </h2>
          <article className="w-full">
            <div className="flex flex-col lg:flex-row justify-center items-center m-auto w-full">
              <div className="flex lg:order-2 flex-col justify-center w-full lg:w-1/2 pl-0 lg:pl-10 pr-8 mb-8 lg:mb-0 p-0">
                <h2
                  className={clsx(
                    robotoSlab.className,
                    "text-xl mb-2 font-bold"
                  )}
                >
                  {t("formule.vitrine.title")}
                </h2>
                <h3 className="italic">{t("formule.vitrine.description")}</h3>
                <p>{t("formule.vitrine.text")}</p>
                <p>{t("formule.vitrine.text2")}</p>
              </div>
              <aside className="flex order-2 lg:order-1 flex-col justify-center bg-background rounded-sm h-full w-full lg:w-[45%]">
                <Image
                  alt="Vitrine web site restaurant"
                  src="/services/vitrine-services.png"
                  width={400}
                  height={400}
                  className="cover h-full w-full"
                />
              </aside>
            </div>
          </article>

          <article className="w-full">
            <div className="flex flex-col lg:flex-row justify-center items-center m-auto w-full">
              <div className="flex flex-col justify-center items-start w-full lg:w-1/2 pr-0 lg:pr-10 mb-8 lg:mb-0 p-0">
                <h2
                  className={clsx(
                    robotoSlab.className,
                    "text-2xl mb-2 font-bold"
                  )}
                >
                  {t("formule.ecommerce.title")}
                </h2>
                <h3 className="italic">{t("formule.ecommerce.description")}</h3>
                <p>{t("formule.ecommerce.text")}</p>
                <p>{t("formule.ecommerce.text2")}</p>
              </div>
              <aside className="flex flex-col justify-center bg-background rounded-sm h-full w-full lg:w-[45%] overflow-hidden">
                <Image
                  alt="E-commerce web site art"
                  src="/services/ecommerce-services.png"
                  width={420}
                  height={420}
                  className="cover h-full w-full"
                />
              </aside>
            </div>
          </article>

          <article className="w-full">
            <div className="flex flex-col lg:flex-row justify-center items-center m-auto w-full">
              <div className="flex order-1 lg:order-2 flex-col justify-center w-full lg:w-1/2 pr-0 pl-0 lg:pl-10 mb-8 lg:mb-0 p-0">
                <h2
                  className={clsx(
                    robotoSlab.className,
                    "text-2xl mb-2 font-bold"
                  )}
                >
                  {t("formule.surmesure.title")}
                </h2>
                <h3 className="italic">{t("formule.surmesure.description")}</h3>
                <p>{t("formule.surmesure.text")}</p>
              </div>
              <aside className="h-[250px] flex order-2 lg:order-1 flex-col justify-center bg-background rounded-sm w-full lg:w-[45%]">
                <Image
                  src="/services/custom-services.jpg"
                  className="cover h-full w-full"
                  width={400}
                  height={400}
                  alt="Custom web site art"
                />
              </aside>
            </div>
          </article>
        </section>

        <section className="w-full flex flex-col justify-center items-center margin-section">
          <h3
            className={clsx(
              robotoSlab.className,
              "text-center text-2xl mb-8 font-bold"
            )}
          >
            {t("card.title")}
          </h3>

          <div className="flex flex-col flex-wrap md:flex-row gap-6 lg:gap-10 h-auto xlg:h-[500px] px-2 justify-center items-center">
            {/* Card Vitrine */}
            <Card className="w-full md:w-[350px] md:h-[500px] h-full overflow-hidden flex flex-col">
              <CardHeader className="bg-secondary">
                <CardTitle>{t("card.vitrine.title")}</CardTitle>
                <CardDescription className="text-primary italic">
                  {t("card.vitrine.description")}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-card">
                  <li>{t("card.vitrine.list.li1")}</li>
                  <li>{t("card.vitrine.list.li2")}</li>
                  <li>{t("card.vitrine.list.li3")}</li>
                  <li>{t("card.vitrine.list.li4")}</li>
                  <li>{t("card.vitrine.list.li5")}</li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between flex-col items-start flex-grow-1">
                <span>
                  {t("apartir")}{" "}
                  <strong className={clsx(montserrat.className, "text-lg")}>
                    1000 €{" "}
                  </strong>
                  *
                </span>
              </CardFooter>
            </Card>

            {/* Card E-commerce */}
            <Card className="w-full md:w-[350px] md:h-[500px] h-full overflow-hidden flex flex-col">
              <CardHeader className="bg-accent">
                <CardTitle>{t("card.ecommerce.title")}</CardTitle>
                <CardDescription className="text-primary italic">
                  {t("card.ecommerce.description")}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-card">
                  <li>{t("card.ecommerce.list.li1")}</li>
                  <li>{t("card.ecommerce.list.li2")}</li>
                  <li>{t("card.ecommerce.list.li3")}</li>
                  <li>{t("card.ecommerce.list.li4")}</li>
                  <li>{t("card.ecommerce.list.li5")}</li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between flex-col items-start">
                <span>
                  {t("apartir")}{" "}
                  <strong className={clsx(montserrat.className, "text-lg")}>
                    2500 €{" "}
                  </strong>
                  *
                </span>
              </CardFooter>
            </Card>

            {/* Card Formule speciale */}
            <Card className="w-full md:w-[350px] md:h-[500px] h-full overflow-hidden flex flex-col">
              <CardHeader className="bg-warning">
                <CardTitle>{t("card.surmesure.title")}</CardTitle>
                <CardDescription className="text-primary italic">
                  {t("card.surmesure.description")}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-card">
                  <li>{t("card.surmesure.list.li1")}</li>
                  <li>{t("card.surmesure.list.li2")}</li>
                  <li>{t("card.surmesure.list.li3")}</li>
                  <li>{t("card.surmesure.list.li4")}</li>
                  <li>{t("card.surmesure.list.li5")}</li>
                  <li>{t("card.surmesure.list.li6")}</li>
                </ul>
              </CardContent>
              <CardFooter className="flex-grow flex justify-between flex-1">
                <span className={clsx(montserrat.className, "text-lg")}>
                  <strong className={clsx(montserrat.className, "text-lg")}>
                    {t("devis")}{" "}
                  </strong>
                  *
                </span>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center items-center lg:justify-end lg:items-end w-[90%]">
            <h3 className="italic lg:text-center text-right mt-4">
              *{t("gratuit")}
            </h3>
          </div>
        </section>
      </div>
    </div>
  )
}
