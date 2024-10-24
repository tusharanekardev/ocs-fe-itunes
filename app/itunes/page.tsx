import React from "react"
import ItunesBody from "./ItunesBody"
import ItunesHeader from "./ItunesHeader"

export default function Page() {
  return (
    <div className="container mx-auto max-w-3xl p-4">
      <h1 className="mb-4 text-2xl font-bold">Itunes Tracks</h1>
      <ItunesHeader />
      <ItunesBody />
    </div>
  )
}
