import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../Footer/Footer'
import Logo from '../Header/Logo'
import FormularioSesion from '../Sesión/FormularioSesion/FormularioSesion'

export class Registro extends React.Component {
    render() {
        return (
            <div>
                <Logo/>
                <FormularioSesion/>
                <Footer/>
            </div>
        )
    }
}

export default Registro