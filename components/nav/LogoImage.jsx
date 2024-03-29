"use client"
import Image from "next/image"
import { usePathname } from "next/navigation"
import logoWhite from "@/public/logo-text-white.png"
import logoDark from "@/public/logo-text-black.png"
import useScrollPosition from "@/lib/hooks/useScrollPosition"

export default function LogoImage() {
  const pathnames = usePathname()
  const scrolled = useScrollPosition()

  return (
    <>
      {pathnames.includes("/contact") ? (
        scrolled ? (
          <Image
            src={logoDark}
            width={116}
            height={66}
            className="h-full w-full"
            alt="Logo Vicktor Web Solution"
          />
        ) : (
          <Image
            src={logoWhite}
            width={116}
            height={66}
            className="h-full w-full"
            alt="Logo Vicktor Web Solution"
          />
        )
      ) : (
        <Image
          src={logoDark}
          width={116}
          height={66}
          className="h-full w-full"
          alt="Logo Vicktor Web Solution"
        />
      )}
    </>
  )
}
