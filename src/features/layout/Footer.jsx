import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"
import { Banner } from "@/components/Banner"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"
import { FaExternalLinkAlt } from "react-icons/fa"
import { ButtonToTop } from "@/components/ButtonToTop"
import { useTranslations } from "next-intl"
import { robotoSlab } from "@/components/fonts"
import clsx from "clsx"

export default function Footer() {
  const t = useTranslations("footer")

  return (
    <footer className="mt-auto bg-secondary !text-gray-200 relative border-t-2 border-black">
      <div className="footer relative flex lg:flex-row md:justify-between items-start justify-start max-w-4xl m-auto px-4 py-6 flex-col w-full gap-4 bg-secondary">
        <div className="w-[65%] md:w-[50%] [&>p]:leading-6 text-lg text-left relative border-0 lg:border-r-2 border-black flex flex-col">
          <h3
            className={clsx(
              robotoSlab.className,
              "[&>p]:li text-2xl font-medium mb-4"
            )}
          >
            {t("description")}
          </h3>
          <p
            className="mb-2"
            dangerouslySetInnerHTML={{
              __html: t("description1"),
            }}
          ></p>
          <p
            className="mb-2"
            dangerouslySetInnerHTML={{
              __html: t("description2"),
            }}
          ></p>
          <p>{t("description3")}</p>
        </div>
        <div className="w-full xs:w-[50%] md:w-[35%] lg:w-[55%] text-left lg:text-right flex flex-col justify-start md:justify-end coord md:mt-8 mt-0 footer-basis">
          <h3
            className={clsx(
              robotoSlab.className,
              "coord lg:pl-[3.4rem] text-2xl lg:ml-auto mb-2 md:mb-4 font-medium"
            )}
          >
            {t("coordoneesTitle")}
          </h3>
          <ul className="[&>li>div>svg]:pb-2 footerlist flex flex-col gap-2 mt-2 items-start justify-start list-footer w-full lg:m-auto lg:pl-[3rem]">
            <li className="list-me">
              <div className="flex gap-2 md:gap-4 justify-center items-center">
                <FaPhone className="text-md" />
                <span className="inline-block text-md font-bold whitespace-nowrap">
                  {t("coordoneesTel")}
                </span>
              </div>
              <span>07 85 66 40 42</span>
            </li>
            <li className="list-me">
              <div className="flex gap-2 md:gap-4 justify-center items-center">
                <FaMapMarkerAlt className="text-md" />
                <span className="inline-block text-md font-bold whitespace-nowrap">
                  {t("coordoneesAdress")}
                </span>
              </div>
              <div className="block-adress flex flex-col items-start lg:items-end">
                <span className="whitespace-wrap md:whitespace-nowrap">
                  18 Quai Louis Durand,
                  <br className="md:hidden" /> 17000 La Rochelle
                </span>
              </div>
            </li>

            <li className="reseaux list-me">
              <div className="flex gap-2 md:gap-4 justify-center items-center">
                <FaGithub className="text-md" />
                <span className="inline-block text-md font-bold whitespace-nowrap">
                  Github
                </span>
              </div>
              <a
                className="flex justify-center items-center gap-2 md:gap-4"
                href="https://github.com/VJuel"
              >
                Vjuel
                <FaExternalLinkAlt className="text-sm" />
              </a>
            </li>
            <li className="reseaux list-me">
              <div className="flex gap-2 md:gap-4 justify-center items-center">
                <FaLinkedinIn className="text-md xs:text-md" />
                <span className="inline-block text-md font-bold whitespace-nowrap">
                  Linkedin
                </span>
              </div>
              <a
                className="flex justify-center items-center gap-2 md:gap-4"
                href="https://www.linkedin.com/in/vicktor-juhel-294421231/"
              >
                Vicktor Juhel
                <FaExternalLinkAlt className="text-sm" />
              </a>
            </li>
            <li className="list-me adress">
              <div className="flex gap-2 md:gap-4 justify-center items-center">
                <FaEnvelope className="text-md" />
                <span className="inline-block text-md font-bold whitespace-nowrap">
                  {t("coordoneesEmail")}
                </span>
              </div>
              <a
                className="text-right"
                href="mailto:dev@vicktor-web-solution.com"
              >
                dev@vicktor-web-solution.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Banner text={t("banner")} />
      <ButtonToTop />
    </footer>
  )
}
