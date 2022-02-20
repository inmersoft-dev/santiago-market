import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

import FormControl from "@mui/material/FormControl";
import { styled } from '@mui/material/styles';

import sideImg from './../../assets/carrusel/3.jpg';

/**Importando Estilos CSS */
import "./ContactUs.css";

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#fff',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#fff',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#fff',
    },
    '&:hover fieldset': {
      borderColor: '#fff',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#fff',
    },
  },
});

const ContactUs = () => {
  return (
    <div className="contactUs-container">
      <div className="contactUs-form-container">

        <div className="text-container">
          <Typography
          className="contactUs-form-bold"
          variant="h3"
          color="initial"
        >
          Contactanos
        </Typography>
        <Typography
          className="contactUs-form-text"
          variant="h6"
          color="initial"
        >
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur '
        </Typography>
        </div>
        

        <FormControl className="contactUs-form" variant="standard">
          <CssTextField className="contactUs-form-items" 
            id="nombre"
            label="Nombre y Apellidos"
            variant="outlined"
            
          />
          <CssTextField  className="contactUs-form-items" id="email" label="Correo electronico" variant="outlined" />
          <CssTextField className="contactUs-form-items" 
            id="multiline"
            label="Enviar un mensaje"
            multiline
            rows={4}
            defaultValue=""
          />

            <Button className="contactUs-form-button" /* color="secondary" */ variant="contained"sx={{ backgroundColor:'#7188df'}}>
              Enviar
            </Button>
        </FormControl>
      </div>
      <div className="contactUs-img-container">
          <img className="sideImg" src={sideImg} alt=""/>
          <div className="sideImg-fade"/>
      </div>
    </div>
  );
};

export default ContactUs;
