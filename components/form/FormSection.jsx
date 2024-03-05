"use client"
import { use, useEffect, useRef, useState } from "react"
import { useFormStatus, useFormState } from "react-dom"
import sendEmail from "@/lib/actions"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import HCaptcha from "@hcaptcha/react-hcaptcha"
import { Suspense } from "react"
import Spinner from "@/components/Spinner"

const initialState = {
  message: null,
}

export default function FormSection({ children }) {
  const [state, formAction] = useFormState(senderEmail, initialState)
  const status = useFormStatus()
  const errorForm = "text-red-500 text-sm"
  const router = useRouter()
  const { toast } = useToast()
  const formRef = useRef()
  const [token, setToken] = useState(null)
  const captchaRef = useRef(null)
  const [shouldRefresh, setShouldRefresh] = useState(false)

  // async function senderEmail(state, formData) {
  //   if (!token) {
  //     return toast({
  //       variant: "destructive",
  //       title: "Veuillez valider le captcha",
  //       duration: 10000,
  //     })
  //   }

  //   const { results, error } = await sendEmail(state, formData)

  //   if (error) {
  //     return toast({
  //       variant: "destructive",
  //       title: error,
  //       duration: 10000,
  //     })
  //   }

  //   if (results?.ok) {
  //     toast({
  //       title: "Message envoyé",
  //       description: "Votre message a bien été envoyé.",
  //     })
  //     formRef.current.reset()
  //   }
  // }

  async function senderEmail(state, formData) {
    // Vérifie si le captcha est validé.
    if (!token) {
      toast({
        variant: "destructive",
        title: "Veuillez valider le captcha",
        duration: 10000,
      })
      return
    }

    try {
      // Envoie les données du formulaire au serveur.
      const { results, error } = await sendEmail(state, formData)

      // Gère la réponse du serveur.
      if (error) {
        toast({
          variant: "destructive",
          title: error,
          duration: 10000,
        })
      } else if (results?.ok) {
        toast({
          title: "Message envoyé",
          description: "Votre message a bien été envoyé.",
        })
        // Réinitialise le formulaire et potentiellement le token du captcha ici.
        formRef.current.reset()
        setToken(null) // Réinitialise le token du captcha si nécessaire.
      }
    } catch (error) {
      // Gère les erreurs de l'appel réseau.
      console.error("Erreur lors de l'envoi du formulaire : ", error)
      toast({
        variant: "destructive",
        title: "Une erreur est survenue lors de l'envoi du message.",
        duration: 10000,
      })
    }
  }

  const onLoad = () => {
    // this reaches out to the hCaptcha JS API and runs the
    // execute function on it. you can use other functions as
    // documented here:
    // https://docs.hcaptcha.com/configuration#jsapi
    captchaRef.current.execute()
  }

  // useEffect(() => {
  //   if (token) console.log(`hCaptcha Token: ${token}`)
  // }, [token])

  useEffect(() => {
    if (typeof window !== "undefined" && status.pending) {
      const url = new URL(window.location.href)
      url.searchParams.set("pending", status.pending)

      router.push(url.toString())
    }
  }, [status.pending])

  return (
    <form
      className="flex flex-col gap-4 w-full md:w-[80%]"
      action={formAction}
      ref={formRef}
    >
      {children}

      <HCaptcha
        sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY}
        onVerify={setToken}
        ref={captchaRef}
      />
    </form>
  )
}
