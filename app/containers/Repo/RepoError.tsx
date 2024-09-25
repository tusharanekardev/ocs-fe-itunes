import React from 'react'
import { useRecoilState } from "recoil"
import { errorState } from "./recoilState"

const RepoError = () => {
  const [error, setError] = useRecoilState(errorState)

  return (
    <>
        {error && <p className="mb-4 text-red-500">{error}</p>}
    </>
  )
}

export default RepoError