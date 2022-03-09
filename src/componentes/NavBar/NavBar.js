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
    link: "#aboutUs",
  },
];

export default function NavBar() {
  const [fondo, handleFondo] = useState(false);
  const [activeLink, setActiveLink] = useState(0);

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

  // scroll handler
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  // active setter
  useEffect(() => {
    const result = sessionStorage.getItem("active");
    console.log(result);
    if (result !== null) setActiveLink(Number(result));
  });

  const linkClicked = (e) => {
    const { id } = e.target;
    const reduced = id.substring(1);
    console.log(reduced);
    sessionStorage.setItem("active", reduced);
    setActiveLink(Number(reduced));
    return true;
  };

  return (
    <div
      className={`navbar ${fondo && "nav-painted"}`}
      style={{ width: "100%" }}
    >
      <div className="navbar-container">
        {/* Section izquierda del la Barra de Navegacion */}
        <div className="navbar-left">
          <img className="navbar-left-log" src={Logo} alt="" />
        </div>
        {/* Section Central del la Barra de Navegacion */}
        <div className="navbar-center">
          {sections.map(({ id, link }, i) => (
            <div className="navbar-center-link">
              <Link
                className={`navbar-center-link-text ${
                  activeLink === i ? "active-link" : ""
                } `}
                key={`link${id}`}
                to={link}
                id={`l${i}`}
                onClick={linkClicked}
              >
                {id}
              </Link>
            </div>
          ))}
          <div style={{ width: "10%" }}></div>
        </div>
        <Outlet />
        {/* Section Derecha del la Barra de Navegacion */}
        <div className="navbar-right">
          <div className="navbar-right-search">
            {/* <input type="text" /> */}
            <SearchIcon fontSize="medium" style={{ color: "#fff" }} />
          </div>
          <Button className="navbar-button-right" variant="contained">
            Suscribir
          </Button>
        </div>
      </div>
    </div>
  );
}
