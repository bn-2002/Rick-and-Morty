import Link from 'next/link'

const Button = ({disabled , pageNumber , text} : {disabled : boolean , pageNumber : number , text : "Previous" | "Next"}) => {

    const newPageURL = `/characters-list/${ text == 'Previous' ?  (pageNumber-1) : (pageNumber+1)}`

    return (
        <Link href={newPageURL} className='text-white'>
        <button className="p-5 bg-blue-800 text-white rounded-lg  text-[30px] disabled:bg-blue-900 disabled:cursor-not-allowed"
          disabled={disabled}
        >
          {text}
        </button>
      </Link>
    )
}

export default Button