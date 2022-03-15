import React, { useState } from "react";
import Typography from "@mui/material/Typography";

/**Importando Estilos CSS */
import "./Carrusel.css";
/* import banner1 from "./../../assets/carrusel/para slider/1.jpg";
import banner2 from "./../../assets/carrusel/para slider/2.jpg";
import banner3 from "./../../assets/carrusel/para slider/3.jpg";
import banner4 from "./../../assets/carrusel/para slider/4.jpg"; */

import carrusel1 from "./../../assets/carrusel/1.jpg";
import carrusel2 from "./../../assets/carrusel/2.jpg";
import carrusel3 from "./../../assets/carrusel/3.jpg";
import carrusel4 from "./../../assets/carrusel/4.jpg";

import icono1 from "./../../assets/carrusel/icons/Grupo 14.svg";
import icono2 from "./../../assets/carrusel/icons/Grupo 16.svg";
import icono3 from "./../../assets/carrusel/icons/Grupo 18.svg";
import icono4 from "./../../assets/carrusel/icons/Grupo 20.svg";
import { dark } from "../../assets/theme/Theme";

const slide = [carrusel1, carrusel2, carrusel3, carrusel4];

/* const sliderfondo = [banner1, banner2, banner3, banner4]; */

const icons = [icono1, icono2, icono3, icono4];

function Carrusel() {
  const [photoToggled, setPhotoToggled] = useState(-1);
  const [outIn, setOutIn] = useState(false);

  const toggleHover = (e) => {
    const { id } = e.target;
    if (id.indexOf("i") !== -1) {
      // if enters in an image
      if (Number(id.substring(1)) !== photoToggled) {
        setPhotoToggled(Number(id.substring(1)));
        if (outIn) transition(false);
        transition(true);
      }
    }
  };

  const transition = (value) => {
    setTimeout(() => {
      setOutIn(value);
    }, 100);
  };

  const unToggleHover = (e) => {
    const { id } = e.target;
    console.log(id);
    if (id.indexOf("i") !== -1) {
      setPhotoToggled(-1);
      setOutIn(false);
    }
  };

  return (
    <>
      {
      <div
        className="container-carrusel"
        style={{ background: dark.palette.primary.main }}
      >
        {/* codigo de sito */}
      <div style={{ display: "flex", height: "80vh" }}>
        <div className="carrusel-full" style={{ position: "absolute" }}>
          {photoToggled !== -1 && (
            <img
              src={slide[photoToggled]}
              alt="img"
              style={{
                flex: "1",
                opacity: photoToggled !== -1 ? 1 : 0,
              }}
            />
          )}
        </div>
        <div
          className="carrusel-full"
          style={{
            position: "absolute",
            background: "aliceblue",
            transition: "all 400ms ease",
            opacity: !outIn ? 1 : 0 ,
          }}
        ></div>
        {slide.map((item, index) => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "25%",
                zIndex: 99,
              }}
              onMouseEnter={toggleHover}
              onMouseLeave={unToggleHover}
            >
              <img
                id={`i${index}`}
                src={item}
                alt="img"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  flex: "none",
                  opacity: photoToggled !== -1 ? 0 : 1,
                }}
              />
              <div
                style={{ zIndex: 1, position: "absolute" }}
                id={`d${index}`}
                className="carrusel-column"
              >
                <div className="carrusel-icon-item" id={`c${index}`}>
                  <img src={icons[index]} alt="" id={`i${index}`} />
                </div>
                <Typography
                  className="section"
                  variant="h4"
                  color="#fff"
                  sx={{
                    position: "relative",
                    textTransform: "uppercase",
                    marginTop: "34px",
                  }}
                  id={`t${index}`}
                >
                  {" "}
                  Prueba
                </Typography>
              </div>
            </div>
          );
        })}
      </div>
       
      </div>
      }
      
    </>
  );
}

export default Carrusel;
