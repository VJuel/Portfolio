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
        className="absolute bottom-10 right-6 lg:bottom-10 lg:right-10 rounded-[100%] shadow-xl w-12 h-12 flex justify-center items-center bg-primary text-secondary text-xl"
        onClick={topFunction}
      >
        <FaArrowUp />
      </Button>
    </>
  )
}
