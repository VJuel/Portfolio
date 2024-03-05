import { ReactNode } from "react"
import { NextIntlProvider } from "next-intl"

export default function MyCustomNextIntlClientProvider({
  locale,
  timeZone,
  now,
  children, // Add children here
  ...props
}: {
  locale: string
  timeZone: string
  now: Date
  children: ReactNode // Define the type for children
  props: any
}) {
  return (
    <NextIntlProvider
      // Define non-serializable props here
      defaultTranslationValues={{
        i: (text: ReactNode) => <i>{text}</i>,
      }}
      // Make sure to forward these props to avoid markup mismatches
      locale={locale}
      timeZone={timeZone}
      now={now}
      {...props}
    >
      {children} {/* Pass children to the provider */}
    </NextIntlProvider>
  )
}
