"use client"
import { useEffect, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import clsx from "clsx"
import { montserrat } from "../fonts"

export default function CookiesModal({ children }) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClient(true)
    }, 300)
    return () => clearTimeout(timer) // nettoyer le timer si le composant est démonté avant que le délai ne soit écoulé
  }, [])

  return (
    <>
      {isClient && (
        <Dialog defaultOpen={true}>
          <DialogContent className="gap-2 p-8">
            <DialogHeader>
              <DialogTitle className={clsx(montserrat.className)}>
                Paramètres des cookies
              </DialogTitle>
            </DialogHeader>
            {children}
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}
