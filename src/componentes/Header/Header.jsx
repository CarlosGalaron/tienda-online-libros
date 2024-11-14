import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className="header-container">
    <div className="header-icon_container"></div>
    <button className="header-button">BIBLIOTECA</button>
    <button className="header-button">INTERCAMBIO</button>
    <button className="header-button">TIENDA</button>
    <button className="header-button">PUBLICACIONES</button>
    <button className="header-button">AUDIOLIBROS</button>
</div>
  )
}

export default Header