import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useTranslations } from "next-intl"
import clsx from "clsx"
import { montserrat } from "../fonts"

export function FormSwitch({ label, name, value }) {
  const t = useTranslations("cookies")
  return (
    <>
      <div className="flex justify-center items-start flex-col w-full space-y-4">
        <div className="flex justify-between items-center w-full">
          <Label htmlFor={name} className="lg:text-inherit font-normal">
            {t("1.title")}
          </Label>
          <Switch defaultChecked={true} name={label} />
        </div>
        <div className="flex justify-center flex-col items-start gap-2">
          <h2 className={clsx(montserrat.className, "font-bold")}>
            {t("2.title")}
          </h2>
          <p className={clsx(montserrat.className, "text-sm")}>
            {t("2.descriptionLocale")}
          </p>
          <p className={clsx(montserrat.className, "text-sm")}>
            {t("2.description")}
          </p>
        </div>
      </div>
    </>
  )
}
