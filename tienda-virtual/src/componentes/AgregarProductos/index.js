import React, { useState, useEffect } from 'react'
import Falta from "../../images/Falta.jpg"

export const AgregarProductos = () => {

  const obtenerRegistros = () => {
    var datos = localStorage.getItem("registros");
    if(datos){
      return JSON.parse(datos);
    }else{
      return [];
    }
  }

  const [registros, setRegistros] = useState(obtenerRegistros());

  const [ id,setId] = useState("RandomIdentity")
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [img1, setimg1] = useState({Falta});
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const botonGuardar = (e) => {
    e.preventDefault();
    var miObjeto = {id, title, category,img1,price,stock }
    setRegistros([...registros, miObjeto]);
    limpiarFormulario();
  }

  function botonGuardarSimple(e){
    e.preventDefault();
    var miObjeto = {id, title, category,img1, price , stock }
    setRegistros([...registros, miObjeto]);
    limpiarFormulario();
    alert("Se ha creando un nuevo producto")
  }


  const limpiarFormulario = () => {
    setId("");
    setTitle("");
    setCategory("");
    setimg1("")
    setPrice("");
    setStock("");
    document.getElementById(id).reset();
  }

  useEffect(() => {
    localStorage.setItem("registros", JSON.stringify(registros));
  }, [registros]);


  return (
      <center>
        <div className="container" style={{width:"70%", marginTop:30, padding:200}}>
            <form id={id} onSubmit={botonGuardarSimple}>
                <h1 className='h1'>Agregar Producto</h1>
                <input style={{marginBottom:90,padding:20}} className="form-control form-control-lg" type="text" placeholder="Nombre del producto" onChange={(e)=>setTitle(e.target.value)} />
                <input style={{marginBottom:90,padding:20}} className="form-control form-control-lg" type="text" placeholder="Categoria del Producto" onChange={(e)=>setCategory(e.target.value)} />
                <input style={{marginBottom:90,padding:20}} className="form-control form-control-lg" type="text" placeholder="Precio $ del producto" onChange={(e)=>setPrice(e.target.value)} />
                <input style={{marginBottom:90,padding:20}} className="form-control form-control-lg" type="text" placeholder="Stock" onChange={(e)=>setStock(e.target.value)} />
               

                <button style={{marginBottom:90,padding:20}} className='btn btn-primary btn-dark'>
                    Agregar Producto
                </button>
            </form>
        </div>
    </center>
  )
  console.log(registros)
}

