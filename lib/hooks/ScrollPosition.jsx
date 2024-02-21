"use client"
import { useState, useEffect } from "react"
const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(
    typeof window !== "undefined" ? window.scrollY : 0
  )
  useEffect(() => {
    const setScrollPositionCallback = () => setScrollPosition(window.scrollY)
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", setScrollPositionCallback)
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", setScrollPositionCallback)
      }
    }
  }, [])
  return scrollPosition
}

export default useScrollPosition
