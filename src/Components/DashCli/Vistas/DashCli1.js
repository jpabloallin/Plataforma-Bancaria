import React from "react";
import ReactDOM from "react-dom";
import Home from "./home.png";
import { Link } from "react-router-dom";

export class DashCli1 extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-4">
            <div class="row">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modalSolicitarCuenta"
              >
                Solicitar Cuenta
              </button>

              <div class="modal fade" id="modalSolicitarCuenta" tabindex="-1">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Solicitar Cuenta
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <h6>Monto para Abrir Cuenta</h6>
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Monto para Abrir Cuenta"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <h6>Mis Cuentas</h6>
            </div>

            <div class="row">
              <div class="col-8">
                <div class="row">
                  <p>Cuenta No. XXXXXXXXX-X</p>
                </div>
                <div class="row">
                  <h3>$1.000.000</h3>
                </div>
              </div>
              <div class="col-4">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#modalEliminarCuenta"
                >
                  X
                </button>

                <div class="modal fade" id="modalEliminarCuenta" tabindex="-1">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Eliminar Cuenta
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <div class="row">
                          <div class="col-6">
                            <button
                              type="button"
                              class="btn-success"
                              data-bs-dismiss="modal"
                            >
                              Confirmar
                            </button>
                          </div>
                          <div class="col-6">
                            <button
                              type="button"
                              class="btn-danger"
                              data-bs-dismiss="modal"
                            >
                              Cancelar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-8">
                <div class="row">
                  <p>Cuenta No. XXXXXXXXX-X</p>
                </div>
                <div class="row">
                  <h3>$1.000.000</h3>
                </div>
              </div>
              <div class="col-4">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#modalEliminarCuenta"
                >
                  X
                </button>

                <div class="modal fade" id="modalEliminarCuenta" tabindex="-1">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Eliminar Cuenta
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <div class="row">
                          <div class="col-6">
                            <button
                              type="button"
                              class="btn-success"
                              data-bs-dismiss="modal"
                            >
                              Confirmar
                            </button>
                          </div>
                          <div class="col-6">
                            <button
                              type="button"
                              class="btn-danger"
                              data-bs-dismiss="modal"
                            >
                              Cancelar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-8">
                <div class="row">
                  <p>Cuenta No. XXXXXXXXX-X</p>
                </div>
                <div class="row">
                  <h3>$1.000.000</h3>
                </div>
              </div>
              <div class="col-4">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#modalEliminarCuenta"
                >
                  X
                </button>

                <div class="modal fade" id="modalEliminarCuenta" tabindex="-1">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Eliminar Cuenta
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <div class="row">
                          <div class="col-6">
                            <button
                              type="button"
                              class="btn-success"
                              data-bs-dismiss="modal"
                            >
                              Confirmar
                            </button>
                          </div>
                          <div class="col-6">
                            <button
                              type="button"
                              class="btn-danger"
                              data-bs-dismiss="modal"
                            >
                              Cancelar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-8">
            <div class="row">
              <h6>Mis Transacciones</h6>
            </div>

            <div class="row">
              <h6>Transferir</h6>
            </div>

            <div class="row">
              <div class="col-3">
                <p>Seleccione Cuenta Origen</p>
              </div>
              <div class="col-3">
                <p>Seleccione Cuenta Destino</p>
              </div>
              <div class="col-3">
                <p>Ingrese Monto a Transferir</p>
              </div>
              <div class="col-3"></div>

              <div class="row">
                <div class="col-3">
                  <select
                    class="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                  >
                    <option selected>Cuenta No. XXXXXXXXX-X</option>
                    <option value="1">Cuenta No. XXXXXXXXX-X</option>
                  </select>
                </div>
                <div class="col-3">
                  <select
                    class="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                  >
                    <option selected>Cuenta No. XXXXXXXXX-X</option>
                    <option value="1">Cuenta No. XXXXXXXXX-X</option>
                  </select>
                </div>
                <div class="col-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Monto a Transferir"
                  />
                </div>
                <div class="col-3">
                  <button type="button" class="btn btn-primary">
                    Transferir
                  </button>
                </div>
              </div>

              <div class="row">
                <h6>Generar Extracto</h6>
              </div>

              <div class="row">
                <div class="col-3">
                  <p>Seleccione Cuenta</p>
                </div>
                <div class="col-3">
                  <p>Seleccione Fecha Inicial</p>
                </div>
                <div class="col-3">
                  <p>Seleccione Fecha Final</p>
                </div>
                <div class="col-3"></div>
              </div>

              <div class="row">
                <div class="col-3">
                  <select
                    class="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                  >
                    <option selected>Cuenta No. XXXXXXXXX-X</option>
                    <option value="1">Cuenta No. XXXXXXXXX-X</option>
                  </select>
                </div>
                <div class="col-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Fecha Inicial"
                  />
                </div>
                <div class="col-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Fecha Final"
                  />
                </div>
                <div class="col-3">
                  <button type="button" class="btn btn-primary">
                    Generar Extracto
                  </button>
                </div>
              </div>

              <div class="row">
                <h6>Realizar Reclamo</h6>
              </div>

              <div class="row">
                <div class="col-4">
                  <p>Seleccione Producto Reclamo</p>
                </div>
                <div class="col-4">
                  <p></p>
                </div>
                <div class="col-4">
                  <p></p>
                </div>
              </div>

              <div class="row">
                <div class="col-4">
                  <select
                    class="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                  >
                    <option selected>Cuenta No. XXXXXXXXX-X</option>
                    <option value="1">Cuenta No. XXXXXXXXX-X</option>
                  </select>
                </div>
                <div class="col-4">
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#modalIniciarReclamo"
                  >
                    Iniciar Reclamo
                  </button>

                  <div
                    class="modal fade"
                    id="modalIniciarReclamo"
                    tabindex="-1"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Crear Reclamo
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <h6>Escriba un Mensaje</h6>
                          <div class="form-floating">
                            <textarea
                              class="form-control"
                              placeholder="Leave a comment here"
                              id="floatingTextarea2"
                             
                            ></textarea>
                            <label for="floatingTextarea2">Comentario</label>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Cerrar
                            </button>
                            <button type="button" class="btn btn-primary">
                              Radicar Reclamo
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-4"></div>
              </div>

              <div class="row">
                <h6>Mis Reclamos</h6>
              </div>

              <div>
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">No. Radicado Reclamo</th>
                      <th scope="col">Respuesta Banco</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">101</th>
                      <td>Text text text</td>
                    </tr>
                    <tr>
                      <th scope="row">102</th>
                      <td>Text text text</td>
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

export default DashCli1;