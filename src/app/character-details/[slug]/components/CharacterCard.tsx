import CharacterImage from '../../../components/CharacterImage'
import Description from './Description'
import Card from './Card'
import {characterDataProps} from '../types'

const CharacterCard = ({characterData} : characterDataProps) => {

  const {image , name} = characterData

  const img = <CharacterImage src={image} alt={name} className='h-full rounded-t-lg md:rounded-l-lg md:rounded-tr-none'/>

  const description = <Description characterData={characterData}/>

  return (
        <Card
        image = {img}
        description = {description}
        />
  )
}

export default CharacterCard

