import { useTranslations } from "next-intl"
import { Header } from "@/components/nav/HeaderContainer"
import NavLinkItem from "@/components/nav/NavLinkItem"
import LocaleSwitcher from "@/components/nav/Langswitcher"
import Link from "next/link"
import Burger from "@/components/nav/Burger"
import Nav from "@/components/nav/NavContainer"
import LogoImage from "@/components/nav/LogoImage"

export default function NavBar({ children }) {
  const navTrad = useTranslations("nav")

  return (
    <Header>
      <div className="flex justify-center items-center md:justify-start">
        <Link href="/">
          <LogoImage />
        </Link>
      </div>

      <Burger />

      {/*Nav*/}
      <Nav>
        <ul className="flex flex-col lg:flex-row items-start justify-start mt-4 lg:mt-0 grow">
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
      </Nav>
    </Header>
  )
}
