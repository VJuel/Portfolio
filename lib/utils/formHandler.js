import { sendEmail } from "@/lib/actions"

export async function handleSubmit(
  formData,
  state,
  toast,
  formRef,
  captchaRef,
  setToken
) {
  try {
    const { results, error } = await sendEmail(state, formData)

    if (error) {
      toast({
        variant: "destructive",
        title: "Erreur lors de l'envoi",
        description: error,
        duration: 10000,
      })
    } else if (results?.ok) {
      toast({
        title: "Message envoyé",
        description: "Votre message a bien été envoyé.",
      })
      formRef.current.reset()
      captchaRef.current.resetCaptcha()
      setToken(null)
    }
  } catch (error) {
    console.error("Erreur lors de l'envoi du formulaire :", error)
    toast({
      variant: "destructive",
      title: "Erreur réseau",
      description: "Une erreur est survenue lors de l'envoi du formulaire.",
      duration: 10000,
    })
  }
}
