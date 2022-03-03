import React, { Component } from "react";
import Slider from "react-slick";


import CarruselItem from './../Carruseltem/CarruselItem';

/* 
import "./slick.min.css"; 
import "./slick-theme.min.css"; */

/* function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
} */

export default class CarruselSimple extends Component {
  render() {
    const settings = {
      className: "",
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      adaptiveHeight: true,
      nextArrow: <button type="button" class="slick-next">Next</button> ,
      prevArrow: <button type="button" class="slick-prev">Previous</button>,      
      
    };
    return (
      <div className="carruselSimple-container">       
        <Slider {...settings}>
          <div>
            <CarruselItem/>
          </div>
          <div>
            <CarruselItem/>
          </div>
          <div>
            <CarruselItem/>
          </div>

          <div>
            <CarruselItem/>
          </div>
          <div>
            <CarruselItem/>
          </div>
          <div>
            <CarruselItem/>
          </div>
          <div>
            <CarruselItem/>
          </div>
          <div>
            <CarruselItem/>
          </div>

          <div>
            <CarruselItem/>
          </div>
          <div>
            <CarruselItem/>
          </div>
          
        </Slider>
      </div>
    );
  }
}