import React from "react";
import ReactDOM from "react-dom";
import Home from "./home.png";
import { Link } from "react-router-dom";

export class DashEmploy1 extends React.Component {
  render() {
    return (


      
          <div class="container">
      
              <div class="row">
      
                  <div class="col-12">
      
                      <div class="row">
                          <h6>Productos</h6>
                      </div>
      
                      <div class="row">
                          <h6>Productos Activos</h6>
                      </div>
      
                      <div class="row">
                          <table class="table table-striped">
                              <thead>
                                  <tr>
                                      <th scope="col">No. Cuenta</th>
                                      <th scope="col">Monto Disponible</th>
                                      <th scope="col">Propietario</th>
                                      <th scope="col">Acciones</th>
                                  </tr>
                              </thead>
                              <tbody>
                              <tr>
                                      <td>Cuenta No. XXXXXXXXX-X</td>
                                      <td>$1.000.000</td>
                                      <td>Nombres Apellidos</td>
                                      <td><button type="button" class="btn btn-danger">Cancelar Producto</button></td>
                                  </tr>
                                  <tr>
                                      <td>Cuenta No. XXXXXXXXX-X</td>
                                      <td>$1.000.000</td>
                                      <td>Nombres Apellidos</td>
                                      <td><button type="button" class="btn btn-danger">Cancelar Producto</button></td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
      
                      <div class="row">
                          <h6>Productos Cancelados</h6>
                      </div>
      
                      <div class="row">
                          <table class="table table-striped">
                              <thead>
                                  <tr>
                                      <th scope="col">No. Cuenta</th>
                                      <th scope="col">Monto Disponible</th>
                                      <th scope="col">Propietario</th>
                                      <th scope="col">Acciones</th>
                                  </tr>
                              </thead>
                              <tbody>
                              <tr>
                                      <td>Cuenta No. XXXXXXXXX-X</td>
                                      <td>$1.000.000</td>
                                      <td>Nombres Apellidos</td>
                                      <td><button type="button" class="btn btn-warning">Reactivar Producto</button></td>
                                  </tr>
                                  <tr>
                                      <td>Cuenta No. XXXXXXXXX-X</td>
                                      <td>$1.000.000</td>
                                      <td>Nombres Apellidos</td>
                                      <td><button type="button" class="btn btn-warning">Reactivar  Producto</button></td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
      
                      <div class="row">
                          <h6>Solicitudes Pendientes por Activar</h6>
                      </div>
      
                      <div class="row">
                          <table class="table table-striped">
                              <thead>
                                  <tr>
                                      <th scope="col">No. Cuenta</th>
                                      <th scope="col">Monto Disponible</th>
                                      <th scope="col">Propietario</th>
                                      <th scope="col">Acciones</th>
                                  </tr>
                              </thead>
                              <tbody>
                              <tr>
                                      <td>Cuenta No. XXXXXXXXX-X</td>
                                      <td>$1.000.000</td>
                                      <td>Nombres Apellidos</td>
                                      <td><button type="button" class="btn btn-success">Activar Producto</button></td>
                                  </tr>
                                  <tr>
                                      <td>Cuenta No. XXXXXXXXX-X</td>
                                      <td>$1.000.000</td>
                                      <td>Nombres Apellidos</td>
                                      <td><button type="button" class="btn btn-success">Activar  Producto</button></td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
      
                      <div class="row">
                          <h6>Consignaciones</h6>
                      </div>
      
                      <div class="row">
                          <div class="col-4">
                              <p>Seleccione Cuenta Destino</p>
                          </div>
                          <div class="col-4">
                              <p>Ingrese Monto a Consignar</p>
                          </div>
                          <div class="col-4">
                              <p></p>
                          </div>
                      </div>
      
                      <div class="row">
                          <div class="col-4">
                              <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                  <option selected>Cuenta No. XXXXXXXXX-X</option>
                                  <option value="1">Cuenta No. XXXXXXXXX-X</option>
                              </select>
                          </div>
                          <div class="col-4">
                              <input type="text" class="form-control" placeholder="Monto a Consignar"/>
                          </div>
                          <div class="col-4">
                              <button type="button" class="btn btn-primary">Ejecutar Consignación</button>
                          </div>
                      </div>
      
                      <div class="row">
                          <h6>Reclamos</h6>
                      </div>
      
                      <div>
                          <table class="table table-striped">
                              <thead>
                                  <tr>
                                      <th scope="col">No. Radicado Reclamo</th>
                                      <th scope="col">Mensaje Reclamo</th>
                                      <th scope="col">Producto Reclamo</th>
                                      <th scope="col">Propietario Producto</th>
                                      <th scope="col">Acciones</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td>Text text text</td>
                                      <td>Text text text</td>
                                      <td>Text text text</td>
                                      <td>Text text text</td>
                                      <td><button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalSatisfactorio1">Satisfactorio</button></td>
                                      <td><button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalNoSatisfactorio1">No satisfactorio</button></td>
                                      
                                      <div class="modal fade" id="modalSatisfactorio1" tabindex="-1">
                                          <div class="modal-dialog">
                                              <div class="modal-content">
                                                  <div class="modal-header">
                                                      <h5 class="modal-title" id="exampleModalLabel">Respuesta Reclamo Satisfactorio</h5>
                                                      <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                                  </div>
                                                  <div class="modal-body">
                                                      <h6>Escriba un Mensaje</h6>
                                                      <div class="form-floating">
                                                          <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
                                                          <label for="floatingTextarea2">Comentario</label>
                                                      </div>
                                                      <h6>Monto a Devolver</h6>
                                                      <div class="input-group flex-nowrap">
                                                          <input type="text" class="form-control" placeholder="Monto a Devolver"/>
                                                      </div>
                                                      <h6>Selecciones Cuenta Destino</h6>
                                                      <div>
                                                          <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                                              <option selected>Cuenta No. XXXXXXXXX-X</option>
                                                              <option value="1">Cuenta No. XXXXXXXXX-X</option>
                                                          </select>
                                                      </div>
                                                      <div class="modal-footer">
                                                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                                          <button type="button" class="btn btn-primary">Responder Reclamo</button>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      
                                      <div class="modal fade" id="modalNoSatisfactorio1" tabindex="-1">
                                          <div class="modal-dialog">
                                              <div class="modal-content">
                                                  <div class="modal-header">
                                                      <h5 class="modal-title" id="exampleModalLabel">Respuesta Reclamo No Satisfactorio</h5>
                                                      <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                                  </div>
                                                  <div class="modal-body">
                                                      <h6>Escriba un Mensaje</h6>
                                                      <div class="form-floating">
                                                          <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
                                                          <label for="floatingTextarea2">Comentario</label>
                                                      </div>
                                                      <div class="modal-footer">
                                                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                                          <button type="button" class="btn btn-primary">Responder Reclamo</button>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </tr>
                                  <tr>
                                      <td>Text text text</td>
                                      <td>Text text text</td>
                                      <td>Text text text</td>
                                      <td>Text text text</td>
                                      <td><button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalSatisfactorio2">Satisfactorio</button></td>
                                      <td><button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalNoSatisfactorio2">No satisfactorio</button></td>
                                     
                                      <div class="modal fade" id="modalSatisfactorio2" tabindex="-1">
                                          <div class="modal-dialog">
                                              <div class="modal-content">
                                                  <div class="modal-header">
                                                      <h5 class="modal-title" id="exampleModalLabel">Respuesta Reclamo Satisfactorio</h5>
                                                      <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                                  </div>
                                                  <div class="modal-body">
                                                      <h6>Escriba un Mensaje</h6>
                                                      <div class="form-floating">
                                                          <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
                                                          <label for="floatingTextarea2">Comentario</label>
                                                      </div>
                                                      <h6>Monto a Devolver</h6>
                                                      <div class="input-group flex-nowrap">
                                                          <input type="text" class="form-control" placeholder="Monto a Devolver"/>
                                                      </div>
                                                      <h6>Selecciones Cuenta Destino</h6>
                                                      <div>
                                                          <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                                              <option selected>Cuenta No. XXXXXXXXX-X</option>
                                                              <option value="1">Cuenta No. XXXXXXXXX-X</option>
                                                          </select>
                                                      </div>
                                                      <div class="modal-footer">
                                                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                                          <button type="button" class="btn btn-primary">Responder Reclamo</button>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                     
                                      <div class="modal fade" id="modalNoSatisfactorio2" tabindex="-1">
                                          <div class="modal-dialog">
                                              <div class="modal-content">
                                                  <div class="modal-header">
                                                      <h5 class="modal-title" id="exampleModalLabel">Respuesta Reclamo No Satisfactorio</h5>
                                                      <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                                  </div>
                                                  <div class="modal-body">
                                                      <h6>Escriba un Mensaje</h6>
                                                      <div class="form-floating">
                                                          <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
                                                          <label for="floatingTextarea2">Comentario</label>
                                                      </div>
                                                      <div class="modal-footer">
                                                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                                          <button type="button" class="btn btn-primary">Responder Reclamo</button>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
      
                  </div>
      
              </div>
      
          </div>
      


    );
  }
}

export default DashEmploy1;
