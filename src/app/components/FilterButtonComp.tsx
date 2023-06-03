'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation"

const FilterButtonComp = ({name, value = name , type } : {name:string, value? : string , type:"gender"|"status"}) => {

    const [isselected, setIsSelected] = useState<boolean>(false)
    const router = useRouter()
    const searchParams = useSearchParams()


    const handleClick = () => {
        let nameSearch = searchParams?.get("name") || undefined
        let genderSearch = searchParams?.get("gender") || undefined
        let statusSearch = searchParams?.get("status") || undefined    
        const newPageURL = type == 'status' ? `/characters?${nameSearch?`&name=${nameSearch}&`:''}${genderSearch?`&gender=${genderSearch}&`:''}${type}=${value}` :
        `/characters?${nameSearch?`&name=${nameSearch}&`:''}${statusSearch?`&status=${statusSearch}&`:''}${type}=${value}`
        router.push(newPageURL)
    }
    
    return (
        <div
        onClick={()=>{
            setIsSelected(!isselected)
            handleClick()
        }}
        className={`rounded-lg cursor-pointer py-0 px-3 text-black ${isselected?'bg-blue-400 ':' bg-blue-200'}`}>
            {name}
        </div>
    )
}

export default FilterButtonComp