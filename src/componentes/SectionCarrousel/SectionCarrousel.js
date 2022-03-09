import React from "react";
import Typography from "@mui/material/Typography";
import CarruseSimple from "./../CarruselSimple/CarruselSimple";
import CarruselItem from "../Carruseltem/CarruselItem";

import "./SectionCarrousel.css";

const contenido = [
  {
    title: "Este es el titulo de la section",
    texto:
      "Esto es el precontenido del articulo para llenar el cuerpo del articulo que sera parte del contenido del carrusel",
  },
];

const SectionCarrousel = () => {
  return (
    <div className="sectionCarrousel-container">
      <div className="sectionCarrousel-textContainer">
        <Typography className="textContainer-title" variant="h3" color="#fff">
          Title of Section
        </Typography>

        <Typography className="textContainer-text" variant="body1" color="#fff">
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur '
        </Typography>
      </div>

      <div className="sectionCarrousel-carrouselContainer">
        <CarruseSimple item={<CarruselItem/>} contenido={contenido} />
      </div>
    </div>
  );
};

export default SectionCarrousel;
