import React from "react"
import FormSection from "@/components/Form"

export default function Contact({ dict, lang }) {
  return (
    <section id="contact" className="w-full h-auto pb-8">
      <div className="py-6">
        <h2>{dict.title}</h2>
        <div className="w-full max-w-6xl flex m-auto flex-col lg:flex-row p-10 justify-center items-center">
          <FormSection dict={dict} />
        </div>
      </div>
    </section>
  )
}
