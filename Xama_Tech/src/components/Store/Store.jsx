import React from 'react'
import "./Store.scss";
import ProductCard from '../ProductCard/ProductCard';
const Store = () => {
  return (
    <div className='store'>
      <span className='title'>
      <span className='title-number'>04.</span>Boutique
      </span>
      <span className='sub'>Offre du moment</span>

      <div className='items'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default Store
