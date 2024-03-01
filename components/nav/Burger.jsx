"use client"
import { usePathname } from "next/navigation"
import { useLocale } from "next-intl"
import clsx from "clsx"
import { Menu, X } from "lucide-react"
import useScrollPosition from "@/lib/hooks/useScrollPosition"

export default function Burger() {
  const pathname = usePathname()
  const local = useLocale()
  const hasScrolled = useScrollPosition()

  return (
    <>
      {/*Burger*/}
      <input type="checkbox" id="menu-toggle" className="hidden" />
      <label
        htmlFor="menu-toggle"
        id="menu-toggle"
        className={clsx(
          pathname.includes("contact") && !hasScrolled
            ? "[&>div>*]:stroke-white"
            : "[&>div>*]:stroke-foreground",
          "flex cursor-pointer z-30 mt-2"
        )}
      >
        <div className="flex justify-center items-center w-8 h-8 text-xl text-black">
          <Menu size={30} />
        </div>
        <div className="w-8 h-8 text-xl text-black hidden">
          <X size={30} />
        </div>
      </label>
    </>
  )
}
