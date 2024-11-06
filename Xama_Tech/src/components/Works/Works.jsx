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

          Invoice is a web-based banking solution that allows customers to access financial services conveniently from home,
           eliminating the need to stand in long queues. This system not only enhances the customer experience but also streamlines operations for bank employees, automating many tasks and reducing pressure. The platform features three distinct views: Customer, Bank Teller, and System Admin   
          Built using <span>HTML, CSS,JS and Laravel</span> for the backend, the system integrates Graph.js for visualizing financial data through dynamic graphs.
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
     This eCommerce platform enables seamless online sales, order management, and more. Developed in collaboration with <a href='https://github.com/NdipEstaban' style={{color:'inherit'}}>@Ndip Estaband</a>  and <a href='https://github.com/XavierDom' style={{color:'inherit'}}>@Xavier Tchami</a>  , the platform is built using <span>React, SASS, Redux Toolkit, MongoDB, Express, and Prisma </span>. We leveraged Amazon S3 for efficient media processing and storage. The solution streamlines the shopping experience for customers while providing powerful backend capabilities for managing orders, inventory, and product listings.
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
     Developed in collaboration with <a href='https://github.com/NdipEstaban' style={{color:'inherit'}}>@Ndip Estaband</a>, this online rental platform allows individuals looking to relocate to easily browse listings for available rental properties, find options that suit their needs, and request a visit. Built using <span>Next.js and Tailwind CSS with MongoDB for the Backend </span>, the platform offers a smooth, responsive user experience. We also integrated Amazon S3 for efficient image storage, ensuring fast load times and smooth media handling               Built using<span> NextJs,MongoDB</span>
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
       <span className='content-name'>GS1 CRM</span>
           
     </motion.div>
     <motion.div variants={item} className='square-1'>
     This Customer Relationship Management (CRM) system was built to streamline and optimize client interactions.
      The frontend is designed using <span>Tailwind CSS</span> and <span>Ant Design</span> for a modern, responsive interface, while <span>React</span> and <span>Redux</span> manage the state and user interactions. The backend is powered by MongoDB, ensuring scalable and efficient data management. 
     This solution helps businesses better track and manage their customer relationships with ease.
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
       <span className='content-title'> <a href="https://immobi-sa.vercel.app/" style={{color:'inherit'}}>Pharmacy Management System</a></span>
       <span className='content-name'>Pharma</span>
           
     </motion.div>
     <motion.div variants={item} className='square-1'>
     This Pharmacy Management System simplifies the management of pharmacy operations, including inventory tracking, sales, and customer management. Built with <span>Laravel</span> for the backend and <span>MySQL</span> for database management, the system ensures reliability and scalability. The frontend is designed with Bootstrap, providing a clean and responsive user interface. This solution helps pharmacies streamline their workflows and improve operational efficiency
           </motion.div>
     </motion.div>
     </motion.div>
    </motion.div>
    
    
  )
}

export default Works
