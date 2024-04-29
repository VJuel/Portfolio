import NavLinkFooter from "@/components/footer/NavItemFooter"
import { useTranslations } from "next-intl"
import { montserrat } from "./fonts"
import clsx from "clsx"

export function Banner({ text }) {
  const legale = useTranslations("legales")
  const politique = useTranslations("politique")

  return (
    <>
      <div className="border-t-2 border-black w-full h-fit py-2 px-2 lg:px-6 bg-accent flex justify-center items-center">
        <div className="max-w-3xl flex justify-start items-start xs:justify-between xs:items-center w-full xs:flex-row flex-col">
          <NavLinkFooter href="/legales" className={"xs:order-1 order-2"}>
            {legale("title")}
          </NavLinkFooter>
          <NavLinkFooter
            href="/politique"
            className="[&>:before]:hidden text-[--dark] xs:order-2 order-2"
          >
            {politique("title")}
          </NavLinkFooter>
        </div>
      </div>
    </>
  )
}
