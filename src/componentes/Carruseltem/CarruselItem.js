import React, { useState } from "react";

import PropTypes from "prop-types";

// styles
import "./CarruselItem.css";

// components
import img from "./../../assets/masonry/6.jpg";
import CustomAddButton from "./../CustomAddButton/CustomAddButton";

// mui components
import Typography from "@mui/material/Typography";
import { dark } from "../../assets/theme/Theme";

const CarruselItem = (props) => {
  const { textAlign } = props;
  const [hide, setHide] = useState(true);

  console.log(textAlign);

  const toggleHover = (e) => {
    setHide(false);
  };

  const unToggleHover = (e) => {
    setHide(true);
  };

  return (
    <div className="carruselItem-container">
      <div
        className="carruselItem-top"
        onMouseEnter={toggleHover}
        onMouseLeave={unToggleHover}
      >
        <img className="carruselItem-img" src={img} alt="" />
        {hide ? null : (
          <div
            style={{
              background: `linear-gradient(360deg, ${dark.palette.primary.main}d9, transparent)`,
            }}
            className="img-degradado"
          />
        )}
        <div className={`title-row  ${textAlign}`}>
          <Typography className="carruselItem-title" variant="h5" color="#fff">
            {props.contenido[0].title}
          </Typography>
          {props.button ? <div style={{ width: "20%" }}></div> : null}
          <div className="button-container">
            {props.button ? <CustomAddButton /> : null}
          </div>
        </div>
      </div>

      <div className="carruselItem-bottom">
        {props.contenido[0].texto ? (
          <Typography
            className="carruselItem-text"
            variant="body1"
            color="#fff"
          >
            {props.contenido[0].texto}
          </Typography>
        ) : null}
      </div>
    </div>
  );
};

CarruselItem.defaultProps = {
  textAlign: "center",
};

CarruselItem.propTypes = {
  textAlign: PropTypes.string,
};

export default CarruselItem;
