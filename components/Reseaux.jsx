"use client"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"
import Link from "next/link"
import clsx from "clsx"
import { usePathname } from "next/navigation"
import { useLocale } from "next-intl"

export default function Reseaux() {
  const pathname = usePathname()
  const local = useLocale()
  return (
    <>
      <div
        className={clsx(
          pathname.includes("contact")
            ? "bg-secondary [&>a>svg]:fill-black"
            : "bg-foreground",
          "animate-fade-in-right reseaux hidden mr-auto md:flex flex-col justify-center items-start w-fit fixed top-[20%] lg:top-[20%] left-[2%] [&>a]:before:hidden rounded-full shadow-lg px-2 py-4 [&>*]:transition-all z-40"
        )}
      >
        <Link
          href="https://www.linkedin.com/in/vicktor-juhel-294421231/"
          target="_blank"
          className={clsx(
            pathname.includes("contact")
              ? "hover:bg-accent"
              : "hover:bg-secondary",
            "p-2 rounded-full hover:shadow-[-2px_5px_15px_-9px_#000000] [&>svg]:hover:fill-black"
          )}
        >
          <FaLinkedinIn
            className={clsx(
              pathname === "/" + local + "/contact"
                ? "fill-black"
                : "fill-white",
              "text-2xl "
            )}
          />
        </Link>
        <Link
          href="https://github.com/VJuel"
          target="_blank"
          className={clsx(
            pathname.includes("contact")
              ? "hover:bg-accent"
              : "hover:bg-secondary",
            "p-2 rounded-full hover:shadow-[-2px_5px_15px_-9px_#000000] [&>svg]:hover:fill-black"
          )}
        >
          <FaGithub
            className={clsx(
              pathname === "/" + local + "/contact"
                ? "fill-black"
                : "fill-white",
              "text-2xl "
            )}
          />
        </Link>
      </div>
    </>
  )
}
