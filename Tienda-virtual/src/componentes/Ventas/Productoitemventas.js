import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import { Datacontext } from '../../context/Dataprovider';
export const Productoitemventas = ({
    id,
    title,
    price,
    image,
    category,
    cantidad,
    stock,
}) => {
    const value = useContext(Datacontext);

  return (
         <div className='producto'>
      <a href='#'>
      <div className='producto_img'>
        <img src={image} alt="title"/>
      </div>
      </a>
      <div className='producto_footer'>
      <h1>Nombre: {title}</h1>
      <p>cantidad: {cantidad}</p>

      <p className='Total'>Total: ${"TOTAL"}</p>
      </div>
      </div>
  )
}