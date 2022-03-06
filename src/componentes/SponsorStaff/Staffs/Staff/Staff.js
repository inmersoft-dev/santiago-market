import React from "react";

import "./Staff.css";
import Typography from "@mui/material/Typography";

const Staff = ({avatar}) => {
  return (
    <div className="container">
      <div className="staff-container">
        <div className="img-container"
        style={{
            backgroundImage:`url(${avatar})`,
            backgroundSize: "cover",            
            backgroundPosition: "center center",
        }}>
          
         </div>
      </div>
      <div className="text-container">
            <Typography className="text-title" variant="h5" color="#fff">
              Nombre Apellido
            </Typography>
            <Typography  className="text-body" variant="h6" color="#fff">
              Cargo que Ocupa en Empresa
            </Typography>
          </div>
    </div>
  );
};

export default Staff;
