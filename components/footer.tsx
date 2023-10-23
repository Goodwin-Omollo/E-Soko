import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const date = new Date();

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-2 p-4'>
      <p className='font-semibold text-xl text-center'>&copy; {date.getFullYear()} E-SOKO MarketPlace. All Rights Reseved.</p>
      <div className='flex gap-3'>
        <Link href='https://web.facebook.com' target='_blank'>
            <Image 
            src='/icons/facebook.png'
            alt='Facebook Icon'
            width={30}
            height={30}
            />
        </Link>
        <Link href='https://twitter.com' target='_blank'>
            <Image 
            src='/icons/twitterx.png'
            alt='Facebook Icon'
            width={30}
            height={30}
            />
        </Link>
        <Link href='https://instagram.com' target='_blank'>
            <Image 
            src='/icons/instagram.png'
            alt='Facebook Icon'
            width={30}
            height={30}
            />
        </Link>
      </div>
    </div>
  )
}

export default Footer