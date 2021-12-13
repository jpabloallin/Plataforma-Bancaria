import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './Components/Inicio/Layout';
import Registro from './Components/Registro/Registro'
import Sesion from './Components/Sesión/Sesion'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Routes>

            <Route path={'/'} element={<Inicio />} />
            <Route path={'/registro'} element={<Registro />} />
            <Route path={'/sesion'} element={<Sesion />} />

          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
