import React from 'react'
import "./About.scss"
import {BiLogoReact, BiLogoJavascript, BiLogoNodejs,} from "react-icons/bi"
import {DiHtml5} from "react-icons/di"
import { motion } from 'framer-motion'
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
  
const About = () => {
  return (
    <div className='about'>
   
      <motion.div className='about-content'
      variants={container}
      initial="hidden"
      whileInView="visible"
      >
         <motion.span variants={item} className='title'>
      <span className='title-number'>01.</span>About me 
      </motion.span>
      Armed with a Bachelor of Technology degree in Software Engineering, my passion lies in crafting innovative solutions with the MERN stack, along with exploring frameworks like Next.js and Laravel. When I'm not immersed in coding, you'll find me indulging in anime and diving deep into the world of literature. Fuelled by an insatiable curiosity, I constantly seek to unravel the "why" behind everything I encounter. Eager to expand my horizons and acquire new knowledge, I'm always ready to embark on exciting learning adventures.
      <motion.div
       className='icons'
       variants={container}
       initial="hidden"
       whileInView="visible"
      >
      <motion.span variants={item}><BiLogoReact /></motion.span>
      <motion.span variants={item}><DiHtml5 /></motion.span>
      <motion.span variants={item}><BiLogoJavascript /></motion.span>
      <motion.span variants={item}><BiLogoNodejs /></motion.span>
      {/* <motion.span variants={item}><BiLogoNextJs /></motion.span> */}
      </motion.div>
      </motion.div>
      <motion.div
       className='square'
       variants={container}
       initial="hidden"
       whileInView="visible"
      >
        <motion.div variants={item} className='square-2'></motion.div>
        <motion.div variants={item} className='square-1'>
          <img src="/nganyi_marc.jpg" alt="Nganyi Marc" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About
