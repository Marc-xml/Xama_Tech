import React, { useEffect } from 'react'
import { useState } from 'react'
import './Sidebar.scss'
import { BiLogoWhatsapp } from 'react-icons/bi'
const Sidebar = ({show, closeSideBar}) => {

  return (
   <div className='wrapper'
   style={show !== true ? { display: "none" } : { display: "block"}}
   >
   <div className="side-bar"
   
   >
   <button className='top' onClick={() => closeSideBar()}>X</button>

   <div className='nav-items'>
   <a href='#about'>
   <span className='item-number'>01.</span>About me
   </a>

   <a href='#works'>
   <span className='item-number'>02.</span>My Projects
   </a>

   <a href='#contact'>
   <span className='item-number'>03.</span>Contact Me
   </a>
   <a href='#store'>
   <span className='item-number'>04.</span>Store
   </a>
    <a href='https://wa.me/674159544'>
   <button className='nav-button'><BiLogoWhatsapp /></button>
    
    </a>
   </div>
 </div>
   </div>
  )
}

export default Sidebar
