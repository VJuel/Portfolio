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

const useScrollPosition = () => {
  const [hasScrolled, setHasScrolled] = useState(false)
  const isClient = useClientSideEffect()

  useEffect(() => {
    const scrollPosition = window.scrollY
    const isScrollable =
      document.documentElement.scrollHeight >
      document.documentElement.clientHeight

    // Vérifier s'il y a eu un défilement (si la position de scroll est > 0) ou si la page est défilable
    if (scrollPosition > 0 || isScrollable) {
      setHasScrolled(true)
    }

    if (scrollPosition === 0) {
      setHasScrolled(false)
    }

    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return hasScrolled
}

export default useScrollPosition
