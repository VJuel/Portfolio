"use client"
import useScrollPosition from "@/lib/hooks/useScrollPosition"
import { useEffect, useState } from "react"

export function Header({ children }) {
  const hasScrolled = useScrollPosition()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Conditionnellement appliquer les classes en fonction de la position de défilement ET
  // si l'exécution se fait côté client (après le montage du composant)
  const headerClass = hasScrolled
    ? "shadow border border-b-slate-400 py-1"
    : "bg-transparent border-b-0 py-2"

  return (
    <header
      className={`${headerClass} animate-fade-in-down z-50 transition-all duration-200ms px-4 lg:px-8 sm:px-6 bg-background flex items-center justify-between fixed top-0 w-full`}
    >
      {children}
    </header>
  )
}
