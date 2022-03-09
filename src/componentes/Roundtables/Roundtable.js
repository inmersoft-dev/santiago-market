import { Typography } from "@mui/material";
import React from "react";
import CarruselSimple from "../CarruselSimple/CarruselSimple";
import CarruselItem from "../Carruseltem/CarruselItem";
import CustomAddButtom from "../CustomAddButtom/CustomAddButtom";
import "./Roundtable.css";

const contenido =[{
  title:"Este es el titulo de la section",
  texto:""
}
]

const Roundtable = () => {
  return (
    <div className="roundTable-container">
      <div className="roundTable-textContainer">
        <div className="relleno"></div>
        <div className="textContainer">
          <Typography className="textContainer-title" variant="h3" color="#fff">
            Title of Section
          </Typography>

          <Typography className="textContainer-text" variant="h6" color="#fff">
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur '
          </Typography>
        </div>
      </div>

      <div className="roundTable-carrouselContainer">
        <CarruselSimple item={CarruselItem} contenido={contenido} buttom={CustomAddButtom}/>
      </div>

     
    </div>
  );
};

export default Roundtable;
