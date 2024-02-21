import Image from "next/image"
import { robotoSlab } from "../fonts"
import clsx from "clsx"
import { ButtonNav } from "../ButtonNav"
import { useTranslations } from "next-intl"
import { Palette } from "lucide-react"

export default function HomePortfolio() {
  const t = useTranslations("HomePortfolio")
  return (
    <section className="w-full bg-secondary py-14">
      <div className="flex flex-col md:flex-row justify-center items-center max-w-6xl m-auto w-full px-4 md:px-6 ">
        <div className="flex flex-col justify-center w-full pr-0 md:pr-14 mb-8 md:mb-0">
          <h2 className={clsx(robotoSlab.className, "text-3xl mb-2 font-bold")}>
            Portfolio
          </h2>
          <p className="pr-4">Venez voir mes realisation</p>
          <ButtonNav href="/portfolio" t="Voir les realisation">
            <Palette className="text-[--text]" />
          </ButtonNav>
        </div>
        <div className="flex flex-col justify-center h-full w-full">
          <Image
            src="/home/home-portfolio.png"
            width={400}
            height={400}
            className="w-full h-full cover"
          />
        </div>
      </div>
    </section>
  )
}
