"use server"
import { EmailTemplate } from "@/components/EmailTemplate"
import { Resend } from "resend"
import { z } from "zod"
import { cookies } from "next/headers"

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

const CookieSchema = z.object({
  availableAnalytics: z.string(),
})

export async function sendEmail(state, formData) {
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

  if (!result.success) {
    const errorFormat = result?.error?.format()
    let formattedErrors = []

    // List of form field names to check for errors
    const fieldNames = ["name", "firstname", "email", "tel", "message"]

    fieldNames.forEach((fieldName) => {
      // Check if there are any errors for the fieldName and it's an array
      const errors = errorFormat[fieldName]?._errors
      if (Array.isArray(errors) && errors.length > 0) {
        // If there are errors, format them and add to the formattedErrors array
        formattedErrors.push(`${errors.join(", ")}`)
      }
    })

    // Join all formatted errors into a single string, or default to "No specific errors found" if empty
    const finalFormattedError =
      formattedErrors.length > 0
        ? formattedErrors.join("\n")
        : "No specific errors found"

    if (result.error) {
      return { results: { ok: false }, error: finalFormattedError }
    }
  }

  const { data, error } = await resend.emails.send({
    from: "noreply@vicktor-web-solution.com",
    to: ["dev@vicktor-web-solution.com"],
    subject: "Contact Portfolio",
    react: EmailTemplate(firstname, name, email, tel, message),
  })

  if (error) {
    return { results: { ok: false }, error: "Error lors de l'envoie" }
  }

  return { results: { ok: true } }
}

export async function getCookiesAnalytics() {
  try {
    const cookieStore = cookies()
    const availableAnalytics = cookieStore.get("availableAnalytics")
    return availableAnalytics
  } catch (error) {
    console.error("Error getting cookies : ", error)
  }
}

export async function createCookies(state, formData) {
  const oneMonth = 30 * 24 * 60 * 60
  try {
    const availableAnalytics = formData.get("analytics")

    if (availableAnalytics === null) {
      cookies().set("availableAnalytics", false, {
        maxAge: oneMonth,
      })
    }

    const result = CookieSchema.safeParse({
      availableAnalytics: availableAnalytics,
    })

    if (!result.success) {
      const errorFormat = result?.error?.format()
      const errors = errorFormat[fieldName]?._errors

      throw new Error("Error on field", errors)
    }

    cookies().set("availableAnalytics", availableAnalytics, {
      maxAge: oneMonth,
    })
  } catch (error) {
    console.error("Error creating cookies : ", error)
  }
}
