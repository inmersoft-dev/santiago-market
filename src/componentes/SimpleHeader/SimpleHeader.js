import React from "react";
import NavBar from "../NavBar/NavBar";

import "./SimpleHeader.css";
import Typography from "@mui/material/Typography";

const SimpleHeader = () => {
  return (
    <div className="simpleHeader-container">
      <NavBar />

      <div className="text-container">
        <Typography className="simpleHeader-text" variant="body1" color="#fff">
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ' 'Lorem ipsum dolor sit
          amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
          montes, nascetur ' 'Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
          sociis natoque penatibus et magnis dis parturient montes, nascetur '
        </Typography>
      </div>
    </div>
  );
};

export default SimpleHeader;
