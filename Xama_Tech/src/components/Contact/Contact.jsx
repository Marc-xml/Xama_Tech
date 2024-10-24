import React from 'react'
import "./Contact.scss"
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
  
const Contact = () => {
  return (
    <motion.div 
    variants={container}
    initial="hidden"
    whileInView="visible"
    className='contact'>
      <motion.span variants={item} className='title'>
      <span className='title-number'>03. </span>Contact Me
      </motion.span>
      <motion.span variants={item} className='sub-title'>Lets Stay Connected</motion.span>
      <motion.div variants={item} className='content'>
        Need a hand in a project you belive i might be of help? do not hesistate to contact me 
      </motion.div>
      {/* <button disabled={true}>Send a Message </button> */}
    <div style={{fontSize:"1.5rem"}}>  +237 674 159 544 </div>
    </motion.div>
  )
}

export default Contact
