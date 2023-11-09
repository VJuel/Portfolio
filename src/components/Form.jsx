"use client"

import { useState, useRef } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/Button"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import z from "zod"
import emailjs from "@emailjs/browser"
import Spinner from "./Spinner"

const SignupForm = () => {
  const form = useRef()
  const errorForm = "text-red-500 text-sm"
  const [validationError, setValidationError] = useState([])
  const [name, setName] = useState("")
  const [firstname, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [tel, setTel] = useState("")
  const [message, setMessage] = useState("")
  const [send, setSend] = useState(false)
  const { toast } = useToast()

  const renderToastComponent = () => {
    return toast({
      title: "Message envoyé",
      description: "Merci pour votre message",
    })
  }

  async function handleOnSubmit(e) {
    e.preventDefault()

    const emailSchema = z.object({
      name: z
        .string()
        .min(1, "Le nom doit contenir au moins un caractère")
        .max(100, "Le nom ne peut pas dépasser 100 caractères")
        .regex(/^[a-zA-Z]+$/, "Le nom ne peut contenir que des lettres"),
      firstname: z
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
      firstname,
      email,
      tel,
      message,
    })

    console.log(success)

    if (!success) {
      setValidationError(zodError.format())
      return
    }

    const templateParms = {
      from_name: name,
      from_firstname: firstname,
      from_email: email,
      from_tel: tel,
      message: message,
      to_name: "Vicktor",
    }

    emailjs
      .send(
        "service_s9qbox6",
        "template_mogbx6a",
        templateParms,
        "XrmwcsoPcTNKciiuJ"
      )
      .then((res) => res)
      .then(
        (result) => {
          console.log(result.text)
          setName("")
          setFirstName("")
          setEmail("")
          setTel("")
          setMessage("")
          setValidationError([])
          setSend(!send)
          renderToastComponent()
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
      <div className="flex">
        <div className="flex-col w-1/2">
          <Label>Nom</Label>
          <Input
            placeholder="Wayne"
            type="text"
            name="from_name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          {validationError?.name && (
            <p className={errorForm}>
              {validationError.name._errors.join(", ")}
            </p>
          )}
        </div>

        <div className="flex-col w-1/2 pl-4">
          <Label>Prénom</Label>
          <Input
            placeholder="Bruce"
            type="text"
            name="from_firstname"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstname}
          />
          {validationError?.name && (
            <p className={errorForm}>
              {validationError.firstname._errors.join(", ")}
            </p>
          )}
        </div>
      </div>

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
      <Label>Téléphone</Label>
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
      <Button
        className="flex justify-center items-center"
        variable="default"
        type="submit"
        value="Send"
        onClick={() => {
          toast({
            title: "Envoie en cours",
            description: "Votre message est en cours d'envoie",
            action: <Spinner />,
          })
        }}
      >
        Envoyez moi un email
      </Button>
    </form>
  )
}

export default SignupForm
