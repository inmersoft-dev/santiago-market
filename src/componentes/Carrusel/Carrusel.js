import React, { useState } from "react";
import Typography from "@mui/material/Typography";

/**Importando Estilos CSS */
import "./Carrusel.css";

import carrusel1 from "./../../assets/carrusel/1.jpg";
import carrusel2 from "./../../assets/carrusel/2.jpg";
import carrusel3 from "./../../assets/carrusel/3.jpg";
import carrusel4 from "./../../assets/carrusel/4.jpg";

import icono1 from "./../../assets/carrusel/icons/Grupo 14.svg";
import icono2 from "./../../assets/carrusel/icons/Grupo 16.svg";
import icono3 from "./../../assets/carrusel/icons/Grupo 18.svg";
import icono4 from "./../../assets/carrusel/icons/Grupo 20.svg";
import { dark } from "../../assets/theme/Theme";
import { style } from "@mui/system";

const slide = [carrusel1, carrusel2, carrusel3, carrusel4];

const icons = [icono1, icono2, icono3, icono4];

function Carrusel() {
  const [photoToggled, setPhotoToggled] = useState(-1);

  const toggleHover = (e) => {
    setPhotoToggled(Number(e.target.id.substring(1)));
  };

  const unToggleHover = (e) => {
    setPhotoToggled(-1);
  };

  return (
    <div
      className="container-carrusel"
      style={{ background: dark.palette.primary.main }}
    >
      <div className="carrusel-full" style={{ position: "absolute" }}>
        {slide.map((item, index) => {
          return (
            <img
              key={`image${index}`}
              src={item}
              alt="img"
              style={{
                width:
                  photoToggled !== -1
                    ? photoToggled === index
                      ? "default"
                      : 0
                    : "25%",
                flex: photoToggled === index ? 1 : "none",
              }}
            />
          );
        })}
      </div>
      <div className="carrusel-full">
        {slide.map((item, index) => {
          return (
            <div key={index} className="carrusel-item">
              <div
                onMouseEnter={toggleHover}
                onMouseLeave={unToggleHover}
                style={{
                  zIndex: 1,
                  display:
                    photoToggled !== -1
                      ? photoToggled === index
                        ? "default"
                        : "none"
                      : "flex",
                }}
                id={`d${index}`}
                className="carrusel-column"
              >
                <div className="carrusel-icon-item" id={`c${index}`} style={{}}>
                  <img src={icons[index]} alt="" id={`i${index}`} />
                </div>
                <Typography
                  className="section"
                  variant="h4"
                  color="#fff"
                  sx={{
                    position: "relative",
                    textTransform: "uppercase",
                    marginTop: "84px",
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
  );
}

export default Carrusel;
