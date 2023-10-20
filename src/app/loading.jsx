"use client"
import Spinner from "@/components/Spinner"

export default function Loading() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Spinner />
    </div>
  )
}
