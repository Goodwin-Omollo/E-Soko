import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/client'
import { ProductDetails } from '@/types'

type Props = {
  product: ProductDetails
}

const Product = ({ product }: Props) => {

  return (
    <div className='product-card'>
      <Link href={`/product/${product.slug.current}`}>
        <Image 
          src={urlFor({
            _ref: product.image[0].asset._ref
          })}
          alt='Product Image'
          width={200}
          height={200}
          className='product-image'
        />
        <p className='mt-4 font-semibold'>{product.name}</p>
        <p className='font-bold'>${product.price}</p>
      </Link>
    </div>
  )
}

export default Product