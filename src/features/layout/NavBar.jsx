import Image from "next/image"
import logoSolus from "@/public/vwsolution.svg"
import { useTranslations } from "next-intl"
import Header from "@/lib/hooks/Header"
import NavLinkItem from "@/components/nav/NavLinkItem"
import LocaleSwitcher from "@/components/nav/Langswitcher"
import { Menu, X } from "lucide-react"

export default function NavBar({ children }) {
  const navTrad = useTranslations("nav")

  console.log(navTrad("home"))

  return (
    <Header>
      <div className="flex justify-center items-center md:justify-start">
        <Image
          src={logoSolus}
          sizes="(min-width: 1024px) 50px, (max-width: 1024px) 60px, 100px"
          width={100}
          height={75}
          alt="Logo"
          className="z-10"
        />
      </div>

      {/*Burger*/}
      <input type="checkbox" id="menu-toggle" className="hidden" />
      <label
        htmlFor="menu-toggle"
        id="menu-toggle"
        className="flex cursor-pointer z-30 mt-2"
      >
        <div className="flex justify-center items-center w-8 h-8 text-xl text-black">
          <Menu size={30} />
        </div>
        <div className="w-8 h-8 text-xl text-black hidden">
          <X size={30} />
        </div>
      </label>

      {/*OVERLAY*/}
      <div className="overlay hidden fixed inset-0 bg-black bg-opacity-25 z-40 w-full h-screen"></div>

      {/*Nav*/}
      <nav
        id="nav"
        className="w-full absolute top-0 left-0 lg:flex p-2 lg:p-0 transform transition-all duration-200ms lg:items-center bg-secondary lg:bg-transparent lg:text-inherit text-black opacity-0 lg:opacity-100 -translate-y-full lg:translate-y-0 justify-end z-10"
      >
        <ul className="flex flex-col lg:flex-row items-start justify-start mt-4 lg:mt-0">
          <li className="w-full lg:mx-4 px-2 md:px-0 lg:my-0">
            <NavLinkItem href="/">{navTrad("home")}</NavLinkItem>
          </li>
          <li className="w-full lg:mx-4 px-2 md:px-0 lg:my-0">
            <NavLinkItem href="/portfolio">{navTrad("portfolio")}</NavLinkItem>
          </li>
          <li className="w-full lg:mx-4 px-2 md:px-0 lg:my-0">
            <NavLinkItem href="/services">{navTrad("services")}</NavLinkItem>
          </li>
          <li className="w-full lg:mx-4 px-2 md:px-0 lg:my-0">
            <NavLinkItem href="/contact">{navTrad("contact")}</NavLinkItem>
          </li>
          <li className="w-full lg:mx-4 px-2 md:px-0 lg:my-0">
            <NavLinkItem href="/blog">{navTrad("blog")}</NavLinkItem>
          </li>
        </ul>

        <LocaleSwitcher />
      </nav>
    </Header>
  )
}
