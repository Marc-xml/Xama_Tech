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
      <motion.div className='logo-container' variants={item}>
        <svg width="60" height="60" viewBox="0 0 60 60">
          <motion.circle
            cx="30"
            cy="30"
            r="26"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="logo-circle"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
        <span className='logo-text'>MR</span>
      </motion.div>
      <nav className='nav-items'>
      <motion.ul
      variants={container}
      initial="hidden"
      animate="visible">
        <motion.li className='nav-item' variants={item}>
         <a href='#about'>
         <span className='item-number'>1.</span>
         About me
         </a>
        </motion.li>

        <motion.li className='nav-item' variants={item}>
        <a href='#works'>
        <span className='item-number'>2.</span>
        My Projects
        </a>
       </motion.li>

       <motion.li className='nav-item' variants={item}>
       <a href='#contact'>
       <span className='item-number'>3.</span>
       Contact Me
       </a>
      </motion.li>

      <motion.li className='nav-item' variants={item}>
      <a href='#store'>
      <span className='item-number'>4.</span>
      Store
      </a>
     </motion.li>

 
     <motion.a variants={item} href='https://wa.me/674159544'>
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
