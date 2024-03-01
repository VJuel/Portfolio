import Image from "next/image"
import logoSolus from "@/public/vwsolution.svg"
import { useTranslations } from "next-intl"
import { Header } from "@/components/nav/HeaderContainer"
import NavLinkItem from "@/components/nav/NavLinkItem"
import LocaleSwitcher from "@/components/nav/Langswitcher"
import Link from "next/link"
import Burger from "@/components/nav/Burger"

export default function NavBar({ children }) {
  const navTrad = useTranslations("nav")

  return (
    <Header>
      <div className="flex justify-center items-center md:justify-start">
        <Link href="/">
          <Image
            src={logoSolus}
            sizes="(min-width: 1024px) 50px, (max-width: 1024px) 60px, 100px"
            width={100}
            height={75}
            alt="Logo"
            className="z-10"
          />
        </Link>
      </div>

      <Burger />

      {/*OVERLAY*/}
      <div className="overlay hidden fixed inset-0 bg-black bg-opacity-25 z-40 w-full h-screen"></div>

      {/*Nav*/}
      <nav
        id="nav"
        className="w-full absolute top-0 left-0 flex-col lg:flex-row md:flex p-2 lg:p-0 transform transition-all duration-200 lg:items-center bg-secondary lg:bg-transparent lg:text-inherit text-black -translate-y-full lg:translate-y-0 justify-end z-10"
      >
        <ul className="flex flex-col lg:flex-row items-start justify-start mt-4 lg:mt-0">
          <li className="w-full px-4 md:px-2 lg:my-0">
            <NavLinkItem href="/">{navTrad("home")}</NavLinkItem>
          </li>
          <li className="w-full px-4 md:px-2 lg:my-0">
            <NavLinkItem href="/portfolio">{navTrad("portfolio")}</NavLinkItem>
          </li>
          <li className="w-full px-4 md:px-2 lg:my-0">
            <NavLinkItem href="/services">{navTrad("services")}</NavLinkItem>
          </li>
          <li className="w-full px-4 md:px-2 lg:my-0">
            <NavLinkItem href="/contact">{navTrad("contact")}</NavLinkItem>
          </li>
          <li className="w-full px-4 md:px-2 lg:my-0">
            <NavLinkItem href="/faq">{navTrad("faq")}</NavLinkItem>
          </li>
          <li className="w-full px-4 md:px-2 lg:my-0">
            <NavLinkItem href="/blog">{navTrad("blog")}</NavLinkItem>
          </li>
        </ul>

        <LocaleSwitcher />
      </nav>
    </Header>
  )
}
