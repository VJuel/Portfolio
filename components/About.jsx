import Image from "next/image"
import aboutImg from "@/public/about.svg"
import { useTranslations } from "next-intl"
import { robotoSlab } from "./fonts"
import clsx from "clsx"

export default function About() {
  const t = useTranslations("about")

  return (
    <section
      id="about"
      className="w-full mt-[4.5rem] bg-white transition-all duration-1 flex justify-center"
    >
      <div className="py-6">
        <h2 className={clsx(robotoSlab.className)}>{t("title")}</h2>
        <div className="max-w-6xl gap-4 md:gap-8 w-full flex justify-center items-center md:p-10 p-4 flex-col lg:flex-row">
          <div className="h-auto flex mb-10 lg:mb-0 w-[80%] md:w-[60%] lg:w-[45%] xlg:w-[45%] justify-center items-center">
            <Image
              style={{ width: "auto" }}
              src={aboutImg}
              width={500}
              height={500}
              alt="Office Developpeur Web Full Stack"
              className="mt-8 lg:mt-14"
            />
          </div>
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
