import React from 'react'
import AboutUs from '../../componentes/AboutUs/AboutUs'
import Carrusel from '../../componentes/Carrusel/Carrusel'
import ContactUs from '../../componentes/ContactUs/ContactUs'
import Header from '../../componentes/Header/Header'
import Icons from '../../componentes/Icons/Icons'
const Home = () => {
  return (
    <>
     
        <Header/>
        <Icons color="#e8eaf6" /> 
        <Carrusel/>
        <AboutUs/>
        <ContactUs/>
    </>
  )
}

export default Home
