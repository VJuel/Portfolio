import Image from "next/image"
import globe from "@/public/home/globe-freelance.png"
import { useTranslations } from "next-intl"
import { robotoSlab } from "../fonts"
import clsx from "clsx"
import {
  Figma,
  TabletSmartphone,
  Eye,
  Cog,
  SearchCheck,
  Lightbulb,
  FastForward,
  ShieldCheck,
} from "lucide-react"
import seo from "@/public/services/seo.svg"
import FreelanceListItem from "@/components/home/FreelanceListItem"

export default function Freelance() {
  const t = useTranslations("home.freelance")

  return (
    <section
      id="freelance"
      className="margin-section w-full transition-all duration-1 flex justify-center bg-gray-900 "
    >
      <div className="py-6 w-full">
        <h2
          className={clsx(robotoSlab.className, "text-3xl mb-8 text-[--text]")}
        >
          {t("title")}
        </h2>
        <div className="max-w-6xl w-full flex justify-center items-center flex-col lg:flex-row m-auto py-8 lg:py-20 px-4 gap-14 lg:gap-0">
          <div className="flexrelative justify-center items-centerpy-10 w-full lg:w-[60%] gap-4 md:gap-8 lg:bg-background rounded-lg py-0 md:py-8 lg:py-12">
            <div className="flex flex-col sm:flex-row justify-around items-start md:items-center gap-4 md:gap-2 relative [&>*]:text-[--dark]">
              <div className="flex flex-col justify-center items-start gap-4 lg:gap-8 [&>div>span]:text-lg">
                <FreelanceListItem title={t("list.design")}>
                  <Figma size={32} />
                </FreelanceListItem>
                <FreelanceListItem title={t("list.optimisation")}>
                  <Cog size={32} />
                </FreelanceListItem>
                <FreelanceListItem title={t("list.solution")}>
                  <Lightbulb size={32} />
                </FreelanceListItem>
                <FreelanceListItem title={t("list.rapide")}>
                  <FastForward size={32} />
                </FreelanceListItem>
              </div>

              <div className="flex flex-col justify-center items-start gap-4 lg:gap-8 [&>div>span]:font-semibold">
                <FreelanceListItem title={t("list.responsive")}>
                  <TabletSmartphone size={32} />
                </FreelanceListItem>
                <FreelanceListItem title={t("list.seo")}>
                  <Eye size={32} />
                </FreelanceListItem>
                <FreelanceListItem title={t("list.authentification")}>
                  <ShieldCheck size={32} />
                </FreelanceListItem>
                <FreelanceListItem title={t("list.analytique")}>
                  <SearchCheck size={32} />
                </FreelanceListItem>
              </div>
            </div>
          </div>

          <aside className="flex justify-center items-center lg:items-start flex-col w-full sm:w-[60%] lg:w-[35%] border-slate-300 border shadow-lg rounded-lg px-6 py-14 [&>*]:text-[--text] z-20 bg-gray-900 lg:-ml-8 shadow-freelance m-auto">
            <h2 className={clsx(robotoSlab.className, "text-2xl mb-6")}>
              {t("tarifs")}
            </h2>
            <h3 className="text-lg font-normal mb-2">{t("tjm")}</h3>
            <span className="text-2xl">
              <span className="text-5xl font-bold">350</span>
              <span className="font-normal">€</span>
              <span className="text-5xl text-secondary font-semibold rounded-lg px-2 -mb-2">
                /
              </span>
              {t("day")}
            </span>
          </aside>
        </div>
      </div>
    </section>
  )
}
