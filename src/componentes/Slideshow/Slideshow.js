import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import './Slideshow.css';

import sponsorImg from "./../../assets/sponsor.png";

const slideImages = [
  {
    url: `${sponsorImg}`,
    caption: 'Slide 1'
  },
  {
    url: `${sponsorImg}`,
    caption: 'Slide 2'
  },
  {
    url: `${sponsorImg}`,
    caption: 'Slide 3'
  },
];

const Slideshow = () => {


  return (
    <div className="slide-container">
      <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div className='each-slide-component'  style={{'backgroundImage': `url(${slideImage.url})`}}>
               
              </div>
            </div>
          ))} 
        </Slide>
    </div>
  )
}

export default Slideshow
