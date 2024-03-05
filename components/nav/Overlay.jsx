"use client"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import clsx from "clsx"

export default function Overlay() {
  const pathname = usePathname()
  return (
    <>
      <div className={clsx("overlay hidden fixed inset-0 bg-black bg-opacity-25 z-40 w-full h-screen")}></div>
    </>
  )
}
