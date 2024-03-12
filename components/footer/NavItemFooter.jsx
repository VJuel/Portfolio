"use client"

import clsx from "clsx"
import { useSelectedLayoutSegment } from "next/navigation"
import { Link } from "../../navigation"

export default function NavLinkFooter({ href, children }) {
  const selectedLayoutSegment = useSelectedLayoutSegment()
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/"
  const isActive = pathname === href

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={clsx(
        "inline-block transition-colors text-xs [&>*]:text-xs text-[--dark] font-medium",
        isActive ? "text-slate-600" : "text-dark hover:text-slate-600"
      )}
      href={href}
    >
      {children}
    </Link>
  )
}
