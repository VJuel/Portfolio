export const dynamic = "force-dynamic"
;("use client")
export default function NotFound() {
  return (
    <html>
      <body className="h-screen w-full bg-background flex justify-center items-center m-auto">
        <h1 className="text-3xl font-semibold">404 - Page Not Found</h1>
      </body>
    </html>
  )
}
