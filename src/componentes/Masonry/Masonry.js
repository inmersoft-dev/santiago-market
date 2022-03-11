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
];

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Masonry = () => {
  const [hide, setHide] = useState(-1);

  return (
    <ImageList
      className="masonry-container"
      sx={{ width: 900, height: "auto" }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item, i) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 2}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
            onMouseEnter={() => {
              setHide(i);
            }}
            onMouseLeave={() => {
              setHide(-1);
            }}
          />
          <ImageListItemBar
            className="title-item"
            title={item.title}
            style={{ opacity: hide === i ? 1 : 0 }}
            actionIcon={
              <IconButton
                className="masonry-iconbutton"
                sx={{ marginRight: 2 }}
                aria-label={`info about ${item.title}`}
              >
                <CustomAddButton />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default Masonry;
