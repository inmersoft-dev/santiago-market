import React from "react";
import "./Sponsors.css";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Sponsor from "./Sponsor/Sponsor";

const sponsors = [1, 2, 3, 4, 5];

const Sponsors = () => {
  return (
    <div className="sponsors-container">
      <div className="sponsors-title-container">
        <Typography className="sponsors-title" variant="h2" color="#fff">
          Paternnes
        </Typography>
      </div>

      <div className="sponsors-logos">
        {sponsors.map((item, index) => (
          <Sponsor key={index} />
        ))}
      </div>
      <Divider  style={{borderColor:'#fff'}}/>
    </div>
  );
};

export default Sponsors;
