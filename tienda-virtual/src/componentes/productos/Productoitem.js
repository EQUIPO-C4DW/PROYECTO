import React,{useContext} from 'react'
import {Link } from 'react-router-dom';
import { Datacontext } from '../../context/Dataprovider';
import data from '../../Data';
export const Productoitem = ({
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
    
  
if(stock>0){
  return (
    <div className='producto'>
 <a href='#'>
 <div className='producto_img'>
   <img src={image} alt="title"/>
 </div>
 </a>
 <div className='producto_footer'>
 <h1>{title}</h1>
 <p>{category}</p>
 <p className='price'>${price}</p>
 </div>
 <div className='buttom'>
 <button className='btn'onClick={()=>addCarrito(id)}>
   Añadir al carrito
 </button>
 </div>
 </div>
)
}else{return null}
  
}
