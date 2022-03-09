import { Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Home from "./views/Home/Home";
/* import Article from './componentes/Article/Article'; */

import AboutUS from "./views/AboutUs/AboutUS";

/**Importando theme de la aplicacion */
import { dark } from "./assets/theme/Theme";

import "./App.css";

import Programacion from "./views/Programacion/Programacion";
import ShowCase from "./views/ShowCase/ShowCase";
import Cortografia from "./views/Cortografia/Cortografia";
/* import ScrollToTop from "./hooks/ScrollToTop"; */
function App() {
  return (
    <ThemeProvider theme={dark}>
      {/*       <Article/> */}

      <Routes>
       
          <Route path="/" element={<Home />} />
          <Route path="about" element={<AboutUS />} />
          <Route path="programacion" element={<Programacion />} />
          <Route path="showcase" element={<ShowCase />} />
          <Route path="*" element={<Home />} />
          <Route path="cortografia" element={<Cortografia />} />
        
      </Routes>
    </ThemeProvider>
  );
}

export default App;
