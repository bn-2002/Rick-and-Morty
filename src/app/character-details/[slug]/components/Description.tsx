import { CharacterType } from "../types"
import Location from "@/app/icons/Location"
import Circle from "@/app/icons/Circle"
import getStatusColor from "@/app/characters-list/helpers/getStatusColor"

const Description = ({characterData} : {characterData : CharacterType}) => {
    const {name , status , location, gender , origin , created,  species, episode } = characterData

    return (
        <div className="text-white flex-col justify-between flex p-4">
            {/* Name */}
            <div className="text-center font-mono font-semibold text-2xl p-1 rounded-sm solid py-3">
            <p className="selection:text-red-500 selection:bg-gray-200">{name}</p>
            </div>

            {/* Other Info */}
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
                    <p>{location.name}</p>
                </div>

                {/* Gender */}
                <p>Gender : {gender}</p>

                {/* Origin */}
                <div className="flex gap-2">
                    <p>Origin : </p>
                    <p>{origin.name}</p>
                </div>

                {/* Created at */}
                <div className="flex gap-2">
                    <p>Created at :</p>
                    <p className="font-extralight" >{created.slice(0,10)}</p>
                </div>

                {/* Species*/}
                <p className="text-sm font-medium mb-2">
                    {species}
                </p>

                {/* Episodes */}
                <p className="text-sm font-medium mb-2">
                Episodes : {episode.length} Episodes
                </p>

            </div>
        </div>
    )
}


export default Description