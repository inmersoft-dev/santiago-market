import React from "react";
import ImgCard from "../ImgCard/ImgCard";

import "./Workshop.css";
import Typography from "@mui/material/Typography";

const Workshop = () => {
  return (
    <div className="workShop-container">
      <div className="workShop-rigth">
        <div className="colum-1">
          <ImgCard />
          <ImgCard />
        </div>
        <div className="colum-2">
          <ImgCard />
        </div>
      </div>
      <div className="workShop-lefth">
        <Typography className="workShop-title" variant="h3" color="#fff">
          Title of Section
        </Typography>

        <Typography className="workShop-text" variant="h6" color="#fff">
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur '
        </Typography>
      </div>
    </div>
  );
};

export default Workshop;
