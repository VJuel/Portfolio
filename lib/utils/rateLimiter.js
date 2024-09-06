export async function checkRateLimiter(toast) {
  try {
    const response = await fetch("/api/rateLimiter", { method: "GET" })
    const result = await response.json()

    if (response.status === 200) {
      console.log(result.message)
    } else if (response.status === 429) {
      const retryAfter = response.headers.get("Retry-After")
      toast({
        variant: "destructive",
        title: "Erreur 429",
        description: `${result.message}. Réessayez dans ${retryAfter} secondes.`,
        duration: 10000,
      })
      return false
    }
  } catch (error) {
    console.error("Erreur lors de la vérification du rate limiter :", error)
    toast({
      variant: "destructive",
      title: "Erreur réseau",
      description:
        "Une erreur est survenue lors de la vérification du rate limiter.",
      duration: 10000,
    })
    return false
  }
  return true
}
