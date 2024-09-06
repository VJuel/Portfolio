export async function validateCaptcha(token, toast) {
  try {
    const captchaResponse = await fetch("/api/hcaptcha", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ "h-captcha-response": token }),
    })
    const captchaData = await captchaResponse.json()

    if (!captchaData.validationResponse) {
      toast({
        variant: "destructive",
        title: "Validation CAPTCHA échouée",
        description: captchaData["error-codes"] || "Erreur inconnue",
        duration: 10000,
      })
      return false
    }
  } catch (error) {
    console.error("Erreur lors de la validation hCaptcha :", error)
    toast({
      variant: "destructive",
      title: "Erreur réseau",
      description: "Une erreur est survenue lors de la validation hCaptcha.",
      duration: 10000,
    })
    return false
  }
  return true
}
