"use client"

import React, { useRef } from "react"
import { Clock } from "lucide-react"
import { Label } from "@/components/ui/label"
import { TimePickerInput } from "./TimePickerInput"
import { montserrat } from "@/components/fonts"
import { clsx } from "clsx"

export function TimePicker({ date, setDate }) {
  const minuteRef = useRef(null)
  const hourRef = useRef(null)

  return (
    <>
      <div className="flex items-center justify-center gap-2 w-full">
        <div className="grid gap-1 text-center w-1/3 md:w-auto min-w-auto md:min-w-[150px]">
          <Label htmlFor="hours" className="text-xs montserrat">
            Hours
          </Label>
          <TimePickerInput
            picker="hours"
            className="w-full p-0"
            style={{ fontFamily: "Roboto, sans-serif" }}
            date={date || new Date()} // Assurez-vous que `date` est toujours défini
            setDate={setDate}
            ref={hourRef}
            onRightFocus={() => minuteRef.current?.focus()}
          />
        </div>
        <div className="grid gap-1 text-center w-1/3 md:w-auto min-w-auto md:min-w-[150px]">
          <Label
            htmlFor="minutes"
            className={clsx(montserrat.className, "text-xs")}
          >
            Minutes
          </Label>
          <TimePickerInput
            picker="minutes"
            className="w-full p-0 roboto"
            style={{ fontFamily: "Roboto, sans-serif" }}
            date={date || new Date()} // Assurez-vous que `date` est toujours défini
            setDate={setDate}
            ref={minuteRef}
            onLeftFocus={() => hourRef.current?.focus()}
          />
        </div>

        <div className="flex items-center justify-center">
          <Clock className="-mb-5 xs:-mb-2 lg:-mb-4 ml-2 h-4 w-4" />
        </div>
      </div>
    </>
  )
}
