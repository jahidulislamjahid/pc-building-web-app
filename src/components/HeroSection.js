import Carousel from 'nuka-carousel'
import a1 from '../assets/asset1.webp'
import a2 from '../assets/asset2.webp'
import a3 from '../assets/asset3.webp'
import a4 from '../assets/asset4.webp'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

const HeroSection = () => {

  return (
    <div className='container mx-auto my-5' >
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
        All Our Outlets are open from 10:00 AM to 10:00 PM Everydeay except Public Holidays
      </Marquee>
    </div>
  );
};

export default HeroSection;
