import React from "react"
// import { useRecoilState } from "recoil"
import { useTranslations } from "next-intl"
import RepoHeader from "./RepoHeader"
import RepoBody from "./RepoBody"

const Repo = () => {
  const t = useTranslations()

  return (
    <div className="container mx-auto max-w-3xl p-4">
      <h1 className="mb-4 text-2xl font-bold">{t("title")}</h1>
      <RepoHeader />
      <RepoBody />
    </div>
  )
}

export default React.memo(Repo)
