import React from 'react'
import "./ProductCard.scss";
import image from '../../assets/fly.jpg'
import {AiOutlinePlus, AiOutlineShoppingCart} from "react-icons/ai"
const ProductCard = () => {
  return (
    <div className='card'>
      <div className='image'>
      <img src={image} />
      </div>
      <div className='name'>
      Fly Box olax  2023
      </div>
      <div className='price'>20000 XAF</div>
      <div className='actions'>
      <button className='buy'> <AiOutlineShoppingCart /></button>
      <button className='more'>Voir Plus <AiOutlinePlus /></button>
      </div>
    </div>
  )
}

export default ProductCard
