import clsx from "clsx"
import IconCard from "@/components/services/IconCard"
import { robotoSlab } from "@/components/fonts"
import responsive from "@/public/services/responsive.svg"
import seo from "@/public/services/seo.svg"
import optimisation from "@/public/services/optimisation.svg"

export default function Skills() {
  return (
    <section className="flex flex-col justify-center items-center margin-section px-4 w-full m-auto max-w-6xl">
      <h2
        className={clsx(
          robotoSlab.className,
          "text-center text-lg font-medium mb-6 md:mb-10 px-8 lg:px-0"
        )}
      >
        Pourquoi Choisir
        <strong className="px-1">Vicktor Web Solution</strong>
        pour Votre Projet de Site Web ?
      </h2>
      <div className="flex justify-center items-center flex-col lg:flex-row h-auto lg:h-[300px] gap-6 md:gap-8 lg:gap-10 w-full">
        <IconCard
          title="Responsive"
          icon={responsive}
          description="Adaptable a tout les ecrans"
        />
        <IconCard
          title="Referencement"
          icon={seo}
          description="Obtenir une grande visibilite"
        />
        <IconCard
          title="Optimisation"
          icon={optimisation}
          description="Site rapide et accessible"
        />
      </div>
    </section>
  )
}
