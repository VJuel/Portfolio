import Image from "next/image"

export default function About() {
  return (
    <section
      id="about"
      className="my-[4.5rem] bg-white transition-all duration-1 flex justify-center"
    >
      <div className="py-6">
        <h2>About me</h2>
        <div className="max-w-6xl w-full flex justify-center items-center p-10 flex-col lg:flex-row">
          {/*// TODOimage changer reflechis  */}
          <div className="h-auto flex mb-6 lg:mb-0 w-[80%] lg:w-[45%] justify-center items-center">
            <Image
              src="/about.svg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div className="w-full lg:w-[55%] p-7 text-black text-lg text-center md:text-left">
            <h2 className="mb-4">
              👋 Salut ! Je suis passionné par le monde du développement web.
              Avec plusieurs années d'expérience dans le secteur, j'ai pu
              acquérir une solide expertise en programmation front-end et
              back-end.
            </h2>
            <p className="mb-4">
              🛠️ Compétences techniques : Je suis spécialisé dans la création de
              sites et applications web. Ma pile technologique comprend des
              technologies modernes comme <b>React</b> et <b>Next.js</b>, ce qui
              me permet de développer des solutions rapides, évolutives et de
              cree des composants <b>SSR</b> (Server-Side Rendering) et{" "}
              <b>SSG</b> (Static Site Generation).
            </p>
            <p className="mb-4">
              🤝 Travaillons ensemble : Si vous cherchez quelqu'un qui peut
              transformer votre idée en une solution digitale complète,
              n'hésitez pas à me contacter. Ensemble, transformons vos idées en
              réalité.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
