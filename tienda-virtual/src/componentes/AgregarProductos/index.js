import React, { useState, useEffect } from 'react'

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

  const [ id,setId] = useState("uniqueId")
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const botonGuardar = (e) => {
    e.preventDefault();
    var miObjeto = {id, title, category, price , stock }
    setRegistros([...registros, miObjeto]);
    limpiarFormulario();
  }

  function botonGuardarSimple(e){
    e.preventDefault();
    var miObjeto = {id, title, category, price , stock }
    setRegistros([...registros, miObjeto]);
    limpiarFormulario();
  }


  const limpiarFormulario = () => {
    setId("");
    setTitle("");
    setCategory("");
    setPrice("");
    setStock("");
    document.getElementById(id).reset();
  }

  useEffect(() => {
    localStorage.setItem("registros", JSON.stringify(registros));
  }, [registros]);


  return (
      <center>
        <div className="container" style={{width:"70%", marginTop:30, background:"#A8BCFF", padding:200}}>
            <form id={id} onSubmit={botonGuardarSimple}>
                <h1 className='h1'>Agregar Producto</h1>
                <input style={{marginBottom:30}} className="form-control form-control-lg" type="text" placeholder="Nombre del producto" onChange={(e)=>setTitle(e.target.value)} />
                <textarea style={{marginBottom:0}} className="form-control form-control-lg" placeholder="Categoria del producto" onChange={(e)=>setCategory(e.target.value)}>
                </textarea>
                <input style={{marginBottom:30}} className="form-control form-control-lg" type="text" placeholder="Precio $ del producto" onChange={(e)=>setPrice(e.target.value)} />
                <input style={{marginBottom:30}} className="form-control form-control-lg" type="text" placeholder="Stock" onChange={(e)=>setStock(e.target.value)} />
               

                <button className='btn btn-primary btn-lg'>
                    Agregar Producto
                </button>
            </form>
        </div>
    </center>
  )
}

