import { CardProps } from "../../../types";
import Blobs from "./Blobs";

const Card = ({image , description , favoriteBtn , isShimmer = false } : CardProps) => {

  return (
        <div className={`w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 relative z-10 text-white transition-all  hover:-translate-y-[5px]`}>

            <div className={`flex flex-col h-full shadow-xl rounded-lg  ${isShimmer?'animate-pulse':''} shadow-6xl hover:shadow-7xl transition-all  bg-gray-800 ease-in`}>

                <div className="w-full shadow-3x rounded-t-lg">
                    {favoriteBtn}
                    <div className="p-4 rounded-lg h-full w-full flex justify-center items-center">
                    {image}
                    </div>
                </div>
                <div className="text-white flex-col pb-2 rounded-b-lg h-full px-4">
                    {description}
                </div>
            </div>
        </div>

  );
}

export default Card