import logo from './logo.svg';
import './App.css';
import PaginaPrincipal from './Components/PaginaPrincipal';
import BotonesPrincipales from './Components/BotonesPaginaPrincipal'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <PaginaPrincipal/>
    <BotonesPrincipales/>
    </BrowserRouter>
  );
}

export default App;
