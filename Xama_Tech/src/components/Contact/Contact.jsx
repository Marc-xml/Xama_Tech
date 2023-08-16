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
      <span className='title-number'>03. </span>Contacte
      </motion.span>
      <motion.span variants={item} className='sub-title'>Prenons Contact</motion.span>
      <motion.div variants={item} className='content'>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
      </motion.div>
      <button>Envoyer un Mesage</button>
    </motion.div>
  )
}

export default Contact
