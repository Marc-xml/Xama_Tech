import React, { useEffect } from 'react'
import { useState } from 'react'
import './Sidebar.scss'
const Sidebar = ({show, closeSideBar}) => {

  return (
   <div className='wrapper'
   style={show !== true ? { display: "none" } : {}}
   >
   <div className={`side-bar ${show !== true ? 'open' : ''}`}>
   <button className='top' onClick={() => closeSideBar()}>X</button>

   <div className='nav-items'>
   <a>
   <span className='item-number'>01.</span>Accueille
   </a>

   <a>
   <span className='item-number'>02.</span>A propos
   </a>

   <a>
   <span className='item-number'>03.</span>A propos
   </a>
   <a>
   <span className='item-number'>04.</span>A propos
   </a>
    <a>
   <button className='nav-button'>Whatsapp</button>
    
    </a>
   </div>
 </div>
   </div>
  )
}

export default Sidebar
