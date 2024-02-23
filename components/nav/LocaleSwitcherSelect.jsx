"use client"

import clsx from "clsx"
import { useParams } from "next/navigation"
import { ChangeEvent, ReactNode, useTransition } from "react"
import { useRouter, usePathname } from "../../navigation"

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()

  function onSelectChange(event) {
    const nextLocale = event.target.value
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      )
    })
  }

  return (
    <label
      className={clsx(
        "relative text-dark",
        isPending && "transition-opacity [&:disabled]:opacity-30 w-full"
      )}
    >
      <p className="sr-only">{label}</p>
      <select
        className="inline-flex border border-input bg-transparent shadow-sm hover:bg-inherit hover:text-accent-foreground py-2 mt-4 lg:mt-0 ml-1 lg:ml-4 w-fit rounded-sm px-1"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
    </label>
  )
}
