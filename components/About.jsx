"use client"
import Image from "next/image"
import aboutImg from "@/public/about.svg"

export default function About({ dict }) {
  return (
    <section
      id="about"
      className="mt-[4.5rem] bg-white transition-all duration-1 flex justify-center"
    >
      <div className="py-6">
        <h2>{dict.title}</h2>
        <div className="max-w-6xl w-full flex justify-center items-center p-10 flex-col lg:flex-row">
          <div className="h-auto flex mb-10 lg:mb-0 w-[80%] lg:w-[45%] justify-center items-center">
            <Image
              src={aboutImg}
              width={500}
              height={500}
              alt="Office Developpeur Web Full Stack"
            />
          </div>
          <div className="w-full lg:w-[55%] p-3 lg:p-7 text-black text-lg text-center md:text-left">
            <p
              className="mb-4"
              dangerouslySetInnerHTML={{
                __html: dict.description.p1,
              }}
            ></p>
            <p
              className="mb-4"
              dangerouslySetInnerHTML={{
                __html: dict.description.p2,
              }}
            ></p>
            <p
              className="mb-4"
              dangerouslySetInnerHTML={{
                __html: dict.description.p3,
              }}
            ></p>
          </div>
        </div>
      </div>
    </section>
  )
}
