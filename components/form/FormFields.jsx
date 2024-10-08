import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { getTranslations } from "next-intl/server"
import { montserrat } from "@/components/fonts"
import clsx from "clsx"

export async function FormField({ label }) {
  const t = await getTranslations("contact.formSection")
  return (
    <>
      <div className="flex-col w-1/2">
        <Label
          htmlFor={label}
          className={clsx(
            montserrat.classname,
            "text-[--text] lg:text-inherit"
          )}
        >
          {t(label + ".name")}
        </Label>
        <Input
          className="bg-background"
          placeholder={t(label + ".placeholder")}
          type="text"
          name={label}
        />
      </div>
    </>
  )
}

export async function FormTextAreaField({ label, value }) {
  const t = await getTranslations("contact.formSection")

  return (
    <div className="flex-col">
      <Label
        htmlFor={label}
        className={clsx(montserrat.classname, "text-[--text] lg:text-inherit")}
      >
        Message
      </Label>
      <Textarea
        className=" bg-background"
        name={label}
        placeholder={t(label)}
      />
    </div>
  )
}

export async function ButtonSumitContact() {
  const t = await getTranslations("contact.formSection")

  return (
    <>
      <Button
        className="flex justify-center items-center w-fit text-center text-[--dark] font-semibold order-last"
        variant={"secondary"}
        type="submit"
      >
        {t("btn")}
      </Button>
    </>
  )
}
