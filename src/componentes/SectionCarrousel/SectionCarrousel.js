import React from "react";
import Typography from '@mui/material/Typography';
import CarruseSimple from './../CarruselSimple/CarruselSimple'

import './SectionCarrousel.css';


const SectionCarrousel = () => {
  return (
    <div className="sectionCarrousel-container">
      <div className="sectionCarrousel-textContainer">

          <Typography className="textContainer-title" variant="h3" color="#fff">
              Title of Section
          </Typography>

            <Typography className="textContainer-text" variant="h6" color="#fff">
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur '
            </Typography>

      </div>

      <div className="sectionCarrousel-carrouselContainer">
            <CarruseSimple/>
      </div>
    </div>
  );
};

export default SectionCarrousel;
