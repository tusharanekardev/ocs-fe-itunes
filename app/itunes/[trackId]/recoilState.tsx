import { atom, selectorFamily } from "recoil";
import { ItunesResponse, Track } from "../recoilState";
import { fetchWithCheck } from "@/lib/apiUtils";

export const trackByIdState = atom<Track[]>({
    key: 'trackByIdState',
    default: []
})

export const fetchTrackByIdSelector = selectorFamily({
    key: 'fetchTrackByIdSelector',
    get: (trackId: string) => async ({ get }) => {
        const trackById = get(trackByIdState)
        if(!trackById) return []
        const data = await fetchWithCheck(`https://itunes.apple.com/lookup?id=${trackId}`)
        return (data as ItunesResponse).results[0]
    }
})