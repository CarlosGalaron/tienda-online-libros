import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/tienda'); // Define la ruta a la vista de tienda
  };

  const handleIntercambioClick = () => {
    navigate('/intercambio'); // Define la ruta a la vista de tienda
  };

  const handleCatalogoClick = () => {
    alert('CATÁLOGO')
  };

  const handlePublicacionesClick = () => {
    alert('PUBLICACIONES')
  };

  const handleAudioLibrosClick = () => {
    alert('AUDIOLIBROS')
  };

  return (
    <div className="header-container">
    <div className="header-icon_container"></div>
    <button className="header-button" onClick={handleCatalogoClick}>CATÁLOGO</button>
    <button className="header-button" onClick={handleIntercambioClick}>INTERCAMBIO</button>
    <button className="header-button" onClick={handleLoginClick}>CESTA</button>
    <button className="header-button" onClick={handlePublicacionesClick}>PUBLICACIONES</button>
    <button className="header-button" onClick={handleAudioLibrosClick}>AUDIOLIBROS</button>
</div>
  )
}

export default Header