import React from 'react'
import {Route,Routes} from "react-router-dom";
import {Inicio} from "./Inicio";
import { ProductosLista } from './productos/index';

export const Paginas = () => {
  return (
   <section>
    <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Productos" element={<ProductosLista />} />
</Routes>
   </section>
  )
}
