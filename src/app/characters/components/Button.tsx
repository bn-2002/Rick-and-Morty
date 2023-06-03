import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"

const Button = ({disabled , text} : {disabled : boolean, text : "Previous" | "Next"}) => {
    const router = useRouter()
    const searchParams = useSearchParams()

    let pageNumber = Number(searchParams?.get("page")) || 1
    let name = searchParams?.get("name") || undefined
    
    const newPageURL = `/characters?page=${ text == 'Previous' ?  (pageNumber-1) : (pageNumber+1)}${name?`&name=${name}`:''}`


    const handleClick = () => {
        router.push(newPageURL)
    }

    return (
        <button
            className="p-5 bg-blue-800 text-white rounded-lg  text-[30px] disabled:bg-blue-900 disabled:cursor-not-allowed"
            disabled={disabled}
            onClick={handleClick}
        >
            {text}
        </button>
    )
}

export default Button
