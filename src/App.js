import './App.css';
/* import NavBar from './componentes/NavBar/NavBar'; */
import { ThemeProvider } from '@mui/material/styles';


/**Importando theme de la aplicacion */
import { theme } from "./componentes/theme/Theme";
import Header from './componentes/Header/Header';
import Carrusel from './componentes/Carrusel/Carrusel';
import AboutUs from './componentes/AboutUs/AboutUs';
import ContactUs from './componentes/ContactUs/ContactUs';

function App() {
  return (
  <ThemeProvider theme={theme}>
       
        <Header/>
        <Carrusel/>
        <AboutUs/>
        <ContactUs/>

            
    </ThemeProvider>
  );
}

export default App;
