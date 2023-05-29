'use client'

import React, { useState } from "react"
import { CharactersType } from "./types"
import { useQuery } from "@tanstack/react-query"
import Character from "./components/CharacterCard"
import {API_URL} from '../helpers/config'
import ListShimmer from "./components/ListShimmer"
import Buttons from "./components/Buttons"
import CardShimmer from "./components/CardShimmer"
import Header from "./components/Header"

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
      <div className="shape-blob one bg-slate-800"></div>
      {/* <div className="shape-blob bg-slate-800"></div> */}
      {/* <div className="shape-blob two bg-slate-800"></div> */}
      <Header/>
      {isLoading && <ListShimmer/>}
      {error && <p>Error</p>}
      {
      data && <div className="flex flex-row flex-wrap items-stretch px-[10%] bg-gray-900 py-10">
          {
          data.results.map(character => 
            <div key={character.id} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
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