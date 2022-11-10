import React from 'react'
import { Datacontext } from '../../context/Dataprovider';

export const Agregarproductos = () => {
    return(
    <form method='post' action='/productosadmin' style="margin-top:1.5em;">
    <div className='Nuevos productos'>
    <label>Nombre</label>
    <input type= "text" name></input>

    </div>
    </form>

    )
    
}
