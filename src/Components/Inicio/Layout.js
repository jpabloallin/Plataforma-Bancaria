import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Home from '../home.png'
import { Link } from "react-router-dom";

export class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div class="container" id="homeImg">
                    <div class="row">
                        <div class="col-7">
                            <p class="h4">Sencillo. Transparente. Seguro.</p>
                            <p class="h1">Soluciones BancaMía</p>
                            <p>Productos y servicios diseñados para ayudarlo a alcanzar sus metas financieras.</p>
                            <div>
                            <Link to={'/registro'}><button type="button" class="btn btn-primary">Crear Usuario</button></Link>
                            </div>
                        </div>
                        <div class="col-4">
                            <img src={Home} alt="home" />
                        </div>
                        <div class="col-1">
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Layout