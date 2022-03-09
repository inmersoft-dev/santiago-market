import React from "react";
import NavBar from "../NavBar/NavBar";

import Typography from "@mui/material/Typography";

/**Importando estilos Css */
import "./Header.css";

import banner from "./../../assets/banner.jpg";

const contenido = [
  "Explora Santiago de los Caballeros en búsqueda de la oportunidad",
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ",
  "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
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
        height: "1080px",
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
              variant="body2"
              color="#fff"
              sx={{
                padding: "14px",
                /* lineHeight:'40px' */
              }}
            >
              {contenido[1]}
            </Typography>
            <Typography
              variant="body2"
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
