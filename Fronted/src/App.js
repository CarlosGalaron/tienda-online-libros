import "./App.css";
import Homepage from "./paginas/Homepage/Homepage";
import Login from "./paginas/Login/Login";
import Registro from "./paginas/Registro/Registro";
import LibrosIntercambio from "./paginas/LibrosIntercambio/LibrosIntercambio";
import Intercambio from "./paginas/Intercambio/Intercambio";
import MatchIntercambio from "./paginas/MatchIntercambio/MatchIntercambio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Seleccion from "./paginas/SeleccionLibros/SeleccionLibros";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/Seleccion" element={<Seleccion />} />
        <Route path="/LibrosIntercambio" element={<LibrosIntercambio />} />
        <Route path="/Intercambio" element={<Intercambio />} />
        <Route path="/MathIntercambio" element={<MatchIntercambio />} />
      </Routes>
    </Router>
  );
}

export default App;
