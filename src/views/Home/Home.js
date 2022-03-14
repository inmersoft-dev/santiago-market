import React from "react";
import AboutUs from "../../componentes/AboutUs/AboutUs";
import Carrusel from "../../componentes/Carrusel/Carrusel";
import ContactUs from "../../componentes/ContactUs/ContactUs";
import Header from "../../componentes/Header/Header";
import Icons from "../../componentes/Icons/Icons";
import NavBar from "../../componentes/NavBar/NavBar";

const contenido = [
  "Explora Santiago de los Caballeros en búsqueda de la oportunidad",
  "Santiago Market es un lugar en el cual el audiovisual nacional encuentra su sitio. En este espacio, tanto ideas, proyectos como creadores se unen para enriquecer su obra y aumentar sus relaciones. Esta  es una plataforma que busca concentrar las producciones cinematográficas nacionales y atraer la mayor visibilidad internacional posible.",
];

const Home = () => {
  return (
    <>
      <NavBar />
      <Header contenido={contenido} display="flex" />
      <Icons color="#e8eaf6" />
      <Carrusel />
      <AboutUs />
      <ContactUs />
    </>
  );
};

export default Home;
