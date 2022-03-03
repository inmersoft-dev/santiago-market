import React from "react";

import Disruptor from "../../componentes/Disruptor/Disruptor";
import MasterClasses from "../../componentes/MasterClasses/MasterClasses";
import SectionCarrousel from "../../componentes/SectionCarrousel/SectionCarrousel";
import SimpleHeader from "../../componentes/SimpleHeader/SimpleHeader";

const Programacion = () => {
  return (
    <>
      <SimpleHeader />
      <Disruptor />
      <SectionCarrousel/>
      
      <MasterClasses/>
      
    </>
  );
};

export default Programacion;
