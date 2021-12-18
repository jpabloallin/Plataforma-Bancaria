import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './Components/Inicio/Layout';
import Registro from './Components/Registro/Registro'
import Sesion from './Components/Sesión/Sesion'
import DashAdmin from './Components/DashAdmin/Layout'
import DashCli from './Components/DashCli/Layout'
import DashEmp from './Components/DashEmploy/Layout'
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Routes>

            <Route path={'/'} element={<Inicio />} />
            <Route path={'/registro'} element={<Registro />} />
            <Route path={'/sesion'} element={<Sesion />} />
            <Route path={'/dashadmin'} element={<DashAdmin />} />
            <Route path={'/dashcli'} element={<DashCli/>} />
            <Route path={'/dashemp'} element={<DashEmp/>} />
            
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
