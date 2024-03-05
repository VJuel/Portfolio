"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const images = [
  "/home/ecommerce.png",
  "/home/netflix.png",
  "/home/omnifood.png",
  "/home/outdoors.png",
]

export default function CarouselHome() {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={
        [
          // Autoplay({
          //   delay: 2400,
          // }),
        ]
      }
      className="basis-1/3 w-full max-w-md justify-center items-center h-full"
    >
      <CarouselContent className="h-full w-full">
        {images.map((srcImg, index) => (
          <CarouselItem
            key={index}
            className="embla__slide basis-1 h-full w-full"
          >
            <div className="p-1 h-full">
              <Card>
                <CardContent className="flex items-center justify-center p-0 overflow-hidden h-full shadow-sm">
                  <Image
                    alt={"Project Image"}
                    key={index}
                    src={srcImg}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-xs"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden lg:flex" />
      <CarouselNext className="hidden lg:flex" />
    </Carousel>
  )
}
