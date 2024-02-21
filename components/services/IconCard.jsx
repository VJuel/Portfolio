import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function IconCard({ icon, title, description }) {
  return (
    <Card className="flex flex-col justify-center items-center">
      <CardHeader>
        <CardTitle className="text-center mb-4">{title}</CardTitle>
        <Image src={icon} width={120} height={150} />
      </CardHeader>
      <CardContent>{description}</CardContent>
    </Card>
  )
}
