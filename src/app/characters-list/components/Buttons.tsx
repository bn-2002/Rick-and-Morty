import { CharactersType } from "../types"

type ButtonsProps = {data  : CharactersType , isLoading  :boolean , pageNumber : number, setPageNumber : (page: number) => any}

const Buttons = ({data , isLoading , pageNumber, setPageNumber} : ButtonsProps) => {
    return (
      <div className="flex justify-between w-full py-10 items-center font-Dongle selection:text-yellow-400 flex-wrap">
          <button className="p-5 bg-blue-800 text-white rounded-lg  text-[30px] disabled:bg-blue-900 disabled:cursor-not-allowed"
            onClick={()=>setPageNumber(pageNumber-1)}
            disabled={isLoading || pageNumber==1}
          >
            Previous
          </button>

          <p className="text-white  text-[40px]">page {pageNumber}</p>

          <button className="p-5 bg-blue-800 text-white rounded-lg  text-[30px] disabled:bg-blue-900 disabled:cursor-not-allowed"
            onClick={()=>setPageNumber(pageNumber+1)}
            disabled={isLoading || !data?.info.next}
          >
            Next
          </button>
      </div>
    )
}

export default Buttons