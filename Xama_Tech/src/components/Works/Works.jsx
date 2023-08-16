import React from 'react'
import "./Works.scss"
import { motion } from 'framer-motion';
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
    },
 
  };
  
const Works = () => {
  return (
    <motion.div 
    variants={container}
    initial="hidden"
    whileInView="visible"
    className='works'>

    <motion.span variants={item} className='work-title'>
    <motion.span variants={item} className='title-number'>02. </motion.span>Nos oeuvres
    </motion.span>
     <motion.div 
     variants={container}
     initial="hidden"
     whileInView="visible"
     className='work-content'>
     <motion.div variants={item} className='square'></motion.div>
     <motion.div 
     variants={container}
     initial="hidden"
     whileInView="visible"
     className='inside-content'>
     <motion.div variants={item} className='name'>
       <span className='content-title'>Site E-commerce</span>
       <span className='content-name'>MAHU MARKET</span>
           
     </motion.div>
     <motion.div variants={item} className='square-1'>
               Site Ecommerce Mahu Market, un leader dans la vente d-article en ligne
               au Cameroun, <span className='green-text'>Voila le lien</span>.
               Il a etait contruit ave des technologie recent tel que <span>React, Mongodb et Amazon</span>
           </motion.div>
     </motion.div>
     </motion.div>

     <motion.div 
     variants={container}
     initial="hidden"
     whileInView="visible"
     className='work-content revert '>
     <motion.div variants={item} className='square inverse'></motion.div>
    
     <motion.div
     variants={container}
     initial="hidden"
     whileInView="visible"
     className='inside-content'>
     <motion.div variants={item} className='name'>
       <span className='content-title'>Site E-commerce</span>
       <span className='content-name'>MAHU MARKET</span>
           
     </motion.div>
     <motion.div variants={item} className='square-1'>
               Site Ecommerce Mahu Market, un leader dans la vente d-article en ligne
               au Cameroun, <span className='green-text'>Voila le lien</span>.
               Il a etait contruit ave des technologie recent tel que <span>React, Mongodb et Amazon</span>
           </motion.div>
     </motion.div>
     </motion.div>

     <motion.div 
     variants={container}
     initial="hidden"
     whileInView="visible"
     className='work-content'>
     <motion.div variants={item} className='square'></motion.div>
     <motion.div 
     variants={container}
     initial="hidden"
     whileInView="visible"
     className='inside-content'>
     <motion.div variants={item} className='name'>
       <span className='content-title'>Site E-commerce</span>
       <span className='content-name'>MAHU MARKET</span>
           
     </motion.div>
     <motion.div variants={item} className='square-1'>
               Site Ecommerce Mahu Market, un leader dans la vente d-article en ligne
               au Cameroun, <span className='green-text'>Voila le lien</span>.
               Il a etait contruit ave des technologie recent tel que <span>React, Mongodb et Amazon</span>
           </motion.div>
     </motion.div>
     </motion.div>
    </motion.div>
  )
}

export default Works
