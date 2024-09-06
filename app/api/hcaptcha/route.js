import verifyHcaptcha from "@/lib/verifyHcaptcha"
import { NextResponse } from "next/server"

export async function POST(req) {
  try {
    const body = await req.json()
    const token = body["h-captcha-response"]

    if (!token) {
      return NextResponse.json(
        { message: "Le token hCaptcha est manquant." },
        { status: 400 }
      )
    }

    // Appeler la fonction de validation hCaptcha
    const validationResponse = await verifyHcaptcha(token)

    return NextResponse.json(
      { message: "Formulaire validé", validationResponse },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "Erreur lors de la validation hCaptcha" },
      { status: 500 }
    )
  }
}
