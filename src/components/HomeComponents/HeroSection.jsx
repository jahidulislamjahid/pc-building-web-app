import React, { useEffect, useState } from 'react'
import Carousel from 'nuka-carousel'
import a1 from '../../assets/asset1.webp'
import a2 from '../../assets/asset2.webp'
import a3 from '../../assets/asset3.webp'
import a4 from '../../assets/asset4.webp'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { ProductCard } from '../Products/ProductCard'
import Link from 'next/link'


const HeroSection = () => {

  const [productsList, setproductList] = useState([])
  useEffect(() => {
    fetch('/api/rogReboot')
      .then((response) => response.json())
      .then((data) => setproductList(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);


  return (
    <div className='container mx-auto my-5 ' >
      <div className='grid grid-cols-3 mb-5 gap-5 justify-center'>
        <div className='col-span-2'>
          <Carousel
            autoplay={true}
            wrapAround={true}
            speed={500}
            withoutControls={true}
            className='border-0 rounded-md drop-shadow-md'
          >
            <Image src={a2} className='w-full'></Image>
            <Image src={a3} className='w-full'></Image>
            <Image src={a1} className='w-full'></Image>
          </Carousel>

        </div>
        <div>
          <div className='bg-curiousYellow ml-10 shadow-gray-50 drop-shadow-md mb-5'>
            <h1 className='text-black font-semibold text-center text-xl pt-5'>Compare Products</h1>
            <h1 className='text-gray-400 text-center text-sm'>Choose two products and compare</h1>
            <div className='mx-20 py-5'>
              <input type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs my-2 rounded-md" />
              <input type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs my-2 rounded-md" />
              <button className='btn btn-ghost bg-transparent outline-blue-400 border-blue-400 text-blue-900 font-semibold rounded-md hover:bg-blue-900 hover:text-white my-2 w-full '>View Comparison</button>
            </div>
          </div>
          <div className='mx-auto'>
            <Image src={a4} className='w-11/12 ml-10 drop-shadow-md'></Image>
          </div>
        </div>
      </div>
      <Marquee
        speed={120}
        className="bg-base-200 text-lg font-semibold py-1 border-0 rounded-full"
      >
        This is the hero section of the Homepage
      </Marquee>
      <div>
        <h1 className='text-3xl text-center font-bold mt-5'>Featured Products</h1>
        <h1 className='text-center font-medium mb-5'>Check & Get Desired Products</h1>
      </div>
      <div className='grid grid-cols-4 gap-5 my-5'>
        {productsList?.map((product) => (
          <ProductCard key={product.id} product={product} />
        )).slice(0, 20)}
      </div>
      <div className='flex mx-auto'>
        <Link href='/products' className='mx-auto'>
          <button className='btn btn-ghost bg-curiousGreen text-white border rounded-md hover:text-black'>See All Products</button>
        </Link>
      </div>
    </div>
  )
}

export default HeroSection
