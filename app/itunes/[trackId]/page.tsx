"use client"

import { useRecoilState } from "recoil"
import { tracksState } from "../recoilState"

export default function Page({ params }: { params: { trackId: string } }) {
  const [tracks] = useRecoilState(tracksState)
  const track = tracks?.find((item) => item.trackId === parseInt(params.trackId))
  return (
    <div className="flex justify-center items-center h-screen shadow-lg ">
      <div className="flex space-x-4 bg-gray-300 shadow-lg p-4 rounded-lg">
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
        </div>
      </div>
      
    </div>
  )
}
