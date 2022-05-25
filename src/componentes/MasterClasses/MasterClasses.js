import React from "react";

import "./MasterClasses.css";

import imgWall from "./../../assets/carrusel/4.jpg";
import imgMain from "./../../assets/AboutUs/about1.jpg";

import Typography from "@mui/material/Typography";

const MasterClasses = () => {
  return (
    <div className="masterClasses-container">
      <div className="massterClasses-sectionTop">
        <img clasName="sectiontop-img" src={imgWall} alt="" />
      </div>
      <div className="massterClasses-sectionBottom">
        <div className="sectionBottom-left">
          <Typography
            className="sectionBottom-left-title"
            variant="h3"
            color="#fff"
          >
            Market Sessions
          </Typography>

          <Typography
            className="sectionBottom-left-text"
            variant="body1"
            color="#fff"
          >
            Como sociedad e industria atravesamos un momento único que nos
            permite replantear y reflexionar sobre nuestro recorrido. En este
            espacio, usted podrá hacer parte de las conversaciones que nos
            permiten conocer el estado actual de la industria, cómo lo
            aprovechamos y qué nos aguarda en un futuro. Los invitados son
            expertos audiovisuales de diferentes sectores, a continuación
            conozca sus perfiles y las temáticas de cada conversación. Market
            sessions en español
          </Typography>
        </div>
        <div className="sectionBottom-right">
          <div className="imgMain-container">
            <img className="imgMain" src={imgMain} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterClasses;
