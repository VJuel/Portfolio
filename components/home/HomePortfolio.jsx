import { robotoSlab } from "../fonts"
import clsx from "clsx"
import { ButtonNav } from "../ButtonNav"
import { useTranslations } from "next-intl"
import { Palette } from "lucide-react"
import CarouselHome from "@/components/home/CarouselHome"

export default function HomePortfolio() {
  const t = useTranslations("home.HomePortfolio")
  return (
    <section className="w-full bg-secondary py-20">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl m-auto w-full px-4 pr-0 lg:px-[3.25rem]">
        <div className="flex flex-col justify-center items-center md:items-start w-full md:w-[45%] pl-0 md:pl-6 pr-0 md:pr-7 mb-8 md:mb-0">
          <h2 className={clsx(robotoSlab.className, "text-3xl mb-4 font-bold")}>
            {t("title")}
          </h2>
          <p className="text-center md:text-start px-6 xs:px-20 md:pr-4 md:pl-0">
            {t("description1")}
          </p>
          <p className="text-center md:text-start px-6 xs:px-20 md:pr-4 md:pl-0">
            {t("description2")}
          </p>
          <p className="text-center md:text-start px-6 xs:px-20 md:pr-4 md:pl-0">
            {t("description3")}
          </p>
          <ButtonNav href="/portfolio" t={t("btn")}>
            <Palette className="text-[--text]" />
          </ButtonNav>
        </div>
        <div className="flex flex-col justify-center items-center md:items-start mt-8 md:mt-0 h-[190px] md:h-[250px] lg:h-[270px] w-full md:w-[54%]">
          <CarouselHome />
        </div>
      </div>
    </section>
  )
}
