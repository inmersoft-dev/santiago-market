import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";

import banner2 from "./../../assets/banner2.jpg";

/**Importando Estilos CSS */
import "./ContactUs.css";
import { Box } from "@mui/material";

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
        height: "auto",
      }}
    >
      <Box
        className="contactUs-form-container"
        sx={{
          marginLeft: { xs: "auto", md: "120px" },
          marginRight: { xs: "auto" },
          width: { xs: "98%", md: "50%" },
          padding: {
            xs: "80px 52px 80px 52px",
            md: "100px 52px 100px 86px",
          },
        }}
      >
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
          'Si el mundo de la realización audiovisual es el que te apasiona y
          quieres dar a conocer tu trabajo. ¡Únetenos!'
        </Typography>
        <div id="contact" />
        <Box component="form">
          <FormControl
            className="contactUs-form"
            variant="standard"
            sx={{
              width: { xs: "100%", md: "80%" },
            }}
          >
            <CssTextField
              className="contactUs-form-items"
              id="nombre"
              label="Nombre y Apellidos"
              variant="outlined"
              required
            />
            <CssTextField
              className="contactUs-form-items"
              id="email"
              label="Correo electronico"
              variant="outlined"
              required
            />
            <CssTextField
              className="contactUs-form-items"
              id="multiline"
              label="Enviar un mensaje"
              multiline
              rows={4}
              defaultValue=""
              required
            />
            <div>
              <Button
                className="contactUs-form-button"
                color="secondary"
                variant="contained"
                type="submit"
              >
                Enviar
              </Button>
            </div>
          </FormControl>
        </Box>
      </Box>
    </div>
  );
};

export default ContactUs;
