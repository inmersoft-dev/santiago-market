import React from "react";
import Description from "../../componentes/Description/Description";
import DescriptionInscription from "../../componentes/DescriptionInscription/DescriptionInscription";
import Header from "../../componentes/Header/Header";
import InscriptionRequest from "../../componentes/InscriptionRequest/InscriptionRequest";
import Icons from "../../componentes/Icons/Icons";
import NavBar from "../../componentes/NavBar/NavBar";
import "./AboutUs.css";

const contenido = [
  "Explora Santiago de los Caballeros en búsqueda de la oportunidad",
  "Santiago Market es un lugar en el cual el audiovisual nacional encuentra su sitio. En este espacio, tanto ideas, proyectos como creadores se unen para enriquecer su obra y aumentar sus relaciones. Esta  es una plataforma que busca concentrar las producciones cinematográficas nacionales y atraer la mayor visibilidad internacional posible.",
  
];

const AboutUS = () => {
  return (
    <>
    <NavBar />
      <Header contenido={contenido} margin='200' display=''/>
      <Icons color="#e8eaf6" />
      <Description />
      <DescriptionInscription />
      <InscriptionRequest />
    </>
  );
};

export default AboutUS;
