import { useLocale, useTranslations } from "next-intl"
import { locales } from "../../config"
import LocaleSwitcherSelect from "./LocaleSwitcherSelect"
import { montserrat } from "../fonts"
import clsx from "clsx"

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher")
  const locale = useLocale()

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
      {locales.map((cur) => (
        <option
          key={cur}
          value={cur}
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className={clsx(
            montserrat.className,
            "w-full cursor-pointer montserrat"
          )}
        >
          {t("locale", { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  )
}
