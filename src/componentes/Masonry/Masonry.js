import React, { useState } from "react";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";

import "./Masonry.css";

import CustomAddButton from "../CustomAddButton/CustomAddButton";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 4,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    rows: 3,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    rows: 7,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  /* {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    cols: 2,
  }, */
];

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

let hover = false;
const Masonry = () => {

  const [hide,setHide]=useState(false);

 /*  const setVisibilidad=(e)=>{
    setHide(!hide);
    console.log(e);
  } */

  
  return (
    <ImageList
      className="masonry-container"
      sx={{ width: 900, height: "auto" }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 2}
          /* onMouseOver={setVisibilidad}
          onMouseLeave={setVisibilidad} */
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
            onMouseOver={() => {
              hover = true;
              setTimeout(() => {
                if (hover) {
                  setHide(true);
                }
              }, 500);
            }}
            onMouseOut={() => {
              hover = false;
              setHide(false);
            }}
          />
       {hide ? <ImageListItemBar
            className="titleItem"
            title={item.title}
            style={{              
              fontWeight: "bold",
            }}
            actionIcon={
              <IconButton
                className="masonry-iconbutton"
                sx={{ marginRight: 2 }}
                aria-label={`info about ${item.title}`}
              >
                <CustomAddButton />
              </IconButton>
            }
          /> : null }
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default Masonry;
