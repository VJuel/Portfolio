"use client"

import clsx from "clsx"
import { useSelectedLayoutSegment } from "next/navigation"
import { Link } from "../../navigation"
import { montserrat } from "../fonts"

export default function NavLinkFooter({ href, children }) {
  const selectedLayoutSegment = useSelectedLayoutSegment()
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/"
  const isActive = pathname === href

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={clsx(
        montserrat.className,
        "inline-block transition-colors text-xs [&>*]:text-xs text-[--dark] md:font-medium font-bold text-black",
        isActive ? "text-slate-600" : "text-dark hover:text-slate-600"
      )}
      href={href}
    >
      {children}
    </Link>
  )
}
