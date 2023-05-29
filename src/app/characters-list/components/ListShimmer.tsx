import CardShimmer from "./CardShimmer"

const ListShimmer = () => {
    return  <div className="flex flex-row flex-wrap items-stretch px-[10%] bg-gray-900 py-10">
        {
          [...Array(20)].map((item , index) => 
            <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
              <CardShimmer/>
          </div>)
        }
  </div>
}

export default ListShimmer