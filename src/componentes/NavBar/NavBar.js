import React from 'react';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';

import "./NavBar.css";
import logo from "./../../assets/logo.svg";


const sections =["Inicio", "Proyecto","Planificación","Quienes Somos", "Contacto"]

export default function NavBar() {
  return (
    <div className='navbar-container'>
        {/* Section izquierda del la Barra de Navegacion */}
       <div className='navbar-left'>
            <img src={logo} alt=''/>
       </div>
       {/* Section Central del la Barra de Navegacion */}
       <div className='navbar-center'>
       {
         sections.map((section)=>
            (
              <div className="navbar-center-link">
                <Typography  className="navbar-center-link-text"  key={section} variant="h5" color="#fff" sx={{textAlign:'center'}}> {section}</Typography>   
              </div>            
            
            ))
        }    

         
       </div>
       {/* Section Derecha del la Barra de Navegacion */}
       <div className='navbar-rigth'>
           <div className="navbar-rigth-search">
              <input  type="text"/>
              <SearchIcon fontSize="large" />              
           </div>
           <Button className="navbar-rigth-button" variant="contained">Suscribir</Button>
       </div>
      
    </div>
  )
}
