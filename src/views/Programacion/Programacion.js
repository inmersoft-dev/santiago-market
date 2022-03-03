import React from "react";

import Disruptor from "../../componentes/Disruptor/Disruptor";
import MasterClasses from "../../componentes/MasterClasses/MasterClasses";
import SectionCarrousel from "../../componentes/SectionCarrousel/SectionCarrousel";
import SimpleHeader from "../../componentes/SimpleHeader/SimpleHeader";
import Roundtable from "../../componentes/Roundtables/Roundtable";
import ImgCard from "../../componentes/ImgCard/ImgCard";

const Programacion = () => {
  return (
    <>
      <SimpleHeader />
      <Disruptor />
      <SectionCarrousel />
      <MasterClasses />
      <Roundtable/>
      <ImgCard/>
      
    </>
  );
};

export default Programacion;
