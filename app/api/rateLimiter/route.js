import { RateLimiterMemory } from "rate-limiter-flexible"
import { NextResponse } from "next/server"

// Configuration du rate limiter
const rateLimiter = new RateLimiterMemory({
  points: 5, // 5 requêtes autorisées
  duration: 60, // Les utilisateurs peuvent effectuer 5 requêtes par minute
  blockDuration: 300, // Bloquer pendant 300 secondes (5 minutes) après 5 échecs
})

export async function GET(req) {
  const ip = req.headers.get("x-forwarded-for") || req.ip || "127.0.0.1" // Adresse IP du client

  try {
    // Consommer une requête pour l'adresse IP
    await rateLimiter.consume(ip)

    // Si la requête est autorisée, continuer le traitement normal
    return NextResponse.json({ message: "Requête autorisée" }, { status: 200 })
  } catch (err) {
    const retryAfter = Math.ceil(err.msBeforeNext / 1000) // Temps en secondes

    // Si la limite de requêtes est atteinte, ajouter l'en-tête HTTP `Retry-After`
    return NextResponse.json(
      {
        message: `Trop de tentatives. Veuillez réessayer dans ${retryAfter} secondes.`,
      },
      {
        status: 429,
        headers: { "Retry-After": retryAfter },
      }
    )
  }
}
