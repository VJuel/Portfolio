"use client"
import { useEffect, useState } from "react"
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function NavBar() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isOpen, setIsOpen] = useState(true)
  useEffect(() => {
    if (typeof window != "undefined") {
      const updatePosition = () => {
        setScrollPosition(window.scrollY)
      }

      window.addEventListener("scroll", updatePosition)
      updatePosition()

      return () => window.removeEventListener("scroll", updatePosition)
    }
  }, [])

  return (
    <>
      <header
        className={`${
          scrollPosition === 0
            ? "border-b-0 py-2"
            : "shadow border-1 border-b-black py-1"
        } animate-fade-in-down z-50 transition-all duration-_250ms_ px-4 sm:px-10 bg-background flex md:items-center justify-between sticky top-0`}
      >
        <div className="flex justify-center items-center md:w-1/2 md:justify-start md:items-start">
          <Image
            className="z-[-1]"
            src="vwsolution.svg"
            sizes="(min-width: 1024px) 50px 50px, (max-width: 1024px) 60px, 100px"
            width={100}
            height={100}
            alt="logo"
          />
        </div>

        {/*Burger*/}
        <div className={"block"}>
          {isOpen ? (
            <HiMenuAlt3
              onClick={() => {
                setIsOpen(!isOpen)
              }}
              className={`${
                isOpen ? "block" : "hidden"
              } lg:hidden cursor-pointer w-8 h-8 text-xl`}
            />
          ) : (
            <HiOutlineX
              onClick={() => {
                setIsOpen(!isOpen)
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
          } pb-6 lg:pb-0 lg:py-0 lg:bg-inherit bg-secondary lg:text-inherit text-black lg:flex lg:items-center z-[-1] lg:z-auto lg:static absolute w-full left-0 lg:w-auto lg:pl-0 lg:opacity-100 transition-all`}
        >
          <ul className="flex flex-col lg:flex-row items-start justify-start mt-4 lg:mt-0 z-10">
            <li className="w-full lg:mx-4 px-2 lg:my-0">
              <Link
                href="#home"
                className="w-full px-2 lg:py-0 lg:px-0 text-xl rounded-r-sm  md:text-lg duration-500 font-semibold lg:font-normal lg:bg-background hover:shadinner hover:bg-opacity-70 bg-opacity-0 transition-opacity lg:hover:bg-background lg:hover:bg-opacity-1 lg:bg-opacity-1"
              >
                Home
              </Link>
            </li>
            <li className="w-full lg:mx-4 px-2 lg:my-0">
              <Link
                href="#projects"
                className="w-full px-2 lg:py-0 lg:px-0 text-xl rounded-r-sm  md:text-lg duration-500 font-semibold lg:font-normal lg:bg-background hover:shadinner hover:bg-opacity-70 bg-opacity-0 transition-opacity lg:hover:bg-background lg:hover:bg-opacity-1 lg:bg-opacity-1"
              >
                Projects
              </Link>
            </li>
            <li className="w-full lg:mx-4 px-2 lg:my-0">
              <Link
                href="#about"
                className="w-full px-2 lg:py-0 lg:px-0 text-xl rounded-r-sm md:text-lg duration-50 font-semibold lg:font-normal lg:bg-background hover:shadinner hover:bg-opacity-70 bg-opacity-0 transition-opacity lg:hover:bg-background lg:hover:bg-opacity-1 lg:bg-opacity-1"
              >
                About
              </Link>
            </li>
            <li className="w-full lg:mx-4 px-2 lg:my-0">
              <Link
                href="#contact"
                className="w-full px-2 lg:py-0 lg:px-0 text-xl rounded-r-sm md:text-lg duration-500 font-semibold lg:font-normal lg:bg-background hover:shadinner hover:bg-opacity-70 bg-opacity-0 transition-opacity lg:hover:bg-background lg:hover:bg-opacity-1 lg:bg-opacity-1"
              >
                Contact
              </Link>
            </li>
          </ul>
          <Button className="ml-2 lg:ml-6 whitespace-nowrap w-auto lg:w-full">
            <Link href="#contact" className="px-4">
              Get started
            </Link>
          </Button>
        </nav>
      </header>
    </>
  )
}
