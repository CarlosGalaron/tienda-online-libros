import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('idUsuario'); 
    navigate('/login'); 
  };

  return (
    <div className="header-container">
      <div className="header-icon_container"></div>
      <button className="header-button" onClick={() => navigate('/Seleccion')}>
        BIBLIOTECA
      </button>
      <button className="header-button" onClick={() => navigate('/intercambio')}>
        INTERCAMBIO
      </button>
      <button className="header-button" onClick={() => navigate('/tienda')}>
        TIENDA
      </button>
      <button className="header-button" onClick={() => navigate('/publicaciones')}>
        PUBLICACIONES
      </button>
      <button className="header-button" onClick={() => navigate('/audiolibros')}>
        AUDIOLIBROS
      </button>
      {/*Cerrar sesion*/}
      <button className="header-button logout-button" onClick={handleLogout}>
        CERRAR SESIÓN
      </button>
    </div>
  );
}

export default Header;