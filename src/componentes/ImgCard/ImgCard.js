import { IconButton } from "@mui/material";
import React from "react";
import CustomAddButtom from "../CustomAddButtom/CustomAddButtom";

import "./ImgCard.css";

const ImgCard = ({ img }) => {
  return (
    <div
      className="imgCard-container"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <IconButton
        
        sx={{ marginRight: 3,
        marginBottom:3 }}
        
      >
        <CustomAddButtom />
      </IconButton>
    </div>
  );
};

export default ImgCard;
