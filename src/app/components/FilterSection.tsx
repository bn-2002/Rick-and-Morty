import { useState } from "react"
import { useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation"
import getquery from "../helpers/getquery"


const FilterSection = () => {

    const searchParams = useSearchParams()
    const [selectedGender, setSelectedGender] = useState<string | null>(getquery(searchParams,'gender').slice(8))
    const [selectedStatus, setSelectedStatus] = useState<string | null>(getquery(searchParams,'status').slice(8))
    const router = useRouter()

    const style = 'rounded-lg cursor-pointer py-0 px-3 text-black'

    const genderHandler = (e : any, newGender : string ) => {
        e.preventDefault()
        const nameQ = getquery(searchParams,'name')
        const statusQ = getquery(searchParams,'status')
        const genderQ = (selectedGender!=null && selectedGender !== newGender) ? `&gender=${newGender}` : ''

        const newPageURL = `./characters?${nameQ}${genderQ}${statusQ}`.replace('?&','?')

        if (selectedGender !== newGender) setSelectedGender(()=>newGender)
        else setSelectedGender(()=>null)

        router.push(newPageURL)
    }

    const statusHandler = (e : any, newStatus : string ) => {
        e.preventDefault()
        const nameQ = getquery(searchParams,'name')
        const genderQ = getquery(searchParams,'gender')
        const statusQ = (selectedStatus!=null && selectedStatus !== newStatus) ? `&status=${newStatus}` : ''

        const newPageURL = `./characters?${nameQ}${statusQ}${genderQ}`.replace('?&','?')

        if (selectedStatus !== newStatus) setSelectedStatus(()=>newStatus)
        else setSelectedStatus(()=>null)

        router.push(newPageURL)
     }
 
    return (
        <div className="flex items-center gap-2 font-Dongle flex-col lg:flex-row text-[1.6rem] lg:text-[1.8rem] text-white z-50 relative">

            {/* Gender */}
            <div className="flex gap-2 flex-wrap items-center justify-center">
                <button
                onClick={(e)=>{genderHandler(e,'male')}}
                className={`${style} ${(selectedGender == 'male')?'bg-blue-400 ':' bg-blue-200'}`}>
                    male
                </button>

                <button
                onClick={(e)=>{genderHandler(e,'female')}}
                className={`${style} ${(selectedGender == 'female')?'bg-blue-400 ':' bg-blue-200'}`}>
                    female
                </button>

                <button
                onClick={(e)=>{genderHandler(e,'genderless')}}
                className={`${style} ${(selectedGender == 'genderless')?'bg-blue-400 ':' bg-blue-200'}`}>
                    genderless
                </button>

                <button
                onClick={(e)=>{genderHandler(e,'unknown')}}
                className={`${style} ${(selectedGender == 'unknown')?'bg-blue-400 ':' bg-blue-200'}`}>
                    unknown gender
                </button>
            </div>
            <div className="w-full h-[1.5px] lg:h-[42px] lg:w-[1.5px] rounded-sm mx-2 bg-gray-400"></div>
            {/* Status */}
            <div className="flex gap-2 flex-wrap items-center justify-center">
                <button
                onClick={(e)=>{statusHandler(e,'alive')}}
                className={`${style} ${(selectedStatus == 'alive')?'bg-blue-400 ':' bg-blue-200'}`}>
                    alive
                </button>

                <button
                onClick={(e)=>{statusHandler(e,'dead')}}
                className={`${style} ${(selectedStatus == 'dead')?'bg-blue-400 ':' bg-blue-200'}`}>
                    dead
                </button>

                <button
                onClick={(e)=>{statusHandler(e,'unknown')}}
                className={`${style} ${(selectedStatus == 'unknown')?'bg-blue-400 ':' bg-blue-200'}`}>
                    unknown status
                </button>
            </div>
        </div>
    )
}

export default FilterSection