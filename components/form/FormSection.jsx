"use client"
import { useEffect } from "react"
import { useFormStatus, useFormState } from "react-dom"
import sendEmail from "@/lib/actions"
import {
  renderToastErrorComponent,
  renderToastSendComponent,
} from "@/components/Toasts"
import { useRouter } from "next/navigation"
import { revalidePath } from "next/cache"

const initialState = {
  message: null,
}

export default function FormSection({ children }) {
  const [state, formAction] = useFormState(senderEmail, initialState)
  const status = useFormStatus()
  const errorForm = "text-red-500 text-sm"
  const router = useRouter()

  async function senderEmail(state, formData) {
    const { results, error } = await sendEmail(state, formData)
    const { toast } = useToast()

    if (results?.ok) {
      return { message: "Votre message a bien été envoyé." }
    } else {
      return renderToastErrorComponent(error)
    }

    revalidePath("/contact")
  }

  useEffect(() => {
    if (typeof window !== "undefined" && status.pending) {
      const url = new URL(window.location.href)
      url.searchParams.set("pending", status.pending)

      router.push(url.toString())
    }
  }, [status.pending])

  return (
    <form className="flex flex-col gap-4 w-full md:w-[80%]" action={formAction}>
      {children}
    </form>
  )
}
