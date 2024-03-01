"use server"

import { EmailTemplate } from "@/components/EmailTemplate"
import { Resend } from "resend"
import { z } from "zod"

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

const EmailSchema = z.object({
  name: z
    .string()
    .min(1, "Le nom doit contenir au moins un caractère")
    .max(100, "Le nom ne peut pas dépasser 100 caractères")
    .regex(/^[a-zA-Z]+$/, "Le nom ne peut contenir que des lettres"),
  firstname: z
    .string()
    .min(1, "Le nom doit contenir au moins un caractère")
    .max(100, "Le nom ne peut pas dépasser 100 caractères")
    .regex(/^[a-zA-Z]+$/, "Le nom ne peut contenir que des lettres"),
  email: z.string().email("Email invalide"),
  tel: z
    .string()
    .regex(
      /^(\+?\d{1,3}[-.\s]?)?\(?[\d\s]{1,3}\)?[-.\s]?[\d\s]{1,4}[-.\s]?[\d\s]{1,9}$/,
      "Téléphone invalide"
    ),
  message: z
    .string()
    .min(10, "La description doit contenir au moins 10 caractères")
    .max(500, "La description ne peut pas dépasser 500 caractères"),
})

export default async function sendEmail(state, formData) {
  const name = formData.get("name")
  const firstname = formData.get("firstname")
  const email = formData.get("email")
  const tel = formData.get("tel")
  const message = formData.get("message")

  const result = EmailSchema.safeParse({
    name: name,
    firstname: firstname,
    email: email,
    tel: tel,
    message: message,
  })

  if (result.error) {
    return { error: result.error.format() }
  }

  const { data, error } = await resend.emails.send({
    from: "noreply@vicktor-web-solution.com",
    to: ["juheldev@gmail.com"],
    subject: "Contact Portfolio",
    react: EmailTemplate(firstname, name, email, tel, message),
  })

  if (error) {
    return { error }
  }
  return { data }
}
