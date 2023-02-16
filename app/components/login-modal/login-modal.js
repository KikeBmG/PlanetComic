import { LitElement, html } from 'lit';
import styles from './login-modal-styles.js';

export class LoginModal extends LitElement {
  static get is() {
    return 'login-modal';
  }

  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      name: {
        type: String
      }
    };
  }

  constructor() {
    super();
    this.name = 'Somebody';
  }

  render() {
    return html`
      <div class="modal fade" id="modalIniciarSesion" role="dialog">
        <div class="modal-dialog">
          <!-- Modal content-->
          <div class="modal-content bg-secondary-blue-100 texto-blanco">
            <div class="modal-header">
              <h4 class="modal-title">Iniciar Sesión</h4>
              <button type="button" class="close texto-blanco" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <!-- Modal body-->
            <form class="form-horizontal" role="form" action="php/validarSesion.php" method="post">
              <div class="modal-body">
                <div class="form-group">
                  <label class="col-sm-2 control-label" for="inputUsuarioI">Usuario</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control input-index bg-secondary-blue-200 texto-blanco border-primary-blue-100" id="usuarioI" name="usuarioI"
                      placeholder="Nombre de Usuario" required />
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label" for="inputContraseniaI">Contraseña</label>
                  <div class="col-sm-10">
                    <input type="password" class="form-control input-index bg-secondary-blue-200 texto-blanco border-primary-blue-100" id="contraseniaI"
                      name="contraseniaI" placeholder="Contraseña" required />
                  </div>
                </div>
              </div>
              <!-- Modal footer-->
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                <button type="submit" class="btn btn-primary">Aceptar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define(LoginModal.is, LoginModal);