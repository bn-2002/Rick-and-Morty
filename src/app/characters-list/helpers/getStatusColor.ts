import { CharacterStatusType } from "../types"

const getStatusColor = (status :  CharacterStatusType) => {
    if (status == 'Alive') return {fill : '#00ff00' , stroke : '#008000'}
    if (status == 'Dead') return {fill : '#000000' , stroke : '#999999'}
    else return {fill : '#cccccc' , stroke : '#999999'}
}

export default getStatusColor