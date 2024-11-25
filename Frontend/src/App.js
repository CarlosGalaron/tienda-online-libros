import "./App.css";
import Homepage from "./paginas/Homepage/Homepage";
import Login from "./paginas/Login/Login";
import Registro from "./paginas/Registro/Registro";
import LibrosIntercambio from "./paginas/LibrosIntercambio/LibrosIntercambio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/LibrosIntercambio" element={<LibrosIntercambio />} />
      </Routes>
    </Router>
  );
}

export default App;
