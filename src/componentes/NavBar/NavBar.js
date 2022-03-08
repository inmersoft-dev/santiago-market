/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

// mui components
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { Link, Outlet } from "react-router-dom";

import "./NavBar.css";

import Logo from "./../../assets/logo.svg";

const sections = [
  {
    id: "Que es el San",
    link: "/home",
  },
  {
    id: "Santiago Showcase",
    link: "/showcase",
  },
  {
    id: "Programación",
    link: "/programacion",
  },
  {
    id: "Cortografía",
    link: "/cortografia",
  },
  {
    id: "Acreditaciones",
    link: "/about",
  },
  {
    id: "Contacto",
    link: "/about",
  },
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
    <div className={`navbar-container ${fondo && "nav-painted"}`}>
      {/* Section izquierda del la Barra de Navegacion */}
      <div className="navbar-left">
        <img className="navbar-left-log" src={Logo} alt="" />
      </div>
      {/* Section Central del la Barra de Navegacion */}
      <div className="navbar-center">
        {sections.map(({ id, link }) => (
          <div className="navbar-center-link">
            <Link
              className="navbar-center-link-text"
              key={`link${id}`}
              to={link}
              style={{ textDecoration: "none" }}
            >
              {id}
            </Link>
          </div>
        ))}
      </div>
      <Outlet />
      {/* Section Derecha del la Barra de Navegacion */}
      <div className="navbar-rigth">
        <div className="navbar-rigth-search">
          {/* <input type="text" /> */}
          <SearchIcon fontSize="medium" style={{ color: "#fff" }} />
        </div>
        <Button className="navbar-button-rigth" variant="contained">
          Suscribir
        </Button>
      </div>
    </div>
  );
}
