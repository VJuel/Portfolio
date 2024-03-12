import CookiesModal from "@/components/cookies/CookiesModal"
import { useTranslations } from "next-intl"
import { FormSwitch } from "@/components/cookies/FormFieldsCookies"
import { Button } from "@/components/ui/button"
import FormCookieContainer from "@/components/cookies/FormCookieContainer"

export default async function Cookies() {
  const cookie = useTranslations("cookies")

  return (
    <CookiesModal>
      <FormCookieContainer>
        <FormSwitch
          name="analytics"
          label="analytics"
          value={"value" || false}
        />
        <Button className="mt-4 text-[--text]">{cookie("btn")}</Button>
      </FormCookieContainer>
    </CookiesModal>
  )
}
