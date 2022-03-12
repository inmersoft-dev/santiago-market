import React from "react";

import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

/**Import Estilos Css */
import "./AboutUs.css";

/**Importando Imagenes del about Us */
import about1 from "./../../assets/AboutUs/about1.jpg";
import about2 from "./../../assets/AboutUs/about2.jpg";

const AboutUs = () => {
  return (
    <div className="aboutUs-container" id="aboutUs">
      <div
        className="aboutUs-imgfondo"
        style={{
          backgroundSize: "cover",
          backgroundColor: "#0c2372",
          backgroundPosition: "center center",
          width: "100%",
          height: "1200px",
        }}
      >
        <div className="aboutUs-container">
          <div className="aboutus-imgs-container">
            <div
              className="section1"
              style={{
                backgroundImage: `url(${about1})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
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
                variant="h6"
                color="#fff"
              >
                Son muchas las actividades que permiten el desarrollo
                profesional de los creadores entre ellas: reuniones, sesiones,
                conferencias centradas en temas diversos, talleres y muchas
                otras màs.
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
                variant="h6"
                color="#fff"
              >
                Para mantenernos al corriente con los tiempos y las
                circunstancias creadas por la pandemia del Covid 19; nuestra
                plataforma cuenta con actividades tanto presenciales como en
                línea, para así mantener viva nuestra principal misión de
                colaboración y apoyo mutuo.
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
