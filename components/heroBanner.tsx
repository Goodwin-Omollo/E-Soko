'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Banner } from '@/types'
import { urlFor } from '@/lib/client'

type Props = {
  banner: Banner[]
}

const HeroBanner = ({ banner}: Props) => {
  return (
    <div className='hero-banner-container'>
      <div className='flex flex-col md:flex-row md:items-center md:justify-between'>

        <div className='text-center basis-1/2 md:text-start'>
          <p className='text-2xl mb-2 md:text-4xl lg:text-5xl'>{banner[0].smallText}</p>
          <h3 className='text-4xl font-bold mb-6 md:text-6xl lg:text-7xl'>{banner[0].midText}</h3>
          <div className='mb-4'>
          <Link href={`/product/${banner[0].product}`}>
            <button type="button" className='btn'>{banner[0].buttonText}</button>
          </Link>
        </div>
        </div>

        <div className='basis-1/2 flex flex-col items-center'>
          <Image
            src={urlFor({
              _ref : banner[0].image.asset._ref
            })}
            alt='Banner Image'
            width={500}
            height={500}
            className='object-cover'
          />
          <div className=''>
            <h5 className='text-xl mb-3 font-semibold'>Description</h5>
            <p className='text-xl'>{banner[0].desc}</p>
          </div>
        </div>

      </div>  
    </div>
  )

}

export default HeroBanner