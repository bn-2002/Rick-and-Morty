import { CharactersType } from "../types"
import Button from "./Button";

type ButtonsProps = {data  : CharactersType , isLoading  :boolean , pageNumber : number}

const Buttons = ({data , isLoading  , pageNumber} : ButtonsProps) => {

    return (
      <div className="flex justify-between w-full py-10 items-center font-Dongle selection:text-yellow-400 flex-wrap">

          <Button
            text="Previous"
            disabled={isLoading || !data.info.prev}
          />    
            
          <p className="text-white  text-[40px]">page {pageNumber}</p>

          <Button
            text="Next"
            disabled={isLoading || !data.info.next}
          />    

      </div>
    )
}

export default Buttons

