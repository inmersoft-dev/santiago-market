/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

// mui components
import { Box, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { Link, Outlet } from "react-router-dom";

import "./NavBar.css";

import Logo from "./../../assets/logo.svg";
import { dark } from "../../assets/theme/Theme";
import TemporaryDrawer from "../TemporaryDrawer/TemporaryDrawer";

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
    link: "/#contact",
  },
];

export default function NavBar() {
  const [fondo, handleFondo] = useState(false);
  const [activeLink, setActiveLink] = useState(0);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleFondo(true);
    } else {
      handleFondo(false);
    }
  };

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

    if (result !== null) setActiveLink(Number(result));
  });

  const linkClicked = (e) => {
    const { id } = e.target;
    const reduced = id.substring(1);
    sessionStorage.setItem("active", reduced);
    setActiveLink(Number(reduced));
    return true;
  };

  return (
    <div
      className={`navbar ${fondo && "nav-painted"}`}
      style={{ width: "100%" }}
    >
      <Box
        className="navbar-container"
        sx={{
          px: { md: "40px", xs: "40px", lg: "110px" },
          justifyContent: { xs: "space-between" /* md:"space-between" */ },
        }}
      >
        {/* Section izquierda del la Barra de Navegacion */}
        <div className="navbar-left">
          <Box sx={{ flexGrow: 1, display: { md: "flex", xl: "none" } }}>
            <TemporaryDrawer sections={sections} />
          </Box>
          <img className="navbar-left-log" src={Logo} alt="" />
        </div>
        {/* Section Central del la Barra de Navegacion */}
        <Box
          className="navbar-center"
          sx={{ flexGrow: 1, display: { xs: "none", xl: "flex" } }}
        >
          {sections.map(({ id, link }, i) => (
            <div className="navbar-center-link" key={`link${i}`}>
              {link.indexOf("#") > -1 ? (
                <a
                  className={`navbar-center-link-text ${
                    activeLink === i ? "active-link" : ""
                  } `}
                  style={{
                    color:
                      activeLink === i
                        ? fondo
                          ? dark.palette.secondary.main
                          : dark.palette.primary.main
                        : "",
                  }}
                  key={`link${id}`}
                  href={link}
                  id={`l${i}`}
                  onClick={linkClicked}
                >
                  {id}
                </a>
              ) : (
                <Link
                  className={`navbar-center-link-text ${
                    activeLink === i ? "active-link" : ""
                  } `}
                  style={{
                    color:
                      activeLink === i
                        ? fondo
                          ? dark.palette.secondary.main
                          : dark.palette.primary.main
                        : "",
                  }}
                  key={`link${id}`}
                  to={link}
                  id={`l${i}`}
                  onClick={linkClicked}
                >
                  {id}
                </Link>
              )}
            </div>
          ))}
          <div style={{ width: "10%" }}></div>
        </Box>
        <Outlet />
        {/* Section Derecha del la Barra de Navegacion */}
        <div className="navbar-right">
          <div className="navbar-right-search">
            {/* <input type="text" /> */}
            <SearchIcon fontSize="medium" style={{ color: "#fff" }} />
          </div>
          <Button
            className="navbar-button-right"
            color="primary"
            variant="contained"
            href="/#contact"
            target="_blank"
            rel="noopener"
          >
            Subscribir
          </Button>
        </div>
      </Box>
    </div>
  );
}
