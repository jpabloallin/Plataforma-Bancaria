import React from 'react';
import ReactDOM from 'react-dom';
import Logo from '../logo.png'
import { Link } from 'react-router-dom'

export class Header extends React.Component {
    render() {
        return (
            <div>
                <div class="container">
                    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                        <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                            <img src={Logo} alt="logo" width="80" height="80" />
                        </a>
                        <div class="col-md-3 text-end">
                            <div>
                            <Link to={'/'}><button type="button" class="btn btn-primary">Cerrar Sesión</button></Link>
                            </div>
                        </div>
                    </header>
                </div>
            </div>

        )
    }
}

export default Header