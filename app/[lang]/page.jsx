import Hero from "@/components/Hero"
import Work from "@/components/Work"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Reseaux from "@/components/Reseaux"

import { getDictionary } from "@/lib/dictionary"

export default async function Page({ params: { lang } }) {
  const dict = await getDictionary(lang)

  return (
    <>
      <Reseaux />
      <div className="flex flex-col justify-center items-center">
        <Hero dict={dict.hero} lang={lang} />
        <Work dict={dict.projects} lang={lang} />
        <About dict={dict.about} />
        <Contact dict={dict.contact} />
      </div>
    </>
  )
}
