"use server"

import { cookies } from "next/headers"

export async function createCookieLang(data) {
  cookies().set({
    name: "locale",
    value: "locale",
    httpOnly: true,
    path: "/",
  })
}
