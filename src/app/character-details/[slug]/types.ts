import { ReactNode } from "react";

  export type CharacterType = {
      created: string;
      episode: string[]
      gender: string
      id: number
      image: string
      location: {
        name: string
        url: string
      }
      name: string
      origin: {
        name: string
        url: string
      }
      species: string
      status: CharacterStatusType
      type: string
      url: string
  }

  type CharacterStatusType = 'Alive' | 'Dead' | 'unknown'

  export interface characterDataProps {
      characterData : CharacterType
  }