import React from "react"
import { getLocale, getMessages } from "next-intl/server"
import Head from "next/head"
import "styles/tailwind.css"
import RootClientLayout from "./rootClientLayout"

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const messages = await getMessages()
  const locale = await getLocale()

  return (
    <html lang={locale}>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <RootClientLayout locale={locale} messages={messages}>
          {children}
        </RootClientLayout>
      </body>
    </html>
  )
}
