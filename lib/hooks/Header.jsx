"use client"
import { useState, useEffect } from "react"

function useClientSideEffect() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true) // The window is available, so we must be on the client
    }
  }, [])

  return isClient
}

export default function Header({ children }) {
  const isClient = useClientSideEffect()
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    // This function will be called whenever the scroll event is triggered on the window
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    if (isClient) {
      window.addEventListener("scroll", handleScroll)

      // Cleanup scroll event listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [isClient])

  return (
    <header
      className={`${
        scrollPosition === 0
          ? "bg-transparent border-b-0 py-2"
          : "shadow border border-b-slate-400 py-1"
      } animate-fade-in-down z-50 transition-all duration-200ms px-4 lg:px-8 sm:px-6 bg-background flex items-center justify-between fixed top-0 w-full`}
    >
      {children}
    </header>
  )
}
