import React from "react";
import CustomAddButton from "../CustomAddButton/CustomAddButton";

import "./ImgCard.css";

const ImgCard = ({ img }) => {
  return (
    <div className="imgCard-container">
      <img clasname="imgCard-img" src={img} alt="" />

      <div className="customAddbutton-container">
        <CustomAddButton
          sx={{
            marginRight: 10,
          }}
        />
      </div>
    </div>
  );
};

export default ImgCard;
