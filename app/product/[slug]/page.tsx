import React from 'react'
import { client } from '@/lib/client'
import { ProductDetails } from '@/types'
import Image from 'next/image'
import { urlFor } from '@/lib/client'
import HalfRating from '@/components/rating'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

type Props = {
  params: {
    slug: string
  }
}

async function getProduct(slug: string) { 
    const product = await client.fetch<ProductDetails[]>(`*[_type == 'product' && slug.current == '${slug}']`)
  return product 
}

const Product = async ({params}: Props) => {
  console.log("Params", params)
  const product = await getProduct(params.slug)
  console.log("Product", product)
  return (
    <div className='m-8 md:flex md:gap-8 lg:mx-16'>
        <div className='bg-[#ebebeb] flex justify-center items-center p-8 basis-1/2'>
            <Image 
                src={urlFor({
                    _ref: product[0].image[0].asset._ref
                })}
                alt='Banner Image'
                width={250}
                height={250}
                className='object-cover'
            />
        </div>
        <div className='basis-1/2'>
            <h5 className='text-2xl mb-3 font-bold text-[#324d67] '>Description</h5>
            <p className='text-xl mb-3'>{product[0].details}</p>
            <p className='font-semibold text-xl mb-3'>${product[0].price}</p>
            <HalfRating />
            <div>
                <h3 className='text-xl font-semibold text-[#324d67]'>Quantity</h3>
                <div className='flex justify-center items-center gap-3 border border-black w-fit'>
                    <RemoveIcon />
                    <p className=' border-r border-l border-black px-2'>0</p>
                    <AddIcon />
                </div>
                <div className='flex gap-4 flex-wrap mt-4'>
                    <button className='text-white bg-red-500 px-4 py-2 text-xl hover:text-red-500 hover:bg-white hover:border hover:border-red-500'>Add to Cart</button>
                    <button className='bg-white text-red-500 px-4 py-2 text-xl hover:bg-red-500 hover:text-white border border-red-500'>Buy Now</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Product

