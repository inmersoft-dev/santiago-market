import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Logo from "./../../assets/logo.svg";
import { Link } from "react-router-dom";
import { dark } from "../../assets/theme/Theme";

import './TemporaryDrawer.css';

export default function TemporaryDrawer({ sections }) {
  const [activeLink, setActiveLink] = useState(0);

  const linkClicked = (e) => {
    const { id } = e.target;
    const reduced = id.substring(1);
    sessionStorage.setItem("active", reduced);
    setActiveLink(Number(reduced));
    return true;
  };

  
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <img className="navbar-left-log2" src={Logo} alt="" />
        <Divider />
        {sections.map(({ id, link }, i) => (
          <ListItem button key={id}>
            <ListItemIcon>
              {i % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            
            <Link
              className={`tempdrawer-link-text ${
                activeLink === i ? "-active-link" : ""
              } `}
              style={{
                color:
                  activeLink === i
                  
                      ? dark.palette.secondary.main
                      : `#fff`
                    ,
              }}
              key={`link${id}`}
              to={link}
              id={`l${i}`}
              onClick={linkClicked}
            >
              {id}
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton
        className="menu-icon"
        size="large"
        aria-label="Logo"
        aria-controls="menu-appbar"
        aria-haspopup="false"
        onClick={toggleDrawer("left", true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </div>
  );
}
