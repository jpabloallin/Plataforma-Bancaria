import React from 'react'
import style from './BotonesPrincipales.module.css'
import {Link} from 'react-router-dom'

const BotonesPrincipales = () => {
    return (
        <>
        <div className={style.contenedor}>
            <div className={style.contenedorEnlace}>
            <Link to="/registro" className={style.a}>Registro de cuenta</Link>
            </div>
            <div className={style.contenedorEnlace}>
            <Link to="/inicio" className={style.b}>Inicio de Sesión</Link>
            </div>
        </div>    
        </>
    )
}

export default BotonesPrincipales
