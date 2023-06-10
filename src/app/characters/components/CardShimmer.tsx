import React from "react";
import Card from "./Card";
import FavoriteButtonShimmer from "../../components/FavoriteButtonShimmer";

const CardShimmer = () => {

  const img =  <div className="flex p-[40%] items-center justify-center flex-1 h-56 rounded-lg sm:h-64 lg:h-60 bg-gray-700">
        <svg className=" w-10 h-10 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
   </div>

  const description = <div className="bg-gray-800 text-white h-full flex justify-between mb-4 flex-col gap-4">
                        <div className="flex justify-center h-6 w-full">
                        <div className="h-full rounded-full bg-gray-700 w-32"></div>
                        </div>
                        <div className="flex gap-2">
                            <div className="h-4 rounded-full bg-gray-700 w-4"></div>
                            <div className="h-4 rounded-full bg-gray-700 w-16"></div>
                        </div>
                      </div>

  return (
    <Card
      image = {img}
      description = {description} 
      favoriteBtn = {<FavoriteButtonShimmer/>}
      isShimmer = {true}
    />
  );
}

export default CardShimmer 