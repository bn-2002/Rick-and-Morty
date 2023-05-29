import React from 'react'
import { CharacterType } from '../types'
import CharacterImage from '@/app/components/CharacterImage'
import Description from './Description'

const CharacterCard = ({characterData} : {characterData : CharacterType}) => {
  return (
    <div className="items-center flex flex-col justify-center w-full h-screen overflow-auto bg-gray-900">
      <div className=" rounded-lg shadow-lg overflow-hidden w-[80%] md:w-3/5 flex flex-col lg:flex-row bg-gray-800 text-white">
        {/* Image */}
        <div  className="w-full object-cover object-center flex-1">
          <CharacterImage src={characterData.image} alt={characterData.name} />
        </div>

        {/* Description */}
        <div className="p-4 flex-1">
          <Description characterData={characterData}/>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard

