import React from 'react'
import Catalogo from '../../componentes/Catalogo/Catalogo';
import Icons from '../../componentes/Icons/Icons';
import NavBar from '../../componentes/NavBar/NavBar'

import './Cortografia.css';

const Cortografia = () => {
  return (
    <div className='cortografia-container'>
    <NavBar/>
    <Icons color="#fff"/>
    <Catalogo/>
    
      
    </div>
  )
}

export default Cortografia
