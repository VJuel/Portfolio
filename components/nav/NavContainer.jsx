"use client"
import { usePathname } from "next/navigation"
import clsx from "clsx"

export default function Nav({ children }) {
  const pathname = usePathname()

  return (
    <nav
      id="nav"
      className={clsx(
        pathname.includes("contact")
          ? "contact lg:[&>ul>li>a]:before:delay-400 [&>ul]:flex-col items-start w-full lg:w-[350px] h-screen absolute top-0 left-0 lg:left-100 flex-col p-2 transform transition-all duration-200 bg-secondary text-black -translate-y-full lg:translate-y-0 lg:-translate-x-full justify-start z-10"
          : "lg:relative lg:translate-y-0 lg:text lg:flex-row lg:h-full lg:p-0 lg:items-center w-full h-screen absolute top-0 left-0 flex-col md:flex p-2 transform transition-all duration-200 bg-secondary lg:bg-transparent -inherit text-black -translate-y-full justify-start lg:justify-end z-10 mr-auto",
        "flex"
      )}
    >
      {children}
    </nav>
  )
}
