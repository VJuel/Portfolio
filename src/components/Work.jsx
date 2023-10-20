"use client"
import { projects } from "@/lib/projects"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import clsx from "clsx"
import {
  FaExternalLinkAlt,
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa"
import Spinner from "@/components/Spinner"
import { useRouter, usePathname } from "next/navigation"

export default function Work() {
  const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const pathname = usePathname()
  const router = useRouter()
  const projetData = Object.values(projects)
  const [animating, setAnimating] = useState(false)
  const toggle = useRef(null)

  useEffect(() => {
    if (typeof document !== "undefined") {
      console.log(toggle)

      toggle.current.classList.toggle("active")
    }
  }, [animating])

  const handleNext = () => {
    if (currentIndex < projetData.length - 1) {
      setAnimating(true)
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1)
        setAnimating(false)
      }, 300)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setAnimating(true)
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1)
        setAnimating(false)
      }, 300)
    }
  }

  return (
    <section className="w-full h-auto pb-8 my-[4.5rem]" id="projects">
      <div className="py-6">
        <h2 className="mb-6">Mes Projets</h2>
        <div className="w-full max-w-6xl flex m-auto justify-center items-center ">
          <div className="flex-col md:flex-row flex flex-wrap w-full justify-center gap-4 [&>button]:z-10">
            {projects.map((project, index) => (
              <Sheet key={index}>
                <SheetTrigger
                  className={clsx(
                    "w-[calc(80%-1rem)] lg:w-[calc(40%-1rem)] min-h-[250px]"
                  )}
                >
                  <div
                    onClick={() => {
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
                      fill={true}
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
                            transitionDelay: `${index * 0.1 + 0.1}s`,
                            AnimationDelay: `${index * 0.1 + 0.1}s`,
                          }}
                          className={clsx(
                            "cursor-pointer",
                            "hover:bg-primary",
                            "animation-badge",
                            "badge",
                            "z-50",
                            "transitiom-all",
                            "opacity-0"
                          )}
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </SheetTrigger>
                {projetData
                  .filter((_, index) => index === currentIndex)
                  .map((project, index) => (
                    <SheetContent
                      ref={toggle}
                      className={clsx(
                        "w-[400px] sm:w-[800px] lg:max-w-2xl overflow-scroll"
                      )}
                    >
                      <SheetHeader
                        className={clsx(
                          "content-project flex justify-center items-center md:justify-start md:items-start p-2 pl-6 md:p-auto",
                          index === currentIndex ? "active" : ""
                        )}
                      >
                        <SheetTitle className="text-2xl">
                          {project.title}
                        </SheetTitle>
                        <SheetDescription>
                          {project.description}
                        </SheetDescription>
                        <Image src={project.image} width={600} height={450} />
                        {project.imgproject.map((image, index) => (
                          <Image
                            key={index}
                            src={image}
                            width={700}
                            height={450}
                            loader={Spinner}
                            unoptimized
                          />
                        ))}
                      </SheetHeader>
                      <div className="flex justify-center items-center mt-4">
                        <Button
                          variant="ghost"
                          onClick={handlePrev}
                          className="mr-auto w-fit text-xl"
                        >
                          <FaRegArrowAltCircleLeft />
                        </Button>
                        <Button className="text-center m-auto">
                          <Link
                            className="flex justify-center items-center gap-2"
                            href="/"
                          >
                            Accédez au site <FaExternalLinkAlt />
                          </Link>
                        </Button>
                        <Button
                          onClick={handleNext}
                          variant="ghost"
                          className="ml-auto w-fit text-xl"
                        >
                          <FaRegArrowAltCircleRight />
                        </Button>
                      </div>
                    </SheetContent>
                  ))}
              </Sheet>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
