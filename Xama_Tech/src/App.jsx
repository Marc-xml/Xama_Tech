
import Layout from './components/Layout/Layout.scss'
import Navbar from './components/Navbar/Navbar'
import {BsFacebook, BsWhatsapp,BsInstagram,BsGithub} from 'react-icons/bs'
import Sidebar from './components/Sidebar/Sidebar'
function App() {

  return (
    <div className='layout'>
      <Navbar /> 
      <div className='page-body'>

         <div className='welcome'>
             <div className='welcome-info'>
             <a>
             <BsFacebook />
             </a>
             <a>
             <BsWhatsapp />
             </a>
             <a>
             <BsInstagram />
             </a>
             <a>
             <BsGithub />
             </a>
             <span className="vertical-line"></span>

             </div>
             <div className='hero'>
             <span className='hero-title'>Slt Nous Sommes</span>
             <span className='hero-name'>Xama Tech.</span>
             <span className='hero-sub'>Nous Contruissons le web.</span>

             <div className='hero-desc'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</div>
             <button className='hero-button'>Contacter Nous !</button>
             ddddddddddddddddddddddddddd
             BsInstagram <br></br>
             kdhgdhdjdd
             <br></br>
             hddjhdjhd
             </div>
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
