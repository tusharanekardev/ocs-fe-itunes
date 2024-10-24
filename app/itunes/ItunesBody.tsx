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
      {tracks?.map((track) => {
        const { trackId, artworkUrl100, trackName, artistName, collectionName } = track
        return (
          <Card key={trackId}>
            <img src={artworkUrl100} alt={trackName} />
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
          </Card>
        )
      })}
    </div>
  )
}

export default React.memo(ItunesBody)
