'use client'

import Star from '../../app/icons/Star'
import useFavoritesStore from '../../lib/store'
import { useState} from 'react'
import { CharacterType } from '../character-details/[slug]/types'

const FavoriteButton = ({characterData} : {characterData : CharacterType}) => {

  const increaseFavorites = useFavoritesStore((state) => state.increaseFavorites)
  const decreaseFavorites = useFavoritesStore((state) => state.decreaseFavorites)  
  
  const favorites = useFavoritesStore(state => state.favorites)
  let isFound = favorites.find((f : CharacterType) => f.id == characterData.id)
  if (isFound) isFound =  true
  else isFound = false

  const [isFavorite , setIsFavorite] = useState(isFound)

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

