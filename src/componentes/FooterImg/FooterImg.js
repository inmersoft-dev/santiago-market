import React from "react";

import footerImg from "./../../assets/footer.png";

import "./FooterImg.css";
import Typography from "@mui/material/Typography";

const FooterImg = () => {
  return (
    <div
      className="FooterImg-container"
      style={{
        backgroundImage: `url(${footerImg})`,
      }}
    >
      

      <div className="footer-text-container">
        <Typography className="footer-title" variant="h2" color="initial">
          Title of Section
        </Typography>

        <Typography className="footer-text" variant="h6" color="initial">
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur '

          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur '


          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur '

          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur '
        </Typography>
      </div>
      <div className="img-fade" />
    </div>
  );
};

export default FooterImg;
