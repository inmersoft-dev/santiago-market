import React from "react";
import Disruptor from "../../componentes/Disruptor/Disruptor";
import MasterClasses from "../../componentes/MasterClasses/MasterClasses";
import SimpleHeader from "../../componentes/SimpleHeader/SimpleHeader";

const Programacion = () => {
  return (
    <>
      <SimpleHeader />
      <Disruptor />
      {/* MasterClassCarrusel */}
      
      <MasterClasses/>
      
    </>
  );
};

export default Programacion;
