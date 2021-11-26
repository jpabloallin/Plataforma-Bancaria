import React from 'react'
import style from './PaginaPrincipal.module.css'
import img from './bank-image.png'

const PaginaPrincipal = () => {
    return (
        <>
        <div className={style.contenedor}>
            <h1 className={style.titulo}>Plataforma Bancaria Bancamia</h1>
            <img src={img} alt="imagen" className={style.imagen} />
        </div>


        </>
    )
}

export default PaginaPrincipal
