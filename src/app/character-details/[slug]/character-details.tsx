'use client'

import React from "react"
import { useQuery } from "@tanstack/react-query"
import {API_URL} from '../../helpers/config'
import { useParams } from "next/navigation"
import CharacterCard from "./components/CharacterCard"
import { CharacterType } from "./types"
import CardShimmer from "./components/CardShimmer"

const fetchCharcter = async (id : number) => {
  const url = `${API_URL}/character/${id}`
  const response = await fetch(url)
  return await response.json() as CharacterType
}

const CharctersDetails = () => {
  const id  = Number(useParams().slug)

  const {data, isLoading, isFetching, error} = useQuery({
    queryKey: ["hydrate-charachter", id],
    queryFn: () => fetchCharcter(id),
  })

  return (
    <>
      {error && <p>Error</p>}
      {isLoading && <CardShimmer/>} 
      {data && <CharacterCard characterData={data}/>}
    </>
  )
}

export {fetchCharcter, CharctersDetails}