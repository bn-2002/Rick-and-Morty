export type CharacterStatusType = 'Alive' | 'Dead' | 'unknown'

export type CharacterType = {
    created : string
    episode : string[]
    gender : string
    id : number
    image :  string 
    location : {name: string, url: string}
    name: string
    origin: {name:string, url: string}
    species: string
    status: CharacterStatusType
    type: string
    url: string 
}

export type CharactersType = {
    results : CharacterType[],
    info : any
}

export type CharacterImageProps =  {src : string , alt : string}

export type CharacterDescriptionType = {
    created : string
    gender : string
    location : {name: string, url: string}
    name: string
    origin: {name:string, url: string}
    status : CharacterStatusType
}
