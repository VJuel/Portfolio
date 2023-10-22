import React from "react"
import FormSection from "@/components/Form"

export default function Contact() {
  return (
    <section className="w-full h-auto pb-8" id="contact">
      <div className="py-6">
        <h2>Contactez-moi</h2>
        <div className="w-full max-w-6xl flex m-auto flex-col lg:flex-row p-10 justify-center items-center">
          <FormSection />
        </div>
      </div>
    </section>
  )
}
