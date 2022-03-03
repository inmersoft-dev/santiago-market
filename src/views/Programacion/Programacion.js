import React from "react";

import Disruptor from "../../componentes/Disruptor/Disruptor";
import MasterClasses from "../../componentes/MasterClasses/MasterClasses";
import SectionCarrousel from "../../componentes/SectionCarrousel/SectionCarrousel";
import SimpleHeader from "../../componentes/SimpleHeader/SimpleHeader";
import Roundtable from "../../componentes/Roundtables/Roundtable";

import Workshop from "../../componentes/Workshops/Workshop";

const Programacion = () => {
  return (
    <>
      <SimpleHeader />
      <Disruptor />
      <SectionCarrousel />
      <MasterClasses />
      <Roundtable/>
      <Workshop/>
      
      
    </>
  );
};

export default Programacion;
