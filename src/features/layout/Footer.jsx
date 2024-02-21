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
    <footer className="mt-auto bg-secondary !text-gray-200 relative ">
      <div className="w-full bg-secondary border-t-2 border-black">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center sm:justify-between max-w-4xl m-auto h-1/5 px-4 py-4 w-full text-black">
          <div className="flex items-baseline bandeau">
            <div className="text-2xl font-medium">{t("description")}</div>
          </div>
          <div className="flex justify-center items-center">
            <strong className="text-xl">NextJs / WordPress</strong>
          </div>
        </div>
      </div>
      <div className="footer relative flex lg:flex-row md:justify-between items-start justify-start max-w-4xl m-auto px-4 py-6 flex-col w-full gap-4">
        <div className="w-[65%] [&>p]:text-lg md:w-[65%] text-left relative border-0 lg:border-r-2 border-black flex flex-col">
          <h2 className={clsx(robotoSlab.className, "text-xl mb-2 md:mb-4")}>
            {t("leftTitle")}
          </h2>
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
        <div className="w-full md:w-[35%] text-left flex flex-col justify-start md:justify-end lg:items-end items-start md:mt-8 mt-0">
          <h2
            className={clsx(
              robotoSlab.className,
              "lg:pl-[3.4rem] text-xl text-start lg:text-end lg:ml-auto mb-2 md:mb-4"
            )}
          >
            {t("coordoneesTitle")}
          </h2>
          <ul className="footerlist flex flex-col gap-2 mt-2 items-start justify-start list-footer w-full lg:m-auto lg:pl-[3rem]">
            <li className="list-me">
              <div className="flex gap-4 justify-center items-center">
                <FaPhone />
                <span className="text-md font-bold whitespace-nowrap">
                  {t("coordoneesTel")}
                </span>
              </div>
              <span>07 85 66 40 42</span>
            </li>
            <li className="list-me">
              <div className="flex gap-4 justify-center items-center">
                <FaEnvelope />

                <span className="text-md font-bold whitespace-nowrap">
                  {t("coordoneesEmail")}
                </span>
              </div>
              <a href="mailto:juhel@outlook.fr">juhel@outlook.fr</a>
            </li>

            <li className="reseaux list-me">
              <div className="flex gap-4 justify-center items-center">
                <FaGithub />
                <span className="text-md font-bold whitespace-nowrap">
                  Github :
                </span>
              </div>
              <a
                className="flex justify-center items-center gap-4"
                href="https://github.com/VJuel"
              >
                Github
                <FaExternalLinkAlt className="text-xs" />
              </a>
            </li>
            <li className="reseaux list-me">
              <div className="flex gap-4 justify-center items-center">
                <FaLinkedinIn />
                <span className="text-md font-bold whitespace-nowrap">
                  Linkedin :
                </span>
              </div>
              <a
                className="flex justify-center items-center gap-4"
                href="https://www.linkedin.com/in/vicktor-juhel-294421231/"
              >
                Linkedin
                <FaExternalLinkAlt className="text-xs" />
              </a>
            </li>
            <li className="list-me">
              <div className="flex gap-4 justify-center items-center">
                <FaMapMarkerAlt />
                <span className="text-md font-bold whitespace-nowrap">
                  {t("coordoneesAdress")}
                </span>
              </div>
              <div className="flex flex-col text-right">
                <span className="whitespace-wrap md:whitespace-nowrap">
                  18 Quai Louis Durand
                </span>
                <span>17000 La Rochelle</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Banner text={t("banner")} />
      <ButtonToTop />
    </footer>
  )
}
