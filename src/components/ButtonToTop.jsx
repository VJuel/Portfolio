"use client"
import { FaArrowUp } from "react-icons/fa"
import { Button } from "@/components/ui/Button"

export function ButtonToTop() {
  function topFunction() {
    if (typeof window !== "undefined") {
      document.body.scrollTop = 0 // For Safari
      document.documentElement.scrollTop = 0
    } // For Chrome, Firefox, IE and Opera
  }

  return (
    <>
      <Button
        className="absolute bottom-8 right-4 rounded-[100%] shadow-xl w-12 h-12 flex justify-center items-center bg-primary text-secondary text-xl"
        onClick={topFunction}
      >
        <FaArrowUp />
      </Button>
    </>
  )
}
