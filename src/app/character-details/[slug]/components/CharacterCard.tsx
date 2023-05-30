import CharacterImage from '@/app/components/CharacterImage'
import Description from './Description'
import Card from './Card'
import {characterDataProps} from '../types'

const CharacterCard = ({characterData} : characterDataProps) => {

  const {image , name} = characterData

  const img = <CharacterImage src={image} alt={name} />

  const description = <Description characterData={characterData}/>

  return (
        <Card
        image = {img}
        description = {description}
        />
  )
}

export default CharacterCard

