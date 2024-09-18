"use client"
import React from "react"
import "styles/tailwind.css"
import { RecoilRoot } from "recoil"
// import { RecoilDevTools } from "recoil-toolkit"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      {/* uncomment the below tag to debug using Recoil Toolkit */}
      {/* <RecoilDevTools forceSerialize={false} /> */}
      <html lang="en">
        <body>{children}</body>
      </html>
    </RecoilRoot>
  )
}
