import React from 'react'
import "./Modal.scss"
import {AiOutlinePlus, AiOutlineShoppingCart} from "react-icons/ai"
import image from '../../assets/fly.jpg'
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
    
const Modal = ({open, close}) => {
  return (
 <motion.div 
 variants={container}
 initial="hidden"
 animate="visible"
 className='wrap' 
 style={open != true ? {display:"none"}:{display:"block"}}>
 <motion.div  variants={item} className='modal'>
 <div className='close' onClick={() =>close()}>X</div>
 <div className='modal-images'>
     <div className='modal-image'>
     <img src={image} />
     </div>
 </div>
 <div className='name'>olax flybox</div>
 <div className='description'>
 is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
 </div>
 <div className='action'>
 <button>Acheter <AiOutlineShoppingCart /></button>
 <button className='close' onClick={() =>close()}>Fermer <AiOutlinePlus /></button>
 </div>
</motion.div>
 </motion.div>
  )
}

export default Modal
