import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import getquery from "../../helpers/getquery"

const Button = ({disabled , text, pageNumber} : {disabled : boolean, text : "Previous" | "Next", pageNumber:number}) => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const handleClick = () => {
        const pageQ = `page=${ text == 'Previous' ?  (pageNumber-1) : (pageNumber+1)}`    
        const nameQ = getquery(searchParams,'name')
        const statusQ = getquery(searchParams,'status')
        const genderQ = getquery(searchParams,'gender')

        const newPageURL = `./characters?${pageQ}${nameQ}${genderQ}${statusQ}`.replace('?&','?')
    
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
