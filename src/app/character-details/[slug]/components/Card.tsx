import { CardProps } from "../../../types";

const Card = ({image , description , favoriteBtn , isShimmer = false} : CardProps) => {

  return (
        <div className={`flex justify-center items-center min-h-screen p-[15%] md:p-[10%] text-white ${isShimmer?'animate-pulse' :''} `}>
            <div className={`w-[100rem] mx-auto shadow-md md:w-[50rem]`}>
                <div className="flex flex-col md:flex-row items-stretch justify-stretch relative">
                    {favoriteBtn}
                    <div className="flex h-[22rem] w-full md:w-1/2 shadow-3x items-center justify-center bg-gray-300 rounded-t-lg md:rounded-l-lg  md:rounded-tr-none dark:bg-gray-700">
                        {image}
                    </div>
                    <div className="p-4 w-full md:w-1/2 gap-2 bg-gray-800 rounded-b-lg md:rounded-r-lg  md:rounded-bl-none">
                        {description}
                    </div>
                </div>
            </div>
        </div>    
  );
}

export default Card