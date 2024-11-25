//HeaderHomepage.jsx

import React from 'react'
import './HeaderHomepage.css'
import { useNavigate } from 'react-router-dom';

function HeaderHomepage() {

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); // Define la ruta a la vista de login
  };

  return (
    <div className="headerH-container">
      <div className="headerH-icon_container">LOGO</div>
      <div className='wellcome-title'>BIENVENIDO A KDLIBROS</div>
      <div className='navigate-login-button' onClick={handleLoginClick}>LOG IN</div>
    </div>
  )
}

export default HeaderHomepage