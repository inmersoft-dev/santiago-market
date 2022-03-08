import React from "react";
import CustomAddButtom from "../CustomAddButtom/CustomAddButtom";



import "./ImgCard.css";

const ImgCard = ({img}) => {
  return (
    <div className="imgCard-container">
      <img clasname="imgCard-img" src={img} alt="" />
      <CustomAddButtom/>
    </div>
  );
};

export default ImgCard;
