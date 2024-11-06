import React, { useState } from 'react'
import "./Contact.scss"
import { motion } from 'framer-motion';
import { FaPaperPlane, FaWhatsapp, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

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
  }
};

const Contact = () => {
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this number with your WhatsApp number
    const whatsappNumber = '237674159544';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      whileInView="visible"
      className='contact'
    >
      <motion.span variants={item} className='title'>
        <span className='title-number'>03. </span>Contact Me
      </motion.span>
      <motion.span variants={item} className='sub-title'>Let's Stay Connected</motion.span>
      
      <motion.form variants={item} className='contact-form' onSubmit={handleSubmit}>
        <div className='input-container'>
          <input 
            type="text" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
          />
          <button type="submit">
            <FaPaperPlane /> Send on WhatsApp
          </button>
        </div>
      </motion.form>

      <motion.div variants={item} className='social-links'>
        <a href="https://github.com/Marc-xml/" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/marcnganyi" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://x.com/MarcNganyi" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://wa.me/237674159544" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </motion.div>
    </motion.div>
  )
}

export default Contact
