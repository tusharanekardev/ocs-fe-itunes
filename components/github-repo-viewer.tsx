"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

interface Repo {
  id: number
  name: string
  stargazers_count: number
  forks_count: number
  updated_at: string
  html_url: string
}

export function GithubRepoViewer() {
  const [error, setError] = useState("")
  const [username, setUsername] = useState("")
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(false)
  const fetchRepos = async () => {
    if (!username) return
    setLoading(true)
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos`)
      if (!response.ok) throw new Error("Failed to fetch repositories")
      const data = await response.json()
      setRepos(data as Repo[])
    } catch {
      setError("Failed to fetch repositories")
      throw new Error("Failed to fetch repositories")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto max-w-3xl p-4">
      <h1 className="mb-4 text-2xl font-bold">GitHub Repository Viewer</h1>
      <div className="mb-4 flex gap-2">
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="grow"
        />
        <Button onClick={fetchRepos} disabled={loading}>
          {loading ? "Loading..." : "Fetch Repos"}
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
              <p>Stars: {repo.stargazers_count}</p>
              <p>Forks: {repo.forks_count}</p>
              <p>Last: {new Date(repo.updated_at).toLocaleDateString()}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
