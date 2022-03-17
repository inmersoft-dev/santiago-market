import React from "react";

/* import PropTypes from "prop-types"; */

import Typography from "@mui/material/Typography";

/**Importando estilos Css */
import "./Header.css";
import { Box } from "@mui/material";



/* const contenido = [
  "Explora Santiago de los Caballeros en búsqueda de la oportunidad",
  "Santiago Market es un lugar en el cual el audiovisual nacional encuentra su sitio. En este espacio, tanto ideas, proyectos como creadores se unen para enriquecer su obra y aumentar sus relaciones. Esta  es una plataforma que busca concentrar las producciones cinematográficas nacionales y atraer la mayor visibilidad internacional posible.",
  
]; */

function Header(props) {
  const { display, margin, contenido, img } = props;
  console.log({margin});
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${img})`,
        backgroundPosition: "center center",
        width: "100%",
        height: "auto",
      }}
    >
      <Box className="section-container" 
      sx={{
        justifyContent:{xs:"center"}
      }}
      >
        <Box
          className="banner-section"
          sx={{
            display: {md:`${display}`, sm:"default"},
            marginLeft:{ lg:{margin}, md:0},
            marginY:{xs:"200px"}

          }}
        >
          <div className="banner-section-contenido1">
            <Typography variant="h4" color="#fff" sx={{ fontWeight: "600" }}>
              {contenido[0]}
            </Typography>
          </div>
          <div
            className="banner-section-contenido2"
            style={{
              marginLeft: {lg: margin},
            }}
          >
            <Typography
              variant="h6"
              color="#fff"
              sx={{
                padding: "14px",
              }}
            >
              {contenido[1]}
            </Typography>
          </div>
        </Box>
      </Box>
    </header>
  );
}

export default Header;
