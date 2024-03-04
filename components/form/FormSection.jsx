"use client"
import { useEffect } from "react"
import { useFormStatus, useFormState } from "react-dom"
import sendEmail from "@/lib/actions"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"

const initialState = {
  message: null,
}

export default function FormSection({ children }) {
  const [state, formAction] = useFormState(senderEmail, initialState)
  const status = useFormStatus()
  const errorForm = "text-red-500 text-sm"
  const router = useRouter()
  const { toast } = useToast()

  async function senderEmail(state, formData) {
    const { results, error } = await sendEmail(state, formData)

    if (results?.ok) {
      toast({
        title: "Message envoyé",
        description: "Votre message a bien été envoyé.",
      })
    } else {
      return toast({
        variant: "destructive",
        title: error,
      })
    }

    // formData.reset()
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
