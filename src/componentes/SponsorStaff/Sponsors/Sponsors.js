import React from "react";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Sponsor from "./Sponsor/Sponsor";
import sponsorImg from "./../../../assets/sponsor.png";
/* import Slideshow from "../../Slideshow/Slideshow"; */
import { Box } from "@mui/material";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Sponsors.css";
const sponsors = [sponsorImg, sponsorImg, sponsorImg, sponsorImg, sponsorImg];

const Sponsors = () => {

  const settings = {
    className: "carruselSponsors-slide",
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    centerMode: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: true,
    mobileFirst: true,
    fade: false,
    cssEase: 'linear',
    responsive: [

      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          variableWidth: false,
          adaptiveHeight: false,
        },
      },

    ],
    useCSS: true,
  };
  return (
    <div className="sponsors-container">
      <div className="sponsors-title-container">
        <Typography className="sponsors-title" variant="h3" color="#fff">
          Partners
        </Typography>
      </div>

      <Box className="sponsors-logos" style={{ display: { md: "none", lg: "flex" } }}>
        {sponsors.map((item, index) => (
          <Sponsor sponsor={sponsorImg} key={index} />
        ))}
      </Box>
      <Box className="slideshow-content">
        {/* <Slideshow /> */}

        <Slider {...settings}>
          {sponsors.map((sponsor, i) => {
            return (
              <div key={`div${i}`} className="sponsorSlide-container">
                <Sponsor sponsor={sponsor} key={i} />
              </div>
            );
          })}
        </Slider>
      </Box>

      <Divider style={{ borderColor: "#fff" }} />
    </div>
  );
};

export default Sponsors;
