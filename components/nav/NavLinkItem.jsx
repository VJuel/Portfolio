"use client"

import clsx from "clsx"
import { useSelectedLayoutSegment } from "next/navigation"
import { Link } from "../../navigation"

export default function NavLinkItem({ href, children }) {
  const selectedLayoutSegment = useSelectedLayoutSegment()
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/"
  const isActive = pathname === href

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={clsx(
        "inline-block py-2 lg:py-3 transition-colors text-md",
        isActive
          ? "border-nav active text-slate-600"
          : "border-nav text-dark hover:text-dark"
      )}
      href={href}
    >
      {children}
    </Link>
  )
}
