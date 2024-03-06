"use client"
import { NextIntlClientProvider } from "next-intl"

export default function MyCustomNextIntlClientProvider({
  locale,
  timeZone,
  now,
  ...props
}) {
  return (
    <NextIntlClientProvider
      // Define non-serializable props here
      // Make sure to forward these props to avoid markup mismatches
      locale={locale}
      timeZone={timeZone}
      now={now}
      {...props}
    />
  )
}
