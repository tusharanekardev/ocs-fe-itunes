"use client"
import React from "react"
import { useRecoilCallback, useRecoilState } from "recoil"
import { useTranslations } from "next-intl"
import { errorState, fetchTracksSelector, loadingState, trackNameState, tracksState } from "./recoilState"
import { Input } from "../components/ui/input/input"
import { Button } from "../components/ui/button/button"

const ItuensHeader = () => {
  const t = useTranslations()
  const [trackName, setTrackName] = useRecoilState(trackNameState)
  const [loading, setLoading] = useRecoilState(loadingState)
  const [error, setError] = useRecoilState(errorState)

  const fetchTracks = useRecoilCallback(({ snapshot, set }) => async () => {
    setLoading(true)
    setError("")
    try {
      const tracksData = await snapshot.getPromise(fetchTracksSelector)
      set(tracksState, tracksData)
    } catch (error) {
      console.log(error)
      set(tracksState, [])
      setError("error_fetch")
    } finally {
      setLoading(false)
    }
  })

  const handleFetchTracks = () => {
    fetchTracks()
  }

  return (
    <>
      <div className="mb-4 flex gap-2">
        <Input
          type="text"
          value={trackName}
          onChange={(e) => setTrackName(e.target.value)}
          placeholder={t("enter_track_name")}
          className="grow p-2"
        />
        <Button onClick={handleFetchTracks}>{loading ? t("loading") : t("fetch_tracks")}</Button>
      </div>
      {error && <p className="mb-4 text-red-500">{error}</p>}
    </>
  )
}

export default React.memo(ItuensHeader)
