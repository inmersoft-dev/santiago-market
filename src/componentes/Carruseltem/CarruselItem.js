import React from 'react'

import './CarruselItem.css';

import img from './../../assets/masonry/6.jpg'
import Typography from '@mui/material/Typography'


const CarruselItem = () => {
  return (
    <div className='carruselItem-container'>
        <div className='carruselItem-top'>
            <img className='carruselItem-img' src={img} alt=''/>
            <Typography className='carruselItem-title' variant="h5" color="#fff">
              Este es el titulo de la section  
            </Typography>
            <div className='img-degradado'/>
        </div>
        <div className='carruselItem-bottom'>
    <Typography className='carruselItem-text' variant="body1" color="#fff">
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. 

    </Typography>
            
        </div>
      
    </div>
  )
}

export default CarruselItem
