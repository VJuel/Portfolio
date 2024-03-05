"use client"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { useLocale } from "next-intl"
import clsx from "clsx"
import { Menu, X } from "lucide-react"
import useScrollPosition from "@/lib/hooks/useScrollPosition"

export default function Burger() {
  const pathname = usePathname()
  const local = useLocale()
  const hasScrolled = useScrollPosition()
  const [isToggle, setIsToggle] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const toggleBurger = document.querySelector("#menu-toggle")
      const body = document.querySelector("body")
      const isCheked = toggleBurger.checked

      if (isCheked) {
        body.style.toggle = "scroll-nav"
        setIsToggle(!isToggle)
      }
    }
  }, [local, isToggle])

  return (
    <>
      {/*Burger*/}
      <input type="checkbox" id="menu-toggle" className={clsx("hidden")} />
      <label
        htmlFor="menu-toggle"
        id="menu-toggle"
        className={clsx(
          pathname.includes("contact")
            ? "flex [&>div>*]:stroke-background lg:[&>div>*]:stroke-foreground"
            : "flex lg:hidden",
          !hasScrolled
            ? pathname.includes("contact")
              ? "[&>div>*]:stroke-background"
              : "lg:[&>div>*]:stroke-foreground"
            : "[&>div>*]:stroke-foreground",
          "cursor-pointer z-30 mt-2"
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
