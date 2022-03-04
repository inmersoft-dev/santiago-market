import React from "react";
import Description from "../../componentes/Description/Description";
import DescriptionInscription from "../../componentes/DescriptionInscription/DescriptionInscription";
import Header from "../../componentes/Header/Header";

import "./AboutUs.css";

const AboutUS = () => {
  return (
    <>
      <Header />

     
      <Description/>
      {/* InscriptionDescription */}
      <DescriptionInscription/>
      {/* InscriptionRequest */}
    </>
  );
};

export default AboutUS;
