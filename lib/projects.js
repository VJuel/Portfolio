import {
  imgEcommerce,
  imgNatours,
  imgOmnifood,
  imgNetflix,
  imgLuz,
  imgUsine,
} from "./images"

export const projects = [
  {
    title: "Next-js E-commerce",
    description: {
      en: "A powerful and intuitive e-commerce platform, developed with Next.js, MongoDB, and Tailwind. Easily manage your online store through a comprehensive administration interface and deliver an exceptional customer experience.",
      fr: "Une plateforme e-commerce puissante et intuitive, développée avec Next.js, MongoDB et Tailwind. Gérez facilement votre boutique en ligne grâce à une interface d'administration complète et offrez une expérience client exceptionnelle.",
    },
    technologies: [
      "React",
      "Nextjs",
      "Tailwind",
      "Stripe",
      "MongoDB",
      "NextAuth",
    ],
    images: imgEcommerce,
    github: "https://github.com/VJuel/NextJs-e-commerce",
    link: "https://next-js-e-commerce-wine-nu.vercel.app",
  },
  {
    title: "Natours-Projects",
    description: {
      en: "Natours is a travel booking website. It is built with HTML5 and CSS3, and uses Sass for the CSS preprocessor.",
      fr: "Natours est un site web de réservation de voyages. Il est construit avec HTML5 et CSS3, et utilise Sass pour le préprocesseur CSS.",
    },
    technologies: ["Sass", "html", "css"],
    link: "https://ecommerce-website-1.herokuapp.com/",
    images: imgNatours,
    github: "https://github.com/VJuel/Natours-Project",
    link: "https://natours-project-seven.vercel.app/",
  },
  {
    title: "Netflix clone",
    description: {
      en: "Netflix clone built with React, Redux, Firebase, Stripe, and Sass.",
      fr: "Clone de Netflix construit avec React, Redux, Firebase, Stripe, et Sass.",
    },
    image: "https://i.ibb.co/7QpKsCX/ecommerce.png",
    technologies: ["React", "Firebase", "Stripe", "Tailwind"],
    images: imgNetflix,
    github: "https://github.com/VJuel/Netflix-clone",
    link: "https://netflix-clone-w7b9.vercel.app/",
  },
  {
    title: "Omnifood",
    description: {
      en: "Omnifood is an upscale meal delivery service whose mission is to bring affordable, healthy meals to as many people as possible.",
      fr: "Omnifood est un service de livraison de repas haut de gamme dont la mission est d'apporter des repas abordables et sains au plus grand nombre de personnes possible.",
    },
    technologies: ["Sass", "html", "css"],
    images: imgOmnifood,
    github: "https://github.com/VJuel/Omnifood",
    link: "https://omnifood-roan-mu.vercel.app",
  },
  {
    title: "Luz en Bhöhême",
    description: {
      en: "Omnifood is an upscale meal delivery service whose mission is to bring affordable, healthy meals to as many people as possible.",
      fr: "Site évenementiel de Luz optique, un week-end a Prague, ",
    },
    technologies: ["Sass", "html", "css"],
    images: imgLuz,
    github: "",
    link: "",
  },
  {
    title: "Usine à site",
    description: {
      en: "This project is a modular site factory using SCSS, JavaScript, and Slick for customizable website creation. Each section offers multiple variants, allowing users to mix and match designs. SCSS provides organized styling, JavaScript adds interactivity, and Slick creates smooth carousels. It’s a modern, user-friendly CMS platform.",
      fr: "Ce projet est une usine à sites modulable utilisant SCSS, JavaScript, et Slick pour créer des sites personnalisables. Chaque section propose plusieurs variantes. SCSS organise les styles, JavaScript ajoute de l'interactivité, et Slick crée des carrousels fluides. C'est une plateforme CMS moderne et conviviale.",
    },
    technologies: ["Scss", "javascript", "css", "twig"],
    images: imgUsine,
    github: "",
    link: "",
  },
]
