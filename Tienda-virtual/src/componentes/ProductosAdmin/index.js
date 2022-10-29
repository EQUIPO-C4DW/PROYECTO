import React,{useContext} from 'react';
import { Datacontext } from '../../context/Dataprovider';
import { Productoitemadmin} from './Productoitemadmin';

export const ProductosListaAdmin = () => {

  const value =useContext(Datacontext)
  const [productos]=value.productos

  console.log(productos)
  return (
    <>
    <h1 className='title'>PRODUCTOS</h1>
    <div className='productos'>{
      productos.map(producto => (
        <Productoitemadmin 
      key={producto.id}
      id={producto.id}
      title={producto.title}
      price={producto.price}
      image={producto.image}
      category= {producto.category}
      cantidad={producto.cantidad}
      stock= {producto.stock}
        
        
        
        /> 

      ))
    }
     
      
    </div>
    </>
        

  )
}

