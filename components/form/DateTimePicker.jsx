"use client"

import React, { useState } from "react"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { Calendar as CalendarIcon } from "lucide-react"
import clsx from "clsx"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { TimePicker } from "@/components/form/TimePicker"

export function DatePicker() {
  const [selectedDate, setSelectedDate] = useState(null)

  const handleDateChange = (date) => {
    setSelectedDate(date) // Garde l'objet Date dans l'état
  }

  const formatDateToFrench = (date) => {
    // Vérifie si la date est valide avant de la formater
    if (!date) return ""
    return format(date, "dd/MM/yyyy HH'h'mm", { locale: fr })
  }

  return (
    <div className="flex flex-col">
      <input
        type="hidden"
        name="date" // Nom correspondant à la clé utilisée dans `updateFormData`
        value={selectedDate || ""}
      />
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={clsx(
              "w-[280px] justify-start text-left font-normal",
              !selectedDate && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4 text-neutral-500" />
            {selectedDate ? (
              formatDateToFrench(selectedDate) // Formate l'objet Date pour l'affichage
            ) : (
              <span className="text-neutral-500 montserrat">Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[60%] md:w-[80%] lg:w-auto p-0">
          <Calendar
            mode="single"
            selected={selectedDate ? new Date(selectedDate) : null}
            onSelect={setSelectedDate} // Utilisation directe de setSelectedDate
            initialFocus
          />
          <div className="p-3 border-t border-border">
            <TimePicker
              setDate={handleDateChange}
              date={selectedDate ? new Date(selectedDate) : null}
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
