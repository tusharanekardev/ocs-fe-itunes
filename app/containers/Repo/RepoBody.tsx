import React from "react"
import { useRecoilState } from "recoil"
import { useTranslations } from "next-intl"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card/card"
import { reposState, errorState } from "./recoilState"

const RepoBody = () => {
  const t = useTranslations()
  const [repos] = useRecoilState(reposState)

  return (
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
  )
}

export default RepoBody