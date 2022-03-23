import React from "react";
import "./Sponsors.css";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Sponsor from "./Sponsor/Sponsor";
import sponsorImg from "./../../../assets/sponsor.png";
import Slideshow from "../../Slideshow/Slideshow";
import { Box } from "@mui/material";

const sponsors = [sponsorImg, sponsorImg, sponsorImg, sponsorImg, sponsorImg];

const Sponsors = () => {
  return (
    <div className="sponsors-container">
      <div className="sponsors-title-container">
        <Typography className="sponsors-title" variant="h3" color="#fff">
          Partners
        </Typography>
      </div>

      <Box className="sponsors-logos" style={{display: {md:"none" , lg:"flex"} }}>
        {sponsors.map((item, index) => (
          <Sponsor sponsor={sponsorImg} key={index} />
        ))}
      </Box>
      <Box className="slideshow-content">
        <Slideshow />
      </Box>

      <Divider style={{ borderColor: "#fff" }} />
    </div>
  );
};

export default Sponsors;
