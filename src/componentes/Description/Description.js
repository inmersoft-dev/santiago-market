/* eslint-disable no-lone-blocks */
import React from "react";

import "./Description.css";
import ImgDescription from "./../../assets/carrusel/3.jpg";
import Typography from "@mui/material/Typography";
import { List, ListItem } from "@mui/material";

const descriptions = [
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ",
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ",
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ",
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ",
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ",
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ",
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ",
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ",
];

const Description = () => {
  return (
    <div className="description-container">
      <div className="descripton-left">
        <div className="description-img-container">
          <img className="description-img" src={ImgDescription} alt="" />
        </div>
        <div className="description-title-container">
          <Typography
            className="description-title"
            variant="h3"
            color="initial"
          >
            Este es el titulo de la Section
          </Typography>
        </div>
      </div>
      <div className="descripton-right">
        <List className="description-list">
          {descriptions.map((item) => {
            return (
              <ListItem className="itemList">
                <div className="dot">●</div>
                <Typography className="itemText" variant="body1" color="#fff">
                  {item}
                </Typography>
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );
};

export default Description;
