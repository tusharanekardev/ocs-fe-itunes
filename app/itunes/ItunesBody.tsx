"use client"
import React from "react"
import { useRecoilState } from "recoil"
import { tracksState } from "./recoilState"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card/card"
import Link from "next/link"

const ItunesBody = () => {
  const [tracks] = useRecoilState(tracksState)
  return (
    <div>
      {tracks?.map((track) => (
        <Card key={track.trackId}>
          <img src={track.artworkUrl100} alt={track.trackName} />
          <CardHeader>
            <CardTitle>
              <Link href={`/itunes/${track.trackId}`}>
                <p>{track.trackName}</p>
              </Link>
            </CardTitle>
            ``
          </CardHeader>
          <CardContent>
            <p>{track.artistName}</p>
            <p>{track.collectionName}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default React.memo(ItunesBody)
