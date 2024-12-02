//App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './paginas/Homepage/Homepage';
import Login from './paginas/Login/Login';
import Registro from './paginas/Registro/Registro';
import Tienda from './paginas/Tienda/Tienda';
import Seleccion from './paginas/SeleccionLibros/SeleccionLibros';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/Seleccion" element={<Seleccion />} />
      </Routes>
    </Router>
  );
}

export default App;
