'use client'

import useFavoritesStore from '../../lib/store'
import Link from 'next/link'

const FavoriteCharacters = () => {

    const favorites = useFavoritesStore(state => state.favorites)

      return (
        <div className="text-black border border-black bg-gray-300 rounded p-2 font-Dongle fixed right-8 top-8 w-fit flex z-[100] ">
                <div>
                    <Link href={`./favorites`} className='text-3xl'>
                       My Favorites
                    </Link>
                    <div className='text-white rounded-full px-[12px] py-[.4px] -right-[1rem] -top-[25px] bg-gray-500 border-black border text-3xl absolute'>
                        {favorites.length}
                    </div>
                </div>
        </div>
    )
}

export default FavoriteCharacters