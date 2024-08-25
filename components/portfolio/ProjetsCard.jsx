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
import { ExternalLink, ArrowLeftCircle, ArrowRightCircle } from "lucide-react"

export default function ProjetsCard({ lang }) {
  const pathname = usePathname()
  const router = useRouter()
  const projetData = Object.values(projects)
  const sheetRef = useRef()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const [animating, setAnimating] = useState(false)
  const [observer, setObserver] = useState(null)

  useEffect(() => {
    if (sheetRef.current) {
      if (sheetRef.current.getAttribute("data-state") === "closed") {
        router.replace(pathname)
      }
    }
  }, [pathname, router])

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
    <div className="flex-col md:flex-row flex flex-wrap w-full justify-center items-center gap-4 [&>button]:z-10">
      {projects.map((project, index) => (
        <Sheet key={project.title}>
          <SheetTrigger
            className={clsx(
              "w-full md:w-[70%] lg:w-[calc(40%-1rem)] h-[250px]"
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
                src={project.images[0]}
                alt={project.title}
                loading="lazy"
                width={500}
                height={500}
                style={{ objectFit: "cover" }}
                className="object-cover absolute top-0 left-0 -z-10 w-full h-full"
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
            <SheetHeader
              className={clsx(
                animating ? "active" : "notactive",
                "transition content-project duration-1000 flex justify-center items-center md:justify-start md:items-start p-2 pl-6 md:p-auto"
              )}
            >
              {projetData
                .filter((_, index) => index === currentIndex)
                .map((project, index) => (
                  <Fragment key={project.title}>
                    <SheetTitle className="text-2xl">
                      {project.title}
                    </SheetTitle>
                    <SheetDescription>
                      {project.description[lang]}
                    </SheetDescription>

                    {project.images.map((image, index) => (
                      <Image
                        key={index}
                        src={image}
                        width={700}
                        loading="lazy"
                        height={450}
                        alt={project.title}
                      />
                    ))}

                    {project?.github !== "" && (
                      <p>
                        Lisez le
                        <Link
                          href={project.github}
                          className="pl-1 border-none !text-blue-700 text-center before:content-none"
                        >
                          READ.ME Github
                        </Link>
                      </p>
                    )}

                    {project?.link !== "" && (
                      <div className="w-full flex justify-center items-center pt-6">
                        <Button className="text-center m-auto">
                          <Link
                            className="flex justify-center items-center gap-2 text-white"
                            href={project?.link ? project.link : ""}
                            target="_blank"
                          >
                            Accédez au site <ExternalLink />
                          </Link>
                        </Button>
                      </div>
                    )}
                  </Fragment>
                ))}
            </SheetHeader>

            <div className="flex justify-center items-center mt-2 w-full">
              {currentIndex !== 0 && (
                <>
                  <Button
                    variant="ghost"
                    onClick={handlePrev}
                    className="mr-auto w-fit text-xl"
                  >
                    <ArrowLeftCircle />
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
                    <ArrowRightCircle />
                  </Button>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
