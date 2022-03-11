import React from "react";
import NavBar from "../NavBar/NavBar";

import Typography from "@mui/material/Typography";

/**Importando estilos Css */
import "./Header.css";

import banner from "./../../assets/banner.jpg";

const contenido = [
  "Explora Santiago de los Caballeros en búsqueda de la oportunidad",
  "Santiago Market es un lugar en el cual el audiovisual nacional encuentra su sitio. En este espacio, tanto ideas, proyectos como creadores se unen para enriquecer su obra y aumentar sus relaciones. Esta  es una plataforma que busca concentrar las producciones cinematográficas nacionales y atraer la mayor visibilidad internacional posible.",
  
];

function Header() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center center",
        width: "100%",
        height: "auto",
      }}
    >
      <NavBar />
      <div className="section-container">
        <div className="banner-section">
          <div className="banner-section-contenido1">
            <Typography variant="h4" color="#fff" sx={{ fontWeight: "600" }}>
              {contenido[0]}
            </Typography>
          </div>
          <div className="banner-section-contenido2">
            <Typography
              variant="subtitle1"
              color="#fff"
              sx={{
                padding: "14px",
                /* lineHeight:'40px' */
              }}
            >
              {contenido[1]}
            </Typography>
            <Typography
              variant="subtitle1"
              color="#fff"
              sx={{
                padding: "14px",
                /* lineHeight:'40px' */
              }}
            >
              {contenido[2]}
            </Typography>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
