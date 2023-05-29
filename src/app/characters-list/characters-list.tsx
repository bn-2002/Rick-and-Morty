'use client'

import React, { useState } from "react"
import { CharactersType } from "./types"
import { useQuery } from "@tanstack/react-query"
import Character from "./components/CharacterCard"
import {API_URL} from '../helpers/config'
import ListShimmer from "./components/ListShimmer"
import Buttons from "./components/Buttons"

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
    <>
      {isLoading && <ListShimmer/>}
      {error && <p>Error</p>}
      {data && <div className="flex flex-row flex-wrap items-stretch px-60 bg-gray-900">
          {
          data.results.map(character => 
            <div key={character.id} className="w-1/4 p-4">
              <Character key={character.id} character={character} />
          </div>)
          }
          <Buttons data={data} isLoading={isLoading} pageNumber={pageNumber} setPageNumber={setPageNumber} />
      </div>
      }
    </>
  )
}

export {fetchCharcters, CharctersList}