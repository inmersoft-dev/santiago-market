import React from "react";

import "./SimpleHeader.css";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const SimpleHeader = () => {
  return (
    <div className="simpleHeader-container">
      <Box className="text-container" >
        <Typography className="simpleHeader-text" variant="body1" color="#fff">
          'Proyectos de largometrajes, series y cortometrajes de ficción,
          animación y documental. Películas (cortas y largas) en avanzado estado
          de postproducción. Guionistas colombianos con sus más recientes
          propuestas. Los jóvenes talentos del cine y el audiovisual nacional.
          Estas son las propuestas de la industria cinematográfica en Colombia
          seleccionadas por convocatoria para ser parte del BAM 2021. En este
          catálogo usted podrá conocer más acerca de cada uno de los proyectos y
          las personas detrás de ellos, así como tener acceso a sus datos de
          contacto para agendar citas, establecer networking y pensar en
          negocios. Lo invitamos a descubrir en estas páginas la manera como se
          está pensando y moviendo el audiovisual en Colombia. ¡Encontrémonos
          para hacer BAM! '
        </Typography>
      </Box>
    </div>
  );
};

export default SimpleHeader;
