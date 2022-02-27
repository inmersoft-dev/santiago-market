import { ThemeProvider } from '@mui/material/styles';
import Home from './views/Home/Home';
import Article from './componentes/Article/Article';



/**Importando theme de la aplicacion */
import { theme } from "./componentes/theme/Theme";

import './App.css';

function App() {
  return (
  <ThemeProvider theme={theme}>
       {/*  <Home/>   */}

        <Article/>

            
    </ThemeProvider>
  );
}

export default App;
