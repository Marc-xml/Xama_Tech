import Layout from './components/Layout/Layout.scss'
import Navbar from './components/Navbar/Navbar'
import {BsFacebook, BsWhatsapp,BsInstagram,BsGithub, BsLinkedin} from 'react-icons/bs'
import Sidebar from './components/Sidebar/Sidebar'
import About from './components/About/About'
import Works from './components/Works/Works'
import Contact from './components/Contact/Contact'
import Store from './components/Store/Store'
import Modal from './components/Modal/Modal'
import Footer from './components/Footer/Footer'

import {   motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue} from "framer-motion";
import { useEffect } from 'react';

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
  hiddenx:{x: 20, opacity :0},
  visiblex:{
    x:0,
    opacity: 1
  }
};


function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <div className='layout'>
      <Navbar /> 
      <div className='page-body'>

         <div className='welcome'>
             <motion.div className='welcome-info'
             variants={container}
             initial="hidden"
             animate="visible"
             >
             <motion.a 
              href="https://github.com/Marc-xml/" 
              target="_blank" 
              rel="noopener noreferrer" 
              variants={item}
              style={{color:"inherit"}}
             >
              <BsGithub />
             </motion.a>
             <motion.a 
              href="https://www.linkedin.com/in/marcnganyi" 
              target="_blank" 
              rel="noopener noreferrer" 
              variants={item}
              style={{color:"inherit"}}
             >
              <BsLinkedin />
             </motion.a>
             <motion.a 
              href="https://wa.me/+237674159544" 
              target="_blank" 
              rel="noopener noreferrer" 
              variants={item} 
              className='next'
              style={{color:"inherit"}}
             >
              <BsWhatsapp />
             </motion.a>
             <motion.a 
              href="https://www.facebook.com/Marc Ronald" 
              target="_blank" 
              rel="noopener noreferrer" 
              variants={item} 
              className='prev'
              style={{color:"inherit"}}
             >
              <BsFacebook />
             </motion.a>
             <motion.span variants={item} className="vertical-line"></motion.span>

             </motion.div>
             <motion.div className='hero'
             variants={container}
             initial="hidden"
             animate="visible"
          
           
             >
             <motion.span variants={item} className='hero-title'>Hello, I am</motion.span>
             <motion.span variants={item} className='hero-name'>Marc Ronaldo.</motion.span>
             <motion.span variants={item} className='hero-sub container'>
              <span className='slide'>A fullstack developer.</span>             
            
             </motion.span>

             <motion.div    variants={item}   className='hero-desc'>A Software Engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently IT Technician at GS1 Cameroon</motion.div>
             <motion.button variants={item} className='hero-button master'> <a href="https://wa.me/674159544" style={{textDecoration: 'none', color:'inherit'}}>Message me</a> </motion.button>
             <motion.button variants={item} className='hero-button under'></motion.button>
            <div id='about'>
            <About />
            </div>
            <div id='works'>
            <Works />
            </div>
            <div id='contact'>
            <Contact />
            </div>
            <div id='store'>
            <Store />
            </div>
            <div className='footer'>
            <Footer />
            </div>
             </motion.div>
          </div>

          <div className='contact-info'>
          <span className="email">marcronaldonganyi@gmail.com</span>
          <span class="vertical-line"></span>
          
          </div>

      </div>
      <Sidebar />
    </div>
  )
}

export default App
