import React, { useEffect, useState } from 'react'
// import { MonitorIcon } from '@/assets/icons'

const ProductSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/rogReboot')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  console.log(products)
  return (
    <div className='container'>
    </div>
  )
}

export default ProductSection
