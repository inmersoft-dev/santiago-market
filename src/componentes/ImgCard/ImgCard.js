import React from "react";
import CustomAddButton from "../CustomAddButton/CustomAddButton";

import "./ImgCard.css";

const ImgCard = ({ img }) => {
  return (
    <div className="imgCard-container">
      <img clasname="imgCard-img" src={img} alt="" />

      <div className="customAddbutton-container">
        <CustomAddButton padding={5} fontSize={15} />
      </div>
    </div>
  );
};

export default ImgCard;
