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
      I hold a Bachelor of Technology degree in Software Engineering and currently focus on web development, with a keen interest in expanding my skills and exploring new horizons in technology. I specialize in building dynamic web applications using the MERN stack, and I’ve also worked with Next.js, Laravel, and PHP on various projects. Collaboration is key for me, and I’ve had the pleasure of working alongside other talented developers to deliver impactful solutions.

When I’m not coding, you can usually find me indulging in anime or reading, as both activities fuel my creativity and curiosity. I’m a team player who thrives in collaborative environments, always eager to learn, adapt, and take on new challenges. With an unwavering curiosity and a drive for continuous growth, I’m excited to keep evolving as a developer and tackle new projects that push the boundaries of what I can achieve.      <motion.div
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
