import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import { ThemeProvider } from '@mui/material/styles';


/**Importando theme de la aplicacion */
import { theme } from "./componentes/theme/Theme";
import Header from './componentes/Header/Header';

function App() {
  return (
  <ThemeProvider theme={theme}>
        <Header/>
            
    </ThemeProvider>
  );
}

export default App;
