import React from 'react'
import "./ProductCard.scss";
import image from '../../assets/fly.jpg'
import {AiOutlinePlus, AiOutlineShoppingCart} from "react-icons/ai"
import Modal from '../Modal/Modal';
import { useState } from 'react';

const ProductCard = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () =>{
    setOpen(!open);
  }
  return (
    <>
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
      <button className='more' onClick={() =>handleOpen()}>Voir Plus <AiOutlinePlus /></button>
      </div>
    </div>
    <Modal open={open} close={handleOpen} />
    </>
  )
}

export default ProductCard
