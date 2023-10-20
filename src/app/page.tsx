import Hero from "@/components/Hero"
import Work from "@/components/Work"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Reseaux from "@/components/Reseaux"

export default function Page() {
  return (
    <>
      <Reseaux />
      <div className="flex flex-col justify-center items-center mr-auto">
        <Hero />
        <Work />
        <About />
        <Contact />
      </div>
    </>
  )
}
