import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"
import { ButtonToTop } from "@/components/ButtonToTop"
import { Banner } from "@/components/Banner"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"
import { FaExternalLinkAlt } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="mt-auto bg-accent !text-gray-200 relative pb-6">
      <div className="w-full bg-secondary border-b-2 border-t-2 border-black">
        <div className="flex flex-col sm:flex-row justify-start items-start sm:justify-between sm:items-center max-w-4xl m-auto h-1/5 px-5 py-4 w-full text-black">
          <div className="flex items-baseline bandeau">
            <h2 className="text-3xl font-medium">Portfolio</h2>
            <div className="w-2 h-2 bg-black rounded-lg ml-1"></div>
          </div>
          <div className="text-2xl font-semibold">Développeur Full Stack</div>
        </div>
      </div>
      <div className="footer relative flex lg:flex-row lg:justify-start items-start justify-start max-w-4xl m-auto py-10 flex-col w-full gap-8">
        <div className="[&>p]:text-lg w-full lg:w-[65%] px-5 text-left relative border-0 lg:border-r-2 border-black flex flex-col">
          <h2 className="text-xl mb-4">Développeur Informatique indépendant</h2>
          <p className="mb-2">
            Merci d&apos;avoir regardé mon profil en entier !
          </p>
          <p className="mb-2">
            S&apos;il vous interresse, envoyer moi un email et/ou <br />
            Merci de le partager à tout votre réseau !
          </p>
          <p> Au plaisir de collaborer avec vous...</p>
        </div>
        <div className="px-5 w-full md:w-auto text-left flex flex-col justify-start items-start ">
          <h2 className="lg:pl-[3.4rem] text-xl text-start lg:mx-auto mb-4">
            Mes coordonées
          </h2>
          <ul className="footerlist flex flex-col gap-2 mt-2 items-start justify-start list-footer w-full lg:m-auto lg:pl-[3rem]">
            <li className="list-me">
              <FaPhone />
              <span>07 85 66 40 42</span>
            </li>
            <li className="list-me">
              <FaEnvelope />
              <a href="mailto:juhel@outlook.fr">juhel@outlook.fr</a>
            </li>

            <li className="reseaux list-me">
              <FaGithub />
              <a
                className="flex justify-center items-center gap-2"
                href="https://github.com/VJuel"
              >
                Github
                <FaExternalLinkAlt className="text-xs" />
              </a>
            </li>
            <li className="reseaux list-me">
              <FaLinkedinIn />
              <a
                className="flex justify-center items-center gap-2"
                href="https://www.linkedin.com/in/vicktor-juhel-294421231/"
              >
                Linkedin
                <FaExternalLinkAlt className="text-xs" />
              </a>
            </li>
            <li className="list-me">
              <FaMapMarkerAlt />
              <div className="flex flex-col">
                <span className="whitespace-nowrap">18 Quai Louis Durand</span>
                <span>17000 La Rochelle</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Banner />
      <ButtonToTop />
    </footer>
  )
}
