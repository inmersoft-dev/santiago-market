import React from "react";

import "./DescriptionInscription.css";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";

import ImgDescription from "./../../assets/masonry/2.jpg";


const DescriptionInscription = () => {
  return (
    <div className="descripIns-container">
      <div className="dedescripIns-left">
        <div className="description-textTop">
          <Typography
            className="description-textTop-title"
            variant="h3"
            color="#fff"
          >
            ¿QUIÉNES PUEDEN INSCRIBIRSE?
          </Typography>

          <Typography
            className="description-textTop-text"
            variant="body1"
            color="#fff"
          >
            Pueden inscribirse al Mercado personas naturales mayores de edad y/o
            representantes de empresas del sector audiovisual y/o cultural que
            logren demostrar experiencia profesional en su campo específico.
          </Typography>
          <Divider className="divider" />
        </div>
        <div className="description-textBottom">
          <Typography
            className="description-textBottom-title"
            variant="h3"
            color="#fff"
          >
            FECHAS Y PRECIO DE INSCRIPCIÓN
          </Typography>

          <Typography
            className="description-textBottom-text"
            variant="body1"
            color="#fff"
          >
            La inscripción al SANTMARKET estará abierta desde el 31 de mayo y
            hasta el 1 de julio de 2022 únicamente a través de la página web
            www.santiagomarket.com

            <br/>
            Valor de inscripción: 120.000 COP / 35 USD.
          </Typography>
        </div>
      </div>

      <div className="dedescripIns-right">
        <div className="imgDescription-container">
          <img className="imgDescription" src={ImgDescription} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DescriptionInscription;
