"use client"
import { Button } from "@/components/ui/button"
import { Link } from "@/navigation"

export function ButtonNav({ children, href, t, variant }) {
  return (
    <Button
      variant={variant || "default"}
      className="flex justify-center items-center mt-4 animate-fade-in animation-delay-800 w-fit gap-2"
    >
      <Link href={href} className="text-inherit">
        {t}
      </Link>
      {children}
    </Button>
  )
}
