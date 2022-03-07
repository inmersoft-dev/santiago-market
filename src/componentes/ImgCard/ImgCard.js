import React from "react";

import AddCircleIcon from "@mui/icons-material/AddCircle";

import "./ImgCard.css";

const ImgCard = ({img}) => {
  return (
    <div className="imgCard-container">
      <img clasname="imgCard-img" src={img} alt="" />
      <div className="imgCard-buttom">
        <AddCircleIcon fontSize="large"/>
      </div>
    </div>
  );
};

export default ImgCard;
