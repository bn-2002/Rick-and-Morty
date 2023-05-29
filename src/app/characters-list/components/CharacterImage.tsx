'use client'
import Image from "next/image"
import { CharacterImageProps } from "../types"
import { useState } from "react"
import {onLoadedImg , onErrorImg} from '../helpers/config'

const CharacterImage = ({src , alt} : CharacterImageProps) => {

    const [imgSrc , setImgSrc] = useState<string>(src)

    return (
        <Image
        className="rounded-lg  object-cover h-full w-full selection:bg-gray-200" 
        width={"200"} 
        height={"200"}
        alt={alt}
        src={imgSrc}
        blurDataURL={onLoadedImg}
        placeholder={"blur"}
        onError={()=> setImgSrc(onErrorImg)
        }
        />
    )
}

export default CharacterImage