import { Banner } from '@/types'
import Link from 'next/link'
import Image from 'next/image'

import { urlFor } from '@/lib/client'
import React from 'react'

type Props = {
  banner: Banner[]
}

const FooterBanner = ({banner}: Props) => {
  return (
    <div className=''>
      <div className='text-white mt-10 px-4 py-10 md:flex md:items-center md:justify-between bg-red-500'>
        <div>
          <Image
            src={urlFor({
              _ref : banner[0].image.asset._ref
            })}
            alt='Banner Image'
            width={500}
            height={500}
            className='object-cover'
          />
        </div>
        <div>
          <p className='text-2xl font-semibold'>{banner[0].discount}</p>
          <p className='italic text-xl mb-6'>{banner[0].saleTime}</p>
          <p className='text-2xl mb-2'>{banner[0].smallText}</p>
          <h3 className='text-4xl mb-2'>{banner[0].midText}</h3>
          <p className='text-xl mb-4'>{banner[0].desc}</p>
          <Link href={`/product/${banner[0].product}`}>
            <button type="button" className='btn bg-white text-red-500'>{banner[0].buttonText}</button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default FooterBanner