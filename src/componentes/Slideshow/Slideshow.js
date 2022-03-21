import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  {
    url: 'images/slide_2.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'images/slide_3.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'images/slide_4.jpg',
    caption: 'Slide 3'
  },
];

const Slideshow = (props) => {
    return (
        <div className="slide-container">
          <Slide>
           {props.children}
          </Slide>
        </div>
      )
    }

export default Slideshow
