import React from "react";
import AddIcon from "@mui/icons-material/Add";

import PropTypes from "prop-types";

import "./CustomAddButton.css";

const CustomAddButton = (props) => {
  const { padding, fontSize } = props;

  return (
    <div>
      <div className="imgCard-button" style={{ padding }}>
        <AddIcon sx={{ fontSize }} />
      </div>
    </div>
  );
};

CustomAddButton.defaultProps = {
  padding: 12,
  fontSize: 20,
};

CustomAddButton.protTypes = {
  padding: PropTypes.number,
  fontSize: PropTypes.number,
};

export default CustomAddButton;
