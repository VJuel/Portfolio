import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLink } from "react-icons/fa"
import { ButtonToTop } from "@/components/ButtonToTop"

export default function Footer() {
  return (
    <footer className="mt-auto bg-accent !text-gray-200 relative">
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
        <div className="[&>p]:text-lg w-full lg:w-[70%] px-5 text-left relative border-0 lg:border-r-2 border-black flex flex-col">
          <h2 className="text-2xl mb-2">
            Développeur Informatique indépendant
          </h2>
          <p className="text-lg !leading-6">
            Merci de partager mon profil si celui-ci vous a plu. <br />
            Je reste à votre disposition. <br />
            Envoyez moi un mail et je vous répondrai dans les plus bref délais.
            <br />
            Merci d'avoir pris du temps pour regarder mon profil.
            <br />
            Au plaisir de communiquer avec vous.
          </p>
        </div>
        <div className="w-full md:w-auto text-left flex flex-col justify-start items-start ">
          <h2 className="me text-2xl m-auto mb-2">Mes coordonees</h2>
          <ul className="flex flex-col gap-2 mt-2 items-start justify-start list-footer fit-content lg:m-auto">
            <li className="list-me">
              <FaMapMarkerAlt />
              <div className="flex flex-col">
                <span>La Rochelle 18 Quai Louis Durand</span>
              </div>
            </li>
            <li className="list-me">
              <FaPhone />
              <span>07 85 66 40 42</span>
            </li>
            <li className="list-me">
              <FaEnvelope />
              <a href="mailto:juhel@outlook.fr">juhel@outlook.fr</a>
            </li>
          </ul>
        </div>
      </div>
      <ButtonToTop />
    </footer>
  )
}
