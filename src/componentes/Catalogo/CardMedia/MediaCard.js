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
    <Card sx={{ maxWidth: 280, margin:3}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={media}
          alt="Title of media"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Title Media
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Description about the film
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default MediaCard
