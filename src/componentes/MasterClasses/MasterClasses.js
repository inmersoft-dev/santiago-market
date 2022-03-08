import React from 'react'

import './MasterClasses.css';

import imgWall from './../../assets/carrusel/4.jpg';
import imgMain from './../../assets/AboutUs/about1.jpg'

import Typography from '@mui/material/Typography'


const MasterClasses = () => {
  return (
    <div className='masterClasses-container'>
        <div className='massterClasses-sectionTop'>
            <img clasName='sectiontop-img' src={imgWall} alt=""/>
        </div>
        <div className='massterClasses-sectionBottom'>
            <div className='sectionBottom-left'>
              <Typography className='sectionBottom-left-title' variant="h3" color="#fff">
                      Titulo de la Section
              </Typography>

              <Typography className='sectionBottom-left-text' variant="body1" color="#fff">
                  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur '
                  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur '
                  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur '
                  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur '
              </Typography>

            </div>
            <div className='sectionBottom-rigth'>

              <div className='imgMain-container'>
                <img className='imgMain' src={imgMain} alt=''/>
              </div>

            </div>
        </div>
      
    </div>
  )
}

export default MasterClasses
