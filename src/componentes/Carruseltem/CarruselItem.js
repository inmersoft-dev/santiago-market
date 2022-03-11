import React, { useState } from "react";

import "./CarruselItem.css";

import img from "./../../assets/masonry/6.jpg";
import Typography from "@mui/material/Typography";
import CustomAddButton from "./../CustomAddButton/CustomAddButton";

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
      
      <div
        className="carruselItem-top"
        onMouseEnter={toggleHover}
        onMouseLeave={unToggleHover}
      >
        <img className="carruselItem-img" src={img} alt="" />
        {hide ? null : <div className="img-degradado" />}
        <div className="title-row">
          <Typography className="carruselItem-title" variant="h5" color="#fff">
            {props.contenido[0].title}
          </Typography>
          {props.button ? <div style={{width: "20%"}}> 

          </div>:null }
          <div className="button-container">
            {props.button ? <CustomAddButton /> : null}
          </div>
        </div>
      </div>

      <div className="carruselItem-bottom">
        {props.contenido[0].texto ? (
          <Typography
            className="carruselItem-text"
            variant="body1"
            color="#fff"
          >
            {props.contenido[0].texto}
          </Typography>
        ) : null}
      </div>
    </div>
  );
};

export default CarruselItem;
