import React from 'react'
import NavBar from '../NavBar/NavBar'

import banner from './../../assets/banner.jpg';
function Header() {
  return (
    <header className="banner" style={{backgroundSize: "cover",
     backgroundImage:`url(${banner})`, 
     backgroundPosition: "center center", 
     width: '100%',
    height: '1080px',}}>
       <NavBar/>
    </header>
  )
}

export default Header
