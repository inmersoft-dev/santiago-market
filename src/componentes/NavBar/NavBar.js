/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";

import {  
  Link,
  Outlet,
} from "react-router-dom";

import "./NavBar.css";

import Logo from "./../../assets/logo.svg";

const sections = [
  {
    id:"Que es el San",
  link:"/home"},
  {
    id:"Santiago Shawsace",
  link:"/about"},
  {
    id:"Programación",
  link:"/programacion"},
  {
    id:"Cortografia",
  link:"/about"},
  {
    id:"Acreditaciones",
  link:"/about"},
  {
    id:"Contacto",
  link:"/about"}

];

export default function NavBar() {
  const [fondo, handleFondo] = useState(false);

  /* const [hide, handleHide] = useState(false);

  const hideControl = () => {
    handleHide(!hide)   
  }; */
 

  const transitionNavBar = () => {    
    if (window.scrollY > 100) {
      handleFondo(true);  
      
    } else {
      handleFondo(false);
    }
  };

  /* const hideNavBar=()=>{

}; */

/* useEffect(()=>{
  const hidetime = () =>
  setTimeout(() => {      
    hideControl();    
  }, 4000);
  return ()=>clearTimeout(hidetime);
},[hideControl]) */

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <div
      className={`navbar-container ${fondo && "nav-painted"}`}>
      {/* Section izquierda del la Barra de Navegacion */}
      <div className="navbar-left">
        <img className="navbar-left-log" src={Logo} alt="" />
      </div>
      {/* Section Central del la Barra de Navegacion */}
      <div className="navbar-center">
        {sections.map(({id,link}) => (
          <Link to={link} style={{textDecoration:"none"}}>
            <div className="navbar-center-link">
            <Typography
              className="navbar-center-link-text"
              key={id}
              variant="h6"
              color="#fff"
              sx={{ textAlign: "center" }}
            >
             
              {id}
            </Typography>
          </div>
          </Link>
          
        ))}
      </div>
      <Outlet />
      {/* Section Derecha del la Barra de Navegacion */}
      <div className="navbar-rigth">
        <div className="navbar-rigth-search">
          {/* <input type="text" /> */}
          <SearchIcon fontSize="large" style={{ color: "#fff" }} />
        </div>
        <Button className="navbar-button-rigth" variant="contained">
          Suscribir
        </Button>
      </div>
    </div>
  );
}
