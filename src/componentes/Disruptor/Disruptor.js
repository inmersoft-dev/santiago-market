import React from "react";
import Typography from "@mui/material/Typography";
import Icons from '../Icons/Icons';

import './Disruptor.css';
import Masonry from "../Masonry/Masonry";

const Disruptor = () => {
  return (
    <div className="disruptor-container">
        <Icons color="#e8eaf6"/>
      <div className="disruptor-head">
        <Typography className="disruptor-head-title" variant="h3" color="#fff">
          Title Section
        </Typography>
        <Typography className="disruptor-head-text" variant="h5" color="#fff">
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur '
        </Typography>
      </div>
      <div className="disruptor-articles">
            <Masonry/>
      </div>
    </div>
  );
};

export default Disruptor;
