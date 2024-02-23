import Image from "next/image"
import { robotoSlab } from "../fonts"
import clsx from "clsx"
import { ButtonNav } from "../ButtonNav"
import { useTranslations } from "next-intl"
import { Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Newspaper, Handshake } from "lucide-react"
export default function HomeServices() {
  const t = useTranslations("HomePortfolio")
  return (
    <section className="w-full bg-background my-10 md:my-20">
      <div className="max-w-4xl m-auto">
        <h2 className={clsx(robotoSlab.className, "text-3xl mb-2 font-bold")}>
          Services
        </h2>

        <article className="w-full md:w-[80%] lg:w-full h-auto lg:h-[570px] mt-10 flex flex-col lg:flex-row justify-center items-center gap-14 m-auto">
          {/* Card Nextjs */}
          <Card className="w-[360px] md:w-full lg:w-[360px] h-full flex flex-col md:border-0 md:shadow-none lg:border-l lg:shadow-inherit">
            <Image
              src="/nextjs-logo.jpg"
              width={400}
              height={400}
              className="h-[200px]"
            />
            <CardHeader>
              <CardTitle>Developpement avec NextJs</CardTitle>
              <CardDescription className="flex-grow-3"></CardDescription>
            </CardHeader>
            <CardContent>
              <strong>Next.js</strong> aide à construire des sites web rapides
              qui s'affichent mieux dans les résultats de recherche, en rendant
              vos pages plus accessibles aux moteurs de recherche et améliorant
              l'expérience de vos visiteurs.
            </CardContent>
            <CardFooter className="flex justify-between">
              <ButtonNav href="/services" t="Offerings" />
              <ButtonNav variant="accent" href="/blog" t="Articles" />
            </CardFooter>
          </Card>

          {/* Card Wordpress */}
          <Card className="w-[350px] h-full flex flex-col md:border-0 md:shadow-none lg:border-l lg:shadow-inherit">
            <Image
              src="/WordPress-Logo.png"
              width={400}
              height={400}
              className="h-[200px]"
            />
            <CardHeader>
              <CardTitle>Developpemnt avec Wordpress</CardTitle>
              <CardDescription className="flex-grow-3"></CardDescription>
            </CardHeader>
            <CardContent>
              <strong>WordPress</strong> est la solution idéale pour créer
              facilement votre site web ou blog, offrant une grande variété de
              designs et la possibilité d'ajouter des fonctionnalités selon vos
              besoins.
            </CardContent>
            <CardFooter className="flex justify-between">
              <ButtonNav href="/services" t="Voir les offres" />
              <ButtonNav variant="accent" href="/blog" t="Articles">
                <Newspaper className="text-[--text]" />
              </ButtonNav>
            </CardFooter>
          </Card>
        </article>
      </div>
    </section>
  )
}

{
  /* <ButtonNav href="/portfolio" t="Voir les realisation">
  <Palette className="text-[--text]" />
</ButtonNav> */
}
