import { CharacterType } from "../types"
import * as React from "react"
import CharacterImage from "./CharacterImage"
import CharacterDescription from "./CharacterDescription"
import Link from "next/link"

const Character = ({ character } : {character : CharacterType}) => {
  
  const {id, image, name, status, location, gender, origin, created } = character
  
  return (
    <Link href={`./character-details/${character.id}`}>      
     <div className=" shadow-3xl h-full flex rounded-lg flex-row bg-gray-800 font-Dongle text-[28px] text-white p-4"
        onClick={()=>console.log('id : ' , id)}
        >
          <div className="flex-1">
              <CharacterImage src={image} alt={name}/>
          </div>

          <div className="flex-1">
            <CharacterDescription name={name} location={location} origin={origin} gender={gender} created={created} status={status} />
          </div>
      </div>
    </Link>
  )
}

export default Character
