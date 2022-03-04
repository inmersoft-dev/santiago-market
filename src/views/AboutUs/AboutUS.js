import React from "react";
import Description from "../../componentes/Description/Description";
import DescriptionInscription from "../../componentes/DescriptionInscription/DescriptionInscription";
import Header from "../../componentes/Header/Header";
import InscriptionRequest from "../../componentes/InscriptionRequest/InscriptionRequest";

import "./AboutUs.css";

const AboutUS = () => {
  return (
    <>
      <Header />

     
      <Description/>
      
      <DescriptionInscription/>
      {/* InscriptionRequest */}

      <InscriptionRequest/>
    </>
  );
};

export default AboutUS;
