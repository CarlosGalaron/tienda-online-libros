import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Verificar si el usuario está logueado al cargar el componente
  useEffect(() => {
    const user = sessionStorage.getItem('idUsuario');
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('idUsuario');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const handleLoginClick = () => {
    navigate('/login'); // Ir a la vista de login
  };

  const handleSignUpClick = () => {
    navigate('/registro'); // Ir a la vista de registro
  };

  const handleLogoClick = () => {
    navigate('/catalogo'); 
  };

  return (
    <div className="header-container">
      {/* Logo o icono común */}
      <button onClick={handleLogoClick} className="header-icon_button">
        <img src='/LogoClaro.png' alt='logo' className="header-icon_container" />
      </button>

      {isLoggedIn ? (
        <>
          {/* Si está logueado, mostrar las opciones de navegación */}
          <button className="header-button" onClick={() => navigate('/Catalogo')}>Tienda</button>
          <button className="header-button" onClick={() => navigate('/Seleccion')}>Seleccion de libros</button>
          <button className="header-button" onClick={() => navigate('/biblioteca')}>Usuario</button>
          <button className="header-button" onClick={() => navigate('/tienda')}>CESTA</button>
          {/* Botón de cerrar sesión */}
          <button className="header-button logout-button" onClick={handleLogout}>CERRAR SESIÓN</button>
        </>
      ) : (
        <>
          {/* Si no está logueado, mostrar un botón de "Login" o "Sign In" */}
          <div className="headerH-container">
            <div className="navigate-login-button" onClick={handleLoginClick}>LOG IN</div>
            <div className="navigate-login-button" onClick={handleSignUpClick}>SIGN IN</div>
          </div>
        </>
      )}
    </div>
  );
}

export default Header;