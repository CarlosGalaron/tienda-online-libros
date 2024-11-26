import React from 'react'
import './Registro.css'
import { useNavigate } from 'react-router-dom';

function Registro() {
  const navigate = useNavigate();

  const GotoIntercambio = () => {
    navigate('/intercambio'); // Define la ruta a la vista de login
  };
  const GotoApi = () => {
    navigate('/api'); // Define la ruta a la vista de api
  };
  return (
    <div>
      <button onClick={GotoIntercambio}>Intercambio</button>
      <button onClick={GotoApi}>API</button>
    </div>
  )
}

export default Registro