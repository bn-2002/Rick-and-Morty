import getStatusColor from "../helpers/getStatusColor"
import Circle from "@/app/icons/Circle"
import { CharacterDescriptionType } from "../types"

const Description = ({name, status} : CharacterDescriptionType) => {
    return (
        <>
            {/* Name */}
            <p className="selection:text-red-500 selection:bg-gray-200 text-center font-mono font-semibold text-2xl ">{name}</p>

            {/* Status */}
            <div className="flex gap-2  flex-row items-center selection:text-yellow-400">
                    <div className="mb-1">
                        <Circle fill={getStatusColor(status)?.fill} stroke={getStatusColor(status)?.stroke}/>
                    </div>
                    <p className="font-extralight" >{status}</p>
            </div>
        </>
    )
}

export default Description