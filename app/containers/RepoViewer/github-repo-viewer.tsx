"use client"

import React from "react"
import { useRecoilState, useRecoilCallback } from "recoil"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { usernameState, reposState, errorState, loadingState, fetchReposSelector } from "./recoilState"

export function GithubRepoViewer() {
  const [username, setUsername] = useRecoilState(usernameState)
  const [repos] = useRecoilState(reposState)
  const [error, setError] = useRecoilState(errorState)
  const [loading, setLoading] = useRecoilState(loadingState)

  // Define a callback that triggers the selector manually
  const fetchRepos = useRecoilCallback(({ snapshot, set }) => async () => {
    setLoading(true)
    setError("")
    try {
      // Getting the repos by triggering the selector
      const repoData = await snapshot.getPromise(fetchReposSelector)
      set(reposState, repoData) // Setting the repos state with the fetched data
    } catch (error) {
      console.log(error)
      set(reposState, []) // Setting the repos state with the fetched data
      setError("Failed to fetch repositories")
    } finally {
      setLoading(false)
    }
  })

  const handleFetchRepos = () => {
    fetchRepos() // Trigger the Recoil callback
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
        <Button onClick={handleFetchRepos} disabled={loading}>
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
