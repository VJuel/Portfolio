"use client"
import { use, useEffect, useRef, useState } from "react"
import { useFormStatus, useFormState } from "react-dom"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import HCaptcha from "@hcaptcha/react-hcaptcha"
import { validateCaptcha } from "@/lib/utils/hcaptcha"
import { checkRateLimiter } from "@/lib/utils/rateLimiter"
import { handleSubmit } from "@/lib/utils/formHandler"

const initialState = {
  message: null,
}

export default function FormSection({ children }) {
  const [state, formAction] = useFormState(senderEmail, initialState)
  const status = useFormStatus()
  const router = useRouter()
  const { toast } = useToast()
  const formRef = useRef()
  const [token, setToken] = useState(null)
  const captchaRef = useRef(null)

  async function senderEmail(state, formData) {
    if (!token) {
      toast({
        variant: "destructive",
        title: "Veuillez valider le captcha",
        duration: 10000,
      })
      return
    }

    const canProceed = await checkRateLimiter(toast)
    if (!canProceed) return

    const isCaptchaValid = await validateCaptcha(token, toast)
    if (!isCaptchaValid) return

    formData.append("h-captcha-response", token)
    await handleSubmit(formData, state, toast, formRef, captchaRef, setToken)
  }

  useEffect(() => {
    if (typeof window !== "undefined" && status.pending) {
      const url = new URL(window.location.href)
      url.searchParams.set("pending", status.pending)

      router.push(url.toString())
    }
  }, [status.pending, router])

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
