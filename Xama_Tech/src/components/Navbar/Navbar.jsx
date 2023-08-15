import React from 'react'
import './Navbar.scss'
import {DiReact} from 'react-icons/di'
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
const Navbar = () => {
    let lastScrollTop = 0;
const navbar = document.querySelector('.nav-bar');

window.addEventListener('scroll', function() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = '-60px';
  } else {
    navbar.style.top = '0';
  }
  lastScrollTop = scrollTop;
});
 const [showSideBar, setShowSideBar] = useState(false);
  const handleSideBar = () =>{
    setShowSideBar(!showSideBar);
    console.log(showSideBar);
  }
  console.log(showSideBar);
 return (
    <div className='nav-bar'>
      <span className='logo'><DiReact /></span>
      <nav className='nav-items'>
      <ul>
        <li className='nav-item'>
         <a>
         <span className='item-number'>1.</span>
         A Propos
         </a>
        </li>

        <li className='nav-item'>
        <a>
        <span className='item-number'>2.</span>
        Nos Services
        </a>
       </li>

       <li className='nav-item'>
       <a>
       <span className='item-number'>3.</span>
       Contact
       </a>
      </li>

      <li className='nav-item'>
      <a>
      <span className='item-number'>4.</span>
      Boutique
      </a>
     </li>

 
     <a>
     <span className=''>
     <button className='contact-button'>Whatsapp</button>

     </span>
     </a>
    
      </ul>
      </nav>
      <HiOutlineMenuAlt1  className='toggle-nav' onClick={() =>handleSideBar()}/>
      <Sidebar show={showSideBar} closeSideBar={handleSideBar}/>
    </div>
  )
}

export default Navbar