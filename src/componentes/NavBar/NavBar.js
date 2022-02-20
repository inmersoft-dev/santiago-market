import React from 'react';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';

import "./NavBar.css";

import Logo from "./../../assets/logo.svg";


const sections =["Que es el San", "Santiago Shawsace","Programación","Cortografia", "Acreditaciones","Contacto"]

export default function NavBar() {
  return (
    <div className='navbar-container'>
        {/* Section izquierda del la Barra de Navegacion */}
       <div className='navbar-left'>
            <img className="navbar-left-log" src={Logo} alt=''/>
       </div>
       {/* Section Central del la Barra de Navegacion */}
       <div className='navbar-center'>
       {
         sections.map((section)=>
            (
              <div className="navbar-center-link">
                <Typography  className="navbar-center-link-text"  key={section} variant="body1" color="#fff" sx={{textAlign:'center'}}> {section}</Typography>   
              </div>            
            
            ))
        }    

         
       </div>
       {/* Section Derecha del la Barra de Navegacion */}
       <div className='navbar-rigth'>
           <div className="navbar-rigth-search">
              <input  type="text"/>
              <SearchIcon fontSize="large" style={{color:'#fff'}} />              
           </div>
           <Button className="navbar-button-rigth" variant="contained">Suscribir</Button>
       </div>
      
    </div>
  )
}
