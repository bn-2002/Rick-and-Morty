import { CharacterType } from "../types"
import * as React from "react"
import CharacterImage from "../../components/CharacterImage"
import Description from "./Description"
import Link from "next/link"
import Card from "./Card"

const CharacterCard = ({ characterData } : {characterData : CharacterType}) => {
  
  const {id, image, name, status} = characterData
  
  const img =  <CharacterImage src={image} alt={name} className="rounded-sm h-auto"/>

  const description = <Description name={name} status={status} id={id} />

  return (
    // <Link href={`./character-details/${character.id}`}> 

      <Card
      image = {img}
      description = {description} 
      />

    //  </Link>
  )

}

export default CharacterCard
