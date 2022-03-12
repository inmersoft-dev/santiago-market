import React from 'react'
import Icons from './../../componentes/Icons/Icons';
import SimpleHeader from '../../componentes/SimpleHeader/SimpleHeader';
import NavBar from "../../componentes/NavBar/NavBar";

import './ShowCase.css';
import SponsorStaff from '../../componentes/SponsorStaff/SponsorStaff';

const ShowCase = () => {
  return (
    <>   <NavBar />
        <Icons color="#fff"/>
        <SimpleHeader/>
        <SponsorStaff/>

      
    </>
  )
}

export default ShowCase
