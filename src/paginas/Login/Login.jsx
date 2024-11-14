import React from 'react'
import HeaderLogin from '../../componentes/Header/HeaderLogin'
import Footer from '../../componentes/Footer/Footer'
import './Login.css'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
      navigate('/registro'); // Define la ruta a la vista de login
    };

  return (
    <div class="login-father">
    <HeaderLogin />
    <div class="login-body">
        <div class="login-container">
            <h1 class="login-title">LOG IN</h1>
            <input
                type="text"
                className="login-input-text"
                placeholder="Nombre de usuario"
            />
            <input
                type="password"
                class="login-input-text"
                placeholder="Contraseña"
            />
            <button class="button-login">Iniciar sesión</button>
            <p class="login-link" onClick={handleLoginClick}>¿No estás registrado?</p>
        </div>
    </div>
    <Footer />
</div>
  )
}

export default Login

