"use client"
import { useToast } from "@/components/ui/use-toast"

export const renderToastSendComponent = () => {
  const { toast } = useToast()

  return toast({
    title: "Message envoyé",
    description: "Merci pour votre message",
  })
}

export const renderToastErrorComponent = (error) => {
  const { toast } = useToast()

  return toast({
    variant: "destructive",
    title: "Uh oh! Email non envoyé.",
    description: error.message,
  })
}
