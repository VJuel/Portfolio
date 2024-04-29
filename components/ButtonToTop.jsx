"use client"
import { FaArrowUp } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import Spinner from "./Spinner"

export function ButtonToTop() {
  function topFunction() {
    if (typeof window !== "undefined") {
      document.body.scrollTop = 0 // For Safari
      document.documentElement.scrollTop = 0
    }
  }

  return (
    <>
      <Button
        className="absolute bottom-10 right-6 lg:bottom-10 lg:right-10 rounded-[100%] shadow-xl w-10 h-10 md:w-12 md:h-12 flex justify-center items-center bg-primary text-secondary text-xl px-3 py-3 hover:bg-secondary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary m-auto"
        onClick={topFunction}
      >
        <FaArrowUp size={32} />
      </Button>
    </>
  )
}
