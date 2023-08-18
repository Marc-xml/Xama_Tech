import React from 'react'
import './Navbar.scss'
import {DiReact} from 'react-icons/di'
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { motion,useScroll } from "framer-motion";
import logo from '../../assets/ortez2.png'
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Navbar = () => {
  const {scrollProgress} = useScroll();
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
  <>
    <motion.div 
    className='nav-bar'
    // style={{scaleX:scrollProgress}}
    variants={container}
      initial="hidden"
      animate="visible">
      <motion.span className='logo' variants={item}><img src={logo} /></motion.span>
      <nav className='nav-items'>
      <motion.ul
      variants={container}
      initial="hidden"
      animate="visible">
        <motion.li className='nav-item' variants={item}>
         <a href='#about'>
         <span className='item-number'>1.</span>
         A Propos
         </a>
        </motion.li>

        <motion.li className='nav-item' variants={item}>
        <a href='#works'>
        <span className='item-number'>2.</span>
        Nos Services
        </a>
       </motion.li>

       <motion.li className='nav-item' variants={item}>
       <a href='#contact'>
       <span className='item-number'>3.</span>
       Contact
       </a>
      </motion.li>

      <motion.li className='nav-item' variants={item}>
      <a href='#store'>
      <span className='item-number'>4.</span>
      Boutique
      </a>
     </motion.li>

 
     <motion.a variants={item}>
     <span className=''>
     <button className='contact-button'>Whatsapp</button>

     </span>
     </motion.a>
    
      </motion.ul>
      </nav>
      <HiOutlineMenuAlt1  className='toggle-nav' onClick={() =>handleSideBar()}/>
   
    </motion.div>
       <Sidebar 
      show={showSideBar} 
      closeSideBar={handleSideBar}/>
    </>
  )
}

export default Navbar
