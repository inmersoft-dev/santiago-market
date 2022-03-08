import React, { Component } from "react";
import Slider from "react-slick";

import CarruselItem from "./../Carruseltem/CarruselItem";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import './CarruselSimple.css';


export default class CarruselSimple extends Component {
  render() {
    const settings = {
      className: "carruselSimple-slide",
      dots: false,
      infinite: true,
      slidesToShow: 2.6,
      slidesToScroll: 1,
      adaptiveHeight: true,
      centerMode:true,
      
      nextArrow: (
        <button type="button" class="slick-next" >
          Next
        </button>
      ),
      prevArrow: (
        <button type="button" class="slick-prev" >
          Previous
        </button>
      ),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
           
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      useCSS: true
    };
    return (
      <div className="carruselSimple-container">
        <Slider
          {...settings}
          style={{           
            paddinLeft: 50,
            paddinRight: 20,
            marginLeft: 35,
            marginRight: 49,
          }}
        >
          <div className="Slide-container">
            <CarruselItem />
          </div>
          <div className="Slide-container">
            <CarruselItem />
          </div>
          <div className="Slide-container">
            <CarruselItem />
          </div>

          <div className="Slide-container">
            <CarruselItem />
          </div>
          <div className="Slide-container">
            <CarruselItem />
          </div>
          <div className="Slide-container">
            <CarruselItem />
          </div>
          <div className="Slide-container">
            <CarruselItem />
          </div>
          <div className="Slide-container">
            <CarruselItem />
          </div>

          <div className="Slide-container">
            <CarruselItem />
          </div>
          <div className="Slide-container">
            <CarruselItem />
          </div>
        </Slider>
      </div>
    );
  }
}
