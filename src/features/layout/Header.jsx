import dynamic from "next/dynamic"
import Image from "next/image"
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi"
import logoSolus from "@/public/vwsolution.svg"
import LocaleSwitcherSelect from "@/components/LocaleSwitcherSelect"
import LocaleSwitcher from "@/components/Langswitcher"
import { useTranslations } from "next-intl"
import NavLinkItem from "@/components/NavLinkItem"

const useScrollPosition = dynamic(() => import("@/lib/hooks/ScrollPosition"), {
  ssr: true,
})

export default function Header() {
  const scrollPosition = useScrollPosition()
  const t = useTranslations("LocaleSwitcher")
  const nav = useTranslations("nav")

  return (
    <header
      className={`${
        scrollPosition === 0
          ? "bg-transparent border-b-0 py-2"
          : "shadow border-1 border-b-black py-1"
      } animate-fade-in-down z-50 transition-all duration-_250ms_ px-4 lg:px-8 sm:px-10 bg-background flex items-center justify-between sticky top-0`}
    >
      <div className="flex justify-center items-center md:justify-start md:items-start">
        <Image
          className="z-[-1]"
          style={{ height: "auto" }}
          src={logoSolus}
          sizes="(min-width: 1024px) 50px 50px, (max-width: 1024px) 60px, 100px"
          width={100}
          height={75}
          alt="Logo Vicktor Web Solution | Developpeur Web Full Stack"
        />
      </div>

      {/*Burger*/}
      <input type="checkbox" id="menu-toggle" className="hidden" />
      <label
        htmlFor="menu-toggle"
        className="flex md:hidden cursor-pointer z-30 mt-2"
      >
        <div className="flex justify-center items-center w-8 h-8 text-xl text-black">
          <HiMenuAlt3 size={30} />
        </div>
        <div className="w-8 h-8 text-xl text-black hidden">
          <HiOutlineX size={30} />
        </div>
      </label>

      {/*OVERLAY*/}
      <div className="overlay hidden fixed inset-0 bg-black bg-opacity-25 z-40 w-full h-screen"></div>

      <nav className="w-full absolute top-0 left-0 lg:flex transform transition-all lg:items-center bg-secondary lg:bg-inherit lg:text-inherit text-black opacity-0 lg:opacity-100 -translate-y-full lg:translate-y-0 justify-end z-10">
        <ul className="flex flex-col lg:flex-row items-start justify-start mt-4 lg:mt-0">
          <li className="w-full lg:mx-4 px-2 md:px-0 lg:my-0">
            <NavLinkItem href="/">{nav("home")}</NavLinkItem>
          </li>
          <li className="w-full lg:mx-4 px-2 md:px-0 lg:my-0">
            <NavLinkItem href="/portfolio">{nav("portfolio")}</NavLinkItem>
          </li>
          <li className="w-full lg:mx-4 px-2 md:px-0 lg:my-0">
            <NavLinkItem href="/services">{nav("services")}</NavLinkItem>
          </li>
          <li className="w-full lg:mx-4 px-2 md:px-0 lg:my-0">
            <NavLinkItem href="/contact">{nav("contact")}</NavLinkItem>
          </li>
          <li className="w-full lg:mx-4 px-2 md:px-0 lg:my-0">
            <NavLinkItem href="/blog">{nav("blog")}</NavLinkItem>
          </li>
        </ul>

        <LocaleSwitcher />
      </nav>
    </header>
  )
}
