import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header/Header'
import FormularioRegistro from '../Registro/FormularioRegistro/FormularioRegistro'
import Footer from '../Footer/Footer'


export class Registro extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <FormularioRegistro/>
                <Footer/>
            </div>
        )
    }
}

export default Registro