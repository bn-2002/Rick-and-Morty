import Star from "../icons/Star"

const FavoriteButtonShimmer = () => {
    return (
        <button className="absolute right-5 top-5 cursor-default animate-pulse">
            <Star/>
        </button>
    )
}

export default FavoriteButtonShimmer