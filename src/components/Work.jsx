"use client"

import { useRef, useState, useEffect } from "react"
import { Fragment } from "react"
import { useRouter, usePathname } from "next/navigation"
import { projects } from "@/lib/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import clsx from "clsx"
import {
  FaExternalLinkAlt,
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa"
import Spinner from "@/components/Spinner"

export default function Work() {
  const pathname = usePathname()
  const router = useRouter()
  const projetData = Object.values(projects)
  const sheetRef = useRef()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const [animating, setAnimating] = useState(false)
  const [observer, setObserver] = useState(null)

  useEffect(() => {
    const checkAndObserve = () => {
      if (sheetRef.current) {
        const newObserver = new MutationObserver((mutationsList) => {
          for (let mutation of mutationsList) {
            if (
              mutation.type === "attributes" &&
              mutation.attributeName === "data-state"
            ) {
              if (sheetRef.current.getAttribute("data-state") === "closed") {
                console.log("closed")
                router.replace(pathname)
              }
            }
          }
        })

        newObserver.observe(sheetRef.current, { attributes: true })
        setObserver(newObserver)
      } else {
        // Si l'élément n'est pas encore monté, on vérifie à nouveau après un délai
        setTimeout(checkAndObserve, 100)
      }
    }

    if (typeof window !== "undefined") {
      checkAndObserve()
    }

    return () => {
      if (observer) {
        observer.disconnect()
      }
    }
  }, [observer])

  const handleNext = () => {
    if (currentIndex < projetData.length - 1) {
      setAnimating(true)
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1)
        setAnimating(false)
      }, 400)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setAnimating(true)
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1)
        setAnimating(false)
      }, 400)
    }
  }

  return (
    <section className="w-full h-auto pb-8 mt-[4.5rem]" id="projects">
      <div className="py-6">
        <h2 className="mb-6">Mes Projets</h2>
        <div className="w-full max-w-6xl flex m-auto justify-center items-center ">
          <div className="flex-col md:flex-row flex flex-wrap w-full justify-center items-center gap-4 [&>button]:z-10">
            {projects.map((project, index) => (
              <Sheet key={project.title}>
                <SheetTrigger
                  className={clsx(
                    "w-[calc(90%-1rem)] lg:w-[calc(40%-1rem)] h-[250px]"
                  )}
                >
                  <div
                    onClick={() => {
                      setCurrentIndex(index)
                      setOpen(!open)
                      router.replace(pathname + "?=" + project.title)
                    }}
                    className={clsx(
                      "shadow-md relative flex flex-col justify-center items-center border-2 z-1 overflow-hidden border-black rounded-sm py-6 cursor-pointer card-work h-full"
                    )}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      width={500}
                      height={500}
                      style={{ objectFit: "cover" }}
                      className="object-cover absolute top-0 left-0 -z-10 w-full h-full"
                      onError={() => setSrc("/error.png")}
                    />
                    <h3 className="text-2xl text-center mb-4 z-50 opacity-0">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-1 w-[90%] lg:w-1/2 justify-center">
                      {project.technologies.map((badge, index) => (
                        <Badge
                          key={index}
                          style={{
                            transitionDelay: `${index * 0.1 + 0.3}s`,
                            AnimationDelay: `${index * 0.1 + 0.1}s`,
                          }}
                          className={clsx(
                            "cursor-pointer",
                            "hover:bg-primary",
                            "animation-badge",
                            "badge",
                            "z-50",
                            "opacity-0"
                          )}
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </SheetTrigger>
                <SheetContent
                  ref={sheetRef}
                  className={clsx(
                    "w-[400px] sm:w-[800px] lg:max-w-2xl overflow-scroll"
                  )}
                  data-test="test"
                >
                  {projetData
                    .filter((_, index) => index === currentIndex)
                    .map((project, index) => (
                      <Fragment key={project.title}>
                        <SheetHeader
                          className={clsx(
                            animating ? "active" : "notactive",
                            "transition content-project duration-1000 flex justify-center items-center md:justify-start md:items-start p-2 pl-6 md:p-auto"
                          )}
                        >
                          <SheetTitle className="text-2xl">
                            {project.title}
                          </SheetTitle>
                          <SheetDescription>
                            {project.description}
                          </SheetDescription>
                          {!project.imgpgroup ? (
                            <Image
                              src={project.image}
                              width={700}
                              height={450}
                              alt={project.title}
                            />
                          ) : null}

                          {project.imgproject &&
                            project.imgproject.map((image, index) => (
                              <Fragment key={index}>
                                <Image
                                  src={image}
                                  width={700}
                                  loading="lazy"
                                  height={450}
                                  loader={Spinner}
                                  unoptimized
                                  alt={project.title}
                                />
                              </Fragment>
                            ))}
                          {project.imgpgroup &&
                            project.imgpgroup.map((imageGroup, index) => (
                              <Fragment key={index}>
                                <h3 className="font-semibold">
                                  {imageGroup.title}
                                </h3>
                                {imageGroup.images.map((image, index) => (
                                  <Image
                                    key={index}
                                    src={image}
                                    loading="lazy"
                                    width={700}
                                    height={450}
                                    loader={Spinner}
                                    unoptimized
                                    alt={project.title}
                                  />
                                ))}
                              </Fragment>
                            ))}
                          <div className="w-full flex justify-center items-center pt-6">
                            <Button className="text-center m-auto">
                              <Link
                                className="flex justify-center items-center gap-2"
                                href={project.link}
                                target="_blank"
                              >
                                Accédez au site <FaExternalLinkAlt />
                              </Link>
                            </Button>
                          </div>
                        </SheetHeader>

                        <div className="flex justify-center items-center mt-2 w-full">
                          {currentIndex !== 0 && (
                            <>
                              <Button
                                variant="ghost"
                                onClick={handlePrev}
                                className="mr-auto w-fit text-xl"
                              >
                                <FaRegArrowAltCircleLeft />
                              </Button>
                            </>
                          )}

                          {currentIndex < projetData.length - 1 && (
                            <>
                              <Button
                                onClick={handleNext}
                                variant="ghost"
                                className="ml-auto w-fit text-xl"
                              >
                                <FaRegArrowAltCircleRight />
                              </Button>
                            </>
                          )}
                        </div>
                      </Fragment>
                    ))}
                </SheetContent>
              </Sheet>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
