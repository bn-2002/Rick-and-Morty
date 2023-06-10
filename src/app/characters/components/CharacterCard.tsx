import { CharacterType } from "../types"
import * as React from "react"
import CharacterImage from "../../components/CharacterImage"
import Description from "./Description"
import Card from "./Card"
import FavoriteButton from "../../components/FavoriteButton"

const CharacterCard = ({ characterData } : {characterData : CharacterType}) => {
  
  const {id, image, name, status} = characterData
  
  const img =  <CharacterImage src={image} alt={name} className="rounded-sm h-auto"/>

  const description = <Description name={name} status={status} id={id} />

  return (
      <Card
      image = {img}
      description = {description} 
      favoriteBtn = {<FavoriteButton characterData={characterData} />}
      />
  )

}

export default CharacterCard
