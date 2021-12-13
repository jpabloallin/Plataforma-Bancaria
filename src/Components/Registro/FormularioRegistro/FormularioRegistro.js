import React from 'react';
import Home from './home.png'
import { Link } from 'react-router-dom'

class FormularioRegistro extends React.Component {

    render() {

        return (

            <div class="container" id="homeImg">
                <div class="row">

                    <div class="col-7">

                        <div class="row">
                            <p>Nombre Completo</p>
                        </div>
                        <div class="row">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Nombre Completo" />
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-2">
                                <p>Tipo Doc.</p>
                            </div>
                            <div class="col-5">
                                <p>No. de Documento</p>
                            </div>
                            <div class="col-5">
                                <p>Fecha de Expedición</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-2">
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>CC</option>
                                    <option value="1">CE</option>
                                </select>
                            </div>
                            <div class="col-5">
                                <input type="text" class="form-control" placeholder="No. de Documento" />
                            </div>
                            <div class="col-5">
                                <input type="text" class="form-control" placeholder="Fecha de Expedición" />
                            </div>
                        </div>

                        <div class="row">
                            <p>Fecha de Nacimiento</p>
                        </div>
                        <div class="row">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Fecha de Nacimiento" />
                            </div>
                        </div>

                        <div class="row">
                            <p>Dirección de Correo Electrónico</p>
                        </div>
                        <div class="row">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Dirección de Correo Electrónico" />
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-6">
                                <p>Dirección de Residencia</p>
                            </div>
                            <div class="col-6">
                                <p>Ciudad de Residencia</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-6">
                                <input type="text" class="form-control" placeholder="Dirección de Residencia" />
                            </div>
                            <div class="col-6">
                                <input type="text" class="form-control" placeholder="Ciudad de Residencia" />
                            </div>
                        </div>

                        <div class="row">
                            <p>Contraseña</p>
                        </div>
                        <div class="row">
                            <div class="input-group mb-3">
                                <input type="password" class="form-control" placeholder="Contraseña" />
                            </div>
                        </div>

                        <button type="button" class="btn btn-primary">Crear Usuario</button>
                    </div>

                    <div class="col-5">
                        <img src={Home} alt="home" />
                    </div>

                </div>
            </div>

        )
    }
}
export default FormularioRegistro