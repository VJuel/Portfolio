"use client"
import { useEffect, useState } from "react"
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi"
import { Button } from "@/components/ui/button"
import logoSolus from "@/public/vwsolution.svg"
import LangSwitcher from "@/components/LangSwitcher"
import Image from "next/image"
import Link from "next/link"

export default function NavBar({ lang }) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isOpen, setIsOpen] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (typeof window != "undefined") {
      const el = window.matchMedia("(min-width: 768px)").matches

      const updatePosition = () => {
        setScrollPosition(window.scrollY)
      }

      window.addEventListener("scroll", updatePosition)
      updatePosition()

      return () => window.removeEventListener("scroll", updatePosition)
    }
  }, [])

  function handleIsOpen() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <header
        className={`${
          scrollPosition === 0
            ? "border-b-0 py-2"
            : "shadow border-1 border-b-black py-1"
        } animate-fade-in-down z-50 transition-all duration-_250ms_ px-4 sm:px-10 bg-background flex md:items-center justify-between sticky top-0`}
      >
        <div className="flex justify-center items-center md:justify-start md:items-start">
          <Image
            className=" z-[-1]"
            src={logoSolus}
            sizes="(min-width: 1024px) 50px 50px, (max-width: 1024px) 60px, 100px"
            width={100}
            height={75}
            alt="logo"
          />
        </div>

        {/*Burger*/}
        <div className={"flex justify-center items-center mt-2"}>
          {isOpen ? (
            <HiMenuAlt3
              onClick={() => {
                handleIsOpen()
              }}
              className={`${
                isOpen ? "block" : "hidden"
              } lg:hidden cursor-pointer w-8 h-8 text-xl`}
            />
          ) : (
            <HiOutlineX
              onClick={() => {
                handleIsOpen()
              }}
              className={`${
                !isOpen ? "block" : "hidden"
              } text-black lg:hidden z-30 cursor-pointer w-8 z-3 h-8 text-xl`}
            />
          )}
        </div>

        <nav
          className={`${
            isOpen ? "opacity-0 top-[-400px]" : "opacity-1 top-0"
          } pt-8 pb-6 lg:pb-0 lg:py-0 lg:bg-inherit bg-secondary lg:text-inherit text-black lg:flex lg:items-center z-[-1] lg:z-auto lg:static absolute w-full left-0 lg:w-auto lg:pl-0 lg:opacity-100 transition-all`}
        >
          <ul className="flex flex-col lg:flex-row items-start justify-start mt-4 lg:mt-0 z-10">
            <li className="w-full lg:mx-4 px-2 lg:my-0">
              <Link
                onClick={handleIsOpen}
                href={`${lang}/#home`}
                className="w-full px-2 lg:py-0 lg:px-0 text-xl rounded-r-sm  md:text-lg duration-500   lg:font-normal lg:bg-background hover:shadinner hover:bg-opacity-70 bg-opacity-0 transition-opacity lg:hover:bg-background lg:hover:bg-opacity-1 lg:bg-opacity-1"
              >
                Home
              </Link>
            </li>
            <li className="w-full lg:mx-4 px-2 lg:my-0">
              <Link
                onClick={handleIsOpen}
                href={`${lang}/#projects`}
                className="w-full px-2 lg:py-0 lg:px-0 text-xl rounded-r-sm  md:text-lg duration-500   lg:font-normal lg:bg-background hover:shadinner hover:bg-opacity-70 bg-opacity-0 transition-opacity lg:hover:bg-background lg:hover:bg-opacity-1 lg:bg-opacity-1"
              >
                Projects
              </Link>
            </li>
            <li className="w-full lg:mx-4 px-2 lg:my-0">
              <Link
                onClick={handleIsOpen}
                href={`${lang}/#about`}
                className="w-full px-2 lg:py-0 lg:px-0 text-xl rounded-r-sm md:text-lg duration-50   lg:font-normal lg:bg-background hover:shadinner hover:bg-opacity-70 bg-opacity-0 transition-opacity lg:hover:bg-background lg:hover:bg-opacity-1 lg:bg-opacity-1"
              >
                About
              </Link>
            </li>
            <li className="w-full lg:mx-4 px-2 lg:my-0">
              <Link
                onClick={handleIsOpen}
                href={`${lang}/#contact`}
                className="w-full px-2 lg:py-0 lg:px-0 text-xl rounded-r-sm md:text-lg duration-500   lg:font-normal lg:bg-background hover:shadinner hover:bg-opacity-70 bg-opacity-0 transition-opacity lg:hover:bg-background lg:hover:bg-opacity-1 lg:bg-opacity-1"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex justify-start items-center px-4 lg:px-2 gap-2 mt-[8px] lg:mt-0">
            <LangSwitcher lang={lang} className="ml-0 lg:ml-6 \" />

            <Button className="lg:order-first md:order-last whitespace-nowrap w-auto lg:w-full">
              <Link
                href="#contact"
                className="px-4 md:font-bold"
                onClick={handleIsOpen}
              >
                Get started
              </Link>
            </Button>
          </div>
        </nav>
      </header>
    </>
  )
}
