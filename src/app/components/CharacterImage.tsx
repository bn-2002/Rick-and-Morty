'use client'

import Image from "next/image"
import { CharacterImageProps } from "../types"
import { useState } from "react"
import {onLoadedImg , onErrorImg} from '../helpers/config'

const CharacterImage = ({src , alt , className} : CharacterImageProps) => {

    const [imgSrc , setImgSrc] = useState<string>(src)

    return (
        <Image
        className= {`object-cover w-full h-auto selection:bg-gray-200 ${className}`}
        width={"100"}
        height={"100"}
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