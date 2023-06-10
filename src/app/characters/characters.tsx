'use client'

import React from "react"
import { CharactersType } from "./types"
import { useQuery } from "@tanstack/react-query"
import Character from "./components/CharacterCard"
import {API_URL} from '../helpers/config'
import Buttons from "./components/Buttons"
import CardShimmer from "./components/CardShimmer"
import Header from "./components/Header"
import Blobs from "./components/Blobs"
import FavoriteCharacters from "@/app/components/FavoriteCharacters"
import { useSearchParams } from "next/navigation"
import getquery from "../helpers/getquery"

const fetchCharcters = async ({pageQ, nameQ, genderQ, statusQ} : {pageQ : string,nameQ : string,genderQ : string,statusQ : string}) => {
    
    const url = `${API_URL}/character/?${pageQ}${nameQ}${genderQ}${statusQ}`.replace('?&','?')
    
    const response = await fetch(url)
    const Result = await response.json() as CharactersType | {error : string}
    return Result
}

const CharctersList = () => {

  const searchParams = useSearchParams()

  const pageQ = getquery(searchParams,'page')
  const nameQ = getquery(searchParams,'name')
  const genderQ = getquery(searchParams,'gender')
  const statusQ = getquery(searchParams,'status')

  let pageNumber = Number(searchParams?.get("page")) || 1

  const {data, isLoading, isFetching, error} = useQuery({
    queryKey: ["hydrate-charachters", {pageQ,nameQ,genderQ,statusQ}],
    queryFn: () => fetchCharcters({pageQ,nameQ,genderQ,statusQ}),
    keepPreviousData : true
  })

  return (
    <div className="overflow-hidden relative">
      <Header/>
      <Blobs/>
      <div className="flex flex-row flex-wrap items-stretch px-[10%] bg-gray-900 py-10">
          
          <FavoriteCharacters/>

          {isLoading && [...Array(20)].map((i ,index) => <CardShimmer key={index}/>)}
        
          {data && 'error' in data && <p className="text-white text-[2.5rem] text-center w-full font-Dongle">{data.error}</p>} 

          {data && 'results' in data && 'info' in data && data.results.map((character :any) => <Character key={character.id} characterData={character}/>)}

          {data && 'results' in data && 'info' in data && data.results && <Buttons data={data} isLoading={isLoading} pageNumber={pageNumber}/>}

      </div>
    </div>
  )
}

export {fetchCharcters, CharctersList}