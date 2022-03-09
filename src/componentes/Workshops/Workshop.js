import React, { useState } from "react";
import ImgCard from "../ImgCard/ImgCard";

import "./Workshop.css";
import Typography from "@mui/material/Typography";

import img1 from "./../../assets/masonry/2.jpg";
import img2 from "./../../assets/masonry/3.jpg";
import img3 from "./../../assets/masonry/5.jpg";

const Workshop = () => {
  const [imgSelect, SetimgSelect] = useState({ img1 });
  const [opacity, setOpacity] = useState(0);

  const mouseImg = (e) => {
    setOpacity(0);
    setTimeout(() => {
      SetimgSelect(e.target.currentSrc);
      setOpacity(1);
    }, 205);
  };

  const unMouseImg = (e) => {
    setOpacity(0);
  };

  return (
    <div>
      <div
        className="workShop-container"
        style={{
          opacity,
          backgroundImage: `url(${imgSelect})`,
        }}
      ></div>
      <div className="workShop-backgroupd-container">
        <div className="workShop-right">
          <div className="colum-1">
            <ImgCard
              img={img1}
              onMouseEnter={mouseImg}
              onMouseLeave={unMouseImg}
            />

            <ImgCard
              img={img2}
              onMouseEnter={mouseImg}
              onMouseLeave={unMouseImg}
            />
          </div>
          <div className="colum-2">
            <ImgCard
              img={img3}
              onMouseEnter={mouseImg}
              onMouseLeave={unMouseImg}
            />
          </div>
        </div>
        <div className="workShop-left">
          <Typography className="workShop-title" variant="h3" color="#fff">
            Title of Section
          </Typography>

          <Typography className="workShop-text" variant="h6" color="#fff">
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur '
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Workshop;
