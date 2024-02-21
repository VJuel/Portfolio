import { Montserrat, Roboto_Slab, Roboto } from "next/font/google"

export const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  preload: false,
})

export const robotoSlab = Roboto_Slab({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
})

export const montserrat = Montserrat({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
})
