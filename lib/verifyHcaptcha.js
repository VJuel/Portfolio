const https = require("https")
const querystring = require("querystring")

export default async function verifyHcaptcha(token) {
  const secretKey = process.env.HCAPTCHA_SECRET_KEY // Clé secrète côté serveur

  const data = querystring.stringify({
    secret: secretKey, // Utilisation de la clé secrète correcte
    response: token,
  })

  const options = {
    hostname: "hcaptcha.com",
    path: "/siteverify",
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Content-Length": data.length,
    },
  }

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let responseData = ""

      // Recevoir les données du serveur hCaptcha
      res.on("data", (chunk) => {
        responseData += chunk
      })

      // Fin de la requête, traiter la réponse
      res.on("end", () => {
        try {
          const parsedData = JSON.parse(responseData) // Parsing JSON
          if (parsedData.success) {
            resolve(true)
          } else {
            reject(
              new Error(
                `hCaptcha validation failed: ${parsedData["error-codes"]}`
              )
            )
          }
        } catch (error) {
          console.error("Failed to parse hCaptcha response:", error)
          reject(new Error("Failed to parse hCaptcha response"))
        }
      })
    })

    // Gérer les erreurs de requête
    req.on("error", (e) => {
      reject(new Error(`Request failed: ${e.message}`))
    })

    // Envoyer les données
    req.write(data)
    req.end()
  })
}
