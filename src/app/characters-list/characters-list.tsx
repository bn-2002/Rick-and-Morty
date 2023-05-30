'use client'

import React, { useState } from "react"
import { CharactersType } from "./types"
import { useQuery } from "@tanstack/react-query"
import Character from "./components/CharacterCard"
import {API_URL} from '../helpers/config'
import Buttons from "./components/Buttons"
import CardShimmer from "./components/CardShimmer"
import Header from "./components/Header"
import Blob from "./components/Blobs"

const fetchCharcters = async (pageNumber: number) => {
  const url = `${API_URL}/character?page=${pageNumber}`
  const response = await fetch(url)
  return await response.json() as CharactersType
}

const CharctersList = () => {
  const [pageNumber , setPageNumber] = useState(1)

  const {data, isLoading, isFetching, error} = useQuery({
    queryKey: ["hydrate-charachters", pageNumber],
    queryFn: () => fetchCharcters(pageNumber),
  })

  return (
    <div className="overflow-hidden relative">
      <Header/>

      <Blob/>
      {/* <Blob/> */}

      {/* {error && <p>Error</p>} */}

      <div className="flex flex-row flex-wrap items-stretch px-[10%] bg-gray-900 py-10">
          
          {isLoading && [...Array(20)].map((item ,index) => <CardShimmer key={index}/>)}

          {data && data.results.map(character => <Character key={character.id} characterData={character}/>)}
          
          {data && <Buttons data={data} isLoading={isLoading} pageNumber={pageNumber} setPageNumber={setPageNumber}/>}

      </div>

    </div>
  )
}

export {fetchCharcters, CharctersList}