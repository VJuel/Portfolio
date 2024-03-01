import Image from "next/image"
import aboutImg from "@/public/about.svg"
import { useTranslations } from "next-intl"
import { robotoSlab } from "../fonts"
import clsx from "clsx"
import ellipse from "@/public/cercle.png"

export default function About() {
  const t = useTranslations("home.about")

  return (
    <section
      id="about"
      className="relative w-full margin-section transition-all duration-1 flex justify-center overflow-hidden"
    >
      <Image
        src={ellipse}
        width={500}
        height={500}
        alt="Ellipse background image"
        className="absolute -right-[180px] -top-[120px] -z-10"
      />
      <div className="py-6">
        <h2 className={clsx(robotoSlab.className, "text-3xl")}>{t("title")}</h2>
        <div className="max-w-6xl gap-4 md:gap-8 w-full flex justify-center items-center md:p-10 p-4 flex-col lg:flex-row">
          <div className="w-full lg:w-[55%] p-3 lg:p-7 text-black text-lg text-center md:text-left">
            <p
              className="mb-4"
              dangerouslySetInnerHTML={{
                __html: t("description.p1"),
              }}
            ></p>
            <p
              className="mb-4"
              dangerouslySetInnerHTML={{
                __html: t("description.p2"),
              }}
            ></p>
            <p
              className="mb-4"
              dangerouslySetInnerHTML={{
                __html: t("description.p3"),
              }}
            ></p>
          </div>
        </div>
      </div>
    </section>
  )
}
