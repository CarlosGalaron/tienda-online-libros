//HeaderLogin.jsx

import React from 'react'
import './HeaderHomepage.css'
import { useNavigate } from 'react-router-dom';

function HeaderLogin() {

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/registro'); // Define la ruta a la vista de login
  };

  return (
    <div className="headerH-container">
      <div className="headerH-icon_container">LOGO</div>
      <div className='wellcome-title'>BIENVENIDO A KDLIBROS</div>
      <div className='nav-register-button' onClick={handleLoginClick}>SIGN IN</div>
    </div>
  )
}

export default HeaderLogin