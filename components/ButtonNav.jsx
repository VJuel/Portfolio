"use client"
import { Button } from "@/components/ui/button"
import { Link } from "@/navigation"
import clsx from "clsx"

export function ButtonNav({ children, href, t, variant }) {
  return (
    <Button
      variant={variant || "default"}
      className={clsx(
        variant === "secondary" ? "[&>a]:text-[--dark]" : "[&>a]:text-[--text]",
        "flex justify-center items-center mt-4 animate-fade-in animation-delay-800 w-fit gap-2"
      )}
    >
      <Link href={href} className="font-semibold order-2">
        {t}
      </Link>
      {children}
    </Button>
  )
}
