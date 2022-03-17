import React from "react";

import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

/**Import Estilos Css */
import "./AboutUs.css";

/**Importando Imagenes del about Us */
import about1 from "./../../assets/AboutUs/about1.jpg";
import about2 from "./../../assets/AboutUs/about2.jpg";
import { dark } from "../../assets/theme/Theme";
import { Box } from "@mui/material";

const AboutUs = () => {
  return (
    <Box
      className="aboutUs-container"
      sx={{
        background: dark.palette.secondary.main,
        py: { xs: "80px", md: "0", sm: 0 },
      }}
      id="aboutUs"
    >
      <div
        className="aboutUs-imgfondo"
        style={{ background: dark.palette.secondary.main }}
      >
        <div className="aboutUs-container">
          <Box
            className="aboutus-imgs-container"
            sx={{
              marginLeft: { xs: "auto", sm: "0" },
              marginRight: { xs: "auto", sm: "0" },
              width: { xs: "68%", sm: "auto" },
            }}
          >
            <Box
              className="section1"
              sx={{
                backgroundImage: `url(${about1})`,
                display: { xs: "none", sm: "flex" },
              }}
            >
              {/*   <img className="aboutus-img1" src={about1} alt="" /> */}
            </Box>
            <Box
              className="section2"
              sx={{
                flex: { xs: "1", sm: "0.4 1" },
                paddingLeft: { sm: "50px" },
              }}
            >
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
                Son muchas las actividades que permiten el desarrollo
                profesional de los creadores entre ellas: reuniones, sesiones,
                conferencias centradas en temas diversos, talleres y muchas
                otras màs.
              </Typography>

              <Link className="aboutus-art-button" to="/">
                Saber más
              </Link>
            </Box>
          </Box>

          <div className="aboutus-art-container">
            <Box
              className="section3"
              sx={{
                flex: { xs: "1", sm: "0.5 1" },
                marginTop: { xs: "50px" },
              }}
            >
              <Typography
                className="aboutus-art-text"
                variant="body1"
                color="#fff"
              >
                Para mantenernos al corriente con los tiempos y las
                circunstancias creadas por la pandemia del Covid 19; nuestra
                plataforma cuenta con actividades tanto presenciales como en
                línea, para así mantener viva nuestra principal misión de
                colaboración y apoyo mutuo.
              </Typography>
            </Box>

            <Box
              className="section4"
              sx={{
                backgroundImage: `url(${about2})`,
                display: { xs: "none", sm: "flex" },
              }}
            ></Box>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default AboutUs;
