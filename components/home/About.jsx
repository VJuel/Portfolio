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
      className="relative w-full margin-section transition-all duration-1 flex justify-center overflow-hidden px-0 md:px-4"
    >
      <Image
        src={ellipse}
        width={500}
        height={500}
        alt="Ellipse background image"
        className="absolute -right-[180px] -top-[120px] -z-10 scale-0 md:scale-[250%] lg:scale-[380%]"
      />
      <div className="py-6">
        <h2 className={clsx(robotoSlab.className, "text-3xl")}>{t("title")}</h2>
        <div className="max-w-3xl gap-4 md:gap-8 w-full flex justify-center items-center p-4 flex-col mt-8 lg:flex-row bg-accent md:rounded-sm overflow-hidden md:border-2 md:border-black ">
          <div className="w-full lg:w-[75%] lg:p-7 text-black text-lg text-left">
            <div className="div gap">
              <h3
                className={clsx(robotoSlab.className, "text-xl mb-2 font-bold")}
              >
                {t("title1")}
              </h3>
              <p
                className="mb-4"
                dangerouslySetInnerHTML={{
                  __html: t("description.p3"),
                }}
              ></p>
            </div>

            <div className="div">
              <h3
                className={clsx(robotoSlab.className, "text-xl mb-2 font-bold")}
              >
                {t("title2")}
              </h3>
              <p
                className="mb-4"
                dangerouslySetInnerHTML={{
                  __html: t("description.p2"),
                }}
              ></p>
            </div>
            <div className="div">
              <h3
                className={clsx(robotoSlab.className, "text-xl mb-2 font-bold")}
              >
                {t("title3")}
              </h3>
              <p
                className="mb-4"
                dangerouslySetInnerHTML={{
                  __html: t("description.p1"),
                }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
