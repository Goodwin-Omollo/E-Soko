import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-4 px-10'>
        <Link href='/'>
            <p className='text-2xl font-semibold'>E-SOKO</p>
        </Link>
        <button type='button' onClick='' className='relative'>
            <AiOutlineShoppingCart size={30} />
            <span className='bg-red-500 p-1 rounded-full text-white text-[10px] absolute -top-3 -right-2'>10</span>
        </button>
    </div>
  )
}

export default Navbar