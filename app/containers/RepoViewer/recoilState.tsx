import { atom, selector } from "recoil"

interface Repo {
  id: number
  name: string
  stargazers_count: number
  forks_count: number
  updated_at: string
  html_url: string
}
// Atom to store the username
export const usernameState = atom<string>({
  key: "usernameState",
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

// Selector to fetch the repositories based on the username
export const fetchReposSelector = selector<Repo[]>({
  key: "fetchReposSelector",
  get: async ({ get }) => {
    const username = get(usernameState)
    if (!username) return []

    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos`)
      if (!response.ok) throw new Error("Failed to fetch repositories")
      const data = await response.json()
      return data as Repo[]
    } catch (error) {
      console.log(error)
      throw error
    }
  },
})
