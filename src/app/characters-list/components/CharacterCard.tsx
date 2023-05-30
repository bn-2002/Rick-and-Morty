import { CharacterType } from "../types"
import * as React from "react"
import CharacterImage from "../../components/CharacterImage"
import Description from "./Description"
import Link from "next/link"
import './Header.css'
import Card from "./Card"

const CharacterCard = ({ character } : {character : CharacterType}) => {
  
  const {image, name, status} = character
  
  const img =  <CharacterImage src={image} alt={name} className="rounded-sm"/>

  const description = <Description name={name} status={status} />

  return (
    <Card
    image = {img}
    description = {description} 
    />
  )

}

export default CharacterCard
