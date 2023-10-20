"use client"
import { useEffect, useState } from "react"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"
import Link from "next/link"

export default function Reseaux() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    if (typeof window !== undefined) {
      const contact = document.querySelector("#contact")
      const reseaux = document.querySelector(".reseaux")

      const contactClient = contact.getBoundingClientRect()
      const contactCenter = contactClient.height
      const contactClientPosition = contactCenter + contactClient.top
      const windowCenter = window.scrollY

      reseaux.style.paddingBottom = ""

      function pageOffContact() {
        if (contactClientPosition >= windowCenter) {
          contact.classList.remove("fixed")
          contact.classList.add("sticky")
        }
      }

      window.addEventListener("scroll", pageOffContact)

      return () => {
        window.removeEventListener("scroll", pageOffContact)
      }
    }
  }, [])

  return (
    <>
      <div className="reseaux hidden mr-auto sm:flex flex-col justify-center items-start w-fit sticky md:top[10%] lg:top-[25%] left-[2%] [&>a]:before:hidden rounded-full shadow-lg px-2 py-4 bg-foreground [&>*]:transition-all z-40">
        <Link
          href="https://www.linkedin.com/in/vicktor-juhel-294421231/"
          target="_blank"
          className="p-2 rounded-full hover:shadow-[-2px_5px_15px_-9px_#000000] hover:bg-secondary [&>svg]:hover:fill-black"
        >
          <FaLinkedinIn className="text-2xl fill-white" />
        </Link>
        <Link
          href="https://github.com/VJuel"
          target="_blank"
          className="p-2 rounded-full hover:shadow-[-2px_5px_15px_-9px_#000000] hover:bg-secondary [&>svg]:hover:fill-black"
        >
          <FaGithub className="text-2xl fill-white" />
        </Link>
      </div>
    </>
  )
}
