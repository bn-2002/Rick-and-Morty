import { ReactNode } from "react"

export type CharacterImageProps =  {src : string , alt : string , className? :string}

export interface CardProps {
    image: ReactNode,
    description : ReactNode
}
