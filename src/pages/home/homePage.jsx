import HeroSection from '@/components/HomeComponents/HeroSection'
import ProductSection from '@/components/HomeComponents/ProductSection'
import React from 'react'

const homePage = () => {
  return (
    <div>
      <HeroSection />
      <div className='' >
        <ProductSection />
      </div>
    </div>
  )
}

export default homePage
