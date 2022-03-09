import React from "react";
import Description from "../../componentes/Description/Description";
import DescriptionInscription from "../../componentes/DescriptionInscription/DescriptionInscription";
import Header from "../../componentes/Header/Header";
import InscriptionRequest from "../../componentes/InscriptionRequest/InscriptionRequest";
import Icons from "../../componentes/Icons/Icons";

import "./AboutUs.css";

const AboutUS = () => {
  return (
    <>
      <Header />
      <Icons color="#e8eaf6" />
      <Description />
      <DescriptionInscription />
      <InscriptionRequest />
    </>
  );
};

export default AboutUS;
