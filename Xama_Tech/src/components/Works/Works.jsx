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
     <img src={"/banking.png"} alt="" srcset="" />
     </motion.div>
    
     <motion.div
     variants={container}
     initial="hidden"
     whileInView="visible"
     className='inside-content'>
     <motion.div variants={item} className='name'>
       <span className='content-title'> <a href="http://" style={{color:'inherit'}}>Online banking system </a></span>
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
     <img src={"/mayu.png"} alt="" srcset="" />
     </motion.div>
     <motion.div 
     variants={container}
     initial="hidden"
     whileInView="visible"
     className='inside-content'>
     <motion.div variants={item} className='name'>
       <span className='content-title'><a href="http://" style={{color:'inherit'}}>Ecommerce website </a></span>
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
     <img src={"/erp.png"} alt="" srcset="" />
     </motion.div> 
     <motion.div
     variants={container}
     initial="hidden"
     whileInView="visible"
     className='inside-content revert'>
     <motion.div variants={item} className='name'>
       <span className='content-title'><a href="http://" style={{color:'inherit'}}>GS1 CRM </a></span>
       <span className='content-name'>CRM</span>
           
     </motion.div>
     <motion.div variants={item} className='square-1'>
                This system helps in managing and analyzing interactions  with customers , clients and sale prospects .
              Built using<span> React.js, Redux, MONGODB, Mongoose</span>
           </motion.div>
     </motion.div>
     </motion.div>
    

  

     <motion.div 
     variants={container}
     initial="hidden"
     whileInView="visible"
     className='work-content'>
     <motion.div variants={item} className='square'>
     <img src={"/pharm.png"} alt="" srcset="" />
     </motion.div>
     <motion.div 
     variants={container}
     initial="hidden"
     whileInView="visible"
     className='inside-content'>
     <motion.div variants={item} className='name'>
       <span className='content-title'><a href="http://" style={{color:'inherit'}}>Pharmacy Mgt System </a></span>
       <span className='content-name'>BTECH PHARMA</span>
           
     </motion.div>
     <motion.div variants={item} className='square-1'>
               Enables manegement and automation of variouspharmacy operations such as inventory mgt, billing mgt, Reporting etc
                Built using<span>HTML, CSS , JS, Laravel</span>
           </motion.div>
     </motion.div>
     </motion.div>
    </motion.div>
    
    
  )
}

export default Works
