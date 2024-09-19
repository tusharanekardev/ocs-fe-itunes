"use client"
import React from "react"
import { RecoilRoot } from "recoil"
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl"

export default function RootClientLayout({
  children,
  messages,
  locale,
}: {
  children: React.ReactNode
  messages: AbstractIntlMessages
  locale: string
}) {
  return (
    <RecoilRoot>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </RecoilRoot>
  )
}
