import { useTranslations } from "next-intl"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { getTranslations } from "next-intl/server"

export async function FormField({
  label,
  name,
  onChange,
  value,
  placeholder,
  type,
}) {
  const t = await getTranslations("contact.formSection")

  return (
    <>
      <div className="flex-col w-1/2">
        <Label htmlFor={label}>{t(label + ".name")}</Label>
        <Input
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
    <>
      <Label htmlFor={label}>Message</Label>
      <Textarea name={label} placeholder={t(label)} />
    </>
  )
}

export async function ButtonSumitContact() {
  const t = await getTranslations("contact.formSection")
  // const pending = searchParams.query.pending

  return (
    <>
      <Button
        className="flex justify-center items-center lg:w-fit text-center"
        variable="default"
        type="submit"
        // value={pending ? t("pending") : t("btn")}
        // aria-disabled={pending}
      >
        {/* {pending ? t("pending") : t("btn")} */}
        {t("btn")}
      </Button>
    </>
  )
}
