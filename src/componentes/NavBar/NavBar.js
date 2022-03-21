/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

// mui components
import {
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
/* import Menu from "@mui/material/Menu";

import MenuItem from "@mui/material/MenuItem"; */
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import ListItem from "@mui/material/ListItem";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import { Link, Outlet } from "react-router-dom";

import "./NavBar.css";

import Logo from "./../../assets/logo.svg";
import { dark } from "../../assets/theme/Theme";

const sections = [
  {
    id: "Que es el San",
    link: "/home",
  },
  {
    id: "Santiago Showcase",
    link: "/showcase",
  },
  {
    id: "Programación",
    link: "/programacion",
  },
  {
    id: "Cortografía",
    link: "/cortografia",
  },
  {
    id: "Acreditaciones",
    link: "/about",
  },
  {
    id: "Contacto",
    link: "#aboutUs",
  },
];

export default function NavBar() {
  const [fondo, handleFondo] = useState(false);
  const [activeLink, setActiveLink] = useState(0);

  /* const [anchorElNav, setAnchorElNav] = React.useState(null); */

  const [open, setOpen] = useState("false");

  
  /* const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  }); */

  /* const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  }; */

  //Menu lateral
  const toggleDrawer = (open) => (event) => {
    console.log("Entre al toggleDrawer");
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
    console.log(open);
  };

  /* const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  }; */

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleFondo(true);
    } else {
      handleFondo(false);
    }
  };

  // scroll handler
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  // active setter
  useEffect(() => {
    const result = sessionStorage.getItem("active");

    if (result !== null) setActiveLink(Number(result));
  });

  const linkClicked = (e) => {
    const { id } = e.target;
    const reduced = id.substring(1);
    sessionStorage.setItem("active", reduced);
    setActiveLink(Number(reduced));
    return true;
  };

  const list =()=> (
    <Box
      sx={{
        width: /* anchor === 'top' || anchor === 'bottom' ?  'auto' :*/ 230,
      }}
      role="presentation"
      onClick={toggleDrawer( false)}
      onKeyDown={toggleDrawer( false)}
    >
      <List>
        <img className="navbar-left-log2" src={Logo} alt="" />
        <Divider />
        {sections.map(({ id, link }, i) => (
          <ListItem button key={id}>
            <Divider />
            <ListItemIcon>
              {i % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <Link
              textAlign="center"
              to={link}
              className={`navbar-col-link-text ${
                activeLink === i ? "active-link" : ""
              } `}
              style={{
                color:
                  activeLink === i
                    ? fondo
                      ? dark.palette.secondary.main
                      : dark.palette.primary.main
                    : "",
              }}
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
    <div
      className={`navbar ${fondo && "nav-painted"}`}
      style={{ width: "100%" }}
    >
      <Box
        className="navbar-container"
        sx={{
          px: { md: "40px", xs: "40px", lg: "110px" },
          justifyContent: { xs: "space-between" /* md:"space-between" */ },
        }}
      >
        {/* Section izquierda del la Barra de Navegacion */}
        <div className="navbar-left">
          <Box sx={{ flexGrow: 1, display: { md: "flex", lg: "none" } }}>
            {/*  <React.Fragment > */}
            <IconButton
              className="menu-icon"
              size="large"
              aria-label="Logo"
              aria-controls="menu-appbar"
              aria-haspopup="false"
              /* onClick={handleOpenNavMenu} */
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              open={open?true:false}
              onClose={toggleDrawer(false)}
             /*  onOpen={toggleDrawer(true)} */
            >
              {list}
            </SwipeableDrawer>
            {/*  </React.Fragment> */}
            {/* <React.Fragment >
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment> */}
          </Box>
          <img className="navbar-left-log" src={Logo} alt="" />
        </div>
        {/* Section Central del la Barra de Navegacion */}
        <Box
          className="navbar-center"
          sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}
        >
          {sections.map(({ id, link }, i) => (
            <div className="navbar-center-link" key={`link${i}`}>
              <Link
                className={`navbar-center-link-text ${
                  activeLink === i ? "active-link" : ""
                } `}
                style={{
                  color:
                    activeLink === i
                      ? fondo
                        ? dark.palette.secondary.main
                        : dark.palette.primary.main
                      : "",
                }}
                key={`link${id}`}
                to={link}
                id={`l${i}`}
                onClick={linkClicked}
              >
                {id}
              </Link>
            </div>
          ))}
          <div style={{ width: "10%" }}></div>
        </Box>
        <Outlet />
        {/* Section Derecha del la Barra de Navegacion */}
        <div className="navbar-right">
          <div className="navbar-right-search">
            {/* <input type="text" /> */}
            <SearchIcon fontSize="medium" style={{ color: "#fff" }} />
          </div>
          <Button
            className="navbar-button-right"
            color="primary"
            variant="contained"
          >
            Suscribir
          </Button>
        </div>
      </Box>
    </div>
  );
}
