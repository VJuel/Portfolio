"use client"
import { usePathname } from "next/navigation"
import clsx from "clsx"

export default function Nav({ children }) {
  const pathname = usePathname()

  return (
    <nav
      id="nav"
      className={clsx(
        "flex flex-col lg:flex-row w-full h-screen absolute top-0 left-[-1px] p-2 transition-all duration-200 z-10",
        pathname.includes("contact")
          ? "contact flex-col lg:[&>ul>li>a]:before:delay-400 [&>ul]:flex-col items-start w-full lg:w-[350px] bg-secondary text-black justify-start z-10 transform translate-x-0"
          : "lg:relative lg:translate-y-0 lg:text lg:flex-row lg:h-full lg:p-0 lg:items-center bg-secondary lg:bg-transparent -inherit text-black justify-start lg:justify-end z-10 mr-auto"
      )}
    >
      {children}
    </nav>
  )
}
