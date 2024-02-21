"use client"

import clsx from "clsx"
import { useSelectedLayoutSegment } from "next/navigation"
import { ComponentProps } from "react"
import { Link } from "../navigation"

export default function NavLinkItem({ href, ...rest }) {
  const selectedLayoutSegment = useSelectedLayoutSegment()
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/"
  const isActive = pathname === href

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={clsx(
        "inline-block px-2 py-3 transition-colors",
        isActive ? "text-secondary" : "text-dark hover:text-destructive"
      )}
      href={href}
      {...rest}
    />
  )
}
