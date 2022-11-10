import React from 'react'
import Portada from '../../images/inicio.jpg';
import { Link } from 'react-router-dom';

export const Inicioadmin = () => {
    return (
        <div className='inicioadmin'>
            <Link to="/productosadmin">
              <h1>Lista de Productos</h1>
            </Link>
            <Link to="/productosadmin">
              <h1>Modificar Productos</h1>
            </Link>
            <Link to="/agregarproductos">
              <h1>Agregar Productos</h1>
            </Link>
            <Link to="/Ventas">
              <h1>Ventas</h1>
            </Link>
            <img src={Portada} alt='inicio'/>
        </div>
      )
  }
