import React from 'react';
import banner from './../../assets/banner.jpg';


/**Import Estilos Css */
import './AboutUs.css';


const AboutUs = () => {
  return (
    <div className='aboutUs-container'> 
      
      <div className='aboutUs-imgfondo' style={{backgroundSize: "cover",
     backgroundImage:`url(${banner})`, 
     backgroundPosition: "center center", 
     width: '100%',
     height: '1080px',}}>

       

      </div>
      
    </div>
  )
}

export default AboutUs
