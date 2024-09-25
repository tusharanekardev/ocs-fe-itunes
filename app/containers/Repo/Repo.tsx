"use client"

import React from "react"
import { useRecoilState } from "recoil"
import { useTranslations } from "next-intl"
import { errorState } from "./recoilState"
import RepoHeader from "./RepoHeader"
import RepoBody from "./RepoBody"

export default function Repo() {
  const t = useTranslations()
  const [error, setError] = useRecoilState(errorState)

  return (
    <div className="container mx-auto max-w-3xl p-4">
      <h1 className="mb-4 text-2xl font-bold">{t("title")}</h1>
      <RepoHeader />
      {error && <p className="mb-4 text-red-500">{error}</p>}
      <RepoBody />
    </div>
  )
}
