import { Typography } from "@mui/material";
import React from "react";
import CarruselSimple from "../CarruselSimple/CarruselSimple";
import CarruselItem from "../Carruseltem/CarruselItem";
import CustomAddButton from "../CustomAddButton/CustomAddButton";
import "./Roundtable.css";

const contenido = [
  {
    title: "Este es el titulo de la section",
    texto: "",
  },
];

const Roundtable = () => {
  return (
    <div className="roundTable-container">
      <div className="roundTable-textContainer">
        <div className="relleno"></div>
        <div className="textContainer">
          <Typography className="textContainer-title" variant="h3" color="#fff">
          RoundTables
          </Typography>

          <Typography className="textContainer-text" variant="h6" color="#fff">
          ¡Bienvenidos al nuevo espacio de networking dentro del BAM! Realice su preinscripción para participar de estas mesas redondas, donde podrá intercambiar aprendizajes y conocer a más expertos y profesionales de la industria audiovisual. Cada mesa redonda tratará una temática diferente, le invitamos a conocer la agenda y perfiles de invitados que liderarán la conversación. Prueba en español
          </Typography>
        </div>
      </div>

      <div className="roundTable-carrouselContainer">
        <CarruselSimple
          item={CarruselItem}
          contenido={contenido}
          button={CustomAddButton}
        />
      </div>
    </div>
  );
};

export default Roundtable;
