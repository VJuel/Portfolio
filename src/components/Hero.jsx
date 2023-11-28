"use client"
import Link from "next/link"
import ImageBlur from "@/components/Image"
import Image from "next/image"
import me from "../../public/moi.png"
import meColor from "../../public/mecolor.png"
import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import clsx from "clsx"

export default function Hero() {
  const router = useRouter()
  const imgClass = `w-[80%] lg:w-full lg:h-full rounded-lg shadow-md z-[-1]`
  const [circleAttributes, setCircleAttributes] = useState({
    cx: 300,
    cy: 0,
    r: 0,
  })
  const containerRef = useRef(null)

  useEffect(() => {
    if (typeof window != "undefined") {
      let mql = window.matchMedia("(max-width: 900px)")
      const containerImage = containerRef.current

      const handleMouseMove = (e) => {
        const rect = containerImage.getBoundingClientRect()
        containerImage.style.cursor = "none"
        setCircleAttributes({
          cx: e.clientX - rect.left,
          cy: e.clientY - rect.top,
          r: mql.matches ? 60 : 140,
        })
      }

      const handleMouseLeave = () => {
        setCircleAttributes((prevAttributes) => ({ ...prevAttributes, r: 0 }))
      }

      if (containerImage) {
        containerImage.addEventListener("mousemove", handleMouseMove)
        containerImage.addEventListener("mouseleave", handleMouseLeave)
      }

      return () => {
        if (containerImage) {
          containerImage.removeEventListener("mousemove", handleMouseMove)
          containerImage.removeEventListener("mouseleave", handleMouseLeave)
        }
      }
    }
  })

  return (
    <section
      id="home"
      className={`lg:h-[calc(100vh_-_84px)] clip-hero transition-all duration-_ 1s_ flex justify-center items-center`}
    >
      <div className="max-w-7xl w-full flex flex-col lg:flex-row p-4 lg:p-10 gap-12 lg:gap-0 justify-center items-center">
        <div className="w-full lg:w-1/2 pr-0 lg:pr-10 text-center lg:text-left">
          <div className="relative z-0 pl-4">
            <h1 className="text-4xl">Vicktor Juhel</h1>
            <h2 className="text-3xl">Developpeur Web</h2>
            <h2 className="mb-[18px] lg:mb-4 text-3xl">Fullstack</h2>
            <div className="hidden lg:block animate-title-discover h-full bg-secondary absolute top-0 left-0 rounded-[2px]"></div>
          </div>

          <p className="mb-2 green animate-fade-in animation-delay-200">
            Vous recherchez un Développeur Web <br />
            jeune, dynamique et motivé
            <br />
            pour une mission de courte ou longue durée.
          </p>
          <p className="mb-2 purple animate-fade-in animation-delay-400">
            Sous contrat en CDD ou CDI ou même Freelance,
            <br />
            je vous propose
            <br />
            mes compétences et mon éxpérience.
          </p>
          <p className="mb-2 orange animate-fade-in animation-delay-600">
            Mon profil vous intéresse ?
          </p>
          <Button
            onClick={() => router.push("#contact")}
            className="mt-4 animate-fade-in animation-delay-800 w-fit"
          >
            <Link href="contact">Contactez-moi !</Link>
          </Button>
        </div>
        <div
          ref={containerRef}
          className="imgcontainer lg:block relative w-full lg:w-1/2 h-auto max-w-2xl flex justify-center z-1"
        >
          <ImageBlur
            src={me}
            width={500}
            height={500}
            alt="Picture of the author"
            className={clsx(
              imgClass,
              "animate-fade-img z-1 shadow-md min-h-[250px] lg:min-h-[300px] min-w-[300px] relative"
            )}
            onError={() => setSrc("/assets/image-error.png")}
          />

          <svg width="0" height="0">
            <clipPath id="clipping">
              <circle
                cx={circleAttributes.cx}
                cy={circleAttributes.cy}
                r={circleAttributes.r}
                id="target"
              />
            </clipPath>
          </svg>

          <Image
            src={meColor}
            width={500}
            height={500}
            alt="Picture of the author"
            className={clsx(
              imgClass,
              `heroImg !absolute top-0 left-0 z-1 shadow-md min-h-[300px] min-w-[300px]`
            )}
          />

          <Image
            src="/hoverme.svg"
            width={250}
            height={250}
            alt="Hover me"
            className={clsx(
              `transition-all duration-_250ms_ animation-spin lg:w-[250px] hidden lg:block !absolute -top-[6rem] lg:-top-[7rem] -right-[4rem] lg:-right-[4rem] xl:-right-[7rem] -z-10`
            )}
          />
          <div className="animate-fade-img min-w-[300px] w-[80%] z-[-1] absolute border-2 border-black rounded-sm lg:w-full h-full top-0 left-1/2 -translate-x-1/2 m-auto" />
        </div>
      </div>
    </section>
  )
}
