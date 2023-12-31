"use client"
import Link from "next/link"
import ImageBlur from "@/components/Image"
import Image from "next/image"
import me from "@/public/moi.png"
import meColor from "@/public/mecolor.png"
import hoverme from "@/public/hoverme.svg"
import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import clsx from "clsx"

export default function Hero({ dict, lang }) {
  const router = useRouter()
  const imgClass = `w-[80%] lg:w-full lg:h-full rounded-lg shadow-md z-[-1]`
  const [circleAttributes, setCircleAttributes] = useState({
    cx: 300,
    cy: 0,
    r: 0,
  })
  const [isMediaQuery, setIsMediaQuery] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    if (typeof window != "undefined") {
      setIsMediaQuery(window.matchMedia("(max-width: 900px)").matches)
      const containerImage = containerRef.current

      const handleMouseMove = (e) => {
        const rect = containerImage.getBoundingClientRect()
        isMediaQuery.matches
          ? (containerImage.style.cursor = "normal")
          : (containerImage.style.cursor = "none")
        setCircleAttributes({
          cx: e.clientX - rect.left,
          cy: e.clientY - rect.top,
          r: isMediaQuery.matches ? 60 : 140,
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
            <h2 className="mb-[18px] lg:mb-4 text-3xl">{dict.title}</h2>
            <div className="hidden lg:block animate-title-discover h-full bg-secondary absolute top-0 left-0 rounded-[2px]"></div>
          </div>

          <p className="mb-2 green animate-fade-in animation-delay-200">
            <span>{dict.description.p1}</span>
            <span>{dict.description.p11}</span>
            <span>{dict.description.p12}</span>
          </p>
          <p className="mb-2 green animate-fade-in animation-delay-400">
            <span>{dict.description.p2}</span>
            <span>{dict.description.p21}</span>
            {dict.description.p22}
          </p>
          <p className="mb-2 green animate-fade-in animation-delay-600">
            {dict.description.p3}
          </p>
          <Button
            onClick={() => router.push("/#contact")}
            className="mt-4 animate-fade-in animation-delay-800 w-fit"
          >
            <Link href="contact">{dict.description.btn}</Link>
          </Button>
        </div>
        <div
          ref={containerRef}
          className="imgcontainer lg:block relative md:w-[70%] lg:w-1/2 h-auto max-w-2xl flex justify-center z-1"
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

          {!isMediaQuery ? (
            <>
              <svg width="0" height="0" border="2px">
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
                width={300}
                height={300}
                alt="Picture of the author"
                className={clsx(
                  imgClass,
                  `heroImg !absolute top-0 left-0 z-1 shadow-md min-h-[300px] min-w-[300px]`
                )}
              />

              <Image
                src={hoverme}
                width={250}
                height={250}
                alt="Hover me"
                className={clsx(
                  `transition-all duration-_250ms_ animation-spin lg:w-[250px] hidden lg:block !absolute -top-[6rem] lg:-top-[7rem] -right-[4rem] lg:-right-[4rem] xl:-right-[7rem] -z-10`
                )}
              />
            </>
          ) : null}

          <div className="animate-fade-img min-w-[300px] w-[80%] z-[-1] absolute border-2 border-black rounded-sm lg:w-full h-full top-0 left-1/2 -translate-x-1/2 m-auto" />
        </div>
      </div>
    </section>
  )
}
