import React from "react";
import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'

import Index from "./pages/Index";
import Login from "./pages/Login";
import SobreNosotros from "./pages/SobreNosotros";
import Contactenos from "./pages/Contactenos";
import Productos from "./pages/Productos";
import Registro from "./pages/Registro";
import Perfil from "./pages/Perfil";
import Salas from "./pages/productos/Salas";

import Comedores from "./pages/productos/Comedores";
import Cocinas from "./pages/productos/Cocinas";
import Baños from "./pages/productos/Baños";
import Armarios from "./pages/productos/Armarios";
import Escritorios from "./pages/productos/Escritorios";
import Cunas from "./pages/productos/Cunas";
import muebles from "./pages/productos/Muebles";

import Editar from "./pages/Editar";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Index}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/sobreNosotros" exact component={SobreNosotros}/>
          <Route path="/contactenos" exact component={Contactenos}/>

          <Route path="/productos" exact component={Productos}/>
          <Route path="/salas" exact component={Salas}/>
          <Route path="/comedores" exact component={Comedores}/>
          <Route path="/cocinas" exact component={Cocinas}/>
          <Route path="/baños" exact component={Baños}/>
          <Route path="/armarios" exact component={Armarios}/>
          <Route path="/escritorios" exact component={Escritorios}/>
          <Route path="/cunas" exact component={Cunas}/>
          <Route path="/muebles" exact component={muebles}/>
          
          <Route path="/registro" exact component={Registro}/>
          <Route path="/perfil" exact component={Perfil} />
          <Route path="/perfil/editar/:userId" exact component={Editar} />
        </Switch>
      </Router>
    );
  }
}

export default App;