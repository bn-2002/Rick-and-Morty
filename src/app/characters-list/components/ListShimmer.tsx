import CardShimmer from "./CardShimmer"

const ListShimmer = () => {
    return <div className="flex flex-row flex-wrap items-stretch px-60 bg-gray-900">
    {[...Array(20)].map((item, index) =>
    <div className="w-1/4 p-4" key={index}>
      <CardShimmer/>
    </div>
    )}
  </div>
}

export default ListShimmer