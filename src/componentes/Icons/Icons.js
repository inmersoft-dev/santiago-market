import React from "react";

// @mui icons
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// @mui components
import { SvgIcon, Link } from "@mui/material";

import { Fab, Action } from "react-tiny-fab";

/**Importando Estilo CSS */
import "./Icons.css";
import "react-tiny-fab/dist/styles.css";

const socialNet = [
  { component: TwitterIcon, link: "https://twitter.com/cineserviceg" },
  {
    component: FacebookOutlinedIcon,
    link: "https://www.facebook.com/Cine-Service-Group-131315229117003",
  },
  { component: EmailIcon, link: "mailto:cineserviceg@gmail.com" },
  {
    component: InstagramIcon,
    link: "https://www.instagram.com/cineservicegroup/",
  },
  { component: WhatsAppIcon, link: "https://wa.me/+18292846343" },
];

function Icons({ color }) {
  return (
    <>
      <div className="socialNetwork">
        <Fab alwaysShowTitle={false} icon="+" style={{ bottom: 24, right: 0 }}>
          {socialNet.map((item, index) => {
            return (
              <Action
                onClick={() => {}}
                key={`social${index}`}
                style={{ backgroundColor: "#DD1A1E" }}
              >
                <Link href={item.link} target="_blank" rel="noopener">
                  <SvgIcon
                    className="socialNetwork-icon"
                    component={item.component}
                    fontSize="medium"
                    sx={{ color: { color } }}
                  />
                </Link>
              </Action>
            );
          })}
        </Fab>
      </div>
    </>
  );
}

export default Icons;
