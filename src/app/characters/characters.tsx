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

const fetchCharcters = async ({name , pageNumber, gender , status} : {name? : string , pageNumber : number, gender:string, status : string}) => {
  console.log('name :', name)
  console.log('pageNumber :', pageNumber)
  const pageSearch = (pageNumber != 1)? `page=${pageNumber}` : ''
  const nameSearch = (name != "")? `name=${name}` : ''
  const genderSearch = (gender != "")? `gender=${gender}` : ''
  const statusSearch = (status != "")? `status=${status}` : ''

  const url = `${API_URL}/character?${pageSearch}${name?'&':''}${nameSearch}${gender?'&':''}${genderSearch}${status?'&':''}${statusSearch}`
  console.log('url : ' ,  url)
  const response = await fetch(url)
  return await response.json() as CharactersType
}

const CharctersList = () => {
  const searchParams = useSearchParams()

  let pageNumber = Number(searchParams?.get("page")) || 1
  const name = searchParams?.get("name") || ""
  const gender = searchParams?.get("gender") || ""
  const status = searchParams?.get("status") || ""

  const {data, isLoading, isFetching, error} = useQuery({
    queryKey: ["hydrate-charachters", {pageNumber,name,gender,status}],
    queryFn: () => fetchCharcters({pageNumber,name,gender,status}),
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