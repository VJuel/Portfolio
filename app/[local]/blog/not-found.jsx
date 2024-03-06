"use client"
export const dynamic = "force-dynamic"

import Error from "next/error"

export default function NotFound() {
  return (
    <html>
      <body className="h-screen w-full bg-background flex justify-center items-center m-auto">
        <Error statusCode={404} />
      </body>
    </html>
  )
}
