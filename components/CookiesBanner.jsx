"use client"
import { useEffect, useState } from "react"
import { createCookies } from "@/lib/actions"

export default function CookiesBanner() {
  const [isBannerVisible, setIsBannerVisible] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasConsent = localStorage.getItem("hasConsent")

      if (!hasConsent) {
        setIsBannerVisible(true)
      }
    }
  }, [])

  const handleConsent = () => {
    localStorage.setItem("hasConsent", true)
    setIsBannerVisible(false)
  }

  return (
    <div className="absolute bottom-0 left-0 flex justify-center items-center h-screen">
      <form className="" action={createCookies}>
        {isBannerVisible && (
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-800 text-white p-4 text-center">
            <p>
              This website uses cookies to enhance the user experience.{" "}
              <button className="underline" onClick={handleConsent}>
                I agree
              </button>
            </p>
          </div>
        )}
      </form>
    </div>
  )
}
