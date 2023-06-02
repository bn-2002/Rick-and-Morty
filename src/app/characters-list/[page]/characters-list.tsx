'use client'

import React from "react"
import { CharactersType } from "./types"
import { useQuery } from "@tanstack/react-query"
import Character from "./components/CharacterCard"
import {API_URL} from '../../helpers/config'
import Buttons from "./components/Buttons"
import CardShimmer from "./components/CardShimmer"
import Header from "./components/Header"
import Blobs from "./components/Blobs"
import { useParams } from "next/navigation"
import FavoriteCharacters from "@/app/components/FavoriteCharacters"
import { useEffect } from "react"
import useFavoritesStore from "@/lib/store"

const fetchCharcters = async (pageNumber: number) => {
  const url = `${API_URL}/character?page=${pageNumber}`
  const response = await fetch(url)
  return await response.json() as CharactersType
}

const CharctersList = () => {
  const pageNumber  = Number(useParams()?.page)

  const {data, isLoading, isFetching, error} = useQuery({
    queryKey: ["hydrate-charachters", pageNumber],
    queryFn: () => fetchCharcters(pageNumber),
    keepPreviousData : true
  })

  return (
    <div className="overflow-hidden relative">
      <Header/>
      <Blobs/>
      <div className="flex flex-row flex-wrap items-stretch px-[10%] bg-gray-900 py-10">
          
          <FavoriteCharacters/>

          {isLoading && [...Array(20)].map((i ,index) => <CardShimmer key={index}/>)}
          
          {data && data.results.map(character => <Character key={character.id} characterData={character}/>)}
          
          {data && <Buttons data={data} isLoading={isLoading} pageNumber={pageNumber}/>}

      </div>
    </div>
  )
}

export {fetchCharcters, CharctersList}