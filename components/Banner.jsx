import NavLinkFooter from "@/components/footer/NavItemFooter"
import { useTranslations } from "next-intl"
import { robotoSlab } from "./fonts"
import clsx from "clsx"

export function Banner({ text }) {
  const legale = useTranslations("legales")
  const politique = useTranslations("politique")

  return (
    <>
      <div className="border-t-2 border-black w-full h-fit py-2 px-2 lg:px-6 bg-accent flex justify-center items-center">
        <div className="max-w-3xl flex justify-between items-center w-full">
          <NavLinkFooter href="/legales">{legale("title")}</NavLinkFooter>
          <p
            className={clsx(
              robotoSlab.className,
              "text-lg text-black font-semibold"
            )}
          >
            {text}
          </p>
          <NavLinkFooter
            href="/politique"
            className="[&>:before]:hidden text-[--dark]"
          >
            {politique("title")}
          </NavLinkFooter>
        </div>
      </div>
    </>
  )
}
