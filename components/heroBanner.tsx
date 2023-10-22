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
      <div>
        <p className='text-2xl mb-4'>{banner[0].smallText}</p>
        <h3 className='text-4xl font-bold'>{banner[0].midText}</h3>
        <Image
          src={urlFor({
            _ref : banner[0].image.asset._ref
          })}
          alt='Banner Image'
          width={500}
          height={500}
          className='hero-banner-image'
        />

        <div>
          <Link href={`/product/${banner[0].product}`}>
            <button type="button" className='bg-red-500 px-4 py-2 rounded-2xl text-white text-xl'>{banner[0].buttonText}</button>
          </Link>
        </div>

        <div className='desc'>
          <h5>Description</h5>
          <p>{banner[0].desc}</p>
        </div>
      </div>  
    </div>
  )

}

export default HeroBanner