import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import media from './../../../assets/masonry/4.jpg';


import './MediaCard.css';
const MediaCard = () => {
  return (
    <Card sx={{ maxWidth: 150, margin:2, height:220}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={media}
          alt="Title of media"
        />
        <CardContent sx={{padding:'6px !important', paddingLeft:'15px!important'}}>
          <Typography  variant="body2" component="div">
           Title Media
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Description about the film
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default MediaCard
