import FooterBanner from '@/components/footerBanner'
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
  const products = await client.fetch('*[_type == "product"]')
  return products as ProductDetails[]
}


export default async function Home() {
  const data = await getData()
  const products = await getProduct()

  if (!data || !products) {
    return
  }
 

  return (
    <main>
      <HeroBanner banner={data} />
      <div className='products-heading mt-10'>
        <h2 className='text-3xl font-bold text-blue-900 mb-2'>Best Selling Products</h2>
        <p className='text-xl text-gray-400'>Speakers of many variations</p>
      </div>
      <div className='products-container'>
        {products.length === 0 && <div>
          <p className="">No products...</p>
        </div>}
        {products?.map(product => 
          <Product 
            key={product._id}
            product={product}
          /> )}
      </div>
      <FooterBanner banner={data} />
    </main>
  )
}


