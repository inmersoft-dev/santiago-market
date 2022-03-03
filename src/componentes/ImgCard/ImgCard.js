import React from "react";
import img from "./../../assets/masonry/3.jpg";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import "./ImgCard.css";

const ImgCard = () => {
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
