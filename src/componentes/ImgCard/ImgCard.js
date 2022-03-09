import React from "react";
import CustomAddButton from "../CustomAddButton/CustomAddButton";

import PropTypes from "prop-types";

import "./ImgCard.css";

const ImgCard = ({ img, onMouseEnter, onMouseLeave, onClick }) => {
  return (
    <div className="imgCard-container">
      <img
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
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
  onClick: null,
};

ImgCard.propTypes = {
  img: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onClick: PropTypes.func,
};

export default ImgCard;
