import React, { useState } from "react";

import "./CarruselItem.css";

import img from "./../../assets/masonry/6.jpg";
import Typography from "@mui/material/Typography";
import CustomAddButtom from './../CustomAddButtom/CustomAddButtom';

const CarruselItem = (props) => {
  const [hide, setHide] = useState(true);

  const toggleHover = (e) => {    
    setHide(false);
  };

  const unToggleHover = (e) => {
    setHide(true);
  };

  return (
    <div className="carruselItem-container">
      {console.log(props)}
      <div
        className="carruselItem-top"
        onMouseEnter={toggleHover}
        onMouseLeave={unToggleHover}
      >
        <img className="carruselItem-img" src={img} alt="" />
        <Typography className="carruselItem-title" variant="h6" color="#fff">
          {props.contenido[0].title}
        </Typography>

        { hide ? null: <div className="img-degradado" /> }
        <div className="buttom-container">
        {
          props.buttom ? <CustomAddButtom /> : null
        }
        </div>
        
      </div>
      
      <div className="carruselItem-bottom">

        {
          props.contenido[0].texto ? <Typography className="carruselItem-text" variant="body1" color="#fff">
          {props.contenido[0].texto}
        </Typography>
        : null
        }
        
      </div>
    </div>
  );
};

export default CarruselItem;
