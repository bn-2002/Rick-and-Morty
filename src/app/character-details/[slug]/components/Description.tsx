import Location from "../../../icons/Location"
import Circle from "../../../icons/Circle"
import getStatusColor from "../../../characters-list/[page]/helpers/getStatusColor"
import {characterDataProps} from '../types'

const Description = ({characterData} : characterDataProps) => {
    const {name , status , location, gender , origin , created,  species, episode } = characterData

    return (
        <div className="text-white p-4 flex-col justify-between flex gap-4 bg-gray-800 h-full">

            {/* Name */}
            <div className="text-center font-mono font-semibold text-2xl rounded-sm solid">
            <p className="selection:text-red-500 selection:bg-gray-200">{name}</p>
            </div>

            {/* Other Info */}
            <div className="selection:text-yellow-400 flex flex-col gap-2">

                {/* Status */}
                <div className="flex gap-2 flex-row items-center">
                    <div className=" mb-1">
                        <Circle fill={getStatusColor(status)?.fill} stroke={getStatusColor(status)?.stroke}/>
                    </div>
                    <p >{status}</p>
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
                    <p> {origin.name}</p>
                </div>

                {/* Created at */}
                <div className="flex gap-2">
                    <p>Created at :</p>
                    <p >{created.slice(0,10)}</p>
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


