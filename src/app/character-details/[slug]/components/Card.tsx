import React from "react";
import { CardProps } from "../../../types";

const Card  = ({ image , description } : CardProps ) => {
  return (
        <div className={`flex justify-center items-center min-h-screen p-[10%]`}>
            <div className={`w-[100rem] mx-auto shadow-md md:w-[50rem]`}>
                <div className="flex flex-col md:flex-row">
                    <div className="flex w-full  md:w-1/2 shadow-3x items-center justify-center bg-gray-300 rounded-t-lg md:rounded-l-lg  md:rounded-tr-none dark:bg-gray-700">
                        <div className="h-[22rem] w-full flex items-center justify-center">
                        {image}
                        </div>
                    </div>
                    <div className="p-8 w-full md:w-1/2 flex flex-col justify-between gap-2 bg-gray-800 rounded-b-lg md:rounded-r-lg  md:rounded-bl-none">
                        {description}
                    </div>
                </div>
            </div>
        </div>    
  )
}

export default Card