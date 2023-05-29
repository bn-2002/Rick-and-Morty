import { CharacterType } from "../types"
import * as React from "react"
import CharacterImage from "../../components/CharacterImage"
import Description from "./Description"
import Link from "next/link"

const CharacterCard = ({ character } : {character : CharacterType}) => {
  
  const {image, name, status} = character
  
  return (
    <Link href={`./character-details/${character.id}`}>      
     <div className=" shadow-3xl h-full flex flex-col rounded-lg bg-gray-800 font-Dongle text-[28px] text-white p-4 gap-2">
          <CharacterImage src={image} alt={name}/>
          <Description name={name} status={status} />
      </div>
    </Link>
  )
}

export default CharacterCard
