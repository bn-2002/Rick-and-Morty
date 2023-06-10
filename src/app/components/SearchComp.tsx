import { useState } from "react"
import SearchIcon from "../icons/SearchIcon"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import getquery from "../helpers/getquery"

const SearchComp = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [name, setName] = useState<string>(getquery(searchParams,'name').slice(6))


    const handleClick = () => {
        const genderQ = getquery(searchParams,'gender')
        const statusQ = getquery(searchParams,'status')

        const nameQ = name.length > 0 ? `name=${name}` : ''

        const newPageURL = `./characters?${nameQ}${genderQ}${statusQ}`.replace('?&','?')

        router.push(newPageURL)        
    }


    return (
        <div className=" w-full sm:w-3/4 xl:w-1/2 relative z-50 m-2 text-black">
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
