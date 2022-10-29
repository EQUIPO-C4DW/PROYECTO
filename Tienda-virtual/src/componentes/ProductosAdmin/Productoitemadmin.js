import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import { Datacontext } from '../../context/Dataprovider';
export const Productoitemadmin = ({
    id,
    title,
    price,
    image,
    category,
    cantidad,
    stock,
}) => {
    const value = useContext(Datacontext);
    const addCarrito = value.addCarrito;

  return (
         <div className='producto'>
      <a href='#'>
      <div className='producto_img'>
        <img src={image} alt="title"/>
      </div>
      </a>
      <div className='producto_footer'>
      <h1>Nombre: {title}</h1>
      <p>Categoria: {category}</p>
      <p className='stock'>Stock: {stock}</p>
      <p className='price'>Precio: ${price}</p>
      </div>
      <div className='buttom'>
      <button className='btn'onClick={()=>addCarrito(id)}>
        Modificar producto
      </button>
      </div>
      </div>
  )
}
