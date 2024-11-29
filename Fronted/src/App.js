
import './App.css';
import Homepage from './paginas/Homepage/Homepage';
import Login from './paginas/Login/Login';
import Registro from './paginas/Registro/Registro';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Seleccion from './paginas/SeleccionLibros/SeleccionLibros';
import LibrosIntercambio from './paginas/LibrosIntercambio/LibrosIntercambio';
import Intercambio from './paginas/Intercambiar/Intercambiar.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/Seleccion" element={<Seleccion />} />
        <Route path="/biblioteca" element={<LibrosIntercambio />} />
        <Route path="/intercambio/:ISBN/:tipo" element={<Intercambio />} />
      </Routes>
    </Router>
  );
}   

export default App;
