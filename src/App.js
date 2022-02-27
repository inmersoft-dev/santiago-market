import { ThemeProvider } from '@mui/material/styles';
/* import Home from './views/Home/Home'; */
/* import Article from './componentes/Article/Article'; */



/**Importando theme de la aplicacion */
import { theme } from "./componentes/theme/Theme";

import './App.css';

import Programacion from './views/Programacion/Programacion';

function App() {
  return (
  <ThemeProvider theme={theme}>
       {/*  <Home/>   */}

  {/*       <Article/> */}
            <Programacion/>
           
            
    </ThemeProvider>
  );
}

export default App;
