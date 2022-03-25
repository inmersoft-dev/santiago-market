import React from "react";

import Disruptor from "../../componentes/Disruptor/Disruptor";
import MasterClasses from "../../componentes/MasterClasses/MasterClasses";
import SectionCarrousel from "../../componentes/SectionCarrousel/SectionCarrousel";
import SimpleHeader from "../../componentes/SimpleHeader/SimpleHeader";
import Roundtable from "../../componentes/Roundtables/Roundtable";
import NavBar from "../../componentes/NavBar/NavBar";
import Workshop from "../../componentes/Workshops/Workshop";
import FooterImg from "../../componentes/FooterImg/FooterImg";

const Programacion = () => {
  return (
    <>
      <NavBar />
      <SimpleHeader />
      <Disruptor />
      <SectionCarrousel />
      <MasterClasses />
      <Roundtable />
      <Workshop />
      <FooterImg />
    </>
  );
};

export default Programacion;
