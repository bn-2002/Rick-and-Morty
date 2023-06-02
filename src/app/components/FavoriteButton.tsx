'use client'

import checkIsFavorite from '@/app/helpers/checkIsFavorite'
import Star from '@/app/icons/Star'
import useFavoritesStore from '@/lib/store'
import { useState} from 'react'
import { CharacterType } from '../character-details/[slug]/types'

const FavoriteButton = ({characterData} : {characterData : CharacterType}) => {

  const increaseFavorites = useFavoritesStore((state) => state.increaseFavorites)
  const decreaseFavorites = useFavoritesStore((state) => state.decreaseFavorites)  
  const [isFavorite , setIsFavorite] = useState(checkIsFavorite(characterData.id))

 const handler = () => {
  setIsFavorite(!isFavorite)
    if (!isFavorite) increaseFavorites(characterData)
    if (isFavorite) decreaseFavorites(characterData)
  }

  return (
    <button className="absolute right-5 top-5" onClick={ ()=> handler()} >
            <Star isFavorite={isFavorite} />
   </button>
)
}

export default FavoriteButton

