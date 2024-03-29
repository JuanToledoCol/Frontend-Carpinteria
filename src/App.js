import React from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom'

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
import Banos from "./pages/productos/Baños";
import Armarios from "./pages/productos/Armarios";
import Escritorios from "./pages/productos/Escritorios";
import Cunas from "./pages/productos/Cunas";
import Muebles from "./pages/productos/Muebles";

import Editar from "./pages/EditarProducto";
import CrearProducto from "./pages/CrearProducto";

class App extends React.Component {
  
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" exact element={<Index />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/sobreNosotros" exact element={<SobreNosotros />} />
          <Route path="/contactenos" exact element={<Contactenos />} />

          <Route path="/productos" exact element={<Productos />} />
          <Route path="/crearProducto" exact element={<CrearProducto />} />
          <Route path="/salas" exact element={<Salas />} />
          <Route path="/comedores" exact element={<Comedores />} />
          <Route path="/cocinas" exact element={<Cocinas />} />
          <Route path="/banos" exact element={<Banos />} />
          <Route path="/armarios" exact element={<Armarios />} />
          <Route path="/escritorios" exact element={<Escritorios />} />
          <Route path="/cunas" exact element={<Cunas />} />
          <Route path="/muebles" exact element={<Muebles />} />

          <Route path="/registro" exact element={<Registro />} />
          <Route path="/perfil" exact element={<Perfil />} />
          <Route path="/editar/:id" element={<ParamEditProduct />} />
        </Routes>
      </Router>
    );
  }
}

const ParamEditProduct = () => <Editar params={useParams()} />

export default App;