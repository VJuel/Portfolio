"use client"
import { Button } from "@/components/ui/button"
import { Link } from "@/navigation"

export function ButtonNav({ children, href, t }) {
  return (
    <Button className="mt-4 animate-fade-in animation-delay-800 w-fit gap-2">
      <Link href={href} className="text-[--text]">
        {t}
      </Link>
      {children}
    </Button>
  )
}
