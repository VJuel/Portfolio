import * as React from "react"

export const EmailTemplate = (name, firstName, email, tel, message) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.5",
      color: "#333",
    }}
  >
    <h2 style={{ color: "#0056b3" }}>Nouvelle Demande de Collaboration</h2>
    <p>Bonjour,</p>
    <p>
      Vous avez reçu une nouvelle demande de collaboration via votre site web.
      Voici les détails du potentiel client :
    </p>
    <ul>
      <li>
        <strong>Nom :</strong> {firstName} {name}
      </li>
      <li>
        <strong>Email :</strong> {email}
      </li>
      <li>
        <strong>Téléphone :</strong> {tel}
      </li>
    </ul>
    <p style={{ marginTop: "20px" }}>
      <strong>Message :</strong>
    </p>
    <blockquote
      style={{
        borderLeft: "3px solid #ccc",
        paddingLeft: "15px",
        margin: "10px 0",
      }}
    >
      {message}
    </blockquote>
    <p>
      Pour répondre à cette demande, vous pouvez contacter le client directement
      à l'adresse email ou au numéro de téléphone fourni.
    </p>
    <p style={{ marginTop: "30px" }}>Cordialement,</p>
    <p>Votre Équipe</p>
  </div>
)
