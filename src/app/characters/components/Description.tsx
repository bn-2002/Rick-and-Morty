import getStatusColor from "../helpers/getStatusColor"
import Circle from "../../icons/Circle"
import { CharacterDescriptionType } from "../types"
import Link from "next/link"

const Description = ({name, status, id} : CharacterDescriptionType) => {
    return (        
            <div className="gap-4 text-white flex justify-between h-full flex-col"> 
                {/* Name */}
                <Link href={`./character-details/${id}`} className="selection:text-red-500 selection:bg-gray-200 text-center font-mono font-semibold text-2xl ">{name}</Link>

                {/* Status */}
                <div className="flex flex-row gap-2 items-center selection:text-yellow-400">
                        <div className="">
                            <Circle fill={getStatusColor(status)?.fill} stroke={getStatusColor(status)?.stroke}/>
                        </div>
                        <p className="font-extralight" >{status}</p>
                </div>
            </div>
    )
}

export default Description


