import React from "react";

import PropTypes from "prop-types";

// components
import Slider from "react-slick";
import CarruselItem from "./../Carruseltem/CarruselItem";

// styles
import "./CarruselSimple.css";
// slick carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarruselSimple = (props) => {
  const { contenido, button, itemTextAlign } = props;

  const array = [1, 2, 3, 4, 5, 6, 7, 8];

  const settings = {
    className: "carruselSimple-slide",
    dots: false,
    infinite: true,
    slidesToShow: 2.6,
    slidesToScroll: 1,
    adaptiveHeight: true,
    centerMode: true,

    /*  nextArrow: (
      <button type="button" class="slick-next">
        Next
      </button>
    ),
    prevArrow: (
      <button type="button" class="slick-prev">
        Previous
      </button>
    ), */
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
    useCSS: true,
  };
  return (
    <div className="carruselSimple-container">
      <Slider {...settings}>
        {array.map((item, i) => {
          return (
            <div key={`div${i}`} className="Slide-container">
              <CarruselItem
                textAlign={itemTextAlign}
                contenido={contenido}
                button={button}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

CarruselItem.defaultProps = {
  itemTextAlign: "center",
};

CarruselItem.propTypes = {
  contenido: PropTypes.arrayOf(PropTypes.string).isRequired,
  button: PropTypes.node.isRequired,
  itemTextAlign: PropTypes.string,
};

export default CarruselSimple;
