'use client'

import Link from 'next/link'

export default function Home() {
return (
    <div className='flex flex-col gap-4'>
      <Link href="/characters?page=1" className='text-white'>Characters List</Link>
      <Link href="/favorites" className='text-white'>My Favorite Characters</Link>
    </div>
  )
}

