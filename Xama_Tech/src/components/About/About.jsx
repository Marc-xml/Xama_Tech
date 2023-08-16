import React from 'react'
import "./About.scss"
import {BiLogoReact, BiLogoJavascript, BiLogoNodejs} from "react-icons/bi"
import {DiHtml5} from "react-icons/di"
const About = () => {
  return (
    <div className='about'>
   
      <div className='about-content'>
         <span className='title'>
      <span className='title-number'>01.</span>A Propos 
      </span>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
      <div className='icons'>
      <BiLogoReact />
      <DiHtml5 />
      <BiLogoJavascript />
      <BiLogoNodejs />
      </div>
      </div>
      <div className='square'>
      <div className='square-1'></div>
      <div className='square-2'></div>
      </div>
    </div>
  )
}

export default About
