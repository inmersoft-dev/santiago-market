import React from "react";

import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

/**Import Estilos Css */
import "./AboutUs.css";

/**Importando Imagenes del about Us */
import about1 from "./../../assets/AboutUs/about1.jpg";
import about2 from "./../../assets/AboutUs/about2.jpg";
import { dark } from "../../assets/theme/Theme";

const AboutUs = () => {
  return (
    <div
      className="aboutUs-container"
      style={{ background: dark.palette.secondary.main }}
      id="aboutUs"
    >
      <div
        className="aboutUs-imgfondo"
        style={{ background: dark.palette.secondary.main }}
      >
        <div className="aboutUs-container">
          <div className="aboutus-imgs-container">
            <div
              className="section1"
              style={{
                backgroundImage: `url(${about1})`,
              }}
            >
              {/*   <img className="aboutus-img1" src={about1} alt="" /> */}
            </div>
            <div className="section2">
              <Typography
                className="aboutus-art-text1"
                variant="h3"
                color="#fff"
              >
                ¿Qué es SAN en Santiago?
              </Typography>

              <Typography
                className="aboutus-art-text"
                variant="body1"
                color="#fff"
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
              </Typography>

              <Link className="aboutus-art-button" to="/">
                Saber más
              </Link>
            </div>
          </div>

          <div className="aboutus-art-container">
            <div className="section3">
              <Typography
                className="aboutus-art-text"
                variant="subtilte1"
                color="#fff"
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur
              </Typography>
            </div>

            <div className="section4">
              <img className="aboutus-img2" src={about2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
