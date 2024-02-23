import { getTranslations } from "next-intl/server"
import { robotoSlab } from "@/components/fonts"
import clsx from "clsx"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import IconCard from "@/components/services/IconCard"
import responsive from "@/public/services/responsive.svg"
import nextjs from "@/public/services/next-js.svg"
import seo from "@/public/services/seo.svg"
import wordpress from "@/public/services/wordpress.svg"
import optimisation from "@/public/services/optimisation.svg"

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" })

  return {
    title: t("services.title"),
    description: t("services.description"),
  }
}

export default async function Services(params) {
  const t = await getTranslations("services")

  return (
    <section id="services" className="w-full h-auto">
      <div className="py-6">
        <div className="w-full max-w-6xl flex m-auto flex-col p-4 md:p-10 justify-center items-center">
          <h1
            className={clsx(
              robotoSlab.className,
              "text-3xl font-bold mb-4 md:mb-4 lg:mb-8 px-4 py-14"
            )}
          >
            Les differents services
          </h1>

          <div className="w-full space-y-8 md:space-y-14 lg:space-y-20 bg-background mt-6">
            <article className="w-full">
              <div className="flex flex-col lg:flex-row justify-center items-center max-w-6xl m-auto w-full px-4">
                <div className="flex lg:order-2 flex-col justify-center w-full lg:w-1/2 pl-0 lg:pl-14 mb-8 lg:mb-0 p-0">
                  <h2
                    className={clsx(
                      robotoSlab.className,
                      "text-xl mb-2 font-bold"
                    )}
                  >
                    Site Vitrine
                  </h2>
                  <h3>Élevez Votre Présence en Ligne :</h3>
                  <p>
                    Notre service de création de site vitrine est la solution
                    idéale pour les entreprises souhaitant marquer leur présence
                    sur le web avec élégance et professionnalisme. Nous vous
                    offrons un design responsive, une optimisation SEO de
                    pointe, une intégration fluide des réseaux sociaux, et un
                    système de gestion de contenu intuitif pour une mise à jour
                    facile de votre site.
                  </p>
                </div>
                <aside className="flex order-2 lg:order-1 flex-col justify-center bg-background rounded-sm h-full w-full lg:w-[45%]">
                  <Image
                    src="/services/vitrine-services.png"
                    width={400}
                    height={400}
                    className="cover h-full w-full"
                  />
                </aside>
              </div>
            </article>

            <article className="w-full bg-background">
              <div className="flex flex-col lg:flex-row justify-center items-center max-w-6xl m-auto w-full px-4">
                <div className="flex flex-col justify-center items-start w-full lg:w-1/2 pr-0 lg:pr-14 mb-8 lg:mb-0 p-0">
                  <h2
                    className={clsx(
                      robotoSlab.className,
                      "text-xl mb-2 font-bold"
                    )}
                  >
                    Site E-commerce
                  </h2>
                  <h3>Transformez les Clics en Clients :</h3>
                  <p>
                    Notre plateforme e-commerce sur mesure vous permet de vendre
                    vos produits et services en ligne avec efficacité et
                    sécurité. Profitez d'une gestion intuitive de vos produits,
                    de processus de paiement sécurisés, d'expériences d'achat
                    personnalisées, d'outils de marketing intégrés, et
                    d'analyses en temps réel pour booster vos ventes.
                  </p>
                </div>
                <aside className="flex flex-col justify-center bg-background rounded-sm h-full w-full lg:w-[45%]">
                  <Image
                    src="/services/ecommerce-services.png"
                    width={400}
                    height={400}
                    className="cover h-full w-full"
                  />
                </aside>
              </div>
            </article>

            <article className="w-full bg-background">
              <div className="flex flex-col lg:flex-row justify-center items-center max-w-6xl m-auto w-full px-4">
                <div className="flex order-1 lg:order-2 flex-col justify-center w-full lg:w-1/2 pr-0 pl-0 lg:pl-14 mb-8 lg:mb-0 p-0">
                  <h2
                    className={clsx(
                      robotoSlab.className,
                      "text-xl mb-2 font-bold"
                    )}
                  >
                    Site Custom
                  </h2>
                  <h3>Conception Unique pour Visions Uniques :</h3>
                  <p>
                    Chaque entreprise est unique, et votre site web devrait
                    l'être aussi. Notre service de site personnalisé se
                    concentre sur la création de concepts de design créatifs,
                    l'intégration de fonctionnalités avancées et interactives,
                    une stratégie SEO complète, et une expérience utilisateur
                    personnalisée pour répondre précisément à vos besoins et
                    objectifs.
                  </p>
                </div>
                <aside className="flex order-2 lg:order-1 flex-col justify-center bg-background rounded-sm h-full w-full lg:w-[45%]">
                  <Image
                    src="/services/custom.png"
                    className="cover h-full w-full"
                    width={400}
                    height={400}
                  />
                </aside>
              </div>
            </article>
          </div>

          <section className="my-24 flex flex-col justify-center items-center">
            <h3
              className={clsx(
                robotoSlab.className,
                "text-center text-2xl mb-8 font-bold"
              )}
            >
              A Quel Prix ?
            </h3>

            <div className="flex flex-col flex-wrap md:flex-row gap-10 h-auto xlg:h-[500px] px-4 justify-center items-center">
              {/* Card Vitrine */}
              <Card className="w-[350px] md:h-[500px] h-full overflow-hidden flex flex-col">
                <CardHeader className="bg-secondary">
                  <CardTitle>Site Vitrine</CardTitle>
                  <CardDescription className="text-primary">
                    Lancez votre présence en ligne avec un site vitrine.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-card">
                    <li>Design personnalisé et responsive</li>
                    <li>Optimisation SEO de base</li>
                    <li>
                      Intégration de contenu jusqu’à 5 pages (Accueil, À propos,
                      Services, Blog, Contact)
                    </li>
                    <li>Formulaire de contact sécurisé</li>
                    <li>Hébergement et nom de domaine pour 1 an inclus</li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-between flex-col items-start flex-grow-1">
                  <span>
                    A partir de <strong className="text-lg">1000 €</strong>
                  </span>
                </CardFooter>
              </Card>

              {/* Card E-commerce */}
              <Card className="w-full xs:w-[75%] md:w-[350px] h-full md:h-[500px] overflow-hidden flex flex-col">
                <CardHeader className="bg-accent">
                  <CardTitle>Create E-commerce Website</CardTitle>
                  <CardDescription className="text-primary">
                    Start selling online with a custom e-commerce website.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-card">
                    <li>Gestion de Produits Intuitive</li>
                    <li>Panier d'Achat et Paiements Sécurisés</li>
                    <li>Personnalisation du Parcours Client</li>
                    <li>Outils de Marketing Intégrés</li>
                    <li>Analytique et Reporting</li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-between flex-col items-start">
                  <span>
                    A partir de <strong className="text-lg">2500 €</strong>
                  </span>
                </CardFooter>
              </Card>

              {/* Card Formule speciale */}
              <Card className="w-[350px] md:h-[500px] h-full overflow-hidden flex flex-col">
                <CardHeader className="bg-warning">
                  <CardTitle>Site Custom</CardTitle>
                  <CardDescription className="text-primary">
                    Choisir un services avec plus de personnalisation
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-card">
                    <li>Conception Sur Mesure </li>
                    <li>Fonctionnalités Avancées</li>
                    <li>Optimisation Performance</li>
                    <li>Accessibilité Web</li>
                    <li>Intégration de Systèmes Tiers</li>
                    <li>Conseil Stratégique</li>
                  </ul>
                </CardContent>
                <CardFooter className="flex-grow flex justify-between flex-1">
                  <span>
                    <strong className="text-lg">Prix sur devis</strong>
                  </span>
                </CardFooter>
              </Card>
            </div>
          </section>

          <section className="flex flex-col justify-center items-center my-24 px-4">
            <h2
              className={clsx(
                robotoSlab.className,
                "text-center text-lg font-medium mb-6 md:mb-10 px-8 lg:px-0"
              )}
            >
              Pourquoi Choisir
              <strong className="px-1">
                <span className="text-2xl text-accent font-bold stroke-text">
                  V
                </span>
                icktor
                <span className="text-2xl text-accent font-bold pl-1 stroke-text">
                  W
                </span>
                eb
                <span className="text-2xl text-secondary pl-1 font-bold stroke-text">
                  S
                </span>
                olution
              </strong>
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

          {/* Section Blog */}
          <section className="flex flex-col justify-center items-center mt-10">
            <h2
              className={clsx(
                robotoSlab.className,
                "text-center text-lg font-medium mb-6 md:mb-10"
              )}
            >
              Transformez Votre Vision en Réalité avec Nos Services Next.js et
              WordPress
            </h2>
            <div className="flex justify-center items-center flex-col lg:flex-row gap-4 md:gap-8 h-auto lg:h-[300px]">
              <IconCard
                title="Next.js"
                icon={nextjs}
                description="React Framework pour des sites performants"
              />
              <IconCard
                title="WordPress"
                icon={wordpress}
                description="CMS pour la creation de site web"
              />
            </div>
          </section>

          <br />
          <br />
          <br />
          <h2>
            Transformez Votre Vision en Réalité avec Nos Services Next.js et
            WordPress
          </h2>
          <br />
          <p>
            Pourquoi Choisir Next.js pour Votre Projet Introduction à Next.js :
            Expliquez brièvement ce qu'est Next.js et ses avantages principaux
            (SSR, SSG, performances optimisées, etc.). Cas d'Usage : Présentez
            quelques exemples de projets ou de cas d'usage où Next.js excelle.
            Votre Expertise : Montrez votre expérience et vos réalisations avec
            Next.js, y compris des études de cas ou des témoignages si
            disponibles.
          </p>

          <br />
          <p>
            Pourquoi Choisir WordPress pour Votre Site Web Introduction à
            WordPress : Un aperçu de WordPress et de ses forces (facilité de
            gestion de contenu, communauté, plugins, etc.). Personnalisation
            avec WordPress : Expliquez comment vous créez des thèmes et des
            plugins personnalisés pour répondre aux besoins spécifiques des
            clients. Sécurité et Maintenance : Parlez de l'importance de la
            sécurité et de la maintenance régulière de WordPress, et comment
            vous pouvez aider les clients à garder leur site sécurisé et à jour.
          </p>
          <br />
          <p>
            PRESTATIONS DEVIS WEBMASTER Maintenance WordPress Optimisation
            WordPress Sécurité WordPress Débogage Création de site internet
            WordPress ou sur mesure Création de site e-commerce Création de blog
            Création de site one-page WordPress ou sur mesure
          </p>
        </div>
      </div>
    </section>
  )
}
