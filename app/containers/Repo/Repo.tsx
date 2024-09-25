"use client"

import React from "react"
import { useRecoilState, useRecoilCallback } from "recoil"
import { useTranslations } from "next-intl"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card/card"
import { Input } from "@/app/components/ui/input/input"
import { Button } from "@/app/components/ui/button/button"
import { repoNameState, reposState, errorState, loadingState, fetchReposSelector } from "./recoilState"

export function GithubRepo() {
  const t = useTranslations()
  const [repoName, setRepoName] = useRecoilState(repoNameState)
  const [repos] = useRecoilState(reposState)
  const [error, setError] = useRecoilState(errorState)
  const [loading, setLoading] = useRecoilState(loadingState)

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
    <div className="container mx-auto max-w-3xl p-4">
      <h1 className="mb-4 text-2xl font-bold">{t("title")}</h1>
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
      {error && <p className="mb-4 text-red-500">{error}</p>}
      <div className="space-y-4">
        {repos.map((repo) => (
          <Card key={repo.id}>
            <CardHeader>
              <CardTitle>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {repo.name}
                </a>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                {t("stars")}: {repo.stargazers_count}
              </p>
              <p>
                {t("forks")}: {repo.forks_count}
              </p>
              <p>
                {t("last_updated")}: {new Date(repo.updated_at).toLocaleDateString()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
