import React from "react";

import "./InscriptionRequest.css";
import Typography from "@mui/material/Typography";

const juridica={titulo:"A. EMPRESAS O PERSONA JURÍDICAS",
contenido:[
  'Los representantes de personas jurídicas que deseen obtener una o varias acreditaciones al Santiago Market deben cumplir con las siguientes condiciones:',
  'Ser persona jurídica cuyo objeto social esté relacionado con la creación, producción, distribución, promoción, venta de contenidos y/o servicios audiovisuales y/o relacionados con el sector cultural.',
  'Para empresas dominicanas: Contar con una existencia mínima legal de dos (2) años y estar matriculada en alguna Cámara de Comercio Republica Dominicana. Deberá adjuntar el certificado de existencia y representación legal con una fecha no mayor a 60 días.',
  'Para empresas extranjeras: Deberá presentar el documento equivalente al certificado de existencia legal de su país.',
  'Demostrar experiencia de la empresa, de acuerdo a su actividad profesional en proyectos u obras relacionados con la industria audiovisual y/o cultural que hayan sido publicados, emitidos, circulados y/o distribuidos en medios y/o espacios comerciales.Para ello, le solicitamos adjuntar documentos, contratos,certificaciones, créditos, entre otros, que permitan verificar su experiencia.',

]};

const natural={titulo:" B. PROFESIONALES O PERSONAS NATURALES",
contenido:[
"Las personas naturales profesionales que deseen obtener una acreditación al Santiago Market deben cumplir con las siguientes condiciones:",
"Ser persona natural cuya trayectoria profesional esté relacionada con la creación, producción, distribución, promoción, venta de contenidos y/o servicios audiovisuales y/o relacionados con el sector cultural.",
"Demostrar experiencia profesional de acuerdo a su actividad en un proyecto u obra relacionada con la industria audiovisual y/o cultural que haya sido publicada, emitida, circulada y/o distribuida en medios y/o espacios comerciales. Para ello, le solicitamos adjuntar documentos, contratos, certificaciones,créditos, entre otros, que permitan verificar su experiencia. Nota: La hoja de vida no certifica la experiencia.",
"No podrán participar las personas naturales o las personas jurídicas que habiendo sido beneficiarios en alguna modalidad de estímulos del Fondo para el Desarrollo Cinematográfico (FDC) hayan incumplido las obligaciones contraídas y/o tengan contratos vencidos sin acta de cruce de cuentas debido a la falta de entrega de soportes o requisitos pactados. Esta restricción también opera si el coproductor, inversionista, donante o cualquier cargo de dirección o producción del proyecto postulado por el concursante está en la situación descrita en este numeral. Por su parte, esta restricción no aplica si quien incurrió en el incumplimiento reintegró al FDC lo exigido contractualmente en dichos casos, y cuenta con acta o acuerdo celebrado con Proimágenes Colombia en donde conste esa situación.",
"En caso de presentar algún comentario o duda, por favor escribir al correo registration@bogotamarket.com"
]
}

const InscriptionRequest = () => {
  return (
    <div className="inscripReq-container">
      <div className="inscripReq-sectionTitle">
        <Typography className="inscripReq-Title" variant="h3" color="#fff">
          REQUISITOS DE INSCRIPCIÓN
        </Typography>
      </div>
      <div className="inscripReq-sectionBody">
        <div className="section-left">
          <div className="section-left-title">
            <Typography className="section-leftTitle" variant="h5" color="#fff">
              {juridica.titulo}
            </Typography>
          </div>

          <div className="section-lefText">
            {
              juridica.contenido.map((text, index)=>(
                <Typography

                key={`juridicatext${index}`}
                className="section-leftText"
                variant="body1"
                color="#fff"
              >
                {text}
              </Typography>
              ))
            }
            
          </div>
        </div>
        <div className="section-right">
          <div className="section-left-title">
            <Typography className="section-leftTitle" variant="h5" color="#fff">
            {natural.titulo}
            </Typography>
          </div>

          <div className="section-leftText">
          {
              natural.contenido.map((text, index)=>(
                <Typography

                key={`naturaltext${index}`}
                className="section-leftText"
                variant="body1"
                color="#fff"
              >
                {text}
              </Typography>
              ))
            }
            
          </div>
        </div>
      </div>
      <div className="inscripReq-sectionFooter">
        <div className="sectionFooter-title">
          <Typography className="section-leftTitle" variant="h5" color="#fff">
            Restricciones relacionadas con el contexto actual y protocolo de
            bioseguridad
          </Typography>
        </div>

        <div className="sectionFooter-text">
          <Typography className="section-leftText" variant="body1" color="#fff">
            La situación actual de salud, derivada de la pandemia generada por
            el COVID-19, nos exige constantes cambios y adaptación, es por esto
            que el Santiago Market deberá implementar medidas que permitan
            desarrollar un evento seguro para todos. Los protocolos que apliquen
            a los eventos presenciales serán comunicados a los participantes
            antes del inicio del Mercado.
          </Typography>
          <Typography className="section-leftText" variant="body1" color="#fff">
            Las fechas de registro serán limitadas al igual que los cupos
            disponibles para las reuniones en nuestras sedes.
          </Typography>
          <Typography className="section-leftText" variant="body1" color="#fff">
            El participante declara que conoce y ha estado al tanto de los
            protocolos de bioseguridad para mitigar, controlar y realizar el
            adecuado manejo de la pandemia de Coronavirus COVID-19 establecidos
            por las autoridades locales. Así mismo, entiende y acepta que es
            obligatorio dar cumplimiento estricto a los mismos según se
            comuniquen previo al inicio del mercado pues de ello depende el
            éxito del evento.
          </Typography>
          
        </div>
      </div>
    </div>
  );
};

export default InscriptionRequest;
