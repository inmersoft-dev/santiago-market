import React from 'react'
import Typography from '@mui/material/Typography'
import MediaCard from './CardMedia/MediaCard'

import './Catalogo.css';


const medias = [1,2,3,4,5,6,7,8,9,10,11,12,13,4,5]
const Catalogo = () => {
  return (
    <div className='catalogo-container'>
        <div className='catalogo-title'>
          <Typography className='section-title' variant="h3" color="#fff">
            SAN 2022 Catalogo
          </Typography>
        </div>
         <div className='catalogo-body'>
            <div className='catalogo-media'>
              {
                medias.map((media)=>                  
                      <MediaCard/>          
                )
              }
              
            </div>
            <div className='catalogo-text'>
              <Typography className='catalogo-textBody' variant="body1" color="#fff">
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur '

              </Typography>
            </div>
        </div>
      
    </div>
  )
}

export default Catalogo
