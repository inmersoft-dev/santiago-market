import { ThemeProvider } from '@mui/material/styles';
/* import Home from './views/Home/Home'; */
/* import Article from './componentes/Article/Article'; */

/* import AboutUS from './views/AboutUs/AboutUS'; */

/**Importando theme de la aplicacion */
import { theme } from "./componentes/theme/Theme";

import './App.css';

/* import Programacion from './views/Programacion/Programacion'; */
/* import CarruselItem from './componentes/Carruseltem/CarruselItem'; */
import CarruselSimple from './componentes/CarruselSimple/CarruselSimple';

function App() {
  return (
  <ThemeProvider theme={theme}>
       {/*  <Home/>   */}

  {/*       <Article/> */}
           {/*  <Programacion/> */}
         {/*    <AboutUS/> */}

        <CarruselSimple/>
           
            
    </ThemeProvider>
  );
}

export default App;
