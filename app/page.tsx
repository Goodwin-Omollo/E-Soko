import HeroBanner from '@/components/heroBanner'
import Product from '@/components/product'
import { client } from '@/lib/client'
import { Banner } from '@/types'
import { ProductDetails } from '@/types'

async function getData(){
  const query = `*[_type == 'banner']`
  const data = await client.fetch(query as string)
  return data as Banner[]
}

async function getProduct() {
  const products = await client.fetch('*[_type == "products"]')
  return products as ProductDetails[]
}


export default async function Home() {
  const data = await getData()
  const products = await getProduct()

  return (
    <main>
      <HeroBanner banner={data} />
      <div className='products-heading'>
        <h2 className='text-3xl font-bold text-blue-900'>Best Selling Products</h2>
        <p className='text-xl text-gray-400'>Speakers of many variations</p>
      </div>

      <div className='products-container'>
        {products?.map(product => 
          <Product 
            key={product._id} 
            // product={product}
          />)}
      </div>

    </main>
  )
}


