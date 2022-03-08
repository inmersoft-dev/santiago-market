import React from 'react';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';



import './Masonry.css';
import { Box } from '@mui/material';

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
      title: 'Bed',
    },
    {
      img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
      title: 'Books',
    },
    {
      img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
      title: 'Sink',
    },
    {
      img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
      title: 'Kitchen',
    },
    {
      img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
      title: 'Blinds',
    },
    {
      img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
      title: 'Chairs',
    },
    
  ];

const Masonry = () => {
  return (
    <Box className='masonry-container' sx={{ width: 900, height: 900, /* overflowY: 'scroll' */ }}>
    <ImageList variant="masonry" cols={3}  gap={0} >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=395&fit=crop&auto=format`}
            srcSet={`${item.img}?w=395&fit=clip&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
           
            actionIcon={
              <IconButton
                className='masonry-iconbutton'
                sx={{  }}
                aria-label={`info about ${item.title}`}
              >
                <AddCircleIcon className='masonry-icon' fontSize='large'/>
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  </Box>
  )
}

export default Masonry
