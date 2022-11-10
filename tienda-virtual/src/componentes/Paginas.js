import React from 'react'
import {Route,Routes} from "react-router-dom";
import {LoginButton } from '../Login';
import {Headeradmin } from './Headeradmin';
import {Header } from './Header';
import {Inicio} from "./Inicio";
import {Inicioadmin } from './Inicioadmin';
import {ProductosLista } from './productos/index';
import {ProductosListaAdmin} from './ProductosAdmin/index';
import { Carrito } from './Carrito';
import { Ventaslista } from './Ventas';

export const Paginas = () => {
  return (
   <section>
    <Routes>
          <Route path="/ventas" element={<Ventaslista/>} />
          <Route path="/" element={<ProductosLista/>} />
          <Route path="/" element={<LoginButton />} />
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Inicio" element={<Header/>} />
          <Route path="/Inicioadmin" element={<Inicioadmin />} />
          <Route path="/Productos" element={<ProductosLista />} />
          <Route path="/Productosadmin" element={<ProductosListaAdmin />}/>
          <Route path="/Productosadmin" element={<Headeradmin/>} />
          <Route path="/Ventas" element={<Ventaslista/>} />
          
          
</Routes>
   </section>
  )
}
