import { fetchWithCheck } from "@/lib/apiUtils"
import { atom, selector } from "recoil"

export interface Track {
  wrapperType: string
  kind: string
  artistId: number
  collectionId: number
  trackId: number
  artistName: string
  collectionName: string
  trackName: string
  collectionCensoredName: string
  trackCensoredName: string
  artistViewUrl: string
  collectionViewUrl: string
  trackViewUrl: string
  previewUrl: string
  artworkUrl30: string
  artworkUrl60: string
  artworkUrl100: string
  collectionPrice: number
  trackPrice: number
  releaseDate: string // ISO date format
  collectionExplicitness: string
  trackExplicitness: string
  discCount: number
  discNumber: number
  trackCount: number
  trackNumber: number
  trackTimeMillis: number
  country: string
  currency: string
  primaryGenreName: string
  isStreamable: boolean
}

export const trackNameState = atom<string>({
  key: "trackNameState",
  default: "",
})

export const tracksState = atom<Track[]>({
  key: "tracksState",
  default: [],
})

export const errorState = atom<string>({
  key: "errorState",
  default: "",
})

export const loadingState = atom<boolean>({
  key: "loadingState",
  default: false,
})

export const currentTrackState = atom<Track | null>({
  key: "currentTrackState",
  default: null,
})

export const isPlayingState = atom<boolean>({
  key: "isPlayingState",
  default: false,
})

export interface ItunesResponse {
  resultCount: number
  results: Track[]
}

export const fetchTracksSelector = selector<Track[]>({
  key: "fetchTracksSelector",
  get: async ({ get }) => {
    const trackName = get(trackNameState)
    if (!trackName) return []
    const data = await fetchWithCheck(`https://itunes.apple.com/search?term=${trackName}&entity=song`)
    return (data as ItunesResponse).results
  },
})
