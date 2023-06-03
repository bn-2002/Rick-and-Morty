import { useState } from "react"
import SearchIcon from "../icons/SearchIcon"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"

const SearchComp = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    let nameSearch = searchParams?.get("name") || undefined
    let genderSearch = searchParams?.get("gender") || undefined
    let statusSearch = searchParams?.get("status") || undefined    
    const [name, setName] = useState<string>(nameSearch? nameSearch : "")


    const handleClick = () => {
        if (name.length > 0) {
            const newPageURL = `/characters?${nameSearch?`name=${nameSearch}&`:''}${statusSearch?`status=${statusSearch}&`:''}${genderSearch?`gender=${genderSearch}`:''}`
            router.push(newPageURL)        
        }
        if (name.length === 0 && !nameSearch && !statusSearch) {
          router.push(`/characters?page=1`)
      }
    }

    return (
        <div className="w-[50%] relative z-50 m-2">
            <input 
                onChange={(e)=>setName(e.target.value)} 
                type="search" 
                className="border-none outline-none rounded-lg px-4 py-3 w-full h-full" 
                placeholder="search character name..."
                value={name}
            />
            <div
                onClick={handleClick}
                className="absolute right-0 top-0 rounded-r-lg border h-full px-1 bg-blue-300 cursor-pointer"
            >
                <SearchIcon/>
            </div>
        </div>  
    )
}

export default SearchComp
