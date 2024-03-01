"use client"
import { useState, useEffect, useRef } from "react"
import ImageBlur from "@/components/Image"
import Image from "next/image"
import me from "@/public/moi.png"
import meColor from "@/public/mecolor.png"
import hoverme from "@/public/hoverme.svg"
import clsx from "clsx"

export default function ImageHero() {
  const imgClass = `w-[80%] lg:w-full lg:h-full rounded-lg shadow-md z-10`
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
          r: isMediaQuery.matches ? 60 : 110,
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
    <div
      ref={containerRef}
      className="imgcontainer lg:block relative md:w-[70%] lg:w-[40%] h-auto max-w-2xl flex justify-center z-1"
    >
      <ImageBlur
        src={me}
        width={500}
        height={500}
        alt="Picture of the author"
        className={clsx(
          imgClass,
          "animate-fade-img z-10 shadow-md min-h-[250px] lg:min-h-[300px] min-w-[300px] relative"
        )}
        onError={() => setSrc("/assets/image-error.png")}
      />

      {!isMediaQuery ? (
        <>
          <svg width="0" height="0" border="2px">
            <clipPath id="clipping">
              <circle
                stroke="black"
                strokeWidth="2"
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
              `heroImg !absolute top-0 left-0 z-10 shadow-md min-h-[300px] min-w-[300px]`
            )}
          />
        </>
      ) : null}

      <div className="animate-fade-img min-w-[300px] w-[80%] z-10 absolute border-2 border-black rounded-sm lg:w-full h-full top-0 left-1/2 -translate-x-1/2 m-auto" />
    </div>
  )
}
