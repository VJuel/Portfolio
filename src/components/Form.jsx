"use client"

import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/Button"
import { Textarea } from "@/components/ui/textarea"
import z, { set } from "zod"

const SignupForm = () => {
  const form = useRef()
  const errorForm = "text-red-500 text-sm"
  const [validationError, setValidationError] = useState([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [tel, setTel] = useState("")
  const [message, setMessage] = useState("")

  async function handleOnSubmit(e) {
    e.preventDefault()

    const emailSchema = z.object({
      name: z
        .string()
        .min(1, "Le nom doit contenir au moins un caractère")
        .max(100, "Le nom ne peut pas dépasser 100 caractères")
        .regex(/^[a-zA-Z]+$/, "Le nom ne peut contenir que des lettres"),
      email: z.string().email("Email invalide"),
      tel: z
        .string()
        .regex(
          /^(\+?\d{1,3}[-.\s]?)?\(?[\d\s]{1,3}\)?[-.\s]?[\d\s]{1,4}[-.\s]?[\d\s]{1,9}$/,
          "Téléphone invalide"
        ),
      message: z
        .string()
        .min(10, "La description doit contenir au moins 10 caractères")
        .max(500, "La description ne peut pas dépasser 500 caractères"),
    })

    const { success, error: zodError } = emailSchema.safeParse({
      name,
      email,
      tel,
      message,
    })

    if (!success) {
      setValidationError(zodError.format())
      console.log(validationError)
      return
    }

    const templateParms = {
      from_name: name,
      from_email: email,
      from_tel: tel,
      message: message,
      test: "test",
      to_name: "Vicktor",
    }

    emailjs
      .send(
        "service_s9qbox6",
        "template_mogbx6a",
        templateParms,
        "XrmwcsoPcTNKciiuJ"
      )
      .then(
        (result) => {
          console.log(result.text)
          setName("")
          setEmail("")
          setTel("")
          setMessage("")
          setValidationError([])
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <form
      className="flex flex-col gap-4 w-full md:w-1/2"
      onSubmit={handleOnSubmit}
      ref={form}
    >
      <Label>Name</Label>
      <Input
        placeholder="Bruce Wayne"
        type="text"
        name="from_name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      {validationError?.name && (
        <p className={errorForm}>{validationError.name._errors.join(", ")}</p>
      )}

      <Label>Email</Label>
      <Input
        placeholder="bruce@gotham.org"
        type="text"
        name="from_email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      {validationError?.email && (
        <p className={errorForm}>{validationError.email._errors.join(", ")}</p>
      )}

      <Label>Tel</Label>
      <Input
        placeholder="02 99 99 99 99"
        type="text"
        name="from_tel"
        onChange={(e) => setTel(e.target.value)}
        value={tel}
      />
      {validationError?.tel && (
        <p className={errorForm}>{validationError.tel._errors.join(", ")}</p>
      )}

      <Label>Message</Label>
      <Textarea
        placeholder="Waouh super site !"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      {validationError?.message && (
        <p className={errorForm}>
          {validationError.message._errors.join(", ")}
        </p>
      )}

      <Button variable="default" type="submit" value="Send">
        Envoyez moi un email
      </Button>
    </form>
  )
}

export default SignupForm
