import React,{useContext} from 'react'
import Nike from "../../images/Nike.jpg";
import{Link} from "react-router-dom";
import { Datacontext } from '../../context/Dataprovider';


export const Header = () => {
  const value = useContext(Datacontext);
  const [menu,setMenu] = value.menu;
const[carrito] = value.carrito;

  const tooglemenu = () => {
    setMenu(!menu)
  }

  return (
    <header>
      <Link to='/inicio'>
        <div className="logo"> 
        <img src={Nike} alt="logo" width="150"/>
        </div>
      </Link>
<ul>
  <li>
<Link to='/inicio'>Cliente</Link>
  </li>
  <li>
<Link to='/inicioadmin'>Administrador</Link>
  </li>
</ul>
<div className='cart' onClick={tooglemenu}>
  <box-icon name= "cart"></box-icon>
  <span className="item_total">{carrito.length}</span>
</div>
    </header>
  )
}
