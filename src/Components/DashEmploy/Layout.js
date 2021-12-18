import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../Footer/Footer'
import Logo from '../Header/HeaderIni'
import Form from '../DashEmploy/Vistas/DashEmploy1'

export class Layout extends React.Component {
    render() {
        return (
            <div>
                <Logo/>
                <Form/>
                <Footer/>
            </div>
        )
    }
}

export default Layout