import React from 'react'
import Portada from '../../images/inicio.jpg';
import { Link } from 'react-router-dom';

export const Inicio = () => {
  return (
    <div className='inicio'>
        <Link to="/productos">
          <h1>Lista de Productos</h1>
        </Link>
        
        <img src={Portada} alt='inicio'/>
    </div>
  )
}
