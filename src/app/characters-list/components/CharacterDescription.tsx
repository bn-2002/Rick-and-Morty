import getStatusColor from "../helpers/getStatusColor"
import Circle from "@/app/icons/Circle"
import Location from "@/app/icons/Location"
import { CharacterDescriptionType } from "../types"

const CharacterDescription = ({name , location , origin , gender,  created, status} : CharacterDescriptionType) => {
    return (
        <div className="text-white flex-col justify-between flex p-4">
            {/* Header (Name)*/}
            <div className="text-center font-mono font-semibold text-2xl p-1 rounded-sm solid py-3">
              <p className="selection:text-red-500 selection:bg-gray-200">{name}</p>
            </div>

            {/* Description */}
            <div className="selection:text-yellow-400">
                {/* Status */}
                <div className="flex gap-2 flex-row items-center">
                    <div className=" mb-1">
                        <Circle fill={getStatusColor(status)?.fill} stroke={getStatusColor(status)?.stroke}/>
                    </div>
                    <p className="font-extralight" >{status}</p>
                </div>

                {/* Location */}
                <div className="flex flex-row items-center gap-2">
                    <div className="mb-1">
                    <Location/>
                    </div>
                    <p className="truncate w-[180px] h-full">{location.name}</p>
                </div>

                {/* Gender */}
                <p>Gender : {gender}</p>

                {/* Origin */}
                <div className="flex gap-2">
                    <p>Origin : </p>
                    <p className={`truncate w-[140px]`}>{origin.name}</p>
                </div>

                {/* Created at */}
                <div className="flex gap-2">
                    <p>Created at :</p>
                    <p className="font-extralight" >{created.slice(0,10)}</p>
                </div>
            </div>
        </div>
    )
}

export default CharacterDescription