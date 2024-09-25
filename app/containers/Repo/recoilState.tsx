import { atom, selector } from "recoil"
import { fetchWithCheck } from "@/lib/apiUtils"

interface Repo {
  id: number
  name: string
  stargazers_count: number
  forks_count: number
  updated_at: string
  html_url: string
}
// Atom to store the username
export const repoNameState = atom<string>({
  key: "repoNameState",
  default: "",
})

// Atom to store the list of repos
export const reposState = atom<Repo[]>({
  key: "reposState",
  default: [],
})

// Atom to store the error message
export const errorState = atom<string>({
  key: "errorState",
  default: "",
})

// Atom to store the loading status
export const loadingState = atom<boolean>({
  key: "loadingState",
  default: false,
})

interface GitHubResponse {
  total_count: number
  incomplete_results: boolean
  items: Repo[]
}

// Selector to fetch the repositories based on the username
export const fetchReposSelector = selector<Repo[]>({
  key: "fetchReposSelector",
  get: async ({ get }) => {
    const repoName = get(repoNameState)
    if (!repoName) return []
    const data = await fetchWithCheck(`https://api.github.com/search/repositories?q=${repoName}`)
    return (data as GitHubResponse).items
  },
})
