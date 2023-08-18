
import Layout from './components/Layout/Layout.scss'
import Navbar from './components/Navbar/Navbar'
import {BsFacebook, BsWhatsapp,BsInstagram,BsGithub} from 'react-icons/bs'
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
             <motion.a variants={item} >
             <BsFacebook />
             </motion.a>
             <motion.a variants={item}>
             <BsWhatsapp />
             </motion.a>
             <motion.a variants={item}>
             <BsInstagram />
             </motion.a>
             <motion.a variants={item}>
             <BsGithub />
             </motion.a>
             <motion.span variants={item} className="vertical-line"></motion.span>

             </motion.div>
             <motion.div className='hero'
             variants={container}
             initial="hidden"
             animate="visible"
          
           
             >
             <motion.span variants={item} className='hero-title'>Slt Nous Sommes</motion.span>
             <motion.span variants={item} className='hero-name'>Xama Tech.</motion.span>
             <motion.span variants={item} className='hero-sub'>Nous Contruissons le web.</motion.span>

             <motion.div  variants={item}className='hero-desc'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</motion.div>
             <motion.button variants={item} className='hero-button master'>Contacter Nous !</motion.button>
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
