"use client"

import { useRecoilState, useRecoilValue } from "recoil"
import { Play, Pause } from "lucide-react"
import { currentTrackState, isPlayingState } from "./recoilState"
import { Button } from "../components/ui/button/button"
import React, { useEffect, useRef } from "react"

const TrackPlayer = () => {
  const currentTrack = useRecoilValue(currentTrackState)
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  function handleTogglePlayPause() {
    if (audioRef?.current) {
      if (isPlaying) {
        audioRef?.current.pause()
      } else {
        audioRef?.current.play()
      }
      setIsPlaying((prevIsPlaying) => !prevIsPlaying)
    }
  }

  useEffect(() => {
    if (audioRef?.current) {
      audioRef?.current.play()
    }
  }, [currentTrack])

  if (!currentTrack) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between border-t border-border bg-background p-4">
      <img src={currentTrack?.artworkUrl100} alt={`${currentTrack.trackName} cover`} className="rounded-lg" />
      <div>
        <h3 className="font-semibold">{currentTrack.trackName}</h3>
        <p className="text-sm text-muted-foreground">{currentTrack.artistName}</p>
      </div>
      <Button size="icon" onClick={handleTogglePlayPause}>
        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        <span className="sr-only">{isPlaying ? "Pause" : "Play"}</span>
      </Button>
      <audio ref={audioRef} src={currentTrack?.previewUrl}>
        <track kind="captions" src="captions_en.vtt" label="English" default />
      </audio>
    </div>
  )
}

export default TrackPlayer
