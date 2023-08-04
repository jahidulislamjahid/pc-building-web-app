import React from 'react'



const HeroSection = () => {
  return (
    <div className='' >
      <h1>this is a new heading</h1>
      <marquee
        behavior="scroll"
        direction="left"
        scrollamount="20"
        className="bg-gray-200 text-xl font-semibold py-4"
      >
        This is the hero section of the Homepage
      </marquee>
    </div>
  )
}

export default HeroSection
