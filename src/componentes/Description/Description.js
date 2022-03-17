/* eslint-disable no-lone-blocks */
import React from "react";

import "./Description.css";
import ImgDescription from "./../../assets/carrusel/3.jpg";
import Typography from "@mui/material/Typography";
import { List, ListItem } from "@mui/material";

const descriptions = [
  "Formar parte del directorio de la industria: administre su información y mantenga al día sus intereses, proyectos y objetivos para la consulta de otros acreditados",
  "Acceso al directorio de industria:conozca los perfiles, intereses y la información de contacto de cada uno de los participantes de esta edición del mercado.",
  "Acceso a www.santiagomarket.com:navegue la plataforma de agendamiento del mercado y solicite citas uno a uno con potenciales aliados de sus proyectos. ",
  "Acceso al Dominican Showcase:Conozca el catálogo de contenidos con los proyectos y talentos curados de la convocatoria SanMarket202. ",
  "Programación educativa al alcance de su mano:Descubra las últimas tendencias del sector audiovisual, Navegue de la mano de expertos las nuevas metodologías de trabajo y forme parte de conversaciones enriquecedoras para su vida profesional ",
  "Acceso a los SanMarket Keynotes: conozca las presentaciones de expertos nacionales e internacionales sobre temáticas específicas de industria así como los estudios y manuales de buenas prácticas en el audiovisual.",
  "Acceso al San Market Village virtual: Haga un recorrido por el universo virtual del Santiago Market donde encontrará el punto de información para resolver sus inquietudes, la feria para conocer la oferta de servicios y programas de instituciones y empresas aliadas del sector y el auditorio donde se llevará a cabo la programación académica. ",
  "Acceso a actividades de networking:Pre-regístrese para ser parte de las actividades de relacionamiento que el Mercado ha preparado con invitados expertos del sector audiovisual ",
  "Acceso a las sedes físicas:visite y programe sus citas presenciales en Casa Let,sa Ark y Cámara de Comercio mientras disfruta de un café y de acceso a internet. No se pierda de los eventos especiales que se programen en estos espacios.",
  "Acceso al SantiagoNow:esté permanentemente actualizado de lo que sucede en la edición 2021 del mercado y conozca contenidos adicionales de relevancia para la industria."
];

const Description = () => {
  return (
    <div className="description-container">
      <div className="descripton-left">
        <div className="description-img-container">
          <img className="description-img" src={ImgDescription} alt="" />
        </div>
        <div className="description-title-container">
          <Typography
            className="description-title"
            variant="h3"
            color="initial"
          >
           Los acreditados al Santiago Market podrán ser beneficiarios de lo siguiente:
          </Typography>
        </div>
      </div>
      <div className="descripton-right">
        <List className="description-list">
          {descriptions.map((item, i) => {
            return (
              <ListItem className="itemList" key={`list${i}`}>
                
                <Typography className="itemText" variant="body1" color="#fff">
                  {item}
                </Typography>
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );
};

export default Description;
