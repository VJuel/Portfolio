"use client"
import { createCookies } from "@/lib/actions"
import { format } from "path"
import { useFormStatus, useFormState } from "react-dom"

const initialState = {
  message: null,
}

export default function FormCookieContainer({ children }) {
  const [state, formAction] = useFormState(createrCookies, initialState)
  const status = useFormStatus()

  async function createrCookies(state, formData) {
    try {
      const { data, error } = await createCookies(state, formData)
      toast({
        title: "Cookies créés",
        description: "Les cookies ont bien été créés.",
        duration: 4000,
      })
      setIsOpen(false)
    } catch (error) {
      console.error("Error creating cookies : ", error)
    }
  }

  return (
    <form
      className="flex flex-col justify-center items-start space-y-4"
      action={formAction}
    >
      {children}
    </form>
  )
}
