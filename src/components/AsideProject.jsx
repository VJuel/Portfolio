import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react"

// <AsideProject
//   project={project}
//   currentIndex={currentIndex}
//   handleNext={handleNext}
//   handlePrev={handlePrev}
// />

export function AsideProject(
  animating,
  project,
  currentIndex,
  handleNext,
  handlePrev
) {
  const projetData = Object.values(project)

  return (
    <>
      {projetData
        .filter((_, index) => index === currentIndex)
        .map((project, index) => (
          <SheetContent
            className={clsx(
              animating ? "hidden" : "",
              index === currentIndex ? "fade-enter-active" : "fade-exit-active",
              "w-[400px] sm:w-[800px] lg:max-w-2xl overflow-scroll"
            )}
          >
            <SheetHeader className="flex justify-center items-center md:justify-start md:items-start p-2 pl-6 md:p-auto">
              <SheetTitle className="text-2xl">{project.title}</SheetTitle>
              <SheetDescription>{project.description}</SheetDescription>
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
              {index !== 0 && (
                <Button
                  variant="ghost"
                  onClick={handlePrev}
                  className="mr-auto w-fit text-xl"
                >
                  <FaRegArrowAltCircleLeft />
                </Button>
              )}

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
    </>
  )
}
