import React, { useState } from "react";
import ImgCard from "../ImgCard/ImgCard";

import "./Workshop.css";
import Typography from "@mui/material/Typography";

import img1 from "./../../assets/masonry/2.jpg";
import img2 from "./../../assets/masonry/3.jpg";
import img3 from "./../../assets/masonry/5.jpg";

const Workshop = () => {
  const [imgSelect, SetimgSelect] = useState({ img1 });

  const mouseImg = (e) => {
    console.log(e.target.attributes.style.value);
    SetimgSelect(e.target.attributes.style.value);
  };

  const unMouseImg = (e) => {
    
    SetimgSelect(`#dd1a1e`);
  };



  return (
    <div
      className="workShop-container"
      style={{
        backgroundImage: `url(${imgSelect})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundColor: '#dd1a1e',
        animation: 'all 200ms ease'
      }}
    >
      <div className="workShop-rigth">
        <div className="colum-1">
          <div 
          onMouseEnter={mouseImg}
          onMouseLeave={unMouseImg}
          >
            <ImgCard img={img1} />
          </div>

          <div 
          onMouseEnter={mouseImg}
          onMouseLeave={unMouseImg}
          >
            <ImgCard img={img2} />
          </div>
        </div>
        <div className="colum-2">
          <div 
          onMouseEnter={mouseImg}
          onMouseLeave={unMouseImg}
          >
            <ImgCard img={img3} />
          </div>
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
