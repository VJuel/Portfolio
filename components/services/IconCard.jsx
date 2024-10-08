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
import clsx from "clsx"

export default function IconCard({ icon, title, description, background }) {
  return (
    <Card
      className={clsx(
        background,
        "flex flex-col justify-center items-center w-full md:w-[75%] lg:w-2/4 h-full montserrat"
      )}
    >
      <CardHeader>
        <CardTitle className="text-center mb-4 montserrat">{title}</CardTitle>
        <Image
          src={icon}
          width={120}
          height={150}
          alt="Icon Freelance Skills"
        />
      </CardHeader>
      <CardContent className="text-center montserrat">
        {description}
      </CardContent>
    </Card>
  )
}
