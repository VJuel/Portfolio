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
      plugins={[
        Autoplay({
          delay: 2800,
        }),
      ]}
      className="basis-1 w-full max-w-sm h-[400px] justify-center items-center"
    >
      <CarouselContent>
        {images.map((srcImg, index) => (
          <CarouselItem key={index} className="basis-2/3 xs:basis-inherit">
            <div className="p-1 h-full">
              <Card>
                <CardContent className="flex items-center justify-center p-0 overflow-hidden h-auto">
                  <Image
                    key={index}
                    src={srcImg}
                    width={400}
                    height={400}
                    className="w-full h-full cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
