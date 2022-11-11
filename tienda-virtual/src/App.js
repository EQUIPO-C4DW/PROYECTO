import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./Login";
import { LogoutButton } from "./Logout";
import { Profile } from "./Profile";
import React from "react";
import {Header} from "./componentes/Header";
import 'boxicons';
import {BrowserRouter as Router} from "react-router-dom";
import {Paginas} from "./componentes/Paginas";
import {Dataprovider} from "./context/Dataprovider";
import {Carrito} from "./componentes/Carrito";
import { ProductosLista } from "./componentes/productos";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <Dataprovider>
      <div className="App">
      <Router>

      <Header/>
      <Carrito/>
      <Paginas />
          


      </Router>
    </div>
    </Dataprovider>
   
  )}


export default App;
