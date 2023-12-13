"use client"
import { useState, useRef } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import z from "zod"
import emailjs from "@emailjs/browser"
import Spinner from "./Spinner"

const SignupForm = ({ dict }) => {
  const form = useRef()
  const errorForm = "text-red-500 text-sm"
  const [validationError, setValidationError] = useState([])
  const { toast } = useToast()

  const [emailSend, setEmailSend] = useState({
    name: "",
    firstname: "",
    email: "",
    tel: "",
    message: "",
  })

  const handleUpdate = (key, value) => {
    const newEmailSend = { ...emailSend, [key]: value }
    setEmailSend(newEmailSend)
  }

  const renderToastComponent = () => {
    return toast({
      title: "Message envoyé",
      description: "Merci pour votre message",
    })
  }

  const renderToastErrorComponent = () => {
    return toast({
      variant: "destructive",
      title: "Uh oh! Email non envoyé.",
      description: "Merci de remplir tous les champs du formulair.",
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
      name: emailSend.name,
      firstname: emailSend.firstname,
      email: emailSend.email,
      tel: emailSend.tel,
      message: emailSend.message,
    })

    if (!success) {
      setValidationError(zodError.format())
      renderToastErrorComponent()
      return
    }

    const templateParms = {
      from_name: emailSend.name,
      from_firstname: emailSend.firstname,
      from_email: emailSend.email,
      from_tel: emailSend.tel,
      message: emailSend.message,
      to_name: "Vicktor",
    }

    const result = emailjs
      .send(
        "service_s9qbox6",
        "template_mogbx6a",
        templateParms,
        "XrmwcsoPcTNKciiuJ"
      )
      .then((res) => res)
      .then(
        (result) => {
          if (result.text === false) {
            renderToastErrorComponent()
          }
          emailSend.name = ""
          emailSend.firstname = ""
          emailSend.email = ""
          emailSend.tel = ""
          emailSend.message = ""
          setValidationError([])
          renderToastComponent()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <form
      className="flex flex-col gap-4 w-full md:w-[80%]"
      onSubmit={handleOnSubmit}
      ref={form}
    >
      <div className="flex justify-center items-center">
        <div className="flex-col w-1/2">
          <Label>{dict.nom.label}</Label>
          <Input
            placeholder="Doe"
            type="text"
            name="from_name"
            onChange={(e) => handleUpdate("name", e.target.value)}
            value={emailSend.name}
          />
          {validationError?.name && (
            <p className={errorForm}>
              {validationError.name._errors.join(", ")}
            </p>
          )}
        </div>

        <div className="flex-col w-1/2 pl-4">
          <Label>{dict.prenom.label}</Label>
          <Input
            placeholder="John"
            type="text"
            name="from_firstname"
            onChange={(e) => handleUpdate("firstname", e.target.value)}
            value={emailSend.firstname}
          />
          {validationError?.name && (
            <p className={errorForm}>
              {validationError.firstname._errors.join(", ")}
            </p>
          )}
        </div>
      </div>

      <Label>{dict.email.label}</Label>
      <Input
        placeholder="johndoe@exemple.com"
        type="text"
        name="from_email"
        onChange={(e) => handleUpdate("email", e.target.value)}
        value={emailSend.email}
      />
      {validationError?.email && (
        <p className={errorForm}>{validationError.email._errors.join(", ")}</p>
      )}
      <Label>{dict.tel.label}</Label>
      <Input
        placeholder="02 99 99 99 99"
        type="text"
        name="from_tel"
        onChange={(e) => handleUpdate("tel", e.target.value)}
        value={emailSend.tel}
      />
      {validationError?.tel && (
        <p className={errorForm}>{validationError.tel._errors.join(", ")}</p>
      )}
      <Label>Message</Label>
      <Textarea
        placeholder={dict.message.placeholder}
        onChange={(e) => handleUpdate("message", e.target.value)}
        value={emailSend.message}
      />
      {validationError?.message && (
        <p className={errorForm}>
          {validationError.message._errors.join(", ")}
        </p>
      )}
      <Button
        className="flex justify-center items-center lg:w-fit text-center"
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
        {dict.btn}
      </Button>
    </form>
  )
}

export default SignupForm
