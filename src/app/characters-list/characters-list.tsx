'use client'

import React, { useState } from "react"
import { CharactersType } from "./types"
import { useQuery } from "@tanstack/react-query"
import Character from "./components/Character"
import CharacterShimmer from "./components/CharacterShimmer"
import {API_URL} from '../helpers/config'

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
      {isLoading && 
        <div className="flex flex-row flex-wrap items-stretch px-60 bg-gray-900">
          {[...Array(20)].map((item,index) =>
          <div className="w-1/2 p-4" key={index}>
            <CharacterShimmer/>
          </div>
          )}
        </div>
      }

      {error && <p>Error</p>}
      
      {data && <div className="flex flex-row flex-wrap items-stretch px-60 bg-gray-900">
          {data.results.map(character => 
            <div key={character.id} className="w-1/2 p-4">
              <Character key={character.id} character={character} />
          </div>)}
          
          {/* Buttons Section */}
          <div className="flex justify-between w-full py-10 items-center font-Dongle selection:text-yellow-400">
            <button className="p-5 bg-blue-800 text-white rounded-lg  text-[30px] disabled:bg-blue-900 disabled:cursor-not-allowed"
              onClick={()=>setPageNumber(pageNumber-1)}
              disabled={isLoading || pageNumber==1}
            >
              Previous
            </button>

            <p className="text-white  text-[40px]">page {pageNumber}</p>

            <button className="p-5 bg-blue-800 text-white rounded-lg  text-[30px] disabled:bg-blue-900 disabled:cursor-not-allowed"
              onClick={()=>setPageNumber(pageNumber+1)}
              disabled={isLoading || !data?.info.next}
            >
              Next
            </button>
          </div>
      </div>
      }
    </>
  )
}

export {fetchCharcters, CharctersList}