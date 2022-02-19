import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import FormControl from "@mui/material/FormControl";

/**Importando Estilos CSS */
import "./ContactUs.css";
import Button from '@mui/material/Button'

const ContactUs = () => {
  return (
    <div className="contactUs-container">
      <div className="contactUs-form-container">
        <Typography
          className="contactUs-form-bold"
          variant="h3"
          color="initial"
        >
          Contactanos
        </Typography>
        <Typography
          className="contactUs-form-text"
          variant="body1"
          color="initial"
        >
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur '
        </Typography>

        <FormControl className="contactUs-form" variant="standard">
          <TextField className="contactUs-form-items" 
            id="nombre"
            label="Nombre y Apellidos"
            variant="outlined"
          />
          <TextField  className="contactUs-form-items" id="email" label="Correo electronico" variant="outlined" />
          <TextField className="contactUs-form-items" 
            id="multiline"
            label="Enviar un mensaje"
            multiline
            rows={4}
            defaultValue=""
          />

          <Button  className="contactUs-form-items" className="contactUs-form-button" variant="contained">
            Enviar
          </Button>
        </FormControl>
      </div>
      <div className="contactUs-img-container"></div>
    </div>
  );
};

export default ContactUs;
