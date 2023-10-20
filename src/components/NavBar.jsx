"use client"
import { useEffect, useState } from "react"
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi"
import clsx from "clsx"
import { Button } from "@/components/ui/Button"
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
            ? "border-b-0 py-6"
            : "shadow border-1 border-b-black py-4"
        } z-50 transition-all duration-[250ms] px-10 bg-background flex md:items-center justify-between sticky top-0`}
      >
        <div className="flex justify-center items-center md:w-1/2 md:justify-start md:items-start">
          <h2
            className={clsx(
              "moli",
              "text-3xl",
              "font-medium",
              "cursor-pointers",
              "m-0",
              "flex",
              "justify-end",
              "items-end",
              "gap-2",
              'text-black", "z-30'
            )}
          >
            Portfolio
            <span className="flex justify-baseline rounded-lg bg-secondary w-3 h-3 mb-1.5"></span>
          </h2>
        </div>

        {/*Burger*/}
        <div className="block">
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
          } lg:bg-inherit bg-gray-100 lg:text-inherit text-black lg:flex lg:items-center z-[-1] lg:z-auto lg:static absolute w-full left-0 lg:w-auto lg:py-0 py-4 lg:pl-0 p-9 lg:opacity-100 transition-all`}
        >
          <ul className="flex flex-col lg:flex-row items-start justify-start mt-4 lg:mt-0 z-10">
            <li className="lg:mx-4 my-6 lg:my-0 mt-8">
              <Link href="#home" className="text-xl duration-500">
                Home
              </Link>
            </li>
            <li className="lg:mx-4 my-6 lg:my-0">
              <Link href="#projects" className="text-xl duration-500">
                Projects
              </Link>
            </li>
            <li className="lg:mx-4 my-6 lg:my-0">
              <Link href="#about" className="text-xl duration-500">
                About
              </Link>
            </li>
            <li className="lg:mx-4 my-6 lg:my-0">
              <Link href="#contact" className="text-xl duration-500">
                Contact
              </Link>
            </li>
            <Button className="ml-6 whitespace-nowrap w-full">
              <Link href="#contact">Get started</Link>
            </Button>
          </ul>
        </nav>
      </header>
    </>
  )
}
