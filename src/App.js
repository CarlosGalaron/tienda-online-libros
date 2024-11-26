
import './App.css';
import Homepage from './paginas/Homepage/Homepage';
import Login from './paginas/Login/Login';
import Registro from './paginas/Registro/Registro';
import Intercambio from './paginas/Intercambio/Intercambio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ApiViewer from './componentes/ApiViewer/ApiViewer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/intercambio" element={<Intercambio />} />y
        <Route path="/api" element={<ApiViewer />} />
      </Routes>
    </Router>
  );
}

export default App;
