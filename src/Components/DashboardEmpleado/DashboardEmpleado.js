import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../Footer/Footer'
import Logo from '../Header/Logo'
import FormularioDashboardEmpleado from '../DashboardEmpleado/FormularioDashboardEmpleado'

export class Registro extends React.Component {
    render() {
        return (
            <div>
                <Logo/>
                <FormularioDashboardEmpleado/>
                <Footer/>
            </div>
        )
    }
}

export default Registro