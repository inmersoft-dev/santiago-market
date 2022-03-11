import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";

import sideImg from "./../../assets/carrusel/3.jpg";
import banner2 from "./../../assets/banner2.jpg";

/**Importando Estilos CSS */
import "./ContactUs.css";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#fff",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#fff",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#fff",
    },
    "&:hover fieldset": {
      borderColor: "#fff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#fff",
    },
  },
});

const ContactUs = () => {
  return (
    <div
      className="contactUs-container"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${banner2})`,
        backgroundPosition: "center center",
        width: "100%",
        height: "1080px",
      }}
    >
      <div className="contactUs-form-container">
        <Typography
          className="contactUs-form-bold"
          variant="h3"
          color="initial"
        >
          Contáctanos
        </Typography>
        <Typography
          className="contactUs-form-text"
          variant="body1"
          color="initial"
        >
          'Si el mundo de la realización audiovisual es el que te apasiona y quieres dar a conocer tu trabajo. ¡Únetenos!'
        </Typography>

        <FormControl className="contactUs-form" variant="standard">
          <CssTextField
            className="contactUs-form-items"
            id="nombre"
            label="Nombre y Apellidos"
            variant="outlined"
          />
          <CssTextField
            className="contactUs-form-items"
            id="email"
            label="Correo electronico"
            variant="outlined"
          />
          <CssTextField
            className="contactUs-form-items"
            id="multiline"
            label="Enviar un mensaje"
            multiline
            rows={4}
            defaultValue=""
          />

          <Button
            className="contactUs-form-button"
            color="secondary"
            variant="contained"
          >
            Enviar
          </Button>
        </FormControl>
      </div>
      <div className="contactUs-img-container"></div>
    </div>
  );
};

export default ContactUs;
