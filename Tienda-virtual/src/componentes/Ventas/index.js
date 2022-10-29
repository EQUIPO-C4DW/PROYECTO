import React,{useContext} from 'react';
import { Datacontext } from '../../context/Dataprovider';
import { Carrito } from '../Carrito';
import { Productoitemventas } from './Productoitemventas';

export const Ventaslista = () => {

  const value =useContext(Datacontext)
  const dataCarrito=value.dataCarrito

  console.log(dataCarrito)
 /*  return (
    <>
    <h1 className='title'>PRODUCTOS</h1>
    <div className='productos'>{
      Carrito.map(Carrito => (
        <Productoitemventas 
      key={Carrito.id}
      id={Carrito.id}
      title={Carrito.title}
      price={Carrito.price}
      image={Carrito.image}
      category= {Carrito.category}
      cantidad={Carrito.cantidad}
      stock= {Carrito.stock}
        
        
        
        /> 

      ))
    }
     
      
    </div>
    </>
        

  ) */
}

