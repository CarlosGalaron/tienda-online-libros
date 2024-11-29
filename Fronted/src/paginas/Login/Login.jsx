import React, { useState, useEffect } from 'react';
import HeaderLogin from '../../componentes/Header/HeaderLogin';
import Footer from '../../componentes/Footer/Footer';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (sessionStorage.getItem('idUsuario')) {
            window.location.href = '/Seleccion';
        }
    }, []); 

    const handleLogin = () => {
        if (username === 'usuario' && password === '1234') {
            sessionStorage.setItem('idUsuario', username); 
            navigate('/Seleccion'); 
        } else {
            setErrorMessage('Usuario o contraseña incorrectos');
        }
    };

    const handleLoginClick = () => {
        navigate('/registro'); 
    };

    return (
        <div className="login-father">
            <HeaderLogin />
            <div className="login-body">
                <div className="login-container">
                    <h1 className="login-title">LOG IN</h1>
                    <input
                        type="text"
                        className="login-input-text"
                        placeholder="Nombre de usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        className="login-input-text"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="button-login" onClick={handleLogin}>
                        Iniciar sesión
                    </button>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <p className="login-link" onClick={handleLoginClick}>
                        ¿No estás registrado?
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
