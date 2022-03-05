/* import { Routes, Route, Link } from "react-router-dom"; */
import { ThemeProvider } from "@mui/material/styles";
/* import Home from "./views/Home/Home"; */
/* import Article from './componentes/Article/Article'; */

/* import AboutUS from "./views/AboutUs/AboutUS"; */

/**Importando theme de la aplicacion */
import { theme } from "./componentes/theme/Theme";

import "./App.css";

/* import Programacion from './views/Programacion/Programacion'; */
import ShowCase from "./views/ShowCase/ShowCase";


function App() {
  return (
    <ThemeProvider theme={theme}>
      {/*       <Article/> */}
      
      
      {/* <Routes> */}
        {/* <Route  path="/" element={<Home />} />
        <Route  path="about" element={<AboutUS />} />        
        <Route  path="programacion" element={<Programacion/>} />
        <Route path="*" element={<Home />} /> */}
        <ShowCase/>
      {/* </Routes> */}
    </ThemeProvider>
  );
}

export default App;
