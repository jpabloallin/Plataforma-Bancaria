import React from "react";
import ReactDOM from "react-dom";
import Home from "./home.png";
import { Link } from "react-router-dom";

export class DashAdm1 extends React.Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="row">
                <div class="col-4">
                  <h6>Usuarios Plataforma</h6>
                </div>
                <div class="col-4">
                  <button type="button" class="btn btn-primary">
                    Crear Usuario
                  </button>
                </div>
                <div class="col-4">
                  <a href="dashboard-empleado.html">
                    <button type="button" class="btn btn-primary">
                      Gestionar Productos
                    </button>
                  </a>
                </div>
              </div>

              <div class="row">
                <h6>Empleados Banco</h6>
              </div>

              <div>
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Nombre Completo</th>
                      <th scope="col">Usuario</th>
                      <th scope="col">Contraseña</th>
                      <th scope="col">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Text text text</td>
                      <td>Text text text</td>
                      <td>Text text text</td>
                      <td>
                        <button type="button" class="btn btn-danger">
                          Eliminar
                        </button>
                      </td>
                      <td>
                        <button type="button" class="btn btn-warning">
                          Editar
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Text text text</td>
                      <td>Text text text</td>
                      <td>Text text text</td>
                      <td>
                        <button type="button" class="btn btn-danger">
                          Eliminar
                        </button>
                      </td>
                      <td>
                        <button type="button" class="btn btn-warning">
                          Editar
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="row">
                <h6>Clientes Banco</h6>
              </div>

              <div>
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Nombre Completo</th>
                      <th scope="col">Usuario</th>
                      <th scope="col">Contraseña</th>
                      <th scope="col">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Text text text</td>
                      <td>Text text text</td>
                      <td>Text text text</td>
                      <td>
                        <button type="button" class="btn btn-danger">
                          Eliminar
                        </button>
                      </td>
                      <td>
                        <button type="button" class="btn btn-warning">
                          Editar
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Text text text</td>
                      <td>Text text text</td>
                      <td>Text text text</td>
                      <td>
                        <button type="button" class="btn btn-danger">
                          Eliminar
                        </button>
                      </td>
                      <td>
                        <button type="button" class="btn btn-warning">
                          Editar
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashAdm1;
