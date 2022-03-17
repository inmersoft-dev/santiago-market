import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SvgIcon from "@mui/material/SvgIcon";

import { Fab, Action } from "react-tiny-fab";

/**Importando Estilo CSS */
import "./Icons.css";
import "react-tiny-fab/dist/styles.css";

const socialNet = [
  TwitterIcon,
  FacebookOutlinedIcon,
  EmailIcon,
  InstagramIcon,
  WhatsAppIcon,
];

function Icons({ color }) {

  return (
    <>
      
      <div className="socialNetwork">
        <Fab alwaysShowTitle={false} icon="+" style={{ bottom: 24, right: 0 }}>
          {socialNet.map((item, index) => {
            return (
              <Action
                onClick={() => console.log("fire")}
                key={`social${index}`}
                style={{ backgroundColor: "#DD1A1E" }}
              >
                <SvgIcon
                  className="socialNetwork-icon"
                  component={item}
                  fontSize="medium"
                  sx={{ color: { color } }}
                />
              </Action>
            );
          })}
        </Fab>
      </div>
    </>
  );
}

export default Icons;
