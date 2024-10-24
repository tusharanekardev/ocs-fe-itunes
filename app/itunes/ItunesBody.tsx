"use client"
import React from "react"
import { useRecoilState, useSetRecoilState } from "recoil"
import { currentTrackState, isPlayingState, Track, tracksState } from "./recoilState"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card/card"
import Link from "next/link"
import { Button } from "../components/ui/button/button"
import TrackPlayer from "./TrackPlayer"

const ItunesBody = () => {
  const [tracks] = useRecoilState(tracksState)
  const setCurrentTrack = useSetRecoilState(currentTrackState)
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)

  function handleTogglePlayPause(track: Track) {
    setCurrentTrack(track)
    if (!isPlaying) {
      setIsPlaying(true)
    }
  }
  return (
    <div>
      <div className="flex flex-col gap-2">
        {tracks?.map((track) => {
          const { trackId, artworkUrl100, trackName, artistName, collectionName } = track
          return (
            <Card key={trackId} className="p-4 text-left">
              <img src={artworkUrl100} alt={trackName} className="rounded-lg" />
              <CardHeader>
                <CardTitle>
                  <Link href={`/itunes/${trackId}`}>
                    <p>{trackName}</p>
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{artistName}</p>
                <p>{collectionName}</p>
              </CardContent>
              <Button onClick={() => handleTogglePlayPause(track)}>Play</Button>
            </Card>
          )
        })}
      </div>
      <TrackPlayer />
    </div>
  )
}

export default React.memo(ItunesBody)
