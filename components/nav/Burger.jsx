"use client"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { useLocale } from "next-intl"
import clsx from "clsx"
import { Menu, X } from "lucide-react"
import useScrollPosition from "@/lib/hooks/useScrollPosition"
import path from "path"

export default function Burger() {
  const pathname = usePathname()
  const local = useLocale()
  const hasScrolled = useScrollPosition()
  const [isToggle, setIsToggle] = useState(false)

  const handleCheckboxChange = (event) => {
    setIsToggle(event.target.checked)
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Détecte si nous ne sommes pas sur la page contact et si l'appareil est un desktop
      const isDesktop = window.innerWidth >= 1024

      if (!pathname.includes("contact") && isDesktop) {
        setIsToggle(false)
      }
    }

    setIsToggle(false)
  }, [pathname])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const toggleBurger = document.querySelector("#menu-toggle")

      // Applique l'état isToggle à la propriété checked de la checkbox
      toggleBurger.checked = isToggle

      const handleToggleChange = () => {
        setIsToggle(toggleBurger.checked)
      }

      // Ajoute un écouteur d'événements pour synchroniser l'état isToggle avec l'état de la checkbox
      toggleBurger.addEventListener("change", handleToggleChange)

      return () => {
        toggleBurger.removeEventListener("change", handleToggleChange)
      }
    }
  }, [isToggle]) // Cette effet est maintenant uniquement en fonction de isToggle

  return (
    <>
      {/*Burger*/}
      <input
        type="checkbox"
        id="menu-toggle"
        className={clsx("hidden")}
        checked={isToggle}
        onChange={handleCheckboxChange}
        readOnly
      />
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
          !pathname.includes("contact") && "lg:[&~nav]:animate-none",
          !isToggle
            ? "[&~nav]:animate-slideLeft"
            : "[&~nav]:animate-resetPosition",
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
