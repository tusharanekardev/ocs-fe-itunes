"use client"

import React, { useRef, useState } from "react"
import { useRecoilState, useRecoilValueLoadable } from "recoil"
import { tracksState } from "../recoilState"
import { fetchTrackByIdSelector } from "./recoilState"

export default function Page({ params }: { params: { trackId: string } }) {
  const loadableTracks = useRecoilValueLoadable(fetchTrackByIdSelector(params.trackId))
  const [tracks] = useRecoilState(tracksState)
  const track = tracks?.find((item) => item?.trackId === parseInt(params.trackId)) || loadableTracks?.contents
  const [isPlaying, setIsPlaying] = useState(false)
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
  return (
    <div className="flex h-screen items-center justify-center shadow-lg">
      <div className="relative flex space-x-4 rounded-lg bg-gray-300 p-4 shadow-lg">
        <img
          src={track?.artworkUrl100}
          alt={`${track?.trackName} album art`}
          className="h-24 w-24 rounded-md object-cover"
        />
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="line-clamp-1 text-xl font-semibold">{track?.trackName}</h2>
            <p className="text-sm text-gray-500">{track?.artistName}</p>
            <p className="mt-1 text-sm text-gray-500">{track?.collectionName}</p>
          </div>
          <p className="text-lg font-bold">${track?.trackPrice}</p>
          <button className="absolute bottom-2 right-2" onClick={handleTogglePlayPause}>
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>
      </div>
      <audio ref={audioRef} src={track?.previewUrl}>
        <track kind="captions" src="captions_en.vtt" label="English" default />
      </audio>
    </div>
  )
}
