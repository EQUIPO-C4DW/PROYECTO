import React,{useContext} from 'react';
import { Datacontext } from '../../context/Dataprovider';
import { Productoitem } from './Productoitem';

export const ProductosLista = () => {

  const value =useContext(Datacontext)
  const [productos]=value.productos

  console.log(productos)
  return (
    <>
    <h1 className='title'>PRODUCTOS</h1>
    <div className='productos'>{
      productos.map(producto => (
        <Productoitem 
      key={producto.id}
      id={producto.id}
      title={producto.title}
      price={producto.price}
      image={producto.image}
      category= {producto.category}
      cantidad={producto.cantidad}
        
        
        
        /> 

      ))
    }
     
      
    </div>
    </>
        

  )
}

