import React from "react";

import "./DescriptionInscription.css";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";


import ImgDescription from './../../assets/masonry/2.jpg'
const DescriptionInscription = () => {
  return (
    <div className="descripIns-container">
      <div className="dedescripIns-left">
        <div className="description-textTop">
          <Typography
            className="description-textTop-title"
            variant="h2"
            color="#fff"
          >
            Title of Section
          </Typography>

          <Typography
            className="description-textTop-text"
            variant="h5"
            color="#fff"
          >
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur '
          </Typography>
          <Divider className="divider" />
        </div>
        <div className="description-textBottom">
          <Typography
            className="description-textBottom-title"
            variant="h2"
            color="#fff"
          >
            Title of Section
          </Typography>

          <Typography
            className="description-textBottom-text"
            variant="h5"
            color="#fff"
          >
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur '
          </Typography>
        </div>
      </div>

      <div className="dedescripIns-rigth">

          <div className="imgDescription-container">
              <img className="imgDescription" src={ImgDescription} alt=""/>
          </div>
      </div>
    </div>
  );
};

export default DescriptionInscription;
