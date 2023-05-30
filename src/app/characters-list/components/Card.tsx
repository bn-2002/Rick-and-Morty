import { CardProps } from "../../types";

const Card = ({ image , description } : CardProps) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 relative z-10 text-white ">
            <div className="flex flex-col h-full shadow-3xl rounded-lg">
                <div className="w-full shadow-3x rounded-t-lg bg-gray-800 ">
                    <div className="p-4 rounded-lg h-full w-full flex justify-center items-center ">
                    {image}
                    </div>
                </div>
                <div className="text-white flex-col gap-8 flex justify-between rounded-b-lg h-full pb-4 px-4 bg-gray-800">
                    {description} 
                </div>
            </div>
    </div>
  );
}

export default Card