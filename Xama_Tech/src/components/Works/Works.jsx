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
    <motion.span variants={item} className='title-number'>02. </motion.span>some of my projects
    </motion.span>
    <motion.div 
     variants={container}
     initial="hidden"
     whileInView="visible"
     className='work-content revert '>
     <motion.div variants={item} className='square inverse'>
     <img src={"/banking.png"} alt="Banking System Screenshot" />
     </motion.div>
    
     <motion.div
     variants={container}
     initial="hidden"
     whileInView="visible"
     className='inside-content'>
     <motion.div variants={item} className='name'>
       <span className='content-title'> <a href="https://github.com/Marc-xml/bankingsystem/tree/finalproject" style={{color:'inherit'}}>Online banking system </a></span>
       <span className='content-name'>Invoice</span>
           
     </motion.div>
     <motion.div variants={item} className='square-1'>
An online banking system that enable customers of a bank have access to financial services online
               Built using<span> HTML, SASS, Javscript and Laravel</span>
           </motion.div>
     </motion.div>
     </motion.div>
    
     <motion.div 
     variants={container}
     initial="hidden"
     whileInView="visible"
     className='work-content'>
     <motion.div variants={item} className='square'>
     <img src={"/mayu1.png"} alt="Ecommerce Website Screenshot" />
     </motion.div>
     <motion.div 
     variants={container}
     initial="hidden"
     whileInView="visible"
     className='inside-content'>
     <motion.div variants={item} className='name'>
       <span className='content-title'><a href="https://mayu-market.onrender.com/" style={{color:'inherit'}}>Ecommerce website </a></span>
       <span className='content-name'>Mahu Market</span>
           
     </motion.div>
     <motion.div variants={item} className='square-1'>
               Robust SPA Ecommerce platform permitting the sale of products and management of orders
                Built using<span>React, SASS, Redux-toolkit, MONGODB, Express and Prisma</span>
           </motion.div>
     </motion.div>
     </motion.div>

     <motion.div 
     variants={container}
     initial="hidden"
     whileInView="visible"
     className='work-content revert '>
     <motion.div variants={item} className='square inverse'>
     <img src={"/imombi.png"} alt="Online Rental Platform Screenshot" />
     </motion.div>
    
     <motion.div
     variants={container}
     initial="hidden"
     whileInView="visible"
     className='inside-content'>
     <motion.div variants={item} className='name'>
       <span className='content-title'> <a href="https://immobi-sa.vercel.app/" style={{color:'inherit'}}>Online Rental platform </a></span>
       <span className='content-name'>Immobi</span>
           
     </motion.div>
     <motion.div variants={item} className='square-1'>
An online rental platform which gives the possibility for individuals looking for housing do so without with ease
               Built using<span> NextJs,MongoDB</span>
           </motion.div>
     </motion.div>
     </motion.div>
     <motion.div 
     variants={container}
     initial="hidden"
     whileInView="visible"
     className='work-content'>
     <motion.div variants={item} className='square'>
     <img src={"/erp.png"} alt="Ecommerce Website Screenshot" />
     </motion.div>
     <motion.div 
     variants={container}
     initial="hidden"
     whileInView="visible"
     className='inside-content'>
     <motion.div variants={item} className='name'>
       <span className='content-title'><a href="https://gs1-crm.onrender.com" style={{color:'inherit'}}>CRM </a></span>
       <span className='content-name'>Mahu Market</span>
           
     </motion.div>
     <motion.div variants={item} className='square-1'>
               Robust SPA Ecommerce platform permitting the sale of products and management of orders
                Built using<span>React, SASS, Redux-toolkit, MONGODB, Express and Prisma</span>
           </motion.div>
     </motion.div>
     </motion.div>

  

     <motion.div 
     variants={container}
     initial="hidden"
     whileInView="visible"
     className='work-content revert '>
     <motion.div variants={item} className='square inverse'>
     <img src={"/pharm.png"} alt="Online Rental Platform Screenshot" />
     </motion.div>
    
     <motion.div
     variants={container}
     initial="hidden"
     whileInView="visible"
     className='inside-content'>
     <motion.div variants={item} className='name'>
       <span className='content-title'> <a href="https://immobi-sa.vercel.app/" style={{color:'inherit'}}>Online Rental platform </a></span>
       <span className='content-name'>Immobi</span>
           
     </motion.div>
     <motion.div variants={item} className='square-1'>
An online rental platform which gives the possibility for individuals looking for housing do so without with ease
               Built using<span> NextJs,MongoDB</span>
           </motion.div>
     </motion.div>
     </motion.div>
    </motion.div>
    
    
  )
}

export default Works
