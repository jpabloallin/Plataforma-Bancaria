import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home.png'
import { Link } from 'react-router-dom'

export class FormularioSesion extends React.Component {
    render() {
        return (
            <div>
                <div class="container" id="homeImg">
                    <div class="row">

                        <div class="col-7">

                            <div class="row">
                                <p>Número de Documento</p>
                            </div>
                            <div class="row">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Número de Documento"/>
                                </div>
                            </div>

                            <div class="row">
                                <p>Contraseña</p>
                            </div>
                            <div class="row">
                                <div class="input-group mb-3">
                                    <input type="password" class="form-control" placeholder="Contraseña"/>
                                </div>
                            </div>

                            <button type="button" class="btn btn-primary">Iniciar Sesión</button>

                        </div>

                        <div class="col-5">
                            <img src={Home} alt="home" />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default FormularioSesion