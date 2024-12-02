import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Homepage from './paginas/Homepage/Homepage';
import Login from './paginas/Login/Login';
import Registro from './paginas/Registro/Registro';
import SeleccionLibros from './paginas/SeleccionLibros/SeleccionLibros';
import LibrosIntercambio from './paginas/LibrosIntercambio/LibrosIntercambio';
import Intercambio from './paginas/Intercambiar/Intercambiar.jsx';
import Tienda from './paginas/Tienda/Tienda';
import Catalogo from './paginas/Catalogo/Catalogo.jsx';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/Seleccion" element={<SeleccionLibros />} />
        <Route path="/biblioteca" element={<LibrosIntercambio />} />
        <Route path="/intercambio/:ISBN/:tipo" element={<Intercambio />} />
      </Routes>
    </Router>
  );
}   

export default App;
