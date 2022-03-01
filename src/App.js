import { ThemeProvider } from '@mui/material/styles';
/* import Home from './views/Home/Home'; */
/* import Article from './componentes/Article/Article'; */

import AboutUS from './views/AboutUs/AboutUS';

/**Importando theme de la aplicacion */
import { theme } from "./componentes/theme/Theme";

import './App.css';

/* import Programacion from './views/Programacion/Programacion'; */

function App() {
  return (
  <ThemeProvider theme={theme}>
       {/*  <Home/>   */}

  {/*       <Article/> */}
           {/*  <Programacion/> */}
            <AboutUS/>
           
            
    </ThemeProvider>
  );
}

export default App;
