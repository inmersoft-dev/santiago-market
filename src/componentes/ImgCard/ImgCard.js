import React from "react";
import CustomAddButton from "../CustomAddButton/CustomAddButton";

import PropTypes from "prop-types";

import "./ImgCard.css";

const ImgCard = ({ img, onMouseEnter, onMouseLeave }) => {
  return (
    <div className="imgCard-container">
      <img
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        clasname="imgCard-img"
        src={img}
        alt=""
      />

      <div className="customAddbutton-container">
        <CustomAddButton padding={5} fontSize={15} />
      </div>
    </div>
  );
};

ImgCard.defaultProps = {
  onMouseEnter: null,
  onMouseLeave: null,
};

ImgCard.propTypes = {
  img: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default ImgCard;
