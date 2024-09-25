import React from "react"
import { useRecoilState, useRecoilCallback } from "recoil"
import { useTranslations } from "next-intl"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card/card"
import { Input } from "@/app/components/ui/input/input"
import { Button } from "@/app/components/ui/button/button"
import { repoNameState, reposState, errorState, loadingState, fetchReposSelector } from "./recoilState"

const RepoHeader = () => {
    const t = useTranslations()
    const [repoName, setRepoName] = useRecoilState(repoNameState)
    const [loading, setLoading] = useRecoilState(loadingState)
    const [error, setError] = useRecoilState(errorState)

    // Define a callback that triggers the selector manually
    const fetchRepos = useRecoilCallback(({ snapshot, set }) => async () => {
        setLoading(true)
        setError("")
        try {
        const repoData = await snapshot.getPromise(fetchReposSelector)
        set(reposState, repoData)
        } catch (error) {
        console.log(error)
        set(reposState, [])
        setError(t("error_fetch"))
        } finally {
        setLoading(false)
        }
    })

  const handleFetchRepos = () => {
    fetchRepos()
  }

  return (
    <div className="mb-4 flex gap-2">
        <Input
        type="text"
        value={repoName}
        onChange={(e) => setRepoName(e.target.value)}
        placeholder={t("enter_username")}
        className="grow"
        />
        <Button onClick={handleFetchRepos} disabled={loading}>
        {loading ? t("loading") : t("fetch_repos")}
        </Button>
    </div>
  )
}

export default RepoHeader