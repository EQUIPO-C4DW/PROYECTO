import { createContext, useState,useEffect } from "react";
import Data from "../Data.js";
export const Datacontext = createContext();

export const Dataprovider = (props) => {
    const[dataCarrito,setdatacarrito] = useState([]);
    const [productos,setProductos] = useState([]);
    const [menu,setMenu] = useState(false);
    const [carrito,setCarrito] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(()=>{
        const producto = Data.items
        if (producto){setProductos(producto)}else{setProductos([])}
        
    },[]);


    /* const modificarProducto = (id) => {
        const data = productos.filter(producto => {
            return producto.id === id;
        })
    }
    useEffect(() =>{
		const modificarProducto = JSON.parse(localStorage.getItem('modificarProducto'))
		if(modificarProducto){
			setProductos(modificarProducto)
		}

	},[]) */

    
    const addCarrito = (id) => {
        const check=carrito.every(item  => {
            return item.id !== id;
        })
        if(check){
            const data = productos.filter(producto => {
            return producto.id === id;
            })
            setCarrito([...carrito,...data])
        }else{alert('el producto se ha añadido al carrito')}
    }

    useEffect(() =>{
		const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'))
		if(dataCarrito){
			setCarrito(dataCarrito)
		}
	},[])
    
    useEffect(() =>{
		localStorage.setItem('dataCarrito', JSON.stringify(carrito));
	},[carrito])
 
    useEffect(() =>{
		const getTotal = () =>{
			const res = carrito.reduce((prev, item) =>{
				return prev + (item.price * item.cantidad)
			},0)
			setTotal(res)
		}
		getTotal()
	},[carrito])

    
    const value= {
        productos:[productos],
        dataCarrito:[dataCarrito],
        menu:[menu,setMenu],
        addCarrito:addCarrito,
        // modificarProducto:modificarProducto,
        carrito:[carrito,setCarrito],
        total: [total, setTotal]
        
    }
    return(<Datacontext.Provider value = {value}>
        {props.children}
        </Datacontext.Provider>)
        };
    