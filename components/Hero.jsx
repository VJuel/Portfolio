import Link from "next/link"
import { Button } from "@/components/ui/button"
import clsx from "clsx"
import ImageHero from "@/components/ImageHero"
import { useTranslations } from "next-intl"
import { ButtonNav } from "@/components/ButtonNav"

export default function Hero({ lang }) {
  const t = useTranslations("home.hero")

  return (
    <section
      id="home"
      className={`lg:h-[calc(100vh_-_25px)] background-hero transition-all duration-_ 0.7s_ flex justify-center items-center w-full py-10 lg:py-0`}
    >
      <div className="max-w-6xl w-full flex flex-col lg:flex-row p-4 lg:p-10 gap-12 lg:gap-0 justify-center items-center mt-20">
        <div className="w-full lg:w-1/2 pr-0 lg:pr-10 text-center lg:text-left">
          <div className="relative z-0 pl-0 md:pl-4 flex flex-col md:justify-center justify-start items-center lg:items-start mb-4">
            <h1 className="text-4xl w-full md:w-2/3">{t("h1")}</h1>
            <h2 className="mb-[18px] md:mb-0 text-3xl">{t("title")}</h2>
            <div className="hidden lg:block animate-title-discover h-full bg-secondary absolute top-0 left-0 rounded-[2px]"></div>
          </div>

          <p className="mb-2 green animate-fade-in animation-delay-200">
            <span>{t("description.p1")}</span>
            <span>{t("description.p1-1")}</span>
            <span>{t("description.p1-2")}</span>
          </p>
          <p className="mb-2 green animate-fade-in animation-delay-400">
            <span>{t("description.p2")}</span>
            <span>{t("description.p2-1")}</span>
            <span>{t("description.p2-2")}</span>
          </p>
          <p className="mb-2 green animate-fade-in animation-delay-600">
            {t("description.p3")}
          </p>
          <div className="flex lg:justify-start lg:items-start justify-center items-center">
            <ButtonNav
              className="m-auto"
              href="/contact"
              t={t("description.btn")}
            />
          </div>
        </div>
        <ImageHero />
      </div>
    </section>
  )
}
