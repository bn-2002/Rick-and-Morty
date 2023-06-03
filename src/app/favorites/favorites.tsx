'use client'

import React from "react"
import Character from "../characters/components/CharacterCard"
import FavoriteCharacters from "@/app/components/FavoriteCharacters"
import Header from "../characters/components/Header"
import Blobs from "../characters/components/Blobs"
import useFavoritesStore from "@/lib/store"

const FavoriteCharctersList = () => {    

  const favorites = useFavoritesStore(state=>state.favorites)

  return (
    <div className="overflow-hidden relative">
      <Header/>
      <Blobs/>
      <div className="flex flex-row flex-wrap items-stretch px-[10%] bg-gray-900 py-10">
          
          <FavoriteCharacters/>

          {favorites.length==0 && <p>There is not any Favorite Character</p>}

          {favorites && favorites?.map((character : any) => <Character key={character?.id} characterData={character}/>)}
      </div>
    </div>
  )
}

export {FavoriteCharctersList}


