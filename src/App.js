import './App.css';
/* import NavBar from './componentes/NavBar/NavBar'; */
import { ThemeProvider } from '@mui/material/styles';


/**Importando theme de la aplicacion */
import { theme } from "./componentes/theme/Theme";
import Header from './componentes/Header/Header';
import Carrusel from './componentes/Carrusel/Carrusel';

function App() {
  return (
  <ThemeProvider theme={theme}>
       
        <Header/>
        <Carrusel/>

            
    </ThemeProvider>
  );
}

export default App;
