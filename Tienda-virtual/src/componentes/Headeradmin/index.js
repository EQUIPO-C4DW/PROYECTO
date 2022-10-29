import React,{useContext} from 'react'
import Nikes from "../../images/Nikes.jpg";
import{Link} from "react-router-dom";
import { Datacontext } from '../../context/Dataprovider';


export const Headeradmin = () => {
  const value = useContext(Datacontext);
  const [menu,setMenu] = value.menu;
  const tooglemenu = () => {
    setMenu(!menu)
  }
  
  return (
    <header>
      <Link to='/inicioadmin'>
        <div className="logo"> 
        <img src={Nikes} alt="logo" width="150"/>
        </div>
      </Link>
<ul>
<li>
  <Link to='/productosadmin'> LISTA DE PRODUCTOS</Link>
  </li>
  <li>
<Link to='/inicioadmin'>MODIFICAR PRODUCTOS</Link>
  </li>
  <li>
  <Link to='/Ventasadmin'> VENTAS</Link>
  </li>
</ul>
<div className='cart' onClick={tooglemenu}>
  <box-icon name= "cart">0</box-icon>
</div>
    </header>
  )
}
