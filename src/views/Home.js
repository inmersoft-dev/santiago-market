import React from 'react'
import AboutUs from '../componentes/AboutUs/AboutUs'
import Carrusel from '../componentes/Carrusel/Carrusel'
import ContactUs from '../componentes/ContactUs/ContactUs'
import Header from '../componentes/Header/Header'

const Home = () => {
  return (
    <>
     
        <Header/>
        <Carrusel/>
        <AboutUs/>
        <ContactUs/>
    </>
  )
}

export default Home
