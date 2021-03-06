import React from "react";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import "./Staffs.css";
import Staff from "./Staff/Staff";

import avatar from "./../../../assets/avatar.png";

const staffs = [1, 2, 3, 4, 5, 6, 7, 8];

const Staffs = () => {
  return (
    <div className="staffs-container">
      <div className="staffs-title-container">
        <Typography className="staffs-title" variant="h3" color="#fff">
          Staff
        </Typography>
      </div>

      <div className="staffs-logos">
        {staffs.map((item, index) => (
          <Staff avatar={avatar} key={index} />
        ))}
      </div>
      <Divider />
    </div>
  );
};

export default Staffs;
